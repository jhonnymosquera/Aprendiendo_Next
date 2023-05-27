import { Inter } from 'next/font/google';
import { Layout } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Layout>
				<h1>Cookies</h1>
			</Layout>
		</>
	);
}
