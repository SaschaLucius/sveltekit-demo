<script lang="ts">
	import Input from './Input.svelte';
	import { user } from './store';

	let json = {};
	let username = 'jane';
	function handleSubmit(e: Event) {
		const formData = new FormData(e.target as HTMLFormElement);
		json = Object.fromEntries(formData.entries());
	}
</script>

<svelte:head>
	<title>Forms</title>
	<meta name="description" content="Forms" />
</svelte:head>

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
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label>Name</label>
	<input type="text" bind:value={$user.name} />
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label>E-Mail</label>
	<input type="text" bind:value={$user.email} />
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label>Telephone</label>
	<input type="text" bind:value={$user.phone} />
</form>
<p>
	{JSON.stringify($user, null, 2)}
</p>

<h1>Simple two-way bind</h1>
<form>
	<div>
		<input type="text" name="username" bind:value={username} />
	</div>
	<div>
		<input type="text" name="repeat" bind:value={username} />
	</div>
	<p>
		username: <code>{username}</code>
	</p>
	<button on:click|preventDefault={() => (username = '')}>reset</button>
</form>

<h1>All Input types</h1>
<form>
	<div>
		<label for="scales">Checkbox</label>
		<input type="checkbox" id="scales" name="scales" checked />
	</div>

	<div>
		<label for="start">Date:</label>
		<input
			type="date"
			id="start"
			name="trip-start"
			value="2018-07-22"
			min="2018-01-01"
			max="2018-12-31"
		/>
	</div>

	<div>
		<label for="meeting-time">Datetime:</label>
		<input
			type="datetime-local"
			id="meeting-time"
			name="meeting-time"
			value="2018-06-12T19:30"
			min="2018-06-07T00:00"
			max="2018-06-14T00:00"
		/>
	</div>

	<div>
		<label for="email">E-Mail:</label>
		<input type="email" id="email" pattern=".+@globex\.com" size="30" required />
	</div>

	<div>
		<label for="avatar">File:</label>
		<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
	</div>

	<div>
		<input type="hidden" />
	</div>

	<div>
		<label for="userId">Text:</label>
		<input type="text" id="userId" name="userId" />
	</div>

	<div>
		<label for="start">Month:</label>
		<input type="month" id="start" name="start" min="2018-03" value="2018-05" />
	</div>

	<div>
		<label for="tentacles">Number:</label>
		<input type="number" id="tentacles" name="tentacles" min="10" max="100" />
	</div>

	<div>
		<input type="color" id="head" name="head" value="#e66465" />
		<label for="head">Color</label>
	</div>

	<div>
		<label for="pass">Password:</label>
		<input type="password" id="pass" name="password" minlength="8" required />
	</div>

	<fieldset>
		<legend>Radio:</legend>

		<div>
			<input type="radio" id="huey" name="drone" value="huey" checked />
			<label for="huey">Huey</label>
		</div>

		<div>
			<input type="radio" id="dewey" name="drone" value="dewey" />
			<label for="dewey">Dewey</label>
		</div>

		<div>
			<input type="radio" id="louie" name="drone" value="louie" />
			<label for="louie">Louie</label>
		</div>
	</fieldset>

	<div>
		<input type="range" id="volume" name="volume" min="0" max="11" />
		<label for="volume">Range</label>
	</div>

	<div>
		<label for="site-search">Search:</label>
		<input type="search" id="site-search" name="q" />
	</div>

	<div>
		<label for="phone">Phone:</label>
		<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
	</div>

	<div>
		<label for="name">Text:</label>
		<input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />
	</div>

	<div>
		<label for="appt">Time:</label>
		<input type="time" id="appt" name="appt" min="09:00" max="18:00" required />
	</div>

	<div>
		<label for="url">URL:</label>
		<input
			type="url"
			name="url"
			id="url"
			placeholder="https://example.com"
			pattern="https://.*"
			size="30"
			required
		/>
	</div>

	<div>
		<label for="week">Week:</label>
		<input type="week" name="week" id="camp-week" min="2018-W18" max="2018-W26" required />
	</div>

	<input type="button" value="Button" />
	<input type="reset" value="Reset" />
	<input type="submit" value="Submit" />
</form>

<style>
	.content {
		display: grid;
		grid-template-columns: 20% 80%;
		grid-column-gap: 10px;
	}
</style>
