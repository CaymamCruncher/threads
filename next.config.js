/** @type {import('next').NextConfig} */
const nextConfig = {
	optimizeFonts: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "searchspring-demo-content.s3.amazonaws.com",
			},
		],
	},
};

module.exports = nextConfig;
