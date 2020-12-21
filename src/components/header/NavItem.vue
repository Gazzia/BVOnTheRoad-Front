<template>
	<router-link class="navItem" :class="{selected}" :to="route">
		{{ label }}
		<inline-svg
			:src="getImgUrl(icon)"
			transformSource="transformSvg"
			@loaded="svgLoaded($event)"
			@unloaded="svgUnloaded()"
			@error="svgLoadError($event)"
			height="15"
			fill="white"
			:class="{selected}"
		></inline-svg>
	</router-link>
</template>

<script>
	export default {
		name: "NavItem",
		props: ["label", "route", "icon", "selected"],
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
	}
	.navItem.selected svg {
		fill: #42f056;
	}
</style>
