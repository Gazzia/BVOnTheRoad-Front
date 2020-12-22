<template>
	<input
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
		:placeholder="placeholder"
		:class="{required}"
	/>
</template>

<script>
	export default {
		name: "TextInput",
		props: ["modelValue", "placeholder", "required"],
		emits: ["update:modelValue"],
	};
</script>

<style scoped>
	input {
		border: none;
		padding: 10px 20px;
		font-size: 14px;
		border-radius: 6px;
		font-family: "Poppins", sans-serif;
		color: #181d23;
		box-sizing: border-box;
	}
	input.required {
		border: 3px solid #42f056;
	}
</style>
