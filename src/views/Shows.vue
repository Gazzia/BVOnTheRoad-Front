<template>
	<Page :padded="true">
		<Category title="Evenements" route="/evenements/add" v-if="loaded">
			<ItemBox
				v-for="show in shows"
				:key="show.id"
				:topText="'Le ' + dateStringFromString(show.releaseDate) + ' à'"
				:mainText="villageFromShow(show).name"
				:imgSrc="villageFromShow(show).imageUrl"
			></ItemBox>
		</Category>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	import Category from "@/components/Category.vue";
	import ItemBox from "@/components/ItemBox.vue";
	export default {
		name: "Shows",
		props: ["shows", "villages", "loaded"],
		components: {Page, Category, ItemBox},
		methods: {
			villageFromShow(show) {
				return this.villages.find((v) => v.id == show.village);
			},
			dateStringFromString(string) {
				let date = new Date(string);
				return date.toLocaleDateString("fr");
			},
		},
	};
</script>

<style scoped></style>
