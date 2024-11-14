<script lang="ts" setup>
import type { Room } from '~/types';

const route = useRoute();
const {
	data: room,
	error,
	status,
} = await useFetch<Room>(`http://localhost:8080/rooms/${route.params.id}`, {
	method: 'GET',
	lazy: true,
	headers: {
		'Content-Type': 'application/json',
	},
});
watchEffect(() => console.log(room.value));
</script>
<template>
	<div class="container mx-auto p-4">
		<h1 v-if="status === 'pending'">Loading...</h1>
		<div v-else-if="error" class="">
			<h1>{{ error.statusCode }}</h1>
			<p>{{ error.statusMessage }}</p>
		</div>
		<RoomDetails v-else :room="room" />
	</div>
</template>
