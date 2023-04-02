import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HeadLayout from "@/components/layouts/HeadLayout";

export default function HomePage() {
	return (
		<>
			<HeadLayout title={"Home"} description={"Home Page"} />

			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1>Home</h1>
			</main>
		</>
	);
}
