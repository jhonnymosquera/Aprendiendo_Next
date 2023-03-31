import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta name="description" content="Home Page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1>Home</h1>

				<form action="">
					<label htmlFor="">Texto</label>
					<input type="text" />

					<button>Generar</button>
				</form>
			</main>
		</>
	);
}
