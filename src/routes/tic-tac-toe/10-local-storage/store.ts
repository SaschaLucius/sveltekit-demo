import { browser } from '$app/environment';
import type { Writable } from 'svelte/store';
import { writable, get } from 'svelte/store';

/**
 *
 * @param key
 * @param initValue
 * @returns
 * https://stackoverflow.com/a/68785061
 * localStorage can be exchanged with sessionStorage, dependent on the desired storage type
 * sessionStorage persists the data until the window or tab is closed
 * localStorage persists the data until the user manually clears the browser cache or until your web app clears the data
 */
const storage = <T>(key: string, initValue: T): Writable<T> => {
	const store = writable(initValue);
	// https://kit.svelte.dev/docs/modules#$app-environment-browser
	// true if the app is running in the browser
	if (!browser) return store;

	const storedValueStr = localStorage.getItem(key);
	if (storedValueStr != null) store.set(JSON.parse(storedValueStr));

	store.subscribe((val) => {
		if (val == null) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, JSON.stringify(val));
		}
	});

	window.addEventListener('storage', () => {
		const storedValueStr = localStorage.getItem(key);
		if (storedValueStr == null) return;

		const localValue: T = JSON.parse(storedValueStr);
		if (localValue !== get(store)) store.set(localValue);
	});

	return store;
};

export default storage;

// usage
interface Auth {
	jwt: string;
}
export const auth = storage<Auth>('auth', { jwt: '' });

// ---------------------------------------------------------------

/**
 *
 * @param key
 * @param startValue
 * @returns
 * https://github.com/higsch/higsch.me/blob/master/content/post/2019-06-21-svelte-local-storage.md
 */
const createWritableStore = <T>(key: string, startValue: T) => {
	const { subscribe, set } = writable(startValue);

	return {
		subscribe,
		set,
		useLocalStorage: () => {
			const json = localStorage.getItem(key);
			if (json) {
				set(JSON.parse(json));
			}

			subscribe((current) => {
				localStorage.setItem(key, JSON.stringify(current));
			});
		}
	};
};

export const count = createWritableStore('count', 0);

// usage
count.useLocalStorage();
