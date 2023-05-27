import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from './ui';

export const Layout: FC<any> = ({ children }) => {
	return (
		<>
			<Head>
				<title></title>
			</Head>
			<nav>
				<Navbar />
			</nav>

			<main style={{ padding: 2 }}>{children}</main>
		</>
	);
};
