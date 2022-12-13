import { writable } from 'svelte/store';

export const user = writable({
	name: 'defaultName',
	phone: 'defaultPhone',
	email: 'default@mail.com'
});
