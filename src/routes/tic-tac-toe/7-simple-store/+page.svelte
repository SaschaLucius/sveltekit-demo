<script lang="ts">
	import Grid from './Grid.svelte';
	import '../page.css';

	let grid: Grid;
	let isFinished: boolean = false;
</script>

<svelte:head>
	<title>Tic-Tac-Toe</title>
	<meta name="description" content="Tic-Tac-Toe game" />
</svelte:head>

<h1>Tic-Tac-Toe game</h1>

<section>
	<Grid
		bind:this={grid}
		on:gameWon={(event) => {
			alert(event.detail.player);
			isFinished = true;
		}}
	/>
	<button
		on:click={() => {
			grid.reset();
			isFinished = false;
		}}
	>
		{isFinished ? 'Restart' : 'Reset'}
	</button>
</section>
