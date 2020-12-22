<template>
	<div class="page">
		<main :class="padded ? 'padded' : ''">
			<slot></slot>
		</main>
	</div>
</template>

<script>
	export default {
		name: "Page",
		props: ["padded"],
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
</style>
