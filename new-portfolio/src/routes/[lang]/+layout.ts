export const prerender = true;

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	return {
		lang: params.lang
	};
};
