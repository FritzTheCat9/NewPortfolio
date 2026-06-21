<script lang="ts">
	import { onMount } from 'svelte';
	import { setLang, type Lang } from '$lib/lang';

	const { data, children } = $props<{
		data?: { lang?: Lang };
		children: any;
	}>();

	onMount(() => {
		if (data?.lang) {
			setLang(data.lang);
		}
	});
</script>

{@render children()}
