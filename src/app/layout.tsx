import React from 'react';
import type { Metadata, Viewport } from 'next';
import {
	ConsentBanner,
	ConsentDialog,
	ConsentDialogLink,
	ConsentRoot,
} from 'c15t/next';
import { resolveConsent } from 'c15t/next/server';
import { DM_Sans, Fraunces } from 'next/font/google';
import '../styles/tailwind.css';

const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-dm-sans',
	display: 'swap',
});

const fraunces = Fraunces({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-fraunces',
	display: 'swap',
});

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
	title: 'hairbyrenee — Color, Cuts & Blowouts in Porto',
	description:
		'Renee Klein is styling women’s hair in Porto, Portugal offering color, cuts, extensions and blowouts with a trusted American stylist.',
	alternates: { canonical: '/' },
	openGraph: {
		title: 'hairbyrenee — Women’s Hair in Porto',
		description: 'Renee Klein is styling women’s hair in Porto, Portugal offering color, cuts, extensions and blowouts with a trusted American stylist.',
		images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
	},
	icons: {
		icon: [
			{ url: '/assets/icons/favicon.ico', type: 'image/x-icon' },
			{ url: '/assets/icons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
		],
		apple: '/assets/icons/apple-touch-icon.png',
	},
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
			<body className={dmSans.className}>
				<ConsentRoot state={resolveConsent()}>
					{children}
					<ConsentBanner />
					<ConsentDialog />
				</ConsentRoot>
			</body>
		</html>
	);
}
