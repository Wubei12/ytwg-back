import { onMounted } from 'vue';

export const useAnime = (target: string, options: any) => {
	const { $anime } = useNuxtApp();

	onMounted(() => {
		$anime({ targets: target, ...options });
	});
};
