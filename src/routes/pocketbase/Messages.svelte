<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { currentUser, pb } from './pocketbase';
	import {
		Collections,
		type MessagesRecord,
		type MessagesResponse,
		type UsersResponse
	} from './pocketbase-types';

	let newMessage: string;
	let messages: MessagesResponse[] = [];
	let unsubscribe: () => void;

	onMount(async () => {
		// Get initial messages
		const resultList = await pb.collection(Collections.Messages).getList<MessagesResponse>(1, 50, {
			sort: 'created',
			expand: 'user'
		});
		messages = resultList.items;

		// Subscribe to realtime messages
		unsubscribe = await pb
			.collection(Collections.Messages)
			.subscribe<MessagesResponse>('*', async ({ action, record }) => {
				if (action === 'create') {
					// Fetch associated user
					const user = await pb.collection(Collections.Users).getOne<UsersResponse>(record.user);
					record.expand = { user };
					messages = [...messages, record];
				}
				if (action === 'delete') {
					messages = messages.filter((m) => m.id !== record.id);
				}
			});
	});

	// Unsubscribe from realtime messages
	onDestroy(() => {
		unsubscribe?.();
	});

	async function sendMessage() {
		const data = {
			text: newMessage,
			user: $currentUser?.id
		};
		await pb.collection(Collections.Messages).create<MessagesRecord>(data);
		newMessage = '';
	}
</script>

<div class="messages">
	{#each messages as message (message.id)}
		<div class="msg">
			<img
				class="avatar"
				src={`https://avatars.dicebear.com/api/identicon/${message.expand?.user?.username}.svg`}
				alt="avatar"
				width="40px"
			/>
			<div>
				<small>
					Sent by @{message.expand?.user?.username}
				</small>
				<p class="msg-text">{message.text}</p>
			</div>
		</div>
	{/each}
</div>

<form on:submit|preventDefault={sendMessage}>
	<input placeholder="Message" type="text" bind:value={newMessage} />
	<button type="submit">Send</button>
</form>
