<script setup lang="ts"></script>
<template>
	<header class="bg-teal-600">
		<div class="container mx-auto flex justify-between p-4">
			<NuxtLink to="/" class="text-2xl text-white font-bold">Hotelzz</NuxtLink>
			<ul class="flex gap-3 text-white font-bold">
				<li>
					<NuxtLink activeClass="underline" to="/">Home</NuxtLink>
				</li>
				<li>
					<NuxtLink activeClass="underline" to="/rooms">Rooms</NuxtLink>
				</li>
			</ul>
		</div>
	</header>
</template>
