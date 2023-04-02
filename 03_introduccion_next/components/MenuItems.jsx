import LinkActive from "./LinkActive";

export default function MenuItems({ rute }) {
	let path = rute.toLowerCase();

	return <LinkActive path={`/${rute == "Home" ? "" : path}`} title={rute} key={rute} />;
}
