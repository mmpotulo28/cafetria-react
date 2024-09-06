import type { Metadata } from 'next';

import './globals.css';

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
			<body>{children}</body>
		</html>
	);
}
