<template>
	<Page :padded="true" :centered="true">
		<div class="title">Ajout d'un village</div>
		<div class="form">
			<TextInput
				v-model="village.name"
				placeholder="Nom du village"
				:required="true"
			></TextInput>
			<TextInput
				v-model="village.postCode"
				placeholder="Code postal"
				:required="true"
			></TextInput>
			<TextInput
				v-model="village.imageUrl"
				placeholder="URL d'une photo (optionnel)"
			></TextInput>
			<Button :disabled="!allFieldsAreFilled()" @click="validateAndPostVillage()">{{
				allFieldsAreFilled() ? "Ajouter" : "Remplissez les champs obligatoires"
			}}</Button>
		</div>
	</Page>
</template>

<script>
	import Page from "@/components/Page.vue";
	import TextInput from "@/components/form/TextInput.vue";
	import Button from "@/components/form/Button.vue";

	export default {
		name: "VillageForm",
		props: ["villages"],
		components: {Page, TextInput, Button},
		emits: ["fetchVillages"],
		methods: {
			allFieldsAreFilled() {
				//check si tous les champs nécessaires sont remplis
				let nameFilled = this.village.name.trim() != "";
				let postCodeFilled = this.village.postCode.trim() != "";
				return nameFilled && postCodeFilled;
			},
			validateAndPostVillage() {
				const travel = () => {
					//une fois l'envoi fait, ceci dispatche un évènement vers App.vue pour refetch les Villages et retourner à la liste
					this.$emit("fetchVillages");
					this.$router.push("/villages");
				};

				if (this.allFieldsAreFilled()) {
					fetch("https://breizhvideo.herokuapp.com/villages", {
						method: "POST",
						mode: "cors",
						keepalive: true,
						headers: {
							"Content-type": "application/json; charset=UTF-8",
						},
						body: JSON.stringify(this.village),
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
				village: {
					name: "",
					postCode: "",
					imageUrl: "",
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
