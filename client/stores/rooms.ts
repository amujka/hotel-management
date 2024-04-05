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

		if (status.value == 'success') {
			setRooms(data.value.rooms as Room[]);
		}

		return { pending, refresh, error };
	};

	const addNewRoom = async (newRoom: any) => {
		try {
			const { data, status } = await useFetch('http://localhost:8080/rooms', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newRoom),
			});

			await fetchRooms();
		} catch (error) {
			console.log('errorerror', error);
		}
	};

	const deleteRoomById = async (id: string) => {
		try {
			const res = await useFetch('http://localhost:8080/rooms', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ _id: id }),
			});
			console.log(res);

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
