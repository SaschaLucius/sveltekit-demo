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

	let value: string = '';

	const dispatch = createEventDispatcher()<{ squareClicked: { index: number } }>;
	// TODO, how to define the type of the element
	// https://github.com/sveltejs/language-tools/issues/1371
	// https://github.com/sveltejs/svelte/issues/5211
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
