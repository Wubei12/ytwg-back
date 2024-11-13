import { defineStore } from 'pinia';
import type {
	ArticleDTO,
	AuthorDTO,
	CategoryDTO,
	FeaturedMediaDTO,
	Metadata,
} from '~/repository/types';

export const useArticlesStore = defineStore('articles', () => {
	const { $api } = useNuxtApp();

	// Get All Articles

	let articlesLoading = ref(false);
	let articlesList = ref<ArticleDTO[]>([]);
	let articlesPagination = ref<Metadata>({});

	interface QueryParams {
		limit?: number;
		per_page?: number;
		category?: string | number;
	}

	function toggleArticlesLoading(flag = true) {
		articlesLoading.value = flag;
	}

	async function getAllArticles(queryParams: QueryParams = { per_page: 100 }) {
		toggleArticlesLoading();
		articlesList.value = [];

		await $api.articles.articles
			.getAll(queryParams)
			.then((resp) => {
				articlesList.value = resp as Array<ArticleDTO>;
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				toggleArticlesLoading(false);
			});
	}

	// Get All All Featured Articles

	let featuredArticlesLoading = ref(false);
	let featuredArticlesList = ref<ArticleDTO[]>([]);
	let featuredArticlesPagination = ref<Metadata>({});

	function toggleFeaturedArticlesLoading(flag = true) {
		featuredArticlesLoading.value = flag;
	}

	async function getAllFeaturedArticles(queryParams = { limit: 0 }) {
		toggleFeaturedArticlesLoading();
		featuredArticlesList.value = [];

		await $api.articles.articles
			.getFeaturedArticles(90, queryParams)
			.then((resp) => {
				console.log('🚀 ~ .then ~ resp:', resp);
				featuredArticlesList.value = resp as Array<ArticleDTO>;
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				toggleFeaturedArticlesLoading(false);
			});
	}

	// Get Author details by Id

	let authorDetailLoading = ref(false);
	let authorDetail = ref<AuthorDTO>({});

	function toggleAuthorDetailLoading(flag = true) {
		authorDetailLoading.value = flag;
	}

	async function getAuthorDetail(authorId: string) {
		toggleAuthorDetailLoading();
		authorDetail.value = {};
		await $api.articles.author
			.getAuthorById(authorId)
			.then((resp) => {
				authorDetail.value = resp as AuthorDTO;
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				toggleAuthorDetailLoading(false);
			});
	}

	// Get Featured Media by id

	let mediaLoading = ref(false);
	let media = ref<FeaturedMediaDTO>({});

	function toggleMediaLoading(flag = true) {
		mediaLoading.value = flag;
	}

	async function getMediaById(mediaId: number) {
		toggleMediaLoading();
		media.value = {};
		await $api.articles.featured_media
			.getFeaturedMediaById(mediaId)
			.then((resp) => {
				console.log('🚀 ~ .then ~ resp:', resp);
				media.value = resp as FeaturedMediaDTO;
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				toggleMediaLoading(false);
			});
	}

	// Get Article by slug

	let articleLoading = ref(false);
	let article = ref<ArticleDTO>({});

	function toggleArticleLoading(flag = true) {
		articleLoading.value = flag;
	}

	async function getArticlebySlug(slug: string) {
		toggleArticleLoading();
		article.value = {};
		await $api.articles.articles
			.getArticleBySlug(slug)
			.then((resp) => {
				if (resp) {
					article.value = resp[0];
				}
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				toggleArticleLoading(false);
			});
	}

	// Get All Categories

	let categoriesLoading = ref(false);
	let categoriesList = ref<CategoryDTO[]>([]);
	let categoriesPagination = ref<Metadata>({});

	function toggleCategoriesLoading(flag = true) {
		categoriesLoading.value = flag;
	}

	async function getAllCategories(queryParams = {}) {
		toggleCategoriesLoading();
		categoriesList.value = [];

		await $api.articles.category
			.getAll(queryParams)
			.then((resp) => {
				console.log('🚀 ~ .then ~ resp:', resp);
				categoriesList.value = resp as Array<CategoryDTO>;
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				toggleCategoriesLoading(false);
			});
	}

	return {
		getAllArticles,
		articlesLoading,
		articlesList,
		articlesPagination,
		getAuthorDetail,
		authorDetailLoading,
		authorDetail,
		mediaLoading,
		media,
		getMediaById,
		articleLoading,
		article,
		getArticlebySlug,
		featuredArticlesLoading,
		featuredArticlesList,
		getAllFeaturedArticles,
		categoriesLoading,
		categoriesList,
		getAllCategories,
	};
});
