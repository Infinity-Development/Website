const defaultTheme = require('tailwindcss/defaultTheme');
const markdown = require('./presets/markdown');


const config = {
	mode: 'jit',
	purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundOpacity: {
				15: '0.15',
			},
			colors: {
				gray: {
					50: '#f9fafb',
					100: '#eaeaeb',
					200: '#cacbcd',
					300: '#a7a9ac',
					400: '#696c71',
					500: '#282d34',
					600: '#24292f',
					700: '#181b20',
					800: '#121518',
					900: '#0c0e10',
				},
				primary: {
					50: '#f9f5e6',
					100: '#f2e9cc',
					200: '#e5d3a3',
					300: '#d8bd7a',
					400: '#caa652',
					500: '#bd9029',
					600: '#a37b23',
					700: '#8a661d',
					800: '#705117',
					900: '#958238',
				},
			},
			fontFamily: {
				inter: ['Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {},
	presets: [markdown],
	plugins: [
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
	],
};

export default config;