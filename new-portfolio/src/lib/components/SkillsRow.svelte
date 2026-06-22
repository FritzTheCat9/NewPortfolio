<script lang="ts">
	import SkillChip from './SkillChip.svelte';

	type Skill = {
		name: string;
		icon: string;
	};

	type Props = {
		skills: Skill[];
	};

	let { skills }: Props = $props();
</script>

<div class="flex flex-wrap gap-2 mt-5">
	{#each skills as skill}
		<SkillChip {...skill} />
	{/each}
</div>
