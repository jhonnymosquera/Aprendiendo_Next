import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { UIContext } from "@/Context/ui";
import { useContext } from "react";

export const Navbar = () => {
	const { ioenSideMenu } = useContext(UIContext);

	return (
		<AppBar position="sticky">
			<Toolbar>
				<IconButton size="large" edge="start" onClick={ioenSideMenu}>
					<MenuOutlinedIcon />
				</IconButton>

				<Typography>Open Jira</Typography>
			</Toolbar>
		</AppBar>
	);
};
