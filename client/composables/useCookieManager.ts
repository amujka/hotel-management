import { jwtDecode } from 'jwt-decode';
import { useAuthStore } from '@/stores/auth';
import type { AuthTokens } from '~/types';
export default function useCookieManager() {
	const { setUser, setAuthTokens } = useAuthStore();

	const getAuthCookie = () => {
		let accessToken = useCookie('ac');
		setAuthTokens(accessToken.value as string);
		return { accessToken: accessToken.value };
	};

	const setAuthCookie = async (ac: string) => {
		let accessToken = null;

		try {
			accessToken = await jwtDecode(ac);
			let accessTokenCookie = useCookie('ac', {
				expires: new Date(new Date(accessToken.exp * 1000)),
				sameSite: 'lax',
			});
			accessTokenCookie.value = ac;
			setUser({ id: accessToken.id, isAdmin: accessToken.isAdmin });
			return true;
		} catch (error) {
			return false;
		}
	};

	const refreshTokenOrSignout = async () => {
		let accessJWT = null;

		const { accessToken } = getAuthCookie();
		try {
			accessJWT = await jwtDecode(accessToken as string);
			setUser({ id: accessJWT.id, isAdmin: accessJWT.isAdmin });
			return true;
		} catch (error) {
			return false;
		}
	};

	return {
		setAuthCookie,
		getAuthCookie,
		refreshTokenOrSignout,
	};
}
