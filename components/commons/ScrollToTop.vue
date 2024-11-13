<template>
	<div class="fixed z-30 bottom-5 right-5 flex items-center justify-end">
		<Transition>
			<v-btn
				color="#f5d451"
				@click="y = 0"
				class="bg-transparent backdrop-blur-xl rounded-full"
				v-if="y != 0"
			>
				<v-icon
					icon="mdi-chevron-up"
					color="#f5d451"
					size="35"
				></v-icon>
			</v-btn>
		</Transition>
	</div>
</template>

<script lang="ts" setup>
	const { y } = useWindowScroll({ behavior: 'smooth' });
</script>

<style>
	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.3s ease;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
		scale: 0;
	}
</style>
