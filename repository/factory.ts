//@ts-ignore
import type { AsyncDataOptions } from '#app';
import type { $Fetch, FetchOptions } from 'ofetch';
import { ErrorTypes, type ErrorResponse } from './types';

/*
 The HttpFactory acts as a wrapper around an HTTP client. 
 It encapsulates the functionality for making API requests asynchronously 
 through the call function, utilizing the provided HTTP client.
*/
class FetchFactory<BaseListResponse, BaseDto> {
	private $fetch: $Fetch;

	constructor(fetcher: $Fetch) {
		this.$fetch = fetcher;
	}

	/**
	 * The HTTP client is utilized to control the process of making API requests.
	 * @param method the HTTP method (GET, POST, ...)
	 * @param url the endpoint url
	 * @param data the body data
	 * @param fetchOptions fetch options
	 * @returns
	 */
	async call(
		method: string,
		url: string,
		data?: object,
		fetchOptions?: FetchOptions<'json'>
	): Promise<BaseListResponse> {
		return this.$fetch<BaseListResponse>(url, {
			method,
			body: data,
			...fetchOptions,
		});
	}
}

abstract class BaseModule<BaseListResponse, BaseDto> extends FetchFactory<
	BaseListResponse,
	BaseDto
> {
	protected abstract RESOURCE: string;

	private handleError(error: unknown) {
		console.error('An error occurred:', error);
		throw error;
	}

	private async createUrl(
		queryParams: Record<string, any>, // Allow any type to handle arrays and strings
		extension: string = ''
	): Promise<string> {
		const searchParams = new URLSearchParams();

		// Loop through each key in the queryParams object
		Object.entries(queryParams).forEach(([key, value]) => {
			if (Array.isArray(value)) {
				// If the value is an array, append each item with the same key
				value.forEach((item) => searchParams.append(key, item));
			} else {
				// Otherwise, append the single value
				searchParams.append(key, value);
			}
		});

		// Construct the full URL with the extension and query string
		const paramsString = searchParams.toString();
		return `${this.RESOURCE}${extension}?${paramsString}`;
	}

	protected async fetchData<ResponseType>(
		queryParams: object,
		extension = ''
	): Promise<ResponseType | undefined> {
		try {
			// const fetchOptions =
			// 	await this.getTokenAndFetchOptions(additionalHeaders);
			const url = await this.createUrl(queryParams, extension);

			const response = await this.call('GET', url, undefined);

			return response as Awaited<ResponseType | undefined>;
		} catch (error) {
			this.handleError(error);
			return undefined;
		}
	}

	protected async createEntity(
		payload: Record<string, any>,
		asyncDataOptions: AsyncDataOptions<BaseListResponse>
	): Promise<BaseDto> {
		// const { token } = useAuth();
		const { data, error } = await useAsyncData(
			this.RESOURCE,
			() => {
				// const fetchOptions: FetchOptions<'json'> = {
				// 	headers: {
				// 		Authorization: token.value,
				// 	},
				// };

				return this.call('POST', this.RESOURCE, payload);
			},
			asyncDataOptions
		);

		if (error.value !== null) {
			const errorObj = (error.value?.data as ErrorResponse) || {};
			this.throwError(errorObj);
		}

		return data as BaseDto;
	}

	protected async updateEntity(
		id: string,
		payload: Record<string, any>,
		asyncDataOptions: AsyncDataOptions<BaseListResponse>,
		extension = ''
	): Promise<BaseDto> {
		let url = `${this.RESOURCE}/${id}`;
		if (extension) {
			url += `/${extension}`;
		}
		// const { token } = useAuth();
		const { data, error } = await useAsyncData(
			this.RESOURCE,
			() => {
				// const fetchOptions: FetchOptions<'json'> = {
				// 	headers: {
				// 		Authorization: token.value,
				// 	},
				// };

				return this.call('PATCH', url, payload);
			},
			asyncDataOptions
		);

		if (error.value !== null) {
			const errorObj = error.value?.data as ErrorResponse;
			this.throwError(errorObj);
		}

		return data as BaseDto;
	}

	protected async deleteEntity(
		id: string,
		asyncDataOptions: AsyncDataOptions<BaseListResponse>
	): Promise<BaseDto> {
		let url = `${this.RESOURCE}/${id}`;
		// const { token } = useAuth();
		const { data, error } = await useAsyncData(
			this.RESOURCE,
			() => {
				// const fetchOptions: FetchOptions<'json'> = {
				// 	headers: {
				// 		Authorization: token.value,
				// 	},
				// };

				return this.call('DELETE', url);
			},
			asyncDataOptions
		);

		if (error.value !== null) {
			const errorObj = error.value?.data as ErrorResponse;
			this.throwError(errorObj);
		}

		return data as BaseDto;
	}

	private throwError(error: ErrorResponse) {
		if (error.type === ErrorTypes.SERVER_ERROR) {
			throw new Error('System Error. Please contact an administrator.');
		} else {
			const message = error.errors?.map((error) => error.detail).join('\n');

			throw new Error(message);
		}
	}
}

export default BaseModule;
