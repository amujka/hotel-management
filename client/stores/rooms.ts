import type { Room } from '~/types';

export const useRoomsStore = defineStore('rooms', () => {
	let rooms = ref<Room[] | []>([]);
	let setRooms = (roomsPayload: Room[]) => {
		rooms.value = roomsPayload;
	};

	const fetchRooms = async () => {
		const { data, pending, refresh, error, status } = await useFetch<any>(
			'http://localhost:8080/rooms',
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		if (status.value === 'success') {
			setRooms(data.value.rooms as Room[]);
		}

		return { pending, refresh, error };
	};

	const addNewRoom = async (newRoom: any) => {
		try {
			const { status, error } = await useFetch('http://localhost:8080/rooms', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newRoom),
			});
			if (status.value === 'success') {
				await fetchRooms();
			} else {
				throw error.value?.data;
			}
		} catch (err) {
			return err;
		}
	};

	const deleteRoomById = async (id: string) => {
		try {
			await useFetch('http://localhost:8080/rooms', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ _id: id }),
			});

			await fetchRooms();
		} catch (error) {
			console.log('errorerror', error);
		}
	};

	return {
		rooms,
		fetchRooms,
		addNewRoom,
		deleteRoomById,
	};
});
