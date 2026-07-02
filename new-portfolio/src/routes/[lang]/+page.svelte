<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { setLang, type Lang } from '$lib/lang';
	import LinkChip from '$lib/components/LinkChip.svelte';
	import ExperienceTimeline from '$lib/components/ExperienceTimeline.svelte';
	import SkillsSection from '$lib/components/SkillsSection.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import CoursesSection from '$lib/components/Courses.svelte';

	let { data }: { data: PageData } = $props();

	const cv = $derived(data.cv);
	const timeline = $derived([...cv.experience, ...cv.education]);

	function switchLang(lang: Lang) {
		setLang(lang);
		goto(`/${lang}`);
	}
</script>

<!-- Layout wrapper -->
<div class="min-h-screen bg-slate-950 text-slate-100">
	<!-- HEADER -->
	<header class="flex items-center justify-between px-6 py-4 border-b border-slate-800">
		<div class="font-bold text-lg">
			{cv.about.name}
		</div>

		<div class="text-sm text-slate-400">
			{cv.about.title}
		</div>

		<div class="flex gap-2 items-center">
			<button
				class="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer hover:scale-105"
				onclick={() => switchLang('en')}
			>
				EN
			</button>

			<span class="text-slate-600">/</span>

			<button
				class="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer hover:scale-105"
				onclick={() => switchLang('pl')}
			>
				PL
			</button>
		</div>
	</header>

	<!-- HERO -->
	<section class="px-6 py-20 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
		<!-- IMAGE (mobile first, desktop right) -->
		<div class="order-1 md:order-2 flex justify-center md:justify-end">
			<div class="relative">
				<div class="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl"></div>

				<img
					src={cv.about.avatar}
					alt={cv.about.name}
					class="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border border-slate-700 shadow-xl"
				/>
			</div>
		</div>

		<!-- TEXT (mobile second, desktop left) -->
		<div class="order-2 md:order-1">
			<h1 class="text-4xl font-bold mb-4">
				{cv.about.name}
			</h1>

			<p class="text-xl text-slate-300 mb-6">
				{cv.about.title}
			</p>

			<p class="text-slate-400 max-w-2xl">
				{cv.about.summary}
			</p>

			<div class="flex flex-wrap gap-2 mt-6">
				{#each data.cv.about.links as link}
					<LinkChip {link} />
				{/each}
			</div>
		</div>
	</section>

	<!-- EXPERIENCE -->
	<section class="px-6 py-10 max-w-5xl mx-auto">
		<h2 class="text-2xl font-semibold mb-6">
			{cv.sections.experience}
		</h2>

		<ExperienceTimeline experience={timeline} />
	</section>

	<!-- PROJECTS -->
	<section class="px-6 py-10 max-w-5xl mx-auto">
		<h2 class="text-2xl font-semibold mb-6">
			{cv.sections.projects}
		</h2>

		<div class="grid grid-cols-1 gap-8">
			{#each cv.projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>

	<!-- COURSES -->
	<section class="px-6 py-10 max-w-5xl mx-auto">
		<h2 class="text-2xl font-semibold mb-6">
			{cv.sections.courses}
		</h2>

		<CoursesSection courses={cv.courses} translations={cv.translations} />
	</section>

	<!-- SKILLS -->
	<section class="px-6 py-10 max-w-5xl mx-auto">
		<h2 class="text-2xl font-semibold mb-6">
			{cv.sections.skills}
		</h2>

		<SkillsSection skills={cv.skills} />
	</section>

	<!-- FOOTER -->
	<footer class="px-6 py-10 text-center text-slate-500 text-sm border-t border-slate-800">
		© {new Date().getFullYear()}
		{cv.about.name}
	</footer>
</div>
