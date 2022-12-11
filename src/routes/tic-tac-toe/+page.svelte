<script>
	import Grid from './Grid.svelte';
</script>

<svelte:head>
	<title>Tic-Tac-Toe</title>
	<meta name="description" content="Tic-Tac-Toe game" />
</svelte:head>

<h1>Tic-Tac-Toe game</h1>

<section>
	<Grid />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
