import { Layout } from "@/components/layouts";
import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import React from "react";

const HomePage: NextPage = () => {
	return (
		<Layout title="Listado de pokemon">
			<Button color="gradient">Hola mundo</Button>
		</Layout>
	);
};

export default HomePage;
