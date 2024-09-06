import type { Metadata } from 'next';

import './globals.css';
import './css/fontawesome-6.5.2/css/all.css';
import Header from './components/Header';
import Head from 'next/head';
import Footer from './components/Footer';

export const metadata: Metadata = {
	title: 'Cafetria | Home',
	description: 'Cafetria is a modern web app for ordering food online.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<Head>
				<meta name='description' content={metadata.description || ''} />
			</Head>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
