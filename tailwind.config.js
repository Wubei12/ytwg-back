/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'ytwHeroBg':
					'url("https://pbs.twimg.com/media/GCs6fstXwAAqxE1.jpg:large")',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar')({
			nocompatible: true,
			preferredStrategy: 'pseudoelements',
		}),
	],
};
