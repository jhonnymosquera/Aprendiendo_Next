import { useEffect, useState } from "react";

import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import confetti from "canvas-confetti";
import { Layout } from "../../components/layouts";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { pokeApi } from "@/api";
import { getPokemonInfo, localFavorites } from "@/utils";

interface Props {
	pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
	const [isInfavorites, setisInfavorites] = useState(localFavorites.existInFavorites(pokemon.id));
	const [save, setSave] = useState("Guardar en Favoritos");

	const onToggleFavorite = () => {
		localFavorites.onToggleFavorite(pokemon.id);
		setisInfavorites(!isInfavorites);

		if (isInfavorites) return;

		confetti({
			zIndex: 999,
			particleCount: 100,
			spread: 160,
			angle: -100,
			origin: {
				x: 1,
				y: 0,
			},
		});
	};

	useEffect(() => {
		let handlerTextButtonSavedUp = isInfavorites ? "En Favoritos" : "Guardar en Favoritos";
		setSave(handlerTextButtonSavedUp);
	}, [isInfavorites]);

	return (
		<Layout title={pokemon.name}>
			<Grid.Container css={{ marginTop: "5px" }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card hoverable css={{ padding: "30px" }}>
						<Card.Body>
							<Card.Image
								src={pokemon.sprites.other?.dream_world.front_default || "/no-image.png"}
								alt={pokemon.name}
								width="100%"
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>

				<Grid xs={12} sm={8}>
					<Card>
						<Card.Header css={{ display: "flex", flexDirection: "column" }}>
							<Text h1 transform="capitalize">
								{pokemon.name}
							</Text>

							<Button color="gradient" ghost={!isInfavorites} onClick={onToggleFavorite}>
								{save}
							</Button>
						</Card.Header>

						<Card.Body>
							<Text size={30}>Sprites:</Text>

							<Container direction="row" display="flex" gap={0}>
								<Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
								<Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
								<Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
								<Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	);
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon/?limit=151`);

	const pokemonNames = data.results.map((poke) => poke.name);

	// aqui creamos las rutas con cada uno de los nombres del pokemon
	return {
		paths: pokemonNames.map((name) => ({
			params: { name },
		})),
		// fallback: false,
		fallback: "blocking",
	};
};
//                                          params
//                                            ↓
// params es lo que recibe por la URL /name/[name].tsx
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params as { name: string };

	const pokemon = await getPokemonInfo(name.toLocaleLowerCase());

	if (!pokemon) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: {
			pokemon,
		},
		revalidate: 86400,
	};
};

export default PokemonByNamePage;
