<script lang="ts">
	import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from 'svelte';

	onMount(() => {
		console.log('Counter: onMount');
	});

	beforeUpdate(async () => {
		console.log('Counter: beforeUpdate');
		await tick();
		console.log('Counter: after tick');
	});

	afterUpdate(() => {
		console.log('Counter: afterUpdate');
	});

	onDestroy(() => {
		console.log('Counter: onDestroy');
	});

	console.log('Counter: 1');
	export let count = 0;
	console.log('Counter: 2');
	$: offset = modulo(count, 1);
	console.log('Counter: 3');

	function modulo(n: number, m: number) {
		console.log('Counter: modulo');

		// handle negative numbers
		return ((n % m) + m) % m;
	}
</script>

<div class="counter">
	<button
		on:click={() => {
			count -= 1;
			console.log('Counter: click-');
		}}
		aria-label="Decrease the counter by one"
	>
		<svg aria-hidden="true" viewBox="0 0 1 1">
			<path d="M0,0.5 L1,0.5" />
		</svg>
	</button>

	<div class="counter-viewport">
		<div class="counter-digits" style="transform: translate(0, {100 * offset}%)">
			<strong class="hidden" aria-hidden="true">{Math.floor(count + 1)}</strong>
			<strong>{Math.floor(count)}</strong>
		</div>
	</div>

	<button
		on:click={() => {
			count += 1;
			console.log('Counter: click+');
		}}
		aria-label="Increase the counter by one"
	>
		<svg aria-hidden="true" viewBox="0 0 1 1">
			<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
		</svg>
	</button>
</div>

<style>
	.counter {
		display: flex;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin: 1rem 0;
	}

	.counter button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 2rem;
	}

	.counter button:hover {
		background-color: var(--color-bg-1);
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: #444;
	}

	.counter-viewport {
		width: 8em;
		height: 4em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--color-theme-1);
		font-size: 4rem;
		align-items: center;
		justify-content: center;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.hidden {
		top: -100%;
		user-select: none;
	}
</style>
