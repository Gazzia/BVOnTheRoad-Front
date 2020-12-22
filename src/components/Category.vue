<template>
	<div class="category">
		<div class="heading" :class="{onHome}">
			<div class="title">{{ title }}</div>
			<router-link v-if="onHome && route" class="button" :to="route">Voir tout</router-link>
			<router-link v-if="!onHome && route" class="button" :to="route"
				>+ Ajouter nouveau</router-link
			>
		</div>
		<div class="content" :class="{onHome}">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Category",
		props: ["title", "route", "onHome"],
	};
</script>

<style scoped>
	.category {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.heading {
		display: flex;
		gap: 20px;
		align-items: center;
		justify-content: space-between;
	}
	.heading.onHome {
		justify-content: left;
	}
	.title {
		font-weight: 600;
		font-size: 38px;

		letter-spacing: 0.5px;
	}
	.button {
		margin-top: 6px;
		padding: 5px 10px;
		border: 1px solid #42f056;
		box-sizing: border-box;
		border-radius: 6px;
		color: #42f056;
		user-select: none;
		cursor: pointer;
		transition: 0.2s;

		font-weight: 600;
		font-size: 12px;
		letter-spacing: 0.4px;
	}
	.button,
	.button:visited,
	.button:active {
		color: #42f056;
		text-decoration: none;
	}
	.button:active {
		transform: scale(0.95);
	}
	.content {
		display: grid;
		grid-template-columns: repeat(auto-fill, 350px);
		gap: 20px;
	}
	.content.onHome {
		display: flex;
		flex-wrap: nowrap;
	}
</style>
