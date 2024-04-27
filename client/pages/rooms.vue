<script setup lang="ts">
import { useRoomsStore } from '@/stores/rooms';
const { rooms } = storeToRefs(useRoomsStore());
const { fetchRooms, fetchRoomById } = useRoomsStore();

const { pending, error } = await fetchRooms();
</script>
<template>
	<div class="container mx-auto my-4 flex-1">
		<div v-if="pending" class="">loading...</div>
		<div
			v-else-if="error"
			class="flex flex-col items-center bg-red-100 justify-center"
		>
			<h1 class="text-5xl text-red-500">{{ error.statusCode }}</h1>
			<p>{{ error.statusMessage }}</p>
		</div>
		<div v-else class="flex divide-x border border-teal-600 divide-teal-600 rounded">
			<RoomsList :rooms="rooms" @send-room-id="fetchRoomById" />
			<RoomsNewRoom />
		</div>
	</div>
</template>
