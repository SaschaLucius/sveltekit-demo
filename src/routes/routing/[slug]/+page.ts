import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

export const load = (({ params }) => {
	if (params.slug === 'hello-world') {
		return {
			title: 'Hello world!',
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
