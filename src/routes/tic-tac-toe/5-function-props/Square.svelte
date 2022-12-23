<script lang="ts">
	import '../square.css';
	import type { Move } from '../types';

	export let value: Move;
	export let rowIndex: number;
	export let columnIndex: number;
	export let handleClick: (rowIndex: number, columnIndex: number) => void;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<td on:click={() => handleClick(rowIndex, columnIndex)}>
	{value}
</td>
