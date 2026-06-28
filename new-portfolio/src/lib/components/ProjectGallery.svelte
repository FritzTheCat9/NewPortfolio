<script lang="ts">
	import ImageViewer from './ImageViewer.svelte';

	type Props = {
		images: string[];
	};

	let { images }: Props = $props();

	let index = $state(0);
	let opened = $state(false);

	let startX = 0;
	let deltaX = $state(0);

	let dragging = false;
	let moved = false;

	function open() {
		opened = true;
	}

	function next() {
		index = Math.min(index + 1, images.length - 1);
	}

	function prev() {
		index = Math.max(index - 1, 0);
	}

	function onPointerDown(e: PointerEvent) {
		startX = e.clientX;
		deltaX = 0;
		dragging = true;
		moved = false;

		(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
	}

	function onPointerMove(e: PointerEvent) {
		if (!dragging) return;

		deltaX = e.clientX - startX;

		if (Math.abs(deltaX) > 8) {
			moved = true;
		}
	}

	function onPointerUp() {
		if (!dragging) return;

		dragging = false;

		if (deltaX > 80) prev();
		if (deltaX < -80) next();

		deltaX = 0;

		setTimeout(() => {
			moved = false;
		}, 0);
	}

	function onClick(e: MouseEvent) {
		if (moved) {
			e.preventDefault();
			e.stopPropagation();
			return;
		}
		open();
	}
</script>

<!-- CAROUSEL -->
<div
	role="region"
	aria-label="Project image gallery"
	class="relative w-full h-90 flex items-center justify-center select-none z-0"
	onpointermove={onPointerMove}
	onpointerup={onPointerUp}
	onpointercancel={onPointerUp}
>
	{#each images as img, i}
		{@const offset = i - index}

		<div
			class="absolute transition-all duration-500 ease-out"
			style={`
				transform:
					translateX(${offset * 40 + deltaX * 0.25}px)
					scale(${offset === 0 ? 1 : 0.85})
					rotateY(${offset * -10}deg);

				opacity: ${Math.abs(offset) > 2 ? 0 : 1};

				/* IMPORTANT: no high z-index */
				z-index: ${-Math.abs(offset)};
			`}
		>
			<button
				class="rounded-xl overflow-hidden shadow-xl"
				onpointerdown={onPointerDown}
				onclick={onClick}
				aria-label="Open image in viewer"
			>
				<img src={img} alt="" class="w-150 h-80 object-cover" draggable="false" />
			</button>
		</div>
	{/each}
</div>

<!-- MODAL -->
{#if opened}
	<ImageViewer {images} bind:index onClose={() => (opened = false)} />
{/if}
