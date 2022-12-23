<script lang="ts">
	import Square from './Square.svelte';
	import '../grid.css';
	import { Move } from '../types';

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

	let squares = [
		[Move.EMPTY, Move.EMPTY, Move.EMPTY],
		[Move.EMPTY, Move.EMPTY, Move.EMPTY],
		[Move.EMPTY, Move.EMPTY, Move.EMPTY]
	];
	let isX = true;

	$: winner = calculateWinner(squares);
	$: isFinished = winner != Move.EMPTY;
	$: if (isFinished === true) {
		alert(winner);
	}

	function reset(): void {
		squares = [
			[Move.EMPTY, Move.EMPTY, Move.EMPTY],
			[Move.EMPTY, Move.EMPTY, Move.EMPTY],
			[Move.EMPTY, Move.EMPTY, Move.EMPTY]
		];
		isX = true;
		isFinished = false;
	}

	function valueOfIndex(board: Move[][], index: number): Move {
		const row = Math.floor(index / 3);
		const column = index % 3;
		return board[row][column];
	}

	function calculateWinner(board: Move[][]): Move {
		for (let i = 0; i < winningCombinations.length; i++) {
			const [a, b, c] = winningCombinations[i];
			const valueA = valueOfIndex(board, a);
			if (
				valueA != Move.EMPTY &&
				valueA === valueOfIndex(board, b) &&
				valueA === valueOfIndex(board, c)
			) {
				return valueA;
			}
		}
		return Move.EMPTY;
	}
</script>

<table>
	<tbody>
		{#each Array(3) as _, row}
			<tr>
				{#each Array(3) as _, column}
					<Square bind:value={squares[row][column]} bind:isX bind:isFinished />
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<button on:click={reset}> {isFinished ? 'Restart' : 'Reset'} </button>
