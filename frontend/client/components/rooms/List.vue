<script lang="ts" setup>
import type { Room } from '~/types';

defineProps<{
	rooms?: Room[];
}>();
</script>
<template>
	<div class="grid grid-cols-12 gap-y-8 md:gap-8">
		<RoomsRoomItem v-for="room in rooms" :key="room._id" :room="room" />
	</div>
</template>
