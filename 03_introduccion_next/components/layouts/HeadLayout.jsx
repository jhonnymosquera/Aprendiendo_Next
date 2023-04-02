import Head from "next/head";

export default function HeadLayout({ title, description }) {
	return (
		<Head>
			<title>{`Jhonny - ${title}`}</title>
			<meta name="description" content={description} />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}
