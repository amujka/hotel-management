<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
const { user } = storeToRefs(useAuthStore());
const { setAuthCookie } = useCookieManager();

const email = ref('');
const password = ref('');
const error = ref({
	email: '',
	password: '',
});
const loginHandler = async () => {
	const loginData = await useFetch('http://localhost:8080/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email: email.value, password: password.value }),
	});
	try {
		if (loginData.status.value === 'success') {
			const { token } = loginData.data.value as { token: string };
			const userIsAdmin = await setAuthCookie(token);
			if (userIsAdmin) navigateTo({ path: '/rooms' });
		} else {
			throw loginData.error.value?.data?.errors;
		}
	} catch (err: any) {
		error.value.email = err?.email;
		error.value.password = err?.password;
	}
};
</script>
<template>
	<div class="flex items-center justify-center h-screen bg-blue-500">
		<div class="w-full max-w-[450px] p-4 bg-blue-900 rounded">
			<div class="flex flex-col gap-2">
				<label class="text-white">email</label>
				<input class="p-1 rounded" type="text" v-model="email" />
				<small v-if="error?.email" class="text-red-500 font-bold">{{
					error?.email
				}}</small>
			</div>
			<div class="flex flex-col gap-2 mt-3">
				<label class="text-white">password</label>
				<input class="p-1 rounded" type="text" v-model="password" />
				<small v-if="error?.password" class="text-red-500 font-bold">{{
					error?.password
				}}</small>
			</div>
			<button
				class="w-fit px-2 py-1 rounded mt-3 bg-blue-500 text-white"
				@click="loginHandler"
			>
				Login
			</button>
		</div>
	</div>
</template>
