<script setup lang="ts">
import type { Room } from '~/types';

defineProps<{
	room: Room | null;
}>();
</script>
<template>
	<div class="flex flex-col gap-y-4">
		<h1 class="font-bold text-teal-600 text-3xl">
			{{ room?.name }}
		</h1>
		<div class="flex flex-col gap-4 lg:flex-row">
			<figure class="basis-1/2 shrink-0 rounded-xl overflow-hidden">
				<img
					src="../../public/images/placeholder.png"
					class="w-full h-full object-cover"
					:alt="room?.name"
				/>
			</figure>
			<div class="flex flex-wrap gap-4">
				<figure
					v-for="img in 4"
					class="basis-[calc(50%-0.5rem)] rounded-xl overflow-hidden"
				>
					<img
						src="../../public/images/placeholder.png"
						class="w-full h-full object-cover"
						:alt="room?.name"
					/>
				</figure>
			</div>
		</div>
		<div class="flex flex-col gap-y-4 basis-full lg:w-1/2">
			<div>
				<h2 class="text-xl font-bold text-teal-600 lg:text-2xl">Description</h2>
				<p>{{ room?.description }}</p>
			</div>
			<div>
				<h2 class="text-xl font-bold text-teal-600 lg:text-2xl">
					Offered Amenities
				</h2>
				<div class="grid grid-cols-12 gap-4 mt-2">
					<p
						v-for="amenitiy in room?.offeredAmenities"
						:key="amenitiy.id"
						class="flex gap-x-1 col-span-4 bg-teal-600 text-white p-1 lg:col-span-3 capitalize"
					>
						<Icon
							:name="`material-symbols-light:${amenitiy.icon}`"
							style="color: white"
							size="24px"
						/>
						{{ amenitiy.name }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
