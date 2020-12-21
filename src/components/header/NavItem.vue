<template>
	<router-link class="navItem" :class="{selected}" :to="route">
		<InlineSvg :src="getImgUrl(icon)" :class="{selected}"></InlineSvg>
		{{ label }}
	</router-link>
</template>

<script>
	import InlineSvg from "vue-inline-svg";
	export default {
		name: "NavItem",
		props: ["label", "route", "icon", "selected"],
		components: {InlineSvg},
		methods: {
			getImgUrl(pet) {
				var images = require.context("@/assets/icons/", false, /\.svg$/);
				return images("./" + pet + ".svg");
			},
		},
	};
</script>

<style scoped>
	.navItem {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		gap: 7px;
		transition: 0.2s;
	}
	.navItem,
	.navItem:visited,
	.navItem:active {
		color: inherit;
		text-decoration: none;
	}
	.navItem.selected {
		color: #42f056;
	}

	svg {
		height: 15px;
		fill: white;
		transition: 0.2s;
	}
	.navItem.selected svg {
		fill: #42f056;
	}
</style>
