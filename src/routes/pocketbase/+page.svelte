<script lang="ts">
	import Login from './Login.svelte';
	import Messages from './Messages.svelte';
	import { currentUser } from './pocketbase';
</script>

<h1>Chat</h1>

<Login />

{#if $currentUser}
	<Messages />
{/if}
