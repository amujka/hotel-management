<script setup lang="ts">
const isTypeDropdownActive = ref(false);
const roomTypes = ['Basic', 'Luxury', 'Suite'];
const newRoom = ref({
	type: roomTypes[0],
	name: '',
	description: '',
	slug: '',
	price: 0,
	specialNote: '',
	dimension: 0,
	numberOfBeds: 0,
	offeredAmenities: '',
	isFeatured: false,
});
</script>
<template>
	<div class="flex-1 p-4">
		<div class="flex flex-col gap-4 max-w-2xl mx-auto">
			<div class="flex flex-col gap-2">
				<label class="text-teal-600 transition-all duration-200 ease-in-out"
					>Name</label
				>
				<input
					type="text"
					class="px-2 py-1 border border-teal-600 rounded outline-none focus:border-teal-400 transition-colors duration-200"
					v-model="newRoom.name"
				/>
			</div>
			<div class="basis-full flex gap-4">
				<div class="basis-1/4 flex flex-col gap-2">
					<label class="text-teal-600 transition-all duration-200 ease-in-out"
						>Type</label
					>
					<div class="relative">
						<div
							class="w-full px-2 py-1 border border-teal-600 rounded cursor-pointer"
							@click="isTypeDropdownActive = !isTypeDropdownActive"
						>
							{{ newRoom.type }}
						</div>
						<ul
							v-if="isTypeDropdownActive"
							@click="isTypeDropdownActive = false"
							class="absolute left-0 top-full flex flex-col gap-2 w-full px-2 py-1 bg-white border border-t-0 border-teal-600"
						>
							<li
								v-for="roomType in roomTypes"
								class="cursor-pointer hover:text-teal-500"
								@click="newRoom.type = roomType"
							>
								{{ roomType }}
							</li>
						</ul>
					</div>
				</div>
				<div class="basis-1/4 flex flex-col gap-2">
					<label class="text-teal-600 transition-all duration-200 ease-in-out"
						>Number of beds</label
					>
					<input
						type="number"
						class="w-full px-2 py-1 border border-teal-600 rounded outline-none focus:border-teal-400 transition-colors duration-200"
						v-model="newRoom.numberOfBeds"
					/>
				</div>
				<div class="basis-1/4 flex flex-col gap-2">
					<label class="text-teal-600 transition-all duration-200 ease-in-out"
						>Price</label
					>
					<input
						type="number"
						class="w-full px-2 py-1 border border-teal-600 rounded outline-none focus:border-teal-400 transition-colors duration-200"
						v-model="newRoom.price"
					/>
				</div>
				<div class="basis-1/4 flex flex-col gap-2">
					<label class="text-teal-600 transition-all duration-200 ease-in-out"
						>Dimension</label
					>
					<input
						type="number"
						class="w-full px-2 py-1 border border-teal-600 rounded outline-none focus:border-teal-400 transition-colors duration-200"
						v-model="newRoom.dimension"
					/>
				</div>
			</div>
			<div class="flex flex-col gap-2">
				<label class="text-teal-600 transition-all duration-200 ease-in-out"
					>Description</label
				>
				<textarea
					rows="5"
					class="px-2 py-1 border border-teal-600 rounded outline-none focus:border-teal-400 transition-colors duration-200"
					v-model="newRoom.description"
				></textarea>
			</div>
			<div class="flex flex-col gap-2">
				<label class="text-teal-600 transition-all duration-200 ease-in-out"
					>Slug</label
				>
				<input
					type="text"
					class="px-2 py-1 border border-teal-600 rounded outline-none focus:border-teal-400 transition-colors duration-200"
					v-model="newRoom.slug"
				/>
			</div>

			<div class="flex flex-col gap-2">
				<label class="text-teal-600 transition-all duration-200 ease-in-out"
					>Special note</label
				>
				<textarea
					rows="5"
					class="px-2 py-1 border border-teal-600 rounded outline-none focus:border-teal-400 transition-colors duration-200"
					v-model="newRoom.specialNote"
				></textarea>
			</div>

			<div class="flex flex-col gap-2">
				<label class="text-teal-600 transition-all duration-200 ease-in-out"
					>Offered amenities</label
				>
				<input
					type="text"
					class="px-2 py-1 border border-teal-600 rounded outline-none focus:border-teal-400 transition-colors duration-200"
					placeholder="separate by comma"
					v-model="newRoom.offeredAmenities"
				/>
			</div>
			<button
				class="self-end w-fit px-2 py-1 border border-teal-600 rounded outline-none text-teal-600"
			>
				Add new room
			</button>
		</div>
	</div>
</template>
<style scoped>
label:has(+ input:focus),
label:has(+ textarea:focus) {
	@apply text-teal-500 font-bold;
}
</style>
