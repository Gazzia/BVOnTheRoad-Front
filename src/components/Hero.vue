<template>
	<div class="hero">
		<div class="left">
			<div class="title">OnTheRoad</div>
			<div class="subtitle">Le cinéma chez vous</div>
		</div>
		<img src="../assets/hero.svg" alt="" />
	</div>
</template>

<script>
	export default {
		name: "Hero",
	};
</script>

<style scoped>
	.hero {
		display: flex;
		height: max-content;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		flex: 0 0 auto;
	}
	.left {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 0 1 auto;
	}
	.left .title {
		font-family: "Satisfy", display;
		font-size: 80px;
	}
	.left .subtitle {
		font-weight: 300;
		font-size: 30px;
		line-height: 109%;
	}
	img {
		max-height: 400px;
		max-width: 50vw;
		flex: 0 1 auto;
	}
</style>
