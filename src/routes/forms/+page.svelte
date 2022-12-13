<script lang="ts">
	import Input from './Input.svelte';
	import { user } from './store';

	let json = {};

	function handleSubmit(e: SubmitEvent) {
		const formData = new FormData(e.target as HTMLFormElement);
		json = Object.fromEntries(formData.entries());
	}
</script>

<h1>Form with in Memory Storage</h1>
<form on:submit|preventDefault={handleSubmit}>
	<Input label="Username" name="username" type="text" />
	<Input label="Password" name="password" type="password" />
	<Input label="Email" name="email" type="email" />
	<button>Submit</button>
</form>

<pre>
	{JSON.stringify(json, null, 2)}
</pre>

<h1>Form with Store</h1>
<form class="content">
	<label>Nome</label>
	<input type="text" bind:value={$user.name} />
	<label>E-mail</label>
	<input type="text" bind:value={$user.email} />
	<label>Telefone</label>
	<input type="text" bind:value={$user.phone} />
</form>
<p>
	{JSON.stringify($user, null, 2)}
</p>

<style>
	.content {
		display: grid;
		grid-template-columns: 20% 80%;
		grid-column-gap: 10px;
	}
</style>
