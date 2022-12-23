<script lang="ts">
	import { Move } from '../types';
	import '../square.css';

	export let value: Move;
	export let isX: boolean;
	export let isFinished: boolean;

	function handleClick() {
		if (value == Move.EMPTY && !isFinished) {
			value = Object.values(Move)[Number(isX)];
			isX = !isX;
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<td on:click={handleClick}>
	{value}
</td>
