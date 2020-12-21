<template>
	<header>
		<div class="logo">
			<div class="name1">OnTheRoad</div>
			<div class="name2">by BreizhVideo</div>
		</div>
		<slot></slot>
	</header>
</template>

<script>
	export default {
		name: "Header",
	};
</script>

<style scoped>
	header {
		width: 100%;
		height: 50px;

		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 10px 30px;
		background-color: #212831;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.logo .name1 {
		font-family: "Satisfy";
		font-size: 28px;
	}
	.logo .name2 {
		font-weight: 400;
		font-size: 12px;
	}
</style>
