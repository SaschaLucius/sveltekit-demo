<script>
	import Counter from './Counter.svelte';
	import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from 'svelte';

	onMount(() => {
		console.log('Page:    onMount');
	});

	beforeUpdate(async () => {
		console.log('Page:    beforeUpdate');
		await tick();
		console.log('Page:    after tick');
	});

	afterUpdate(() => {
		console.log('Page:    afterUpdate');
	});

	onDestroy(() => {
		console.log('Page:    onDestroy');
	});
</script>

<svelte:head>
	<title>Counter</title>
	<meta name="description" content="Svelte Lifecycle" />
</svelte:head>

<h1>Svelte Lifecycle</h1>

<section>
	<Counter />
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
