export const prerender = true;

export function entries() {
	return [{ lang: 'en' }, { lang: 'pl' }];
}
import type { PageLoad } from './$types';

const cvs: Record<string, () => Promise<any>> = {
	en: () => import('$lib/data/en/cv.json'),
	pl: () => import('$lib/data/pl/cv.json')
};

export const load: PageLoad = async ({ params }) => {
	const lang = params.lang ?? 'en';

	const loader = cvs[lang] ?? cvs.en;

	const cvModule = await loader();

	return {
		lang,
		cv: cvModule.default
	};
};
