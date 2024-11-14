<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		label?: string;
		modelValue: string | number;
	}>(),
	{
		label: '',
		modelValue: '',
	}
);
const emit = defineEmits(['update:modelValue']);
</script>

<template>
	<label class="text-teal-600 transition-all duration-200 ease-in-out">
		{{ label }}
	</label>
	<input
		class="px-2 py-1 border border-teal-600 rounded outline-none focus:border-teal-400 transition-colors duration-200"
		:value="props.modelValue"
		@input="emit('update:modelValue', $event.target.value)"
		v-bind="$attrs"
	/>
</template>
