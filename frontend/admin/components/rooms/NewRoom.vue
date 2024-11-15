<script setup lang="ts">
import { useRoomsStore } from '@/stores/rooms';
import { useVuelidate } from '@vuelidate/core';
import { minValue, required, helpers } from '@vuelidate/validators';
import type { Amenity } from '~/types';
const { addNewRoom, updateRoomById } = useRoomsStore();
const { room } = storeToRefs(useRoomsStore());
const isTypeDropdownActive = ref(false);
const roomTypes = ['Basic', 'Luxury', 'Suite'];
const defaultValues = {
	type: roomTypes[0],
	name: '',
	description: '',
	slug: '',
	price: 1,
	specialNote: '',
	dimension: 1,
	numberOfBeds: 1,
	offeredAmenities: [] as Amenity[],
	isFeatured: false,
};
const newRoom = ref({ ...defaultValues });

const rules = {
	name: { required: helpers.withMessage('Name cannot be empty', required) },
	slug: { required: helpers.withMessage('Slug cannot be empty', required) },
	description: {
		required: helpers.withMessage('Description cannot be empty', required),
	},
	price: { minValue: helpers.withMessage('Minimum is 1', minValue(1)) },
	numberOfBeds: {
		minValue: helpers.withMessage('Minimum is 1', minValue(1)),
	},
	dimension: { minValue: helpers.withMessage('Minimum is 1', minValue(1)) },
};
const v$ = useVuelidate(rules, newRoom);

const addNewRoomHandler = async () => {
	const isFormCorrect = await v$.value.$validate();

	if (!isFormCorrect) return;
	else if (room.value === undefined) await addNewRoom(newRoom.value);
	else await updateRoomById(newRoom.value);
};

const addAmenityHandler = (amenity: Amenity) => {
	let amenityIndex = newRoom.value.offeredAmenities.findIndex(
		(a) => amenity['id'] == a['id']
	);

	if (amenityIndex === -1) {
		newRoom.value.offeredAmenities = [...newRoom.value.offeredAmenities, amenity];
	} else {
		newRoom.value.offeredAmenities = newRoom.value.offeredAmenities.filter(
			(existingAmenity) => existingAmenity['id'] !== amenity['id']
		);
	}
};

