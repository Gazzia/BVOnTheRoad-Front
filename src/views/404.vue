<template>
	<Page>
		<div class="cont">
			<div class="title">Erreur 404 !</div>
			<div class="sub">Cette page n'existe pas encore !</div>
		</div>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	export default {
		name: "",
		props: [],
		components: {Page},
	};
</script>

<style scoped>
	.cont {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}
	.title {
		font-family: "Satisfy", sans-serif;
		font-size: 50px;
	}
	.sub {
		font-size: 16px;
	}
</style>
