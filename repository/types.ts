export enum ErrorTypes {
	VALIDATION_ERROR = 'validation_error',
	CLIENT_ERROR = 'client_error',
	SERVER_ERROR = 'server_error',
}

export interface ErrorResponse {
	type?: ErrorTypes;
	errors?: ErrorResponseItem[];
}

export interface ErrorResponseItem {
	code?: string;
	detail?: string;
	attr?: string;
}
export interface ArticleDTO {
	id?: number;
	date?: Date;
	date_gmt?: Date;
	guid?: GUID;
	modified?: Date;
	modified_gmt?: Date;
	slug?: string;
	status?: string;
	type?: string;
	link?: string;
	title?: GUID;
	content?: Content;
	excerpt?: Content;
	author?: number;
	featured_media?: number;
	comment_status?: string;
	ping_status?: string;
	sticky?: boolean;
	template?: string;
	format?: string;
	meta?: Meta;
	categories?: number[];
	tags?: number[];
	class_list?: string[];
	aioseo_notices?: any[];
	_links?: Links;
}

export interface Links {
	self?: About[];
	collection?: About[];
	about?: About[];
	author?: Author[];
	replies?: Author[];
	'version-history'?: VersionHistory[];
	'predecessor-version'?: PredecessorVersion[];
	'wp:featuredmedia'?: Author[];
	'wp:attachment'?: About[];
	'wp:term'?: WpTerm[];
	curies?: Cury[];
}

export interface About {
	href?: string;
}

export interface Author {
	embeddable?: boolean;
	href?: string;
}

export interface Cury {
	name?: string;
	href?: string;
	templated?: boolean;
}

export interface PredecessorVersion {
	id?: number;
	href?: string;
}

export interface VersionHistory {
	count?: number;
	href?: string;
}

export interface WpTerm {
	taxonomy?: string;
	embeddable?: boolean;
	href?: string;
}

export interface Content {
	rendered?: string;
	protected?: boolean;
}

export interface GUID {
	rendered?: string;
}

export interface Meta {
	nf_dc_page?: string;
	om_disable_all_campaigns?: boolean;
	footnotes?: string;
}

export interface ArticleListResponse {
	data: ArticleDTO[];
}

// export interface ArticleData {
// 	results?: ArticleDTO[];
// 	metadata?: Metadata;
// }

export interface Metadata {
	limit?: number;
	offset?: number;
	total?: number;
	next?: string;
	previous?: string;
}

export interface AuthorDTO {
	id?: number;
	name?: string;
	url?: string;
	description?: string;
	link?: string;
	slug?: string;
	avatar_urls?: { [key: string]: string };
	meta?: any[];
	_links?: Links;
}

export interface Links {
	self?: Collection[];
	collection?: Collection[];
}

export interface Collection {
	href?: string;
}

export interface AuthorListResponse {
	data: AuthorDTO[];
}

// Features Media

export interface FeaturedMediaDTO {
	id?: number;
	date?: Date;
	date_gmt?: Date;
	guid?: Caption;
	modified?: Date;
	modified_gmt?: Date;
	slug?: string;
	status?: string;
	type?: string;
	link?: string;
	title?: Caption;
	author?: number;
	featured_media?: number;
	comment_status?: string;
	ping_status?: string;
	template?: string;
	meta?: Meta;
	class_list?: string[];
	aioseo_notices?: any[];
	caption?: Caption;
	alt_text?: string;
	media_type?: string;
	mime_type?: string;
	media_details?: MediaDetails;
	post?: number;
	source_url?: string;
	_links?: Links;
}

export interface FeaturedMediaListResponse {
	data: FeaturedMediaDTO[];
}
export interface Links {
	self?: About[];
	collection?: About[];
	about?: About[];
	author?: Author[];
	replies?: Author[];
}

export interface About {
	href?: string;
}

export interface Author {
	embeddable?: boolean;
	href?: string;
}

export interface Caption {
	rendered?: string;
}

export interface MediaDetails {
	width?: number;
	height?: number;
	file?: string;
	filesize?: number;
	sizes?: Sizes;
	image_meta?: ImageMeta;
}

export interface ImageMeta {
	aperture?: string;
	credit?: string;
	camera?: string;
	caption?: string;
	created_timestamp?: string;
	copyright?: string;
	focal_length?: string;
	iso?: string;
	shutter_speed?: string;
	title?: string;
	orientation?: string;
	keywords?: any[];
}

export interface Sizes {
	thumbnail?: Full;
	full?: Full;
}

export interface Full {
	file?: string;
	width?: number;
	height?: number;
	mime_type?: string;
	source_url?: string;
	filesize?: number;
}

export interface Meta {
	nf_dc_page?: string;
	om_disable_all_campaigns?: boolean;
}

export interface CategoryDTO {
	id?: number;
	count?: number;
	description?: string;
	link?: string;
	name?: string;
	slug?: string;
	taxonomy?: string;
	parent?: number;
	meta?: any[];
	_links?: Links;
}

export interface Links {
	self?: About[];
	collection?: About[];
	about?: About[];
	'wp:post_type'?: About[];
	curies?: Cury[];
}

export interface About {
	href?: string;
}

export interface Cury {
	name?: string;
	href?: string;
	templated?: boolean;
}

export interface CategoryListResponse {
	data: CategoryDTO[];
}
