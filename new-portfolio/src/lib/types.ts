export type Skill = {
	identifier: string;
	name: string;
	icon?: string;
	image?: string;
};

export type SkillIdentifier = Skill['identifier'];

export type Link = {
	label: string;
	href: string;
	icon: string;
};

export type Course = {
	name: string;
	issuer: string;
	date: string;
	image: string;
	link: string;
};

export type SkillGroup = {
	sectionName: string;
	items: Skill[];
};

export type RawSkillGroup = {
	sectionName: string;
	items: SkillIdentifier[];
};

export type Experience = {
	logo?: string;
	company: string;
	location: string;
	locationType: string;
	employment: string | null;
	position: string;
	from: string;
	to: string;
	description: string[];
	skills: Skill[];
};

export type RawExperience = Omit<Experience, 'skills'> & {
	skills: SkillIdentifier[];
};

export type RawEducation = Omit<Experience, 'skills'> & {
	skills: SkillIdentifier[];
};

export type Project = {
	name: string;
	description: string;
	links: Link[];
	technologies: Skill[];
	images: string[];
};

export type RawProject = Omit<Project, 'technologies'> & {
	technologies: SkillIdentifier[];
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
	about: string;
	experience: string;
	education: string;
	projects: string;
	courses: string;
	skills: string;
	languages: string;
	hobbies: string;
};

export type Language = {
	name: string;
	level: string;
};

export type Translations = {
	completedIn: string;
	viewCourse: string;
};

export type CV = {
	sections: Sections;
	about: Personal;
	allSkills: Skill[];
	skills: SkillGroup[];
	experience: Experience[];
	education: Experience[];
	projects: Project[];
	courses: Course[];
	languages: Language[];
	hobbies: string[];
	translations: Translations;
};

export type RawCV = Omit<CV, 'skills' | 'experience' | 'education' | 'projects'> & {
	skills: RawSkillGroup[];
	experience: RawExperience[];
	education: RawEducation[];
	projects: RawProject[];
};

let allSkills: SkillIdentifier[] = [
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
