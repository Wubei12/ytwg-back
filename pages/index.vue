<template>
	<HomeHeroBanner />
	<div class="h-screen"></div>

	<!-- Articles Setion -->
	<div class="bg-[#0c260f] w-full px-[6rem] py-[4rem] space-y-24">
		<div class="flex items-center justify-between">
			<h1
				id="bannerAnim"
				class="text-5xl text-secondary font-bold max-w-[500px]"
			>
				የዓለም የአልዛይመር እና የአእምሮ ግንዛቤ ወር
			</h1>

			<div class="h-[300px]"></div>
		</div>

		<div class="items-center justify-start w-full space-y-8">
			<div class="flex flex-col items-center justify-center w-full space-y-4">
				<h1 class="text-2xl text-white font-bold max-w-[500px]">ጽሑፎች</h1>
				<p class="text-[#f5d451] text-lg max-w-[1000px]">
					Yetena Weg is a volunteer network of health professionals and other
					experts engaged in promoting health awareness and creating a
					mentorship platform for health professionals to learn.
				</p>
			</div>
			<!-- Article Display -->

			<Display />
		</div>
		<!-- CTA Section -->
		<div
			class="rounded-lg p-8 bg-transparent border-2 border-[#f5d451] w-full flex items-center justify-between"
		>
			<div class="space-y-3">
				<h1
					id="ctaLeftH1"
					class="text-3xl font-bold text-secondary"
				>
					Article Writing Competition Winners
				</h1>
				<p
					id="ctaLeftP"
					class="text-base text-white lg:max-w-[700px]"
				>
					Discover the Top Ten Articles from the winners of the 3rd Yetenaweg
					Roha Article Writing Competition, featuring insightful content for our
					readers.
				</p>
			</div>
			<v-btn
				id="ctaRight"
				color="#f5d451"
				rounded
			>
				View Articles
			</v-btn>
		</div>

		<!-- Latest Events and Activities -->
		<HomeLatestEventSwiper />
	</div>
</template>

<script lang="ts" setup>
	import Display from '~/components/articles/Display.vue';

	onMounted(() => {
		useGsap.from('#bannerAnim', {
			y: 50,
			opacity: 0,
			delay: 0.3,
			scrollTrigger: {
				trigger: '#bannerAnim',
				toggleActions: 'play none none none',
			},
		});

		useGsap.from('#ctaLeftH1', {
			opacity: 0,
			x: -250,
			scrollTrigger: {
				trigger: '#ctaLeftH1',
				toggleActions: 'play none none none',
			},
		});
		useGsap.from('#ctaLeftP', {
			opacity: 0,
			x: -250,
			delay: 0.3,
			scrollTrigger: {
				trigger: '#ctaLeftP',
				toggleActions: 'play none none none',
			},
		});
		useGsap.from('#ctaRight', {
			opacity: 0,
			x: 250,
			scrollTrigger: {
				trigger: '#ctaRight',
				toggleActions: 'play none none none',
			},
		});
		useGsap.from('#articles', {
			opacity: 0,
			x: -150,
			duration: 0.6,
			stagger: 0.2,
			scrollTrigger: {
				trigger: '#articles',
				toggleActions: 'play none none none',
			},
		});
	});
</script>

<style></style>
