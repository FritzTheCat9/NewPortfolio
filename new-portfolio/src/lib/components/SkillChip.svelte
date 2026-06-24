<script lang="ts">
	type Props = {
		name: string;
		icon?: string;
		image?: string;
		showName?: boolean;
	};

	let { name, icon, image, showName = true }: Props = $props();
</script>

<div
	class="flex items-center gap-2 px-3 py-1 rounded-full
	bg-slate-900 border border-slate-700
	text-slate-300 text-sm
	hover:bg-slate-800 hover:text-white
	transition-all duration-200"
>
	{#if icon}
		<iconify-icon {icon} width="18" height="18"></iconify-icon>
	{:else if image}
		<img src={image} alt={name} class="w-4 h-4 object-contain" />
	{/if}

	{#if showName}
		<span>{name}</span>
	{/if}
</div>
