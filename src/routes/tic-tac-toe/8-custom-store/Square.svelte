<script lang="ts">
	import '../square.css';
	import { Move } from '../types';
	import { squares, isFinished, count } from './stores.js';

	export let index: number;

	function handleClick(index: number) {
		if ($squares[index] == Move.EMPTY && !$isFinished) {
			$squares[index] = Object.values(Move)[$count % 2];
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<td on:click={() => handleClick(index)}>
	{$squares[index]}
</td>
