<script lang ts>
	import { page } from '$app/stores';
	let error = $page.error === null ? 'NOT_FOUND' : $page.error.message;
</script>

<svelte:head>
	<title>Error</title>
	<meta name="description" content={error} />
</svelte:head>

<h1>{error}</h1>
