<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		icon?: string;
	}>(),
	{
		icon: '',
	}
);

const iconPath = computed(() => `/images/${props.icon}.svg`);
</script>

<template>
	<img :src="iconPath" :alt="icon" class="w-5 h-5" />
</template>
