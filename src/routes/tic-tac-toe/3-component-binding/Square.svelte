<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import '../square.css';

	export let index: number;
	export function setValue(val: string) {
		value = val;
	}
	export function getValue() {
		return value;
	}

	let value = '';

	const dispatch = createEventDispatcher<{ squareClicked: { index: number } }>();
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
