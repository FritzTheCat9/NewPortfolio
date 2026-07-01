<script lang="ts">
	import SkillChip from './SkillChip.svelte';
	import type { SkillGroup } from '$lib/types';

	type Props = {
		skills: SkillGroup[];
	};

	let { skills }: Props = $props();
</script>

<div class="space-y-8">
	{#each skills as group}
		<div>
			<h3 class="text-lg font-medium mb-4 text-slate-200">
				{group.sectionName}
			</h3>

			<div class="flex flex-wrap gap-2">
				{#each group.items as skill}
					<SkillChip {...skill} />
				{/each}
			</div>
		</div>
	{/each}
</div>
