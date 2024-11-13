import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	app: {
		head: {
			title: 'Yetenaweg | Home',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					hid: 'description',
					name: 'description',
					content: 'The Network for Healthcare Professionals!',
				},
			],
		},
	},
	css: ['~/assets/css/tailwind.css'],
	build: {
		transpile: ['vuetify'],
	},
	modules: [
		'@pinia/nuxt',
		'@nuxtjs/tailwindcss',
		'@vueuse/nuxt',
		'vue3-perfect-scrollbar/nuxt',
		'@hypernym/nuxt-anime',
		'@hypernym/nuxt-gsap',
		'nuxt-swiper',
		'@nuxt/image',
		(_options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }));
			});
		},
	],
	gsap: {
		composables: true,
		provide: false,
		extraPlugins: {
			scrollTrigger: true,
		},
	},
	runtimeConfig: {
		public: {
			baseUrl: process.env.BASE_URL,
		},
	},
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},
	plugins: ['~/plugins/api'],
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
});
