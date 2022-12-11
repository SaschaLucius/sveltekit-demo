<script>
	import Counter from './Counter.svelte';
</script>

<svelte:head>
	<title>Counter</title>
	<meta name="description" content="Svelte counter component" />
</svelte:head>

<h1>Svelte counter component</h1>

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
