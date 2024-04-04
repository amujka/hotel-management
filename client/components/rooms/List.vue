<script setup lang="ts">
import type { Room } from '~/types';
const props = defineProps<{
	rooms?: Room[];
}>();
</script>
<template>
	<div class="basis-1/5 p-4">
		<ul class="flex flex-col gap-4">
			<li v-for="room in rooms" :key="room._id" class="text-teal-600 font-semibold">
				{{ room.name }}
			</li>
		</ul>
	</div>
</template>
