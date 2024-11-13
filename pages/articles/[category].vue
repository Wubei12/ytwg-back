<template>
	<div
		class="px-8 text-white min-h-screen bg-[#0c260f] md:px-24 lg:px-32 xl:px-44 ytw_page-pt"
	>
		A new Featured Articles page
	</div>
</template>

<script lang="ts" setup>
	const featuredArticlesStore = useArticlesStore();

	const fetchFeatArticles = async () => {
		await featuredArticlesStore.getAllFeaturedArticles();
	};

	onMounted(async () => {
		await fetchFeatArticles();
	});
</script>

<style></style>
