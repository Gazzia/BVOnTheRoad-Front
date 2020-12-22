<template>
	<Page :padded="true">
		<Category title="Villages" route="/villages/add" v-if="loaded">
			<ItemBox
				v-for="village in villages"
				:key="village.id"
				:topText="village.postCode + ' - ' + getDepartement(village.postCode)"
				:mainText="village.name"
				:imgSrc="village.imageUrl"
			></ItemBox>
		</Category>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	import Category from "@/components/Category.vue";
	import ItemBox from "@/components/ItemBox.vue";
	import deps from "@/deps.js";
	export default {
		name: "Villages",
		props: ["villages", "loaded"],
		components: {Page, Category, ItemBox},
		methods: {
			getDepartement(cp) {
				return deps.find((d) => d.code == cp.substring(0, 2)).name;
			},
		},
		data() {
			return {};
		},
	};
</script>

<style scoped></style>
