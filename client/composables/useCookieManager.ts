import { jwtDecode } from 'jwt-decode';
import { useAuthStore } from '@/stores/auth';
export default function useCookieManager() {
	const { setUser } = useAuthStore();
	const setAuthCookie = async (ac: string) => {
		let accessToken = null;

		try {
			accessToken = await jwtDecode(ac);
			if (accessToken) {
				let accessTokenCookie = useCookie('ac', {
					expires: new Date(new Date(accessToken.exp * 1000)),
					sameSite: 'lax',
					httpOnly: true,
				});
				accessTokenCookie.value = ac;
				setUser({ id: accessToken.id, isAdmin: accessToken.isAdmin });
			}
		} catch (error) {
			console.log('No access token');
		}
	};

	return {
		setAuthCookie,
	};
}
