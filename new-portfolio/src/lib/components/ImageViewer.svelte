<script lang="ts">
	type Props = {
		images: string[];
		index: number;
		onClose: () => void;
	};

	let { images, index = $bindable(), onClose }: Props = $props();

	function next() {
		index = (index + 1) % images.length;
	}

	function previous() {
		index = (index - 1 + images.length) % images.length;
	}
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
	<button class="absolute top-6 right-6 text-4xl text-white" onclick={onClose}> ✕ </button>

	<button class="absolute left-6 text-5xl text-white" onclick={previous}> ❮ </button>

	<img src={images[index]} alt="" class="max-h-[90vh] max-w-[90vw] rounded-xl" />

	<button class="absolute right-6 text-5xl text-white" onclick={next}> ❯ </button>

	<div class="absolute bottom-6 text-slate-300">
		{index + 1} / {images.length}
	</div>
</div>
