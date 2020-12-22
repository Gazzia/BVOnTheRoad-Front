<template>
	<div class="rateBox" v-if="loaded">
		<div class="title">{{ movie.title }}</div>
		<div class="desc">{{ movie.description }}</div>
		<div class="click">Cliquez pour voter !</div>
	</div>
</template>

<script>
	export default {
		name: "MovierateBox",
		props: ["movie", "films", "loaded"],
	};
</script>

<style scoped>
	.rateBox {
		display: flex;
		flex: 0 0 auto;
		flex-direction: column;
		align-items: center;
		gap: 7px;
		width: 350px;
		padding: 20px;

		background: #111418;
		box-shadow: 0 1.7px 2.1px rgba(0, 0, 0, 0.02), 0 4.1px 5px rgba(0, 0, 0, 0.028),
			0 7.8px 9.4px rgba(0, 0, 0, 0.035), 0 13.8px 16.8px rgba(0, 0, 0, 0.042),
			0 25.9px 31.3px rgba(0, 0, 0, 0.05), 0 62px 75px rgba(0, 0, 0, 0.07);
		overflow: hidden;
		border-radius: 6px;

		cursor: pointer;
		letter-spacing: 0.4px;

		transition: 0.2s;
	}
	.rateBox:hover {
		/* background: #15191d; */
		box-shadow: 0 0.1px 0.4px rgba(0, 0, 0, 0.025), 0 0.3px 1px rgba(0, 0, 0, 0.036),
			0 0.6px 1.9px rgba(0, 0, 0, 0.045), 0 1.1px 3.4px rgba(0, 0, 0, 0.054),
			0 2.1px 6.3px rgba(0, 0, 0, 0.065), 0 5px 15px rgba(0, 0, 0, 0.09);
	}
	.rateBox:active {
		transform: scale(0.97);
		filter: brightness(1.1);
	}
	.title {
		font-weight: 600;
	}
	.desc {
		font-size: 12px;
	}
	.click {
		margin-top: 20px;
		text-transform: uppercase;
		font-weight: 600;
		font-size: 12px;
		opacity: 0.5;
	}
</style>
