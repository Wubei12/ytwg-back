<template>
	<v-card
		:disabled="loading"
		:loading="loading"
		class="mx-auto my-12 min-h-[460px] overflow-hidden group"
		width="270"
		hover
	>
		<template v-slot:loader="{ isActive }">
			<v-progress-linear
				:active="isActive"
				color="#f5d451"
				height="4"
				indeterminate
			></v-progress-linear>
		</template>

		<div class="overflow-hidden size-[270px]">
			<img
				v-if="imgSrc"
				:src="srcImg"
				:key="key"
				class="group-hover:scale-110 rounded-sm size-[270px] object-cover smooth_effect"
			/>
		</div>

		<v-card-item>
			<v-card-title>{{ article.title.rendered }}</v-card-title>
		</v-card-item>

		<v-card-text>
			<div
				v-html="article.excerpt.rendered"
				class="min-h-[120px] flex justify-start items-center"
			></div>
		</v-card-text>

		<v-card-actions>
			<v-btn
				color="#f5d451"
				variant="flat"
				text="Read More..."
				block
				@click="reserve(article.slug as string)"
			></v-btn>
		</v-card-actions>
	</v-card>
</template>

<script lang="ts" setup>
	import type { FeaturedMediaDTO } from '~/repository/types';

	const loading = ref(false);
	const selection = ref(1);

	function replaceSpacesWithHyphens(input: string): string {
		return input.replace(/\s+/g, '-');
	}

	const router = useRouter();

	function reserve(path: string) {
		loading.value = true;
		setTimeout(() => {
			loading.value = false;
		}, 2000);
		router.push({ path: `/${path}` });
	}

	const props = defineProps({
		article: {
			type: Object,
			required: true,
		},
	});

	const articleStore = useArticlesStore();

	const fetchAuthorDetails = async () => {
		await articleStore.getAuthorDetail(props.article.author);
	};

	let imgSrc = ref<any>('');

	const srcImg = computed(() => imgSrc.value);

	const baseUrl = useRuntimeConfig().public.baseUrl;
	const fetchMedia = async () => {
		const resp = await fetch(
			`${baseUrl}/wp/v2/media/${props.article.featured_media}`
		);

		const mediaData = await resp.json();
		imgSrc.value = mediaData.guid?.rendered || '';
	};

	let key = ref(1);
	function forceRerender() {
		key.value++;
	}
	onMounted(async () => {
		await fetchMedia();

		watchEffect(async () => {
			if (props.article.featured_media) {
				forceRerender();
			}
		});
	});
</script>

<style></style>
