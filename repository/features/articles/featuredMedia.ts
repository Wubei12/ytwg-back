import type { AsyncDataOptions } from '#app';
import BaseModule from '~/repository/factory';
import type {
	FeaturedMediaDTO,
	FeaturedMediaListResponse,
} from '~/repository/types';

export class FeaturedMediaModule extends BaseModule<
	FeaturedMediaListResponse,
	FeaturedMediaDTO
> {
	protected RESOURCE = '/wp/v2/media';

	async getFeaturedMediaById(
		mediaId: number,
		queryParams: object = {}
	): Promise<FeaturedMediaDTO | undefined> {
		return this.fetchData<FeaturedMediaDTO | undefined>(
			queryParams,
			`/${mediaId}`
		);
	}
}
