<template>
	<Page :padded="true">
		<Hero></Hero>
		<div class="categories">
			<Category title="Villages" route="/villages" :onHome="true">
				<ItemBox
					v-for="village in villages.slice(0, 3)"
					:key="village.id"
					:topText="village.postCode + ' - ' + getDepartement(village.postCode)"
					:mainText="village.name"
					:imgSrc="village.imageUrl"
				></ItemBox>
			</Category>
			<Category title="Evenements" route="/shows" :onHome="true">
				<ItemBox
					v-for="show in shows.slice(0, 3)"
					:key="show.id"
					:topText="dateStringFromString(show.releaseDate)"
					:mainText="villageFromShow(show).name"
					:imgSrc="villageFromShow(show).imageUrl"
				></ItemBox>
			</Category>
		</div>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	import Hero from "@/components/Hero.vue";
	import Category from "@/components/Category.vue";
	import ItemBox from "@/components/ItemBox.vue";
	import deps from "@/deps.js";
	export default {
		name: "Home",
		props: ["villages", "shows"],
		components: {Page, Hero, Category, ItemBox},
		methods: {
			villageFromShow(show) {
				return this.villages.find((v) => v.id == show.village);
			},
			dateStringFromString(string) {
				let date = new Date(string);
				return date.toLocaleDateString("fr");
			},
			getDepartement(cp) {
				return deps.find((d) => d.code == cp.substring(0, 2)).name;
			},
		},
	};
</script>

<style scoped>
	.categories {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
		gap: 30px;
	}
</style>
