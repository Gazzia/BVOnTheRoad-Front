<template>
	<Page :padded="true">
		<Category title="Villages" route="/villages/add">
			<ItemBox
				v-for="village in villages"
				:key="village.id"
				:mainText="village.name"
				:topText="village.postCode"
				:imgSrc="village.imageUrl"
			></ItemBox>
		</Category>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	import Category from "@/components/Category.vue";
	import ItemBox from "@/components/ItemBox.vue";
	export default {
		name: "Villages",
		props: ["villages"],
		components: {Page, Category, ItemBox},
		methods: {},
		data() {
			return {};
		},
	};
</script>

<style scoped></style>
