<template>
	<Page :padded="true">
		<transition name="fade" mode="out-in">
			<Category title="Films" v-if="loaded">
				<ItemBox
					v-for="film in films"
					:key="film.id"
					:mainText="film.title"
					:bottomText="film.description"
				></ItemBox>
			</Category>
		</transition>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	import Category from "@/components/Category.vue";
	import ItemBox from "@/components/ItemBox.vue";
	export default {
		name: "Films",
		props: ["loaded", "films"],
		components: {Page, Category, ItemBox},
	};
</script>

<style scoped></style>
