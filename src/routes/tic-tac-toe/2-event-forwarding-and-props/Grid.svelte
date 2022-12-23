<script lang="ts">
	import Square from './Square.svelte';
	import '../grid.css';
	const players: string[] = ['X', 'O'];

	let squares: string[] = ['', '', '', '', '', '', '', '', ''];
	let count: number = 0;
	let isFinished: boolean = false;

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

<table>
	<tbody>
		{#each Array(3) as _, row}
			<tr>
				{#each Array(3) as _, column}
					<Square
						value={squares[row * 3 + column]}
						on:click={() => handleClick(row * 3 + column)}
					/>
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
