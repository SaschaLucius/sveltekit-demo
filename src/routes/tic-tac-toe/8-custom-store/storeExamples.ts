import { writable, derived } from 'svelte/store';

// ################# https://svelte.dev/examples/custom-stores
// Use-case: Business logic
// #################
function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		reset: () => set(0)
	};
}

const count = createCount();
count.subscribe(console.log);
count.increment();

// #################
// Use-case: Callback wrapper
// #################
