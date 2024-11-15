<script setup lang="ts">
const nuxtApp = useNuxtApp();
const rooms = ref([]);
const { data, error, status } = await useFetch<any>('http://localhost:8080/rooms', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
	},
});

if (status.value === 'success' && !error.value && data.value?.rooms) {
	rooms.value = data.value.rooms;
}
</script>
<template>
	<div class="container mx-auto p-4">
		<!-- roomSearchComponent -->
		<h1 v-if="status === 'pending'">Loading...</h1>
		<div v-else-if="error" class="">
			<h1>{{ error.statusCode }}</h1>
			<p>{{ error.statusMessage }}</p>
		</div>
		<RoomsList v-else :rooms="rooms" />
	</div>
</template>
