<template>
	<div
		role="status"
		:class="containerClass"
	>
		<div
			v-if="type === ShimmerType.ArticleCard"
			class="w-full max-w-sm p-4 mx-auto bg-white border rounded-md shadow-md"
		>
			<!-- Image Container with Shimmer -->
			<div class="w-full h-48 bg-[#0c260f] rounded-md animate-pulse"></div>

			<!-- Title with Shimmer -->
			<div class="w-3/4 h-6 mt-4 bg-[#0c260f] rounded-md animate-pulse"></div>

			<!-- Stars and Reviews with Shimmer -->
			<div class="flex items-center mt-2">
				<div class="w-1/5 h-4 bg-[#0c260f] rounded-md animate-pulse"></div>
				<div class="w-1/4 h-4 ml-2 bg-[#0c260f] rounded-md animate-pulse"></div>
			</div>

			<!-- Description with Shimmer -->
			<div class="w-full h-4 mt-4 bg-[#0c260f] rounded-md animate-pulse"></div>

			<!-- Price with Shimmer -->
			<div class="w-1/4 h-6 mt-4 bg-[#0c260f] rounded-md animate-pulse"></div>

			<!-- Button with Shimmer -->
			<div class="w-1/2 h-10 mt-4 bg-[#0c260f] rounded-md animate-pulse"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed, defineProps } from 'vue';

	enum ShimmerType {
		ArticleCard = 'article_card',
	}

	const props = defineProps<{ type: ShimmerType }>();

	const containerClass = computed(() => ({
		'space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center':
			true,
	}));
</script>

<style scoped>
	/* Add any additional styles here if necessary */
</style>
