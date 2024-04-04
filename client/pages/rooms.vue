<script setup lang="ts">
import type { Room } from '~/types';
const nuxtApp = useNuxtApp();
const rooms = ref<Room[] | []>([]);

const { data, pending, refresh } = await useFetch('http://localhost:8080/rooms', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
	},
	key: 'rooms', // This key will be used to identify the cached data
	getCachedData: (key) => {
		if (nuxtApp.isHydrating && nuxtApp.payload.data[key]) {
			return nuxtApp.payload.data[key];
		}

		if (nuxtApp.static.data[key]) {
			return nuxtApp.static.data[key];
		}

		return null;
	},
});
if (!data.value) {
	console.log(' The data was not cached, so fetch it from the server');
	await refresh();
} else {
	console.log(' The data was cached, so use it');
	rooms.value = data.value.rooms;
	console.log(rooms.value);
}
</script>
<template>
	<div class="container mx-auto my-4">
		<div v-if="pending" class="">loading...</div>
		<div v-else class="flex divide-x border border-teal-600 divide-teal-600 rounded">
			<RoomsList :rooms="rooms" />
			<RoomsNewRoom />
		</div>
	</div>
</template>
