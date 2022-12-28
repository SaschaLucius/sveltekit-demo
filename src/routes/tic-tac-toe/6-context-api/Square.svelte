<script lang="ts">
	import Grid from '../1-event-forwarding-and-slot/Grid.svelte';
	import '../square.css';
	import { Move } from '../types';
	import { getGrid, getIsX, getIsFinished, setGrid, setIsX } from './context';
	export let rowIndex: number;
	export let columnIndex: number;

	let squares: Move[][] = getGrid();
	let isFinished: boolean = getIsFinished();
	let isX: boolean = getIsX();

	function handleClick(rowIndex: number, columnIndex: number) {
		if (squares[rowIndex][columnIndex] == Move.EMPTY && !isFinished) {
			squares[rowIndex][columnIndex] = Object.values(Move)[Number(isX)];
			// not possible, since it will be called outside component initialization
			//setGrid(squares);
		}
		// not possible, since it will be called outside component initialization
		// setIsX(!isX);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<td on:click={() => handleClick(rowIndex, columnIndex)}>
	{squares[rowIndex][columnIndex]}
</td>
