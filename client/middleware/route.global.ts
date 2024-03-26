import { useAuthStore } from '@/stores/auth';
export default defineNuxtRouteMiddleware(async (to, from) => {
	const { refreshTokenOrSignout } = useCookieManager();
	const { user } = storeToRefs(useAuthStore());

	const isUserLoggedIn = await refreshTokenOrSignout();

	if (isUserLoggedIn && user.value && to.path === '/login') {
		return navigateTo({ path: '/rooms' });
	}

	if (!isUserLoggedIn && to.path !== '/login') {
		return navigateTo({ path: '/login' });
	}
});
