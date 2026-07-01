<script lang="ts">
	import type { Skill } from '$lib/types';

	type Props = Skill & {
		showName?: boolean;
	};

	let { name, icon, image, showName = true }: Props = $props();
</script>

<div
	class="inline-flex items-center gap-2 px-3 py-1 rounded-full
	bg-slate-900 border border-slate-700
	text-slate-300 text-sm
	hover:bg-slate-800 hover:text-white
	transition-colors duration-200"
>
	<!-- ICON ONLY IS THE HOVER TRIGGER -->
	<span class="relative group/icon flex items-center">
		{#if icon}
			<iconify-icon {icon} width="18" height="18"></iconify-icon>
		{:else if image}
			<img src={image} alt={name} class="w-4 h-4 object-contain" />
		{/if}

		{#if !showName}
			<!-- tooltip -->
			<span
				class="
					absolute left-1/2 -translate-x-1/2 -top-9
					px-2 py-1 rounded-md
					bg-slate-950 border border-slate-700
					text-xs text-slate-200
					whitespace-nowrap
					opacity-0 scale-95 translate-y-1
					group-hover/icon:opacity-100
					group-hover/icon:scale-100
					group-hover/icon:translate-y-0
					transition-all duration-200 ease-out
					delay-150
					pointer-events-none
					z-50
				"
			>
				{name}
			</span>
		{/if}
	</span>

	{#if showName}
		<span class="whitespace-nowrap">
			{name}
		</span>
	{/if}
</div>
