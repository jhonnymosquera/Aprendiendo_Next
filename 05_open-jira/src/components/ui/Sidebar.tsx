import { ListItem, Drawer, Box, Typography, List, ListItemText, ListItemIcon, Divider } from "@mui/material";

import InboxIcon from "@mui/icons-material/Inbox";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useContext } from "react";
import { UIContext } from "@/Context/ui";

const menuItems: string[] = ["Inbox", "Started", "Send Email", "Drafts"];

export const Sidebar = () => {
	const { sidemenuOpen, closeSideMenu } = useContext(UIContext);

	return (
		<Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
			<Box sx={{ width: 250 }}>
				<Box sx={{ padding: "5px 10px" }}>
					<Typography variant="h4">Menú</Typography>
				</Box>

				<List>
					{menuItems.map((text, index) => (
						<ListItem key={index}>
							<ListItemIcon>{index % 2 ? <InboxIcon /> : <MailOutlineIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>

				<Divider />

				<List>
					{menuItems.map((text, index) => (
						<ListItem key={index}>
							<ListItemIcon>{index % 2 ? <InboxIcon /> : <MailOutlineIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
	);
};
