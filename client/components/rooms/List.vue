<script setup lang="ts">
import type { Room } from '~/types';
import { useRoomsStore } from '@/stores/rooms';
const { deleteRoomById } = useRoomsStore();

defineProps<{
	rooms?: Room[];
}>();
</script>
<template>
	<div class="basis-1/5 p-4">
		<ul class="flex flex-col gap-4">
			<li
				v-for="room in rooms"
				:key="room._id"
				@click="deleteRoomById(room._id)"
				class="text-teal-600 font-semibold py-1 px-2 hover:outline outline-1 outline-teal-600 rounded cursor-pointer transition-all duration-200 ease-in-out"
			>
				<label>{{ room.name }}</label>
			</li>
		</ul>
	</div>
</template>
