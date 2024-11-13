<template>
	<main
		class="px-8 text-white min-h-screen bg-[#0c260f] md:px-24 lg:px-32 xl:px-44 ytw_page-pt"
	>
		<div
			v-if="articleLoading"
			class="w-full h-screen flex flex-col items-center justify-center space-y-8 bg-[#0c260f] top-0 left-0 absolute"
		>
			<v-progress-circular
				color="#f5d451"
				size="64"
				:width="5"
				indeterminate
			></v-progress-circular>
			<p class="text-3xl font-bold text-[#f5d451]">Loading Article...</p>
		</div>

		<div class="absolute top-0 left-0 w-full min-h-[60vh]">
			<div
				v-if="!articleLoading"
				class="relative w-full h-full"
			>
				<NuxtImg
					:src="featureMedia"
					loading="lazy"
					:alt="featureMediaAlt"
					class="w-full h-[60vh]"
				/>

				<div class="absolute bg-black/50 top-0 left-0 w-full h-[60vh]"></div>
				<div
					class="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-transparent to-[#0c260f]"
				></div>
				<div
					class="absolute top-0 z-20 left-0 w-full h-[60vh] flex flex-col items-center justify-center space-y-4"
				>
					<h1 class="text-4xl font-bold">{{ articleTitle }}</h1>
					<p
						v-if="articleContent"
						class="text-lg font-bold"
					>
						{{ articleDate }}
					</p>
				</div>
			</div>
		</div>
		<div class="h-[50vh]"></div>
		<div
			v-if="!articleLoading"
			class="flex items-start justify-center w-full gap-12"
		>
			<div class="w-[800px] flex justify-start items-start">
				<div
					v-html="articleContent"
					class="space-y-4"
				></div>
			</div>
			<div class="w-[500px] space-y-4">
				<h1
					v-if="articleContent"
					class="text-2xl font-bold"
				>
					Recent Posts
				</h1>
				<div v-if="articleStore.articlesLoading">
					<ul class="flex flex-col items-start justify-center w-full space-y-2">
						<li
							class="w-[300px] rounded-md h-[30px] bg-[#f5d451]/40 animate-pulse"
						></li>
						<li
							class="w-[300px] rounded-md h-[30px] bg-[#f5d451]/40 animate-pulse"
						></li>
						<li
							class="w-[300px] rounded-md h-[30px] bg-[#f5d451]/40 animate-pulse"
						></li>
						<li
							class="w-[300px] rounded-md h-[30px] bg-[#f5d451]/40 animate-pulse"
						></li>
						<li
							class="w-[300px] rounded-md h-[30px] bg-[#f5d451]/40 animate-pulse"
						></li>
						<li
							class="w-[300px] rounded-md h-[30px] bg-[#f5d451]/40 animate-pulse"
						></li>
						<li
							class="w-[300px] rounded-md h-[30px] bg-[#f5d451]/40 animate-pulse"
						></li>
						<li
							class="w-[300px] rounded-md h-[30px] bg-[#f5d451]/40 animate-pulse"
						></li>
						<li
							class="w-[300px] rounded-md h-[30px] bg-[#f5d451]/40 animate-pulse"
						></li>
						<li
							class="w-[300px] rounded-md h-[30px] bg-[#f5d451]/40 animate-pulse"
						></li>
						<li
							class="w-[300px] rounded-md h-[30px] bg-[#f5d451]/40 animate-pulse"
						></li>
						<li
							class="w-[300px] rounded-md h-[30px] bg-[#f5d451]/40 animate-pulse"
						></li>
						<li
							class="w-[300px] rounded-md h-[30px] bg-[#f5d451]/40 animate-pulse"
						></li>
						<li
							class="w-[300px] rounded-md h-[30px] bg-[#f5d451]/40 animate-pulse"
						></li>
						<li
							class="w-[300px] rounded-md h-[30px] bg-[#f5d451]/40 animate-pulse"
						></li>
					</ul>
				</div>
				<ul class="flex flex-col items-start justify-start space-y-4">
					<li
						v-for="article in articleStore.articlesList.slice(0, 15)"
						:key="article.id"
						id="recentAnim"
						class="text-start"
					>
						<!-- <v-btn
							color="#f5d451"
							variant="flat"
							text="Read More..."
							block
							@click="reserve(article.slug as string)"
						></v-btn> -->
						<button
							class="hover:text-[#f5d451] smooth_effect text-start"
							@click="goToArticle(article.slug as string)"
						>
							{{ article.title?.rendered }}
							<v-tooltip
								activator="parent"
								location="end"
							>
								{{
									`https://www.yetenaweg.com/articles/${article.title?.rendered}`
								}}
							</v-tooltip>
						</button>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>

<script lang="ts" setup>
	// Initialize store and get the current route's slug
	const articleStore = useArticlesStore();
	const articleLoading = computed(() => articleStore.articleLoading);
	const pathname = useRoute().params.article as string;

	function convertToDate(dateString: Date): string {
		// Create a new Date object from the provided ISO 8601 string
		const date = new Date(dateString);

		// Format the date if you want to return it in a human-readable format
		// Example: "October 13, 2024, 10:17 PM"
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};

		return date.toLocaleString('en-US', options);
	}

	const router = useRouter();

	function goToArticle(path: string) {
		router.push({ path: `/${path}` });
	}

	// Reactive reference for media ID
	const media = ref(0);

	// Computed properties for article content, featured media URL, and alt text
	const articleTitle = computed(() => articleStore.article.title?.rendered);
	const articleWrittenDate = computed(() => articleStore.article.date);
	const articleDate = computed(() =>
		convertToDate(articleWrittenDate.value as Date)
	);
	const articleContent = computed(() => articleStore.article.content?.rendered);
	const featureMedia = computed(
		() => articleStore.media.media_details?.sizes?.full?.source_url
	);
	const featureMediaAlt = computed(() => articleStore.media.title?.rendered);

	// Fetch article by slug
	const fetchArticlebySlug = async () => {
		await articleStore.getArticlebySlug(pathname);
	};
	const fetchArticles = async () => {
		await articleStore.getAllArticles();
	};

	// Fetch media by media ID
	const fetchMediaById = async (mediaId: number) => {
		if (mediaId) {
			await articleStore.getMediaById(mediaId);
		}
	};

	// On component mount, fetch article and then media details if available
	onMounted(async () => {
		await fetchArticlebySlug();
		// Watch for changes in the featured media and fetch its details
		watchEffect(async () => {
			if (articleStore.article.featured_media) {
				media.value = articleStore.article.featured_media;
				await fetchMediaById(media.value);
			}
		});

		await fetchArticles();

		useGsap.from('#recentAnim', {
			opacity: 0,
			x: -150,
			duration: 0.6,
			stagger: 0.2,
			scrollTrigger: {
				trigger: '#recentAnim',
				toggleActions: 'play none none none',
			},
		});
	});
</script>

<style></style>
