import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
	return (
		<>
			<div>
				<p>
					<Link href="/">Home</Link>
				</p>

				<p>
					<Link href="/about">About</Link>
				</p>

				<p>
					<Link href="/contact">contac</Link>
				</p>
			</div>
			<Component {...pageProps} />
		</>
	);
}
