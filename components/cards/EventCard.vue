<template>
	<v-card
		class="mx-auto"
		max-width="313"
	>
		<v-img
			class="relative text-white align-end"
			height="300"
			:src="event.imgSrc"
			cover
		>
			<v-card-title
				class="absolute bottom-0 left-0 w-full h-[50px] z-100 bg-black/60 text-white"
				>{{ event.title }}</v-card-title
			>
			<div
				class="absolute bottom-[66px] left-0 w-full h-full -z-1 bg-black/60"
			></div>
		</v-img>

		<v-card-subtitle class="pt-4"> {{ event.description }} </v-card-subtitle>

		<v-card-text>
			<div>Whitehaven Beach</div>

			<div>Whitsunday Island, Whitsunday Islands</div>
		</v-card-text>

		<v-card-actions>
			<v-btn
				color="orange"
				text="Share"
			></v-btn>

			<v-btn
				color="orange"
				text="Explore"
				:href="event.href"
			></v-btn>
		</v-card-actions>
	</v-card>
</template>

<script lang="ts" setup>
	const props = defineProps({
		event: {
			type: Object,
			required: true,
		},
	});
</script>

<style></style>
