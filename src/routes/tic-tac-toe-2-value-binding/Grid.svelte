<script lang="ts">
	import Square from './Square.svelte';
	import { Move } from './types';

	let squares = [
		[Move.EMPTY, Move.EMPTY, Move.EMPTY],
		[Move.EMPTY, Move.EMPTY, Move.EMPTY],
		[Move.EMPTY, Move.EMPTY, Move.EMPTY]
	];

	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	let isX = true;
	let isFinished = false;

	function handleClick(rowIndex: number, columnIndex: number) {
		if (squares[rowIndex][columnIndex] == Move.EMPTY && !isFinished) {
			const first: Move = Object.values(Move)[0];
			squares[rowIndex][columnIndex] = Object.values(Move)[Number(isX)];
			isX = !isX;

			const result = calculateWinner();
			if (result != Move.EMPTY) {
				alert(result);
			}
		}
	}

	const reset = () => {
		squares = [
			[Move.EMPTY, Move.EMPTY, Move.EMPTY],
			[Move.EMPTY, Move.EMPTY, Move.EMPTY],
			[Move.EMPTY, Move.EMPTY, Move.EMPTY]
		];
		isX = true;
		isFinished = false;
	};

	function indexToValue(index: number): Move {
		const row = Math.floor(index / 3);
		const column = index % 3;
		return squares[row][column];
	}

	function calculateWinner(): Move {
		for (let i = 0; i < winningCombinations.length; i++) {
			const [a, b, c] = winningCombinations[i];
			const valueA = indexToValue(a);
			if (valueA === indexToValue(b) && valueA === indexToValue(c)) {
				isFinished = true;
				return indexToValue(a);
			}
		}
		return Move.EMPTY;
	}
</script>

<table>
	<tbody>
		{#each squares as row, rowIndex}
			<tr>
				{#each row as columnValue, columnIndex}
					<Square bind:value={columnValue} on:click={() => handleClick(rowIndex, columnIndex)} />
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<button on:click={reset}> {isFinished ? 'Restart' : 'Reset'} </button>

<style type="text/css">
	table {
		table-layout: fixed;
		border-collapse: collapse;
		border-spacing: 0;
	}
</style>
