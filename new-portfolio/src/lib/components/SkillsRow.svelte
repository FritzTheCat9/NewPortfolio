<script lang="ts">
	import type { Skill } from '$lib/types';
	import SkillChip from './SkillChip.svelte';

	type Props = {
		skills: Skill[];
		showName: boolean;
	};

	let { skills, showName = true }: Props = $props();
</script>

<div class="flex flex-wrap gap-2 mt-5">
	{#each skills as skill}
		<SkillChip {...skill} {showName} />
	{/each}
</div>
