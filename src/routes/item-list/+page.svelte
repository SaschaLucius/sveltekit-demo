<script>
	import List from './List.svelte';
	let users = [
		{
			id: 1,
			name: 'John',
			isFemale: false
		},
		{
			id: 2,
			name: 'Daniela',
			isFemale: true
		}
	];

	// add user
	users = [
		...users,
		{
			id: 3,
			name: 'Bob',
			isFemale: false
		}
	];
</script>

<svelte:head>
	<title>List</title>
	<meta name="description" content="Svelte List component" />
</svelte:head>

<h1>Svelte List component</h1>

<section>
	<List items={users} />
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
