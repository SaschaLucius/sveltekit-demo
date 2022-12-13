<script>
	import Counter from './Counter.svelte';
	import { counter } from './store';
</script>

<svelte:head>
	<title>Counter</title>
	<meta name="description" content="Svelte counter component" />
</svelte:head>

<h1>Svelte counter component</h1>

<section>
	without store
	<Counter />
</section>

<section>
	with store
	<Counter bind:count={$counter} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
