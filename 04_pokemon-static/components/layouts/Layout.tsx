import Head from "next/head";
import { ReactNode } from "react";
import { Navbar } from "../ui";

interface Props {
	children: ReactNode;
	title?: string;
}

export const Layout = ({ children, title }: Props) => {
	return (
		<>
			<Head>
				<title>{title || "Pokemon App"}</title>
				<meta
					name="author"
					content="Jhonny Mosquera"
				/>
				<meta
					name="description"
					content={`Informacion sobre el pokemon ${title}`}
				/>
				<meta
					name="keywords"
					content={`${title}, pokemon, pokedex`}
				/>
			</Head>

			<Navbar />

			<main
				style={{
					padding: "0 20px",
				}}
			>
				{children}
			</main>
		</>
	);
};
