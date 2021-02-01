<template>
	<div class="pill">
		<span class="name">{{ name }}</span>
		<span class="amount">{{ amount }}</span>
	</div>
</template>
<script>
	export default {
		name: 'Pill',
		props: ['name', 'amount']
	}
</script>
<style scoped>
	.pill {
		background-color: crimson;
		color: #fff;

		margin: 10px;
		height: 55px;
		border-radius: 30px;
		font-size: 1.3rem;
		font-weight: bold;

		display: flex;
		align-items: center;
	}

	.pill .name {
		margin-left: 15px;
	}

	.pill .amount {
		margin:  10px;
		padding: 5px;
		height: 35px;
		width: 35px;
		border-radius: 50%;

		background-color: #fff;
		color: crimson;

		font-size: 0.7rem;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
