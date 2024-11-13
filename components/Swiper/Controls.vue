<template>
	<div
		class="absolute top-0 left-0 flex items-end justify-center w-full h-full"
	>
		<div
			id="swipeLeft"
			class="w-[100px] z-20 h-[50px] flex items-end justify-center"
		>
			<v-btn
				class="rounded-full"
				variant="outlined"
				color="#f5d451"
				icon="mdi-chevron-left"
				@click="swiper.slidePrev()"
			></v-btn>
		</div>
		<div
			id="swipeRight"
			class="w-[100px] z-20 h-[50px] flex items-end justify-center"
		>
			<v-btn
				class="rounded-full"
				variant="outlined"
				color="#f5d451"
				icon="mdi-chevron-right"
				@click="swiper.slideNext()"
			></v-btn>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const swiper = useSwiper();

	onMounted(() => {
		useGsap.from('#swipeLeft', {
			opacity: 0,
			x: -150,
			scrollTrigger: {
				trigger: '#swipeLeft',
				toggleActions: 'play none none none',
			},
		});
		useGsap.from('#swipeRight', {
			opacity: 0,
			x: 150,
			scrollTrigger: {
				trigger: '#swipeRight',
				toggleActions: 'play none none none',
			},
		});
	});
</script>

<style></style>
