<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { setLang, type Lang } from '$lib/lang';

	function detectLang(): Lang {
		const stored = localStorage.getItem('lang') as Lang | null;
		if (stored) return stored;

		const browserLang = navigator.language.toLowerCase();

		if (browserLang.startsWith('pl')) return 'pl';
		return 'en';
	}

	onMount(() => {
		const lang = detectLang();
		setLang(lang);
		goto(`/${lang}`);
	});
</script>

<p class="text-slate-400 p-6">Redirecting...</p>
