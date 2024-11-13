import BaseModule from '../../factory';
import type { CategoryDTO, CategoryListResponse } from '../../types';

export class CategoryModule extends BaseModule<
	CategoryListResponse,
	CategoryDTO
> {
	protected RESOURCE = '/wp/v2/categories';

	async getAll(queryParams: object): Promise<CategoryDTO[] | undefined> {
		return this.fetchData((queryParams = { per_page: 100 }));
	}

	// async getArticleBySlug(
	// 	articleSlug: string,
	// 	queryParams: object = {}
	// ): Promise<CategoryDTO[] | undefined> {
	// 	return this.fetchData<CategoryDTO[] | undefined>(
	// 		queryParams,
	// 		`?slug=${articleSlug}`
	// 	);
	// }
	// async getFeaturedArticles(
	// 	categoryId: string | number,
	// 	queryParams: object = {}
	// ): Promise<CategoryDTO[] | undefined> {
	// 	return this.fetchData<CategoryDTO[] | undefined>(
	// 		queryParams,
	// 		`?categories=${categoryId}`
	// 	);
	// }
}
