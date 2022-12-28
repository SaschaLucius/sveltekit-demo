<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';

	// https://svelte.dev/tutorial/keyed-each-blocks
	var pages = [
		{ path: '/counter', name: 'Counter' },
		{ path: '/about', name: 'About' },
		{ path: '/sverdle', name: 'Sverdle' },
		{ path: '/item-list', name: 'Item list' },
		{ path: '/forms', name: 'Forms' },
		{ path: '/lifecycle', name: 'Lifecycle' },
		{ path: '/tic-tac-toe/0-plain', name: 'T3 plain' },
		{ path: '/tic-tac-toe/1-event-forwarding-and-slot', name: 'T3 Slot' },
		{ path: '/tic-tac-toe/2-event-forwarding-and-props', name: 'T3 1-way binding' },
		{ path: '/tic-tac-toe/3-component-binding', name: 'T3 component binding' },
		{ path: '/tic-tac-toe/4-value-binding', name: 'T3 value binding' },
		{ path: '/tic-tac-toe/5-function-props', name: 'T3 function as prop' },
		{ path: '/tic-tac-toe/6-context-api', name: 'T3 context api' },
		{ path: '/tic-tac-toe/7-simple-store', name: 'T3 simple Store' },
		{ path: '/tic-tac-toe/8-custom-store', name: 'T3 custom Store' },
		{ path: '/tic-tac-toe/9-plain-with-button', name: 'T3 button' }
	];
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="Home" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			{#each pages as p}
				<li aria-current={$page.url.pathname === '{p.path}' ? 'page' : undefined}>
					<a href={p.path}>{p.name}</a>
				</li>
			{/each}
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/SaschaLucius/sveltekit-demo">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
