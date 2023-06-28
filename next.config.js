/** @type {import('next').NextConfig} */
const nextConfig = {
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
