import Link from "next/link";
import { useRouter } from "next/router";

const styles = {
	color: "#0070f3",
	textDecoration: "underline",
};

export default function LinkActive({ path, title }) {
	const { asPath } = useRouter();

	return (
		<Link style={asPath == path ? styles : null} href={path}>
			{title}
		</Link>
	);
}
