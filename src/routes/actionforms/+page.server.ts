import type { Actions } from './$types';

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
