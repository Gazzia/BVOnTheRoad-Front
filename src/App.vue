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
	<router-view />
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
</style>

<script>
	import Header from "@/components/header/Header.vue";
	import Nav from "@/components/header/Nav.vue";
	import NavItem from "@/components/header/NavItem.vue";
	export default {
		name: "Home",
		components: {Header, Nav, NavItem},
		mounted() {
			console.log(this.$route.path);
		},
	};
</script>
