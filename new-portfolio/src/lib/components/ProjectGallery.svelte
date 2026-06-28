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

	const offsetX = typeof window !== 'undefined' && window.innerWidth < 640 ? 24 : 40;

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
	class="relative w-full h-55 sm:h-70 md:h-90 flex items-center justify-center select-none overflow-hidden z-0"
	onpointermove={onPointerMove}
	onpointerup={onPointerUp}
	onpointercancel={onPointerUp}
>
	{#each images as img, i}
		{@const offset = i - index}

		<div
			class="absolute flex items-center justify-center transition-all duration-500 ease-out px-2 sm:px-4"
			style={`
				transform:
					translateX(${offset * offsetX + deltaX * 0.15}px)
					scale(${offset === 0 ? 1 : 0.85})
					rotateY(${offset * -10}deg);

				opacity: ${Math.abs(offset) > 2 ? 0 : 1};
				z-index: ${-Math.abs(offset)};
			`}
		>
			<button
				class="rounded-xl overflow-hidden shadow-xl"
				onpointerdown={onPointerDown}
				onclick={onClick}
				aria-label="Open image in viewer"
			>
				<img
					src={img}
					alt=""
					class="w-full h-full max-h-55 sm:max-h-70 md:max-h-80 max-w-[95vw] sm:max-w-150 object-contain bg-slate-950 rounded-xl"
					draggable="false"
				/>
			</button>
		</div>
	{/each}
</div>

<!-- MODAL -->
{#if opened}
	<ImageViewer {images} bind:index onClose={() => (opened = false)} />
{/if}
