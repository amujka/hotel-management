import type { User } from '~/types';

export const useAuthStore = defineStore('auth', () => {
	const user = ref<null | User>();

	const setUser = (value: User) => {
		user.value = value;
	};

	return {
		user,
		setUser,
	};
});
