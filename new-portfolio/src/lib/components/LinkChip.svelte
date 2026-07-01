<script lang="ts">
	import type { Link } from '$lib/types';

	let { label, href, icon }: Link = $props();
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="flex items-center gap-2 px-3 py-1 rounded-full
    bg-slate-900 border border-slate-700
    text-slate-300 text-sm
    hover:bg-slate-800 hover:text-white
    transition-all duration-200"
>
	<img src={`/icons/${icon}`} alt={label} class="w-4 h-4 shrink-0" />
	<span>{label}</span>
</a>
