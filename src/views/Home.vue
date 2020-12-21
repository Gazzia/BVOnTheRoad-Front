<template>
	<Page :padded="true">
		<Hero></Hero>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	import Hero from "@/components/Hero.vue";
	export default {
		name: "Home",
		components: {Page, Hero},
	};
</script>
