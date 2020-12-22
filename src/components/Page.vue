<template>
	<div class="page">
		<main :class="{padded, centered}">
			<slot></slot>
		</main>
	</div>
</template>

<script>
	export default {
		name: "Page",
		props: ["padded", "centered"],
		components: {},
	};
</script>

<style scoped>
	.page {
		display: flex;
		flex-direction: column;
		height: 100%;
		flex-grow: 1;
		flex-direction: column;
	}
	.page main {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
	}
	.page main.padded {
		padding: 30px;
	}
	.page main.centered {
		align-items: center;
	}
</style>
