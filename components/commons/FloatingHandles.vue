<template>
	<div
		class="fixed z-50 flex flex-col items-center justify-center top-0 left-0 h-screen w-[100px]"
	>
		<div
			class="flex flex-col items-center justify-center w-full h-full"
			ref="target"
		>
			<TransitionGroup
				name="list"
				tag="ul"
			>
				<div
					v-if="show"
					class="flex flex-col gap-8"
				>
					<li
						v-for="(item, idx) in fab"
						:key="idx"
						class="hover:scale-125 smooth_effect"
					>
						<a :href="item.href">
							<v-icon
								v-if="item.hasIcon"
								:icon="item.icon"
								size="30"
								color="#f5d451"
							></v-icon>

							<img
								v-else
								:src="item.icon"
								alt="icon"
								width="30"
								height="30"
							/>
						</a>
					</li>
				</div>
			</TransitionGroup>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { reactive, ref, watch } from 'vue';
	const show = ref(true);
	const target = ref(null);
	const mouse = reactive(useMouseInElement(target));

	watch(
		() => mouse.isOutside,
		(newVal) => {
			show.value = !newVal;
		}
	);

	const fab = [
		{
			icon: 'mdi-twitter',
			href: 'https://x.com/YetenaW',
			hasIcon: true,
		},
		{
			icon: 'mdi-facebook',
			href: 'https://www.facebook.com/YeTenaw',
			hasIcon: true,
		},
		{
			icon: 'mdi-instagram',
			href: 'https://www.instagram.com/yetena_weg/',
			hasIcon: true,
		},
		{
			icon: 'mdi-youtube',
			href: 'https://www.youtube.com/channel/UC58C8MBrinejmJrCeIhzWSw',
			hasIcon: true,
		},
		{
			icon: 'mdi-spotify',
			href: 'https://open.spotify.com/show/1rFKn6eTPi801lWVBCI0Fp',
			hasIcon: true,
		},
		{
			icon: 'https://seeklogo.com/images/T/telegram-logo-D185476A96-seeklogo.com.png',
			href: 'https://t.me/yetenaweg',
			hasIcon: false,
		},
		{
			icon: 'https://cdn-icons-png.flaticon.com/512/6122/6122838.png',
			href: 'https://clubhousedb.com/club/799114686-yetena-weg',
			hasIcon: false,
		},
	];
</script>

<style>
	.list-enter-active,
	.list-leave-active {
		transition: all 0.5s ease;
	}
	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(-30px);
	}
</style>
