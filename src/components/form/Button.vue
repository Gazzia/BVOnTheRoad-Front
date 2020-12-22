<template>
	<div class="button" :class="{disabled}"><slot></slot></div>
</template>

<script>
	export default {
		name: "Button",
		props: ["disabled"],
	};
</script>

<style scoped>
	.button {
		margin-top: 6px;
		padding: 10px 15px;
		box-sizing: border-box;
		border-radius: 6px;
		color: #42f056;
		border: 1px solid currentColor;
		user-select: none;
		cursor: pointer;
		transition: 0.2s;

		font-weight: 600;
		font-size: 12px;
		letter-spacing: 0.4px;
		display: flex;
		justify-content: center;
	}
	.button:active {
		transform: scale(0.95);
	}
	.button.disabled {
		color: grey;
	}
	.button.disabled:active {
		transform: scale(1);
	}
</style>
