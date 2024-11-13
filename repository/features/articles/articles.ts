import type { AsyncDataOptions } from '#app';
import BaseModule from '../../factory';
import type { ArticleDTO, ArticleListResponse } from '../../types';

export class ArticleModule extends BaseModule<ArticleListResponse, ArticleDTO> {
	protected RESOURCE = '/wp/v2/posts';

	async getAll(queryParams: object): Promise<ArticleDTO[] | undefined> {
		return this.fetchData(queryParams);
	}

	async getArticleBySlug(
		articleSlug: string,
		queryParams: object = {}
	): Promise<ArticleDTO[] | undefined> {
		return this.fetchData<ArticleDTO[] | undefined>(
			queryParams,
			`?slug=${articleSlug}`
		);
	}
	async getFeaturedArticles(
		categoryId: string | number,
		queryParams: object = {}
	): Promise<ArticleDTO[] | undefined> {
		return this.fetchData<ArticleDTO[] | undefined>(
			queryParams,
			`?categories=${categoryId}`
		);
	}
}
