<script lang="ts">
	import ExperienceItem from './ExperienceItem.svelte';

	type Props = {
		cv: any;
	};

	let { cv }: Props = $props();
</script>

<div class="relative max-w-6xl mx-auto">
	<!-- CENTER LINE -->
	<div class="absolute left-1/2 top-0 bottom-0 w-px bg-slate-700 -translate-x-1/2"></div>

	<div class="space-y-14">
		{#each cv.experience as exp, i}
			<div class="grid grid-cols-[1fr_48px_1fr]">
				<!-- LEFT -->
				<div class="w-full flex justify-end">
					{#if i % 2 === 0}
						<ExperienceItem {exp} side="left" />
					{/if}
				</div>

				<!-- MIDDLE (DOT) -->
				<div class="relative flex items-center justify-center">
					<div class="absolute top-1/2 -translate-y-1/2">
						<div class="w-4 h-4 rounded-full bg-blue-500 border-2 border-slate-900 shadow-lg"></div>
					</div>
				</div>

				<!-- RIGHT -->
				<div class="w-full flex justify-start">
					{#if i % 2 === 1}
						<ExperienceItem {exp} side="right" />
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