const clearForm = () => {
	newRoom.value = { ...defaultValues };
	room.value = undefined;
};
watch(
	() => room.value,
	() => {
		if (room.value !== undefined) {
			Object.keys(newRoom.value).forEach((key) => {
				newRoom.value[key] = room.value?.[key];
			});
		}
	}
);
</script>
<template>
	<div class="relative flex-1 p-4">
		<div class="flex flex-col gap-4 max-w-2xl mx-auto">
			<div class="flex flex-col gap-2">
				<UtilsBaseInput v-model="newRoom.name" label="Name" type="text" />
				<small
					v-for="error in v$.name.$errors"
					class="text-orange-600 font-bold"
					>{{ error.$message }}</small
				>
			</div>
			<div class="flex flex-wrap gap-2">
				<label
					class="basis-full text-teal-600 transition-all duration-200 ease-in-out"
					>Slug</label
				>
				<input
					type="text"
					class="basis-4/5 px-2 py-1 border border-teal-600 rounded outline-none disabled:bg-gray-100 focus:border-teal-400 transition-colors duration-200"
					v-model="newRoom.slug"
					:disabled="!newRoom.name"
				/>
				<button
					class="flex-1 text-xs px-2 py-1 border border-teal-600 rounded outline-none disabled:bg-gray-100"
					@click="newRoom.slug = slugifyName(newRoom.name)"
					:disabled="!newRoom.name"
				>
					Generate slug
				</button>
				<div class="basis-full">
					<small
						v-for="error in v$.slug.$errors"
						class="text-orange-600 font-bold"
						>{{ error.$message }}</small
					>
				</div>
			</div>
			<div class="basis-full flex gap-4">
				<div class="basis-1/5 flex flex-col gap-2">
					<label class="text-teal-600 transition-all duration-200 ease-in-out"
						>Type</label
					>
					<div class="relative">
						<div
							:class="[
								isTypeDropdownActive ? 'rounded-t' : 'rounded',
								'w-full px-2 py-1 border border-teal-600 cursor-pointer',
							]"
							@click="isTypeDropdownActive = !isTypeDropdownActive"
						>
							{{ newRoom.type }}
						</div>
						<ul
							v-if="isTypeDropdownActive"
							@click="isTypeDropdownActive = false"
							class="absolute left-0 top-full flex flex-col gap-2 w-full px-2 py-1 bg-white border border-t-0 border-teal-600 rounded-b"
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
				<div class="basis-1/5 flex flex-col gap-2">
					<label class="text-teal-600 transition-all duration-200 ease-in-out"
						>Beds</label
					>
					<input
						type="number"
						min="1"
						class="w-full px-2 py-1 border border-teal-600 rounded outline-none focus:border-teal-400 transition-colors duration-200"
						v-model="newRoom.numberOfBeds"
					/>
					<small
						v-for="error in v$.numberOfBeds.$errors"
						class="text-orange-600 font-bold"
						>{{ error.$message }}</small
					>
				</div>
				<div class="basis-1/5 flex flex-col gap-2">
					<label class="text-teal-600 transition-all duration-200 ease-in-out"
						>Price</label
					>
					<input
						type="number"
						min="1"
						class="w-full px-2 py-1 border border-teal-600 rounded outline-none focus:border-teal-400 transition-colors duration-200"
						v-model="newRoom.price"
					/>
					<small
						v-for="error in v$.price.$errors"
						class="text-orange-600 font-bold"
						>{{ error.$message }}</small
					>
				</div>
				<div class="basis-1/5 flex flex-col gap-2">
					<label class="text-teal-600 transition-all duration-200 ease-in-out"
						>Dimension</label
					>
					<input
						type="number"
						min="1"
						class="w-full px-2 py-1 border border-teal-600 rounded outline-none focus:border-teal-400 transition-colors duration-200"
						v-model="newRoom.dimension"
					/>
					<small
						v-for="error in v$.dimension.$errors"
						class="text-orange-600 font-bold"
						>{{ error.$message }}</small
					>
				</div>
				<div class="basis-1/5 flex flex-col items-start gap-2">
					<label class="text-teal-600 transition-all duration-200 ease-in-out"
						>Featured</label
					>
					<input
						type="checkbox"
						class="w-full h-full border rounded"
						v-model="newRoom.isFeatured"
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
				<small
					v-for="error in v$.description.$errors"
					class="text-orange-600 font-bold"
					>{{ error.$message }}</small
				>
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
				<div class="flex flex-wrap gap-4">
					<p
						class="basis-[calc((100%-4rem)/5)] cursor-pointer p-1 rounded-lg text-center text-xs"
						:class="newRoom.offeredAmenities.some((amenityObj: Amenity) => amenityObj.name === amenity.name) ? 'bg-teal-600 text-white' : 'border border-teal-600'"
						v-for="amenity in AMENITIES"
						:key="amenity.id"
						@click="addAmenityHandler(amenity)"
					>
						{{ amenity.name }}
					</p>
				</div>
			</div>
			<div class="flex justify-between">
				<button
					class="w-fit px-2 py-1 border border-teal-600 rounded outline-none text-teal-600 hover:border-teal-400 hover:text-teal-400"
					@click="clearForm"
				>
					Clear form
				</button>
				<button
					class="w-fit px-2 py-1 border bg-teal-600 rounded outline-none text-white hover:bg-teal-400"
					@click="addNewRoomHandler"
				>
					{{ room === undefined ? 'Add new room' : 'Update room' }}
				</button>
			</div>
		</div>
	</div>
</template>
<style scoped>
label:has(+ input:focus),
label:has(+ textarea:focus) {
	@apply text-teal-400 font-bold;
}
</style>
