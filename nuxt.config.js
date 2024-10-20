export default {
	head: {
		title: 'components',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
	},
	css: [],
	gsap: {
		extraPlugins: {
			scrollTrigger: true,
		},
	},
	plugins: [
	],
	components: true,
	buildModules: [
	],
	build: {
	},
	module: {
		// rules: [
		// 	{
		// 		test: /\.(glsl|vs|fs|vert|frag)$/,
		// 		loader: 'webpack-glsl-loader',
		// 	},
		// ],
	},
};
