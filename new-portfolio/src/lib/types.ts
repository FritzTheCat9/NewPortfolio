export type Skill = {
	identifier: string;
	name: string;
	icon?: string;
	image?: string;
};

export type SkillReference = Skill['identifier'];

export type SkillGroup = {
	sectionName: string;
	items: SkillReference[];
};

export type Link = {
	label: string;
	href: string;
	icon: string;
};

export type Project = {
	name: string;
	description: string;
	links: Link[];
	technologies: SkillReference[];
	images: string[];
};

export type Experience = {
	logo?: string;
	company: string;
	location: string;
	locationType: string;
	employment: string;
	position: string;
	from: string;
	to: string;
	description: string[];
	skills: SkillReference[];
};

export type Course = {
	name: string;
	issuer: string;
	date: string;
	image: string;
	link: string;
};

export type Personal = {
	name: string;
	title: string;
	location: string;
	summary: string;
	email: string;
	avatar: string;
	links: Link[];
};

export type Sections = {
	experience: string;
	projects: string;
	courses: string;
	skills: string;
};

export type CV = {
	sections: Sections;
	personal: Personal;

	allSkills: Skill[];
	skills: SkillGroup[];

	experience: Experience[];
	projects: Project[];
	courses: Course[];
};

let allSkills: SkillReference[] = [
	'c-sharp',
	'dotnet',
	'minimal-api',
	'api',
	'vertical-slices-architecture',
	'entity-framework-core',
	'blazor-webassembly',
	'mudblazor',
	'fluent-ui-blazor',
	'sql',
	'microsoft-sql-server',
	'postgresql',
	'visual-studio',
	'vs-code',
	'docker',
	'git',
	'microsoft-azure',
	'azure-devops',
	'azure-functions',
	'power-apps',
	'dynamics-365',
	'dynamics-365-field-service',
	'dataverse',
	'svelte',
	'sveltekit',
	'javascript',
	'typescript',
	'vue',
	'angular',
	'react',
	'html',
	'css',
	'tailwind-css',
	'c-plus-plus',
	'c',
	'ms-office',
	'ms-teams',
	'driving-license-category-b'
];
