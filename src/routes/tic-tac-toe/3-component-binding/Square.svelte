<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import '../square.css';

	export let index: number;
	export let value = '';
	export function setValue(val: string) {
		value = val;
	}

	export function getValue() {
		return value;
	}

	const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<td
	on:click={() => {
		dispatch('squareClicked', {
			index
		});
	}}
	>{value}
</td>
