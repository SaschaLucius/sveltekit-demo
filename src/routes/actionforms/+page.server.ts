import type { Actions } from './$types';

// do not prerender this page, because it needs form data
export const prerender = false;

export const actions: Actions = {
	// default action
	default: async (event) => {
		console.log('default: ' + event);
	},

	// named action
	login: async (event) => {
		console.log("named 'login': " + event);
	}
};
