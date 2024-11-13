<template>
	<div class="text-center">
		<v-menu
			open-on-hover
			class="relative"
		>
			<template v-slot:activator="{ props }">
				<v-btn
					color="#f5d451"
					width="100"
					height="30"
					class="w-full font-bold hover:text-secondary"
					variant="text"
					v-bind="props"
				>
					<span class="text-lg font-bold"> ጽሑፎች </span>

					<v-icon
						icon="mdi-chevron-down"
						end
					></v-icon>
				</v-btn>
			</template>

			<v-list
				class="bg-secondary p-2 categoryList max-h-[500px] overflow-y-scroll backdrop-blur-xl"
			>
				<v-list-item
					v-for="(category, index) in categories"
					:key="index"
					class="hover:bg-black/20 smooth_effect rounded-lg mx-2"
				>
					<v-list-item-title>
						<a
							target="_blank"
							:href="`https://yetenaweg.com/articles/${category.name?.toLowerCase()}`"
							class="w-full h-full"
						>
							{{ category.name }}
						</a>
					</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>

<script lang="ts" setup>
	const articles = useArticlesStore();

	const categories = computed(() => articles.categoriesList);
</script>

<style>
	/* width */
	.categoryList::-webkit-scrollbar {
		width: 8px;
	}

	/* Track */
	.categoryList::-webkit-scrollbar-track {
		background: #f5d451;
	}

	/* Handle */
	.categoryList::-webkit-scrollbar-thumb {
		background: #277c31;
		border-radius: 12px;
	}

	/* Handle on hover */
	.categoryList::-webkit-scrollbar-thumb:hover {
		@apply bg-[#1D5D25] w-[12px] transition-transform ease-in-out duration-300;
	}
</style>
