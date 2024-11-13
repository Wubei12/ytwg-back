<template>
	<header
		:class="[
			'fixed flex z-50 smooth_effect justify-center w-screen px-4 lg:py-5 lg:px-8',
			visible ? 'translate-y-0' : '-translate-y-[250px]',
			isAtTop
				? ' bg-[#f5d451] bg-opacity-50 backdrop-blur-lg'
				: ' bg-[#f5d451] bg-opacity-50 backdrop-blur-lg',
		]"
	>
		<div
			class="flex flex-row flex-wrap items-center justify-between w-10/12 h-full lg:flex-nowrap"
		>
			<a
				href="/"
				aria-label="Yetenaweg Homepage"
				class="inline-block mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
			>
				<picture>
					<source
						srcset="/assets/img/logo.png"
						media="(min-width: 640px)"
					/>
					<img
						src="/assets/img/logo.png"
						alt="YetenaWegLogo"
						class="w-8 md:w-[176px] lg:w-[10.5rem]"
					/>
				</picture>
			</a>
			<div>
				<div
					class="flex items-center gap-4 lg:gap-12"
					role="menu"
					aria-label="Menu"
				>
					<CommonsArticleDropdownMenu />

					<a
						target="_blank"
						href="https://yfp.yetenaweg.com/"
						class="text-[#f5d451] font-bold uppercase text-base"
					>
						YFP
					</a>

					<a
						target="_blank"
						href="https://jmf.usg.mybluehost.me/pagume/"
						class="text-[#f5d451] font-bold uppercase text-base"
					>
						Health & Arts
					</a>
				</div>
			</div>
			<div>
				<v-btn
					class="text-none"
					color="#F2C618"
					min-width="92"
					variant="outlined"
				>
					<span class="uppercase font-bold"> Donate </span>
				</v-btn>
			</div>
		</div>
	</header>
</template>

<script lang="ts" setup>
	import { ref, onMounted, onUnmounted } from 'vue';

	const visible = ref(true);
	const prevScrollPos = ref(0);

	const isAtTop = ref(true);

	const handleScroll = () => {
		const currentScrollPos = window.scrollY;
		visible.value = prevScrollPos.value > currentScrollPos;
		prevScrollPos.value = currentScrollPos;
		isAtTop.value = currentScrollPos === 0;
	};

	onMounted(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll);
	});
</script>

<style></style>
