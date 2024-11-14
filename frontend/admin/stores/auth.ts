import type { AuthTokens, User } from '~/types';

export const useAuthStore = defineStore('auth', () => {
	const user = ref<null | User>();
	const authTokens = ref<string | null>();

	const setUser = (value: User) => {
		user.value = value;
	};
	const setAuthTokens = (value: string) => {
		authTokens.value = value;
	};

	return {
		user,
		authTokens,
		setUser,
		setAuthTokens,
	};
});
