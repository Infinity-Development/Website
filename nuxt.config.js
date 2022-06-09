export default {
	target: 'static',
	ssr: false,

	head: {
		title: 'Infinity Development',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'theme-color',
				content: '#8D52FF'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: 'Just a team of developers from all around the world working together to provide you with the best Discord Services and Websites' },
            { hid: 'og:title', name: 'og:title', content: 'Infinity Development' },
            { hid: 'og:image', name: 'og:image', content: 'https://cdn.discordapp.com/attachments/653733403841134600/984391086556475392/IMG_5685.png' },
			{ hid: 'og:description', name: 'og:description', content: 'Just a team of developers from all around the world working together to provide you with the best Discord Services and Websites'}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://cdn.discordapp.com/attachments/653733403841134600/984391086556475392/IMG_5685.png' }],
	},

	tailwindcss: {
		config: {},
	},

	css: [],

	plugins: [{ src: '~/plugins/vue-scroll-reveal', ssr: false }],

	components: true,

	buildModules: [
		'@nuxtjs/tailwindcss',
	],

	modules: [],

	build: {},
}