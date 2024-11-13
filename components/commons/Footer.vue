<template>
	<footer class="bg-[#0c260f] space-y-4 px-[6rem] py-[4rem]">
		<div class="flex items-start gap-12">
			<div>
				<a
					href="/"
					aria-label="Yetenaweg Homepage"
					class="inline-block mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
				>
					<picture>
						<source
							srcset="/assets/img/logo.png"
							media="(min-width: 640px)"
						/>
						<img
							src="/assets/img/logo.png"
							alt="YetenaWegLogo"
							class="w-8 md:w-[176px] lg:w-[10.5rem]"
						/>
					</picture>
				</a>
				<p class="max-w-[500px] text-[#f5d451]">
					Yetena Weg is a Volunteer Network of Health Care Professionals and
					other experts working to improve the culture of evidence-based Health
					Information in Ethiopia.
				</p>
			</div>
			<div
				class="grid w-full justify-center grid-cols-[1fr_1fr] md:grid-cols-[repeat(4,1fr)] px-4 md:px-6 pb-10 max-w-[1536px] mx-auto"
			>
				<ul
					v-for="{ label, subcategories } in categories"
					:key="label"
					class="grid grid-cols xs:pb-4 justify-start"
				>
					<li
						class="ml-4 text-lg text-start font-medium leading-7 text-white font-body"
					>
						{{ label }}
					</li>
					<li
						v-for="{ subcategoryLabel, link } in subcategories"
						:key="subcategoryLabel"
						class="py-2 !bg-transparent typography-text-sm font-body"
					>
						<a
							class="no-underline cursor-pointer text-neutral-300 motion-safe:transition-ease motion-safe:duration-100 hover:border-b-2 border-[#f5d451] hover:!text-neutral-100"
							:href="link"
						>
							{{ subcategoryLabel }}
						</a>
					</li>
				</ul>
				<ul class="grid grid-cols text-white xs:pb-4">
					<li class="ml-4 text-lg font-medium leading-7 text-white font-body">
						Contact Us
					</li>
					<li class="py-2 !bg-transparent typography-text-sm font-body">
						<a
							class="no-underline cursor-pointer text-neutral-300 motion-safe:transition-ease motion-safe:duration-100 hover:border-b-2 border-[#f5d451] hover:!text-neutral-100"
							href="mailto:contact@yetenaweg.com"
						>
							contact@yetenaweg.com
						</a>
					</li>
					<li class="py-2 !bg-transparent typography-text-sm font-body">
						<a
							class="no-underline cursor-pointer text-neutral-300 motion-safe:transition-ease motion-safe:duration-100 hover:border-b-2 border-[#f5d451] hover:!text-neutral-100"
							href="tel:+12159188486"
							>+12159188486</a
						>
					</li>

					<br />
					<li class="py-2 !bg-transparent typography-text-sm font-body">
						<a
							class="no-underline cursor-pointer text-neutral-300 motion-safe:transition-ease motion-safe:duration-100 hover:border-b-2 border-[#f5d451] hover:!text-neutral-100"
							href="mailto:cme@yetenaweg.com"
							>cme@yetenaweg.com
						</a>
					</li>
					<li class="py-2 !bg-transparent typography-text-sm font-body">
						<a
							class="no-underline cursor-pointer text-neutral-300 motion-safe:transition-ease motion-safe:duration-100 hover:border-b-2 border-[#f5d451] hover:!text-neutral-100"
							href="mailto:mentorship@yetenaweg.com"
						>
							mentorship@yetenaweg.com
						</a>
					</li>
					<li class="py-2 !bg-transparent typography-text-sm font-body">
						<a
							class="no-underline cursor-pointer text-neutral-300 motion-safe:transition-ease motion-safe:duration-100 hover:border-b-2 border-[#f5d451] hover:!text-neutral-100"
							href="mailto:health_advocacy@yetenaweg.com"
						>
							health_advocacy@yetenaweg.com
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="w-full flex justify-center">
			<div class="flex gap-6">
				<a
					href="/"
					class="no-underline cursor-pointer text-neutral-300 motion-safe:transition-ease motion-safe:duration-100 hover:border-b-2 border-[#f5d451] hover:!text-neutral-100"
				>
					Sitemap
				</a>
				<a
					href="/"
					class="no-underline cursor-pointer text-neutral-300 motion-safe:transition-ease motion-safe:duration-100 hover:border-b-2 border-[#f5d451] hover:!text-neutral-100"
				>
					Privacy Policy
				</a>
			</div>
		</div>
		<v-divider></v-divider>
		<p class="text-center text-neutral-100">
			© 2024 All Rights Reserved Yetena Weg. Design by Malefia Techonologies
		</p>
	</footer>
</template>

<script lang="ts" setup>
	const categories = [
		{
			label: 'Info',
			subcategories: [
				{
					subcategoryLabel: 'What we do',
					link: '#',
				},
				{
					subcategoryLabel: 'Partners',
					link: '#',
				},
				{
					subcategoryLabel: 'Organizational Structure',
					link: '#',
				},
				{
					subcategoryLabel: 'Governace',
					link: '#',
				},
			],
		},
		{
			label: 'Help',
			subcategories: [
				{
					subcategoryLabel: 'Help centers',
					link: '#',
				},
				{
					subcategoryLabel: 'Security & fraud',
					link: '#',
				},
				{
					subcategoryLabel: 'Feedback',
					link: '#',
				},
				{
					subcategoryLabel: 'Contact',
					link: '#',
				},
			],
		},
		{
			label: 'Services',
			subcategories: [
				{
					subcategoryLabel: 'Gift cards',
					link: '#',
				},
				{
					subcategoryLabel: 'Order pickup',
					link: '#',
				},
				{
					subcategoryLabel: 'Purchase status',
					link: '#',
				},
				{
					subcategoryLabel: 'Track orders',
					link: '#',
				},
			],
		},
	];
</script>

<style></style>
