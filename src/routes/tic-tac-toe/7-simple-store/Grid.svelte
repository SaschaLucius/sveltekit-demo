<script lang="ts" type="module">
	import Square from './Square.svelte';
	import '../grid.css';
	import { createEventDispatcher } from 'svelte';
	import { Move } from '../types';
	import { squares, winner } from './stores.js';

	const dispatch = createEventDispatcher();

	$: if ($winner != Move.EMPTY) {
		dispatch('gameWon', { player: $winner });
	}

	export function reset() {
		$squares = [
			Move.EMPTY,
			Move.EMPTY,
			Move.EMPTY,
			Move.EMPTY,
			Move.EMPTY,
			Move.EMPTY,
			Move.EMPTY,
			Move.EMPTY,
			Move.EMPTY
		];
	}
</script>

<table>
	<tbody>
		{#each Array(3) as _, rowIndex}
			<tr>
				{#each Array(3) as _, columnIndex}
					<Square index={rowIndex * 3 + columnIndex} />
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
