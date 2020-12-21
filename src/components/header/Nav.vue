<template>
	<nav>
		<slot></slot>
	</nav>
</template>

<script>
	export default {
		name: "Nav",
	};
</script>

<style scoped>
	nav {
		display: flex;
		gap: 40px;
	}
</style>
