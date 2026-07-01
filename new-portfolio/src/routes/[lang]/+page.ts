import type { PageLoad } from './$types';
import type { RawCV, CV, Skill } from '$lib/types';

export const prerender = true;

export function entries() {
	return [{ lang: 'en' }, { lang: 'pl' }];
}

const cvs = {
	en: () => import('$lib/data/en/cv.json'),
	pl: () => import('$lib/data/pl/cv.json')
};

function resolveCv(raw: RawCV): CV {
	const lookup = Object.fromEntries(raw.allSkills.map((skill) => [skill.identifier, skill]));

	const resolveSkills = (ids: string[]): Skill[] =>
		ids.map((id) => lookup[id]).filter((skill): skill is Skill => skill !== undefined);

	return {
		...raw,
		skills: raw.skills.map((group) => ({
			...group,
			items: resolveSkills(group.items)
		})),
		experience: raw.experience.map((exp) => ({
			...exp,
			skills: resolveSkills(exp.skills)
		})),
		projects: raw.projects.map((project) => ({
			...project,
			technologies: resolveSkills(project.technologies)
		}))
	};
}

export const load: PageLoad = async ({ params }) => {
	const lang = params.lang === 'pl' ? 'pl' : 'en';

	const module = (await cvs[lang]()) as { default: RawCV };

	return {
		lang,
		cv: resolveCv(module.default)
	};
};
