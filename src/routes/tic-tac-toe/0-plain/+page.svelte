<script lang="ts">
	const players: string[] = ['X', 'O'];

	let squares: string[] = ['', '', '', '', '', '', '', '', ''];
	let count = 0;
	let isFinished = false;

	function handleClick(index: number): void {
		if (squares[index] == '' && !isFinished) {
			squares[index] = players[count % 2];
			count += 1;
			let result = calculateWinner();
			if (result != null) {
				alert(result);
			}
		}
	}

	function reset(): void {
		squares = ['', '', '', '', '', '', '', '', ''];
		count = 0;
		isFinished = false;
	}

	function calculateWinner(): string | null {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				isFinished = true;
				return squares[a];
			}
		}
		return null;
	}
</script>

<svelte:head>
	<title>Tic-Tac-Toe</title>
	<meta name="description" content="Tic-Tac-Toe game" />
</svelte:head>

<h1>Tic-Tac-Toe game</h1>

<section>
	<table>
		<tbody>
			{#each Array(3) as _, row}
				<tr>
					{#each Array(3) as _, column}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<td on:click={() => handleClick(row * 3 + column)}> {squares[row * 3 + column]} </td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>

	{#if isFinished}
		<button on:click={reset}> Restart </button>
	{:else}
		<button on:click={reset}> Reset </button>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	table {
		table-layout: fixed;
		border-collapse: collapse;
		border-spacing: 0;
	}
	td {
		border-color: black;
		border-style: solid;
		border-width: 1px;
		padding: 0;
		background-color: white;
		font-size: 14px;
		font-weight: bold;
		width: 25px;
		height: 25px;
		overflow: hidden;
		text-align: center;
	}
	td:hover {
		background-color: lightgray;
	}
</style>
