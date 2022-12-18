<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Move } from './types';

	export let value: Move = Move.EMPTY;
</script>

<!-- event forewarding to use the click event for Square -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<td on:click>
	{value}
</td>

<style type="text/css">
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
