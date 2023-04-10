import { useEffect, useState } from "react";

import { Layout } from "../../components/layouts";
import { FavoritesPokemons, NoFavorite } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
	const [favoritePokemons, setFavoritePokemons] = useState([]);

	useEffect(() => {
		setFavoritePokemons(localFavorites.pokemons);
	}, []);

	return (
		<Layout title="Favorites">
			{favoritePokemons.length === 0 ? (
				<NoFavorite />
			) : (
				<FavoritesPokemons favoritePokemons={favoritePokemons} />
			)}
		</Layout>
	);
};

export default FavoritesPage;
