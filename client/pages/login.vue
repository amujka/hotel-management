<script setup lang="ts">
const email = ref('');
const password = ref('');

const submitForm = async () => {
	const { data: responseData } = await useFetch('http://localhost:8080/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email: email.value, password: password.value }),
	});

	console.log(responseData.value);
};
</script>
<template>
	<div class="flex items-center justify-center h-screen bg-blue-500">
		<div class="w-full max-w-[450px] p-4 bg-blue-900 rounded">
			<div class="flex flex-col gap-2">
				<label class="text-white">email</label>
				<input class="p-1 rounded" type="text" v-model="email" />
			</div>
			<div class="flex flex-col gap-2 mt-3">
				<label class="text-white">password</label>
				<input class="p-1 rounded" type="text" v-model="password" />
			</div>
			<button
				class="w-fit px-2 py-1 rounded mt-3 bg-blue-500 text-white"
				@click="submitForm"
			>
				Login
			</button>
		</div>
	</div>
</template>
