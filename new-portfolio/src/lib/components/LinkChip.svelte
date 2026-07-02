<script lang="ts">
	import type { Link } from '$lib/types';

	let { link }: { link: Link } = $props();
</script>

{#if link?.href}
	<a
		href={link.href}
		target="_blank"
		rel="noopener noreferrer"
		class="flex items-center gap-2 px-3 py-1 rounded-full
		bg-slate-900 border border-slate-700
		text-slate-300 text-sm
		hover:bg-slate-800 hover:text-white
		transition-all duration-200"
	>
		<img src={`/icons/${link.icon}`} alt={link.label} class="w-4 h-4 shrink-0" />
		<span>{link.label}</span>
	</a>
{/if}
