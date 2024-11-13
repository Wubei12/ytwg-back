<template>
	<div class="flex flex-col items-center justify-center w-full space-y-4">
		<v-card
			class="text-white bg-transparent hidden md:block md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]"
		>
			<v-tabs
				v-model="tab.activeTab"
				color="#f5d451"
				show-arrows
			>
				<v-tab
					v-for="(category, idx) in categories"
					:key="idx"
					:value="category.slug"
					@click="filter(category.id)"
				>
					<button class="w-full h-full uppercase">
						{{ category.name }}
					</button>
				</v-tab>
			</v-tabs>
		</v-card>

		<div
			class="grid items-center justify-start w-full grid-cols-4 gap-4 xl:grid-cols-6"
		>
			<template v-if="articleStore.articlesLoading">
				<Shimmer
					v-for="idx in 6"
					:key="idx"
					type="article_card"
				/>
			</template>
			<ArticleCard
				v-for="(article, index) in filteredPostList.slice(0, 6)"
				v-if="!!filteredPostList"
				id="filteredArticles"
				:key="index"
				:article="article"
			/>
			<ArticleCard
				v-for="(article, idx) in articleStore.articlesList.slice(0, 6)"
				v-else="articleStore.articlesList"
				id="articles"
				:key="idx"
				:article="article"
			/>
		</div>
		<a
			target="_blank"
			class="border-[1.5px] px-6 text-[#f5d451] py-2 font-bold rounded-md border-[#f5d451]"
			:href="`https://yetenaweg.com/articles/${tab.activeTab?.toLowerCase()}`"
			>More Articles</a
		>
	</div>
</template>

<script lang="ts" setup>
	import type { ArticleDTO } from '~/repository/types';
	import ArticleCard from '../cards/ArticleCard.vue';

	const articleStore = useArticlesStore();

	const fetchArticles = async () => {
		await articleStore.getAllArticles();
	};

	const fetchCategories = async () => {
		await articleStore.getAllCategories();
	};

	let filteredPostList = ref<ArticleDTO[]>([]);

	function filterPostsByCategory(
		posts: ArticleDTO[],
		categoryId: number
	): ArticleDTO[] {
		return posts.filter((post) => post.categories?.includes(categoryId));
	}

	function filter(categoryId: number | undefined) {
		const filteredPosts = filterPostsByCategory(
			articleStore.articlesList,
			categoryId as number
		);

		filteredPostList.value = filteredPosts;
	}

	const router = useRouter();

	function goToCategoryPage(category: string) {
		router.push(`/articles/${category}/`);
	}

	onMounted(async () => {
		try {
			// Run both fetches concurrently and wait for both to finish
			await fetchArticles();
			await fetchCategories();
		} catch (error) {
			// Handle any errors that occur during the fetches
			console.error('Error fetching articles or categories:', error);
		}

		watchEffect(async () => {
			if (defaultCategory.value) {
				tab.activeTab = defaultCategory.value;
			}
		});
	});

	const categories = computed(() => articleStore.categoriesList);
	const categoryIndex = computed(() =>
		categories.value.find((category) => category.name === 'Featured')
	);

	const defaultCategory = computed(() => categoryIndex?.value?.slug);
	const tab = reactive({ activeTab: defaultCategory.value });
</script>

<style></style>
