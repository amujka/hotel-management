<script setup lang="ts"></script>
<template>
	<header class="bg-teal-600">
		<div class="container mx-auto flex justify-between py-3">
			<h1 class="text-2xl text-white font-bold">Hotelzz</h1>
			<ul class="flex gap-3 text-white font-bold">
				<li>
					<NuxtLink activeClass="text-yellow-500" to="/rooms">Rooms</NuxtLink>
				</li>
				<li>
					<NuxtLink activeClass="text-yellow-500" to="/booking"
						>Booking</NuxtLink
					>
				</li>
				<li>
					<NuxtLink activeClass="text-yellow-500" to="/users">Users</NuxtLink>
				</li>
			</ul>
		</div>
	</header>
</template>
