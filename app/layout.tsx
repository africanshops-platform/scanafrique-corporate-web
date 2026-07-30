import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import './globals.css';

export const metadata: Metadata = {
	title: {
		default: 'Scanafrique Ltd — Building from the continent’s heartbeat',
		template: '%s — Scanafrique Ltd',
	},
	description:
		"Scanafrique Ltd is a Nigerian-born IT, Construction & General Supplies company solving real problems across Africa, starting from home ground as our pioneer proof.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" data-scroll-behavior="smooth">
			<body>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
