<template>
	<Page :padded="true" :centered="true">
		<div class="title">Ajout d'un évènement</div>
		<div class="form">
			<SelectInput v-model="show.village.id" :options="villages" :required="true"></SelectInput>
			<TextInput
				v-model="show.releaseDate"
				placeholder="Date (JJ/MM/YYYY)"
				:required="true"
			></TextInput>
			<Button :disabled="!allFieldsAreFilled()" @click="validateAndPostShow()">{{
				getButtonString()
			}}</Button>
		</div>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	import TextInput from "@/components/form/TextInput.vue";
	import Button from "@/components/form/Button.vue";
	import SelectInput from "@/components/form/SelectInput.vue";
	export default {
		name: "ShowsForm",
		props: ["shows", "villages"],
		components: {Page, TextInput, SelectInput, Button},
		emits: ["fetchShows"],
		methods: {
			getButtonString() {
				if (this.allFieldsAreFilled()) {
					return "Ajouter";
				} else {
					if (this.dateWorks(this.show.releaseDate)) {
						if (!this.dateIsInTheFuture(this.show.releaseDate)) {
							return "La date est déjà passée !";
						} else {
							return "Sélectionnez un village !";
						}
					} else {
						return "Remplissez tous les champs !";
					}
				}
			},
			dateIsInTheFuture(date) {
				const now = new Date();
				const dateParts = date.split("/");
				const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
				now.setHours(0, 0, 0, 0);
				dateObject.setHours(0, 0, 0, 0);
				return now.valueOf() < dateObject.valueOf();
			},
			dateWorks(date) {
				let dateCheck = RegExp(
					/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{4})$/
				);
				return dateCheck.test(date);
			},
			allFieldsAreFilled() {
				let villageFilled = this.show.village.id;
				let dateFilled =
					this.dateWorks(this.show.releaseDate) &&
					this.dateIsInTheFuture(this.show.releaseDate);
				console.log(villageFilled && dateFilled);
				return villageFilled && dateFilled;
			},
			validateAndPostShow() {
				const DateObject = new Date(this.show.releaseDate);

				const travel = () => {
					this.$emit("fetchShows");
					this.$router.push("/shows");
				};

				if (this.allFieldsAreFilled()) {
					fetch("https://breizhvideo.herokuapp.com/representations", {
						method: "POST",
						mode: "cors",
						keepalive: true,
						headers: {
							"Content-type": "application/json; charset=UTF-8",
						},
						body: JSON.stringify({
							releaseDate: DateObject,
							village: {id: this.show.village.id},
						}),
					})
						.then((response) => {
							if (response.ok) {
								return response.json();
							}
							return Promise.reject(response);
						})
						.then(function(data) {
							console.log(data);
							travel();
						})
						.catch(function(error) {
							console.warn("Something went wrong.", error);
						});
				}
			},
		},
		data() {
			return {
				show: {
					releaseDate: null,
					village: {
						id: null,
					},
				},
			};
		},
	};
</script>

<style scoped>
	.title {
		font-family: "Satisfy", sans-serif;
		font-size: 45px;
	}
	.form {
		margin-top: 40px;
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
</style>
