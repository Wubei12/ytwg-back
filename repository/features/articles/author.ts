import type { AsyncDataOptions } from '#app';
import BaseModule from '~/repository/factory';
import type { AuthorDTO, AuthorListResponse } from '~/repository/types';

export class AuthorModule extends BaseModule<AuthorListResponse, AuthorDTO> {
	protected RESOURCE = '/wp/v2/users';

	async getAuthorById(
		authorId: string,
		queryParams: object = {}
	): Promise<AuthorDTO | undefined> {
		return this.fetchData<AuthorDTO | undefined>(queryParams, `/${authorId}`);
	}
}
