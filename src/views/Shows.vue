<template>
	<Page :padded="true">
		<transition name="fade" mode="out-in">
			<Category title="Evenements" route="/evenements/add" v-if="loaded">
				<ItemBox
					@click="$router.push('/evenements/' + show.id)"
					v-for="show in getSortedShows(shows)"
					:key="show.id"
					:topText="'Le ' + dateStringFromString(show.releaseDate) + ' à'"
					:mainText="villageFromShow(show).name"
					:imgSrc="getImg(villageFromShow(show))"
				>
				</ItemBox>
			</Category>
		</transition>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	import Category from "@/components/Category.vue";
	import ItemBox from "@/components/ItemBox.vue";
	export default {
		name: "Shows",
		props: ["loaded", "shows", "villages"],
		components: {Page, Category, ItemBox},
		methods: {
			villageFromShow(show) {
				return this.villages.find((v) => v.id == show.village);
			},
			getImg(village) {
				console.log("village :>> ", village);
				return village.imageUrl.trim() != ""
					? village.imageUrl
					: "https://i.pinimg.com/564x/c7/61/c1/c761c165badcef30edcf1d5b969099bc.jpg";
			},
			dateStringFromString(string) {
				let date = new Date(string);
				return date.toLocaleDateString("fr");
			},
			getDateFromString(string) {
				const dateParts = string.split("/");
				return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
			},
			getSortedShows(shows) {
				return shows.sort((a, b) => {
					return (
						this.getDateFromString(a.releaseDate).valueOf() <
						this.getDateFromString(b.releaseDate).valueOf()
					);
				});
			},
		},
	};
</script>

<style scoped></style>
