<template>
	<Page :padded="true">
		<Hero></Hero>
		<div class="categories">
			<Category title="Villages" route="/villages" :onHome="true">
				<ItemBox
					v-for="village in villages.slice(0, 3)"
					:key="village.id"
					:mainText="village.name"
					:topText="village.postCode"
					:imgSrc="village.imageUrl"
				></ItemBox>
			</Category>
			<Category title="Evenements" route="/shows" :onHome="true">
				<ItemBox
					v-for="show in shows.slice(0, 3)"
					:key="show.id"
					:mainText="village.name"
					:topText="village.postCode"
					:imgSrc="village.imageUrl"
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
	export default {
		name: "Home",
		props: ["villages", "shows"],
		components: {Page, Hero, Category, ItemBox},
		methods: {
			villageFromShow(show) {},
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
