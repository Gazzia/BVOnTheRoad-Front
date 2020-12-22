<template>
	<Page v-if="loaded" :padded="true">
		<div class="title">Evenement</div>
		<div class="infos">
			<div class="date">
				du {{ dateStringFromString(show.releaseDate) }} à {{ village.name }}
			</div>

			<div class="cat">
				<div class="cattitle">Liste des films proposés :</div>
				<div class="movies">
					<MovieRateBox
						v-for="movie in getMovieList"
						:key="movie.id"
						:movie="movie"
						:films="films"
						:loaded="loaded"
					>
					</MovieRateBox>
				</div>
			</div>
		</div>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	import MovieRateBox from "@/components/MovieRateBox.vue";
	export default {
		name: "",
		props: ["id", "shows", "villages", "loaded", "preferences", "films"],
		components: {Page, MovieRateBox},
		methods: {
			dateStringFromString(string) {
				//get string as JJ/MM/YYYY from UTC date string
				let date = new Date(string);
				return date.toLocaleDateString("fr");
			},

			getMovieById(id) {
				return this.films.find((f) => f.id == id);
			},
		},
		computed: {
			show() {
				return this.loaded ? this.shows.find((s) => s.id == this.id) : null;
			},
			village() {
				return this.loaded ? this.villages.find((v) => v.id == this.show.village) : null;
			},

			getMovieList() {
				if (this.loaded) {
					const list = [];
					this.preferences.forEach((pr) => {
						if (pr.representation == this.id) {
							console.log("pr.film :>> ", pr.film);
							list.push(this.getMovieById(pr.film));
						}
					});
					console.log("list :>> ", list);
					return list;
				} else return null;
			},
		},
	};
</script>

<style scoped>
	.title {
		font-weight: 600;
		font-size: 38px;
		letter-spacing: 0.5px;
	}

	.infos {
		margin-top: 5px;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}
	.cattitle {
		font-weight: 500;
		font-size: 20px;
		letter-spacing: 0.5px;
		margin-bottom: 10px;
	}
	.movies {
		display: grid;
		grid-template-columns: repeat(auto-fill, 350px);
		gap: 20px;
	}
</style>
