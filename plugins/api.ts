import { $fetch, type FetchOptions } from 'ofetch';
import { ArticleModule } from '~/repository/features/articles/articles';
import { AuthorModule } from '~/repository/features/articles/author';
import { CategoryModule } from '~/repository/features/articles/categories';
import { FeaturedMediaModule } from '~/repository/features/articles/featuredMedia';

interface ApiInstance {
	articles: {
		articles: ArticleModule;
		author: AuthorModule;
		featured_media: FeaturedMediaModule;
		category: CategoryModule;
	};
}

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig();

	const fetchOptions: FetchOptions = {
		baseURL: config.public.baseUrl as string,
	};

	const apiFetcher = $fetch.create(fetchOptions);

	const modules: ApiInstance = {
		articles: {
			articles: new ArticleModule(apiFetcher),
			author: new AuthorModule(apiFetcher),
			featured_media: new FeaturedMediaModule(apiFetcher),
			category: new CategoryModule(apiFetcher),
		},
	};

	return {
		provide: {
			api: modules,
		},
	};
});
