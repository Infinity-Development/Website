const WindiCSS = require('windicss-webpack-plugin');
const { withAxiom } = require('next-axiom');

const ContentSecurityPolicy = `
  child-src *.google.com streamable.com;
  connect-src *;
  default-src 'self';
  font-src 'self';
  img-src * blob: data:;
  media-src 'none';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.splitbee.io;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  worker-src 'self' 'unsafe-inline' blob:;
`;

/**
 * @type {import('next').NextConfig}
 */
const config = {
	images: {
		domains: [
			'github.com',
			'cdn.discordapp.com',
			'raw.githubusercontent.com',
			'cdn-cf-east.streamable.com',
			'source.unsplash.com',
			'images.unsplash.com',
		],
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: ContentSecurityPolicy.replace(/\n/g, ''),
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains; preload',
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
					},
				],
			},
		];
	},
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config, { dev, isServer }) => {

		config.plugins.push(new WindiCSS());

		config.experiments = { ...config.experiments, topLevelAwait: true };

		config.module.rules.push({
			test: /\.(glsl|vs|fs|frag|vert)$/,
			use: ['ts-shader-loader'],
		});

		return config;
	},
};

module.exports = withAxiom(config);
