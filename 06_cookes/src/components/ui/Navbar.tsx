import NextLink from 'next/link';
import { AppBar, Toolbar, IconButton, Link, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import styles from '@/styles/Home.module.css';

export const Navbar = () => {
	return (
		<AppBar position="sticky">
			<Toolbar>
				<IconButton size="large" edge="start">
					<MenuOutlined />
				</IconButton>

				<NextLink href={'/'} passHref>
					<Typography variant="h6" color="white">
						Cookies
					</Typography>
				</NextLink>

				<div style={{ flex: 1 }}></div>

				<NextLink href={'/theme-changer'} passHref>
					<Typography variant="h6" color="white">
						Cambiar Tema
					</Typography>
				</NextLink>
			</Toolbar>
		</AppBar>
	);
};
