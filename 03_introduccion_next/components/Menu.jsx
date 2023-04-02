import LinkActive from "./LinkActive";
import style from "./Menu.module.css";
import MenuItems from "./MenuItems";

export default function Menu() {
	const menuItmes = ["Home", "About", "Contact", "Pricing"];

	return (
		<nav className={style.menu_container}>
			{menuItmes.map(rute => (
				<MenuItems rute={rute} key={rute} />
			))}
		</nav>
	);
}
