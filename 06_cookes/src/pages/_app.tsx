import '@/styles/globals.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';

import { darkTheme, customTheme, lightTheme } from '@/themes';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
