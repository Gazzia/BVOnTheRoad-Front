<template>
	<div class="heroWrapper">
		<div class="hero">
			<div class="left">
				<div class="title">OnTheRoad</div>
				<div class="subtitle">Le cinéma chez vous</div>
			</div>
			<img src="../assets/hero.svg" alt="" />
		</div>
	</div>
</template>

<script>
	export default {
		name: "Hero",
	};
</script>

<style scoped>
	.heroWrapper {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.hero {
		display: flex;
		height: max-content;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		max-width: 1100px;
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
		font-size: 90px;
	}
	.left .subtitle {
		font-weight: 300;
		margin-top: 7px;
		font-size: 28px;
		line-height: 109%;
	}
	img {
		max-height: 400px;
		max-width: 50vw;
		flex: 0 1 auto;
	}
</style>
