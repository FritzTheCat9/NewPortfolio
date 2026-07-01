<script lang="ts">
	import SkillsRow from './SkillsRow.svelte';
	import LinkChip from './LinkChip.svelte';
	import ProjectGallery from './ProjectGallery.svelte';
	import type { Project } from '$lib/types';

	let { project }: { project: Project } = $props();
</script>

<div
	class="w-full rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6 md:p-8 overflow-hidden transition hover:border-blue-500/40"
>
	<!-- GALLERY -->
	<ProjectGallery images={project.images} />

	<!-- TITLE -->
	<h3 class="mt-8 text-center text-3xl font-bold">
		{project.name}
	</h3>

	<!-- LINKS -->
	{#if project.links?.length}
		<div class="mt-4 flex flex-wrap justify-center gap-3">
			{#each project.links as link}
				<LinkChip label={link.label} href={link.href} icon={link.icon} />
			{/each}
		</div>
	{/if}

	<!-- DESCRIPTION -->
	<p class="mx-auto mt-6 max-w-3xl text-center text-slate-400 leading-7">
		{project.description}
	</p>

	<!-- TECHNOLOGIES -->
	<div class="mt-6 flex justify-center">
		<SkillsRow skills={project.technologies} showName={true} />
	</div>
</div>
