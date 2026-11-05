import { withConsentManifest } from 'c15t/next/build';
import type { NextConfig } from 'next';

const nextConfig = {
	productionBrowserSourceMaps: true,
	distDir: process.env.DIST_DIR || '.next',

	typescript: {
		ignoreBuildErrors: true,
	},

	eslint: {
		ignoreDuringBuilds: true,
	},

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
			},
			{
				protocol: 'https',
				hostname: 'images.pixabay.com',
			},
			{
				protocol: 'https',
				hostname: 'img.rocket.new',
			},
		],
		minimumCacheTTL: 60,
		qualities: [75, 85, 100],
	},
} satisfies NextConfig;

export default withConsentManifest(nextConfig);
