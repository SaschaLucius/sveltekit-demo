<script lang="ts">
	import '../page.css';
	import { browser } from '$app/environment';
	import * as crud from './crudcrud';

	$: if (browser && crud._apiKey) localStorage.setItem('crudCrudApiKey', crud._apiKey);
	$: if (browser && crud._resourceId) localStorage.setItem('crudCrudBoardId', crud._resourceId);
	$: (async () => {
		if (crud._apiKey && crud._resourceId && crud._resource) {
			console.log('auto update');
			crud.update(crud._apiKey, crud._resourceId, crud._resource);
		}
	})();
</script>

<svelte:head>
	<title>Tic-Tac-Toe</title>
	<meta name="description" content="Tic-Tac-Toe game" />
</svelte:head>

<h1>Tic-Tac-Toe game</h1>

{#await crud.initialize({ a: 1 })}
	<p>...waiting for initialization</p>
{:then key}
	<p>
		Account: <a href={'https://crudcrud.com/Dashboard/' + crud._apiKey}>{crud._apiKey}</a>
		({crud._requests.executedRequests} / {crud._requests.maxRequests} used)
	</p>

	{#if crud._requests.executedRequests > crud._requests.maxRequests - crud._leftoverRequests}
		<button
			on:click={() => {
				crud._requests.executedRequests = -1;
				(async () => {
					let result = await crud.transferAccount(crud._apiKey, crud._resourceId);
					crud.setValues(result.apiKey, result.resourceId, result.requests);
				})();
			}}>New Account</button
		>
		<p>
			Creating a new Account, if you already have one Violates <a
				href="https://crudcrud.com/TermsOfService">CrudCruds Conditions of Use</a
			>. Please upgrade your account instead.
		</p>
	{/if}

	<p>{JSON.stringify(crud._resource)}</p>

	<button
		disabled={crud._requests.executedRequests > crud._requests.maxRequests - 2}
		on:click={() => {
			crud._resource.a = crud._resource.a + 1;
		}}>Increase!</button
	>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<section />
