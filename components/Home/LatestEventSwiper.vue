<template>
	<h1
		id="eventHeader"
		class="text-2xl text-white font-bold max-w-[500px]"
	>
		Our Latest Events and activities
	</h1>

	<Swiper
		:modules="[SwiperNavigation]"
		:slides-per-view="3"
		:loop="true"
		class="w-5/6 h-[500px]"
	>
		<SwiperSlide
			v-for="(event, idx) in events"
			:key="idx"
		>
			<div class="flex items-center justify-center w-3/4 h-3/4">
				<EventCard :event="event" />
			</div>
		</SwiperSlide>
		<SwiperControls />
	</Swiper>
</template>

<script lang="ts" setup>
	import EventCard from '../cards/EventCard.vue';

	const slides = ref(
		Array.from({ length: 10 }, () => {
			const r = Math.floor(Math.random() * 256);
			const g = Math.floor(Math.random() * 256);
			const b = Math.floor(Math.random() * 256);
			// Figure out contrast color for font
			const contrast =
				r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white';

			return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast };
		})
	);
	onMounted(() => {
		useGsap.from('#eventHeader', {
			opacity: 0,
			delay: 0.5,
			scrollTrigger: {
				trigger: '#eventHeader',
				toggleActions: 'play none none none',
			},
		});
	});

	const events = [
		{
			imgSrc:
				'https://yetenaweg.com/wp-content/uploads/2022/01/yetena-weg-winner.jpg',
			title: '2nd Yetena Weg Article Writing Competition Winners',
			description: '2nd Yetena Weg Article Writing Competition Winners',
			href: 'https://twitter.com/lia_tadesse/status/1483390412903567363',
		},
		{
			imgSrc:
				'https://yetenaweg.com/wp-content/uploads/2022/01/moh-partnership-e1643737873885.jpg',
			title: 'YetenaWeg has partnered with Ministry of Health',
			description: 'YetenaWeg has partnered with Ministry of Health',
			href: 'https://twitter.com/FMoHealth/status/1485688115507380229',
		},
		{
			imgSrc: 'https://yetenaweg.com/wp-content/uploads/2022/09/yetenaweg.jpg',
			title: 'Supprt for Sele Enat Charitable Organization',
			description: 'Supprt for Sele Enat Charitable Organization',
			href: 'https://https://yetenaweg.com/%E1%8C%B3%E1%8C%89%E1%88%9C%E1%8A%95_%E1%88%88%E1%89%A0%E1%8C%8E/',
		},
		{
			imgSrc:
				'https://yetenaweg.com/wp-content/uploads/2022/09/Yetena-paguma-lbego-donation.jpg',
			title: 'The gift of Blood 🩸 is a gift to someone’s life',
			description: 'The gift of Blood 🩸 is a gift to someone’s life',
			href: 'https://yetenaweg.com/the-gift-of-blood-%f0%9f%a9%b8-is-a-gift-to-someones-life/',
		},
	];
</script>

<style>
	.swiper-slide {
		@apply text-6xl font-bold h-[40vh] items-center justify-center flex;
	}
</style>
