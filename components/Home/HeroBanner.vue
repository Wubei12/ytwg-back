<template>
	<div class="relative">
		<div
			class="absolute top-0 left-0 flex items-center justify-center w-full min-h-screen bg-no-repeat bg-cover bg-ytwHeroBg"
		>
			<div class="absolute z-10 w-full h-full bg-black/50"></div>
			<div
				class="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-[#0c260f]"
			></div>
			<div
				class="z-20 w-full flex items-center justify-between px-[8rem] py-[4rem]"
			>
				<div class="flex flex-col space-y-2">
					<h1 class="text-4xl firstAnim font-bold text-[#f5d451]">
						Yetena Weg
					</h1>
					<h3 class="text-5xl font-bold secondAnim text-white xl:max-w-[700px]">
						Network of Healthcare Professionals
					</h3>
					<p class="xl:max-w-[700px] mb-6 thirdAnim text-lg text-white">
						Yetena Weg is a volunteer network of health professionals and other
						experts engaged in promoting health awareness and creating a
						mentorship platform for health professionals to learn.
					</p>
					<v-btn
						color="#f5d451"
						width="200"
						href="https://yetenaweg.com/about-yw/"
						class="buttonAnim"
						>Discover More</v-btn
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	onMounted(() => {
		useGsap.fromTo(
			'.firstAnim',
			{
				x: 500,
				opacity: 0,
			},
			{ x: 0, opacity: 1, duration: 1, stagger: 0.2 }
		);

		useGsap.fromTo(
			'.secondAnim',
			{
				x: 500,
				opacity: 0,
			},
			{ x: 0, opacity: 1, duration: 1, delay: 0.2 }
		);
		useGsap.fromTo(
			'.thirdAnim',
			{
				x: 500,
				opacity: 0,
			},
			{ x: 0, opacity: 1, duration: 1, delay: 0.4 }
		);
		useGsap.fromTo(
			'.buttonAnim',
			{
				scale: 0,
				opacity: 0,
			},
			{
				scale: 1,
				opacity: 1,
				duration: 0.1,
				delay: 0.4,
				ease: 'elastic',
			}
		);
	});
</script>

<style></style>
