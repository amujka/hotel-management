<script lang="ts" setup>
import type { Room } from '~/types';

defineProps<{
	room: Room;
}>();
</script>
<template>
	<div
		class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-2 border-teal-600 bg-teal-600 cursor-default"
	>
		<figure>
			<img src="../../public/images/placeholder.png" :alt="room.name" />
		</figure>
		<div class="p-4 text-white">
			<div class="flex justify-between font-bold">
				<h1>{{ room.name }}</h1>
				<h1>${{ room.price }}</h1>
			</div>
			<p class="text-xs capitalize my-2">{{ room.type }}</p>
			<p class="text-sm line-clamp-3">{{ room.description }}</p>
			<NuxtLink :to="`/room/${room.slug}/details-${room._id}`">
				<button
					class="w-full mt-4 py-4 mx-auto rounded-lg font-bold bg-white text-teal-600 lg:transition-transform lg:duration-300 lg:hover:-translate-y-2"
				>
					VIEW DETAILS
				</button>
			</NuxtLink>
		</div>
	</div>
</template>
