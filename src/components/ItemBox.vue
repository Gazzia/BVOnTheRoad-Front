<template>
	<div class="itemBox">
		<div class="imageWrapper">
			<img :src="imgSrc" alt="" />
		</div>
		<div class="text">
			<div v-if="topText">{{ topText }}</div>
			<div v-if="mainText" class="big">{{ mainText }}</div>
			<div v-if="bottomText" class="highlight">{{ bottomText }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		props: ["imgSrc", "topText", "mainText", "bottomText"],
		components: {},
		methods: {},
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.itemBox {
		display: flex;
		flex-direction: column;
		background: #111418;
		box-shadow: 0 1.7px 2.1px rgba(0, 0, 0, 0.02), 0 4.1px 5px rgba(0, 0, 0, 0.028),
			0 7.8px 9.4px rgba(0, 0, 0, 0.035), 0 13.8px 16.8px rgba(0, 0, 0, 0.042),
			0 25.9px 31.3px rgba(0, 0, 0, 0.05), 0 62px 75px rgba(0, 0, 0, 0.07);
		border-radius: 6px;
		overflow: hidden;
		cursor: pointer;
		transition: 0.2s;
		flex: 0 0 auto;
		width: 350px;
	}
	.itemBox:hover {
		/* background: #15191d; */
		box-shadow: 0 0.1px 0.4px rgba(0, 0, 0, 0.025), 0 0.3px 1px rgba(0, 0, 0, 0.036),
			0 0.6px 1.9px rgba(0, 0, 0, 0.045), 0 1.1px 3.4px rgba(0, 0, 0, 0.054),
			0 2.1px 6.3px rgba(0, 0, 0, 0.065), 0 5px 15px rgba(0, 0, 0, 0.09);
	}
	.itemBox:active {
		transform: scale(0.97);
		filter: brightness(1.1);
	}
	.itemBox:active img {
		filter: saturate(1.1);
	}
	.imageWrapper {
		height: 120px;
		text-align: center;
		line-height: 120px;
		width: 100%;
		overflow: hidden;
	}
	img {
		width: 100%;
		margin: -100%;

		transition: 0.2s;

		vertical-align: middle;
	}
	.text {
		display: flex;
		flex-direction: column;
		padding: 20px;
		gap: 7px;
		letter-spacing: 0.4px;

		font-size: 11px;
	}
	.text .big {
		font-weight: 600;
		font-size: 15px;
	}
	.text .highlight {
		color: #42f056;
	}
</style>
