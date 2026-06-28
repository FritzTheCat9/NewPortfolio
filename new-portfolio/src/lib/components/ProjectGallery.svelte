<script lang="ts">
	import ImageViewer from './ImageViewer.svelte';

	type Props = {
		images: string[];
	};

	let { images }: Props = $props();

	let opened = $state(false);
	let index = $state(0);

	function open(i: number) {
		index = i;
		opened = true;
	}
</script>

<div class="grid grid-cols-2 gap-3 md:grid-cols-3">
	{#each images as image, i}
		<button class="overflow-hidden rounded-xl" onclick={() => open(i)}>
			<img src={image} alt="" class="aspect-video w-full object-cover transition hover:scale-105" />
		</button>
	{/each}
</div>

{#if opened}
	<ImageViewer {images} bind:index onClose={() => (opened = false)} />
{/if}
