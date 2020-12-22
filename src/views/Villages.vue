<template>
	<Page :padded="true">
		<transition name="fade" mode="out-in">
			<Category title="Villages" route="/villages/add" v-if="loaded">
				<ItemBox
					v-for="village in villages"
					:noClick="true"
					:key="village.id"
					:topText="village.postCode + ' - ' + getDepartement(village.postCode)"
					:mainText="village.name"
					:imgSrc="village.imageUrl"
				></ItemBox>
			</Category>
		</transition>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	import Category from "@/components/Category.vue";
	import ItemBox from "@/components/ItemBox.vue";
	import deps from "@/deps.js";
	export default {
		name: "Villages",
		props: ["loaded", "villages"],
		components: {Page, Category, ItemBox},
		methods: {
			getDepartement(cp) {
				//retourne le département correspondant aux 2 premiers chiffres du code postal
				return deps.find((d) => d.code == cp.substring(0, 2)).name;
			},
		},
	};
</script>

<style scoped></style>
