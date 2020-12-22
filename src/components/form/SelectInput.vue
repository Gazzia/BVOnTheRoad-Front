<template>
	<select name="select" @change="$emit('update:modelValue', $event.target.value)">
		<option :value="null">{{ placeholder }}</option>
		<option v-for="option in options" :key="option.id" :value="option.id">{{
			option.name
		}}</option>
	</select>
</template>

<script>
	export default {
		name: "SelectInput",
		props: ["modelValue", "options", "placeholder"],
		emits: ["update:modelValue"],
	};
</script>

<style scoped>
	select {
		border: none;
		padding: 10px 20px;
		font-size: 14px;
		border-radius: 6px;
		font-family: "Poppins", sans-serif;
		color: #181d23;
		box-sizing: border-box;
	}
</style>
