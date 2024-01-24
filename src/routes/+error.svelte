<script lang ts>
	import { page } from '$app/stores';
	let error = $page.error === null ? 'NOT_FOUND' : $page.error.message;
	let status = $page.status;
	let route = $page.route;
</script>

<svelte:head>
	<title>Error</title>
	<meta name="description" content={error} />
</svelte:head>

<h1>Error: {error}</h1>
<h2>Status: {status}</h2>
<h2>Route: {route}</h2>
