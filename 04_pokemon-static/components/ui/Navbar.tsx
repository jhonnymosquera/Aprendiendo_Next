import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

export const Navbar: FC = () => {
	const { theme } = useTheme();

	const router = useRouter();
	const onClick = (route: string) => {
		router.push(route);
	};

	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "start",
				padding: "0 20px",
				backgroundColor: theme?.colors.gray900.value,
			}}
		>
			<Image
				style={{
					cursor: "pointer",
				}}
				src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
				alt="icono de la app"
				width={70}
				height={70}
				onClick={() => onClick("/")}
			/>
			<Text
				color="white"
				h2
			>
				P
			</Text>
			<Text
				color="white"
				h3
			>
				okémon
			</Text>

			<Spacer css={{ flex: 1 }} />

			<Text
				color="white"
				h3
				css={{ cursor: "pointer" }}
				onClick={() => onClick("/favorites")}
			>
				Favoritos
			</Text>
		</div>
	);
};
