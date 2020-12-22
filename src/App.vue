<template>
	<Header>
		<Nav>
			<NavItem
				label="Accueil"
				icon="home"
				route="/"
				:selected="$route.name == 'Accueil'"
			></NavItem>
			<NavItem
				label="Villages"
				icon="villages"
				route="/villages"
				:selected="$route.name == 'Villages'"
			></NavItem>
			<NavItem
				label="Evenements"
				icon="events"
				route="/evenements"
				:selected="$route.name == 'Evenements'"
			></NavItem>
			<NavItem
				label="Films"
				icon="movies"
				route="/films"
				:selected="$route.name == 'Films'"
			></NavItem>
		</Nav>
	</Header>
	<router-view
		:villages="villages"
		:shows="shows"
		:loaded="toLoad <= 0"
		v-slot="slotProps"
		@fetchVillages="fetchVillages"
		@fetchShows="fetchShows"
	>
		<transition name="fade" mode="out-in">
			<component :is="slotProps.Component"></component>
		</transition>
	</router-view>
</template>

<style>
	* {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		width: 100vw;
		min-height: 100vh;
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		background-color: #181d23;
		overflow-x: hidden;
	}
	#app {
		font-family: "Poppins", sans-serif;
		color: white;
		height: 100%;
		width: 100%;
		display: flex;
		flex-grow: 1;
		flex-direction: column;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
		transform: scale(0.97);
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: all 0.2s ease;
	}
	.fade-enter-to,
	.fade-leave-from {
		opacity: 1;
		transform: scale(1);
	}
</style>

<script>
	import Header from "@/components/header/Header.vue";
	import Nav from "@/components/header/Nav.vue";
	import NavItem from "@/components/header/NavItem.vue";
	export default {
		name: "Home",
		components: {Header, Nav, NavItem},
		methods: {
			fetchVillages() {
				fetch("https://breizhvideo.herokuapp.com/villages")
					.then((response) => response.json())
					.then((data) => {
						this.villages = data;
						this.toLoad -= 1;
					});
			},
			fetchShows() {
				fetch("https://breizhvideo.herokuapp.com/representations")
					.then((response) => response.json())
					.then((data) => {
						this.shows = data;
						this.toLoad -= 1;
					});
			},
		},
		data() {
			return {
				villages: [{}],
				shows: [{}],
				toLoad: 2,
			};
		},
		created() {
			this.fetchVillages();
			this.fetchShows();
		},
	};
</script>
