import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const lang = params.lang ?? 'en';

	const cv = await import(`$lib/data/${lang}/cv.json`);

	return {
		lang,
		cv: cv.default
	};
};
