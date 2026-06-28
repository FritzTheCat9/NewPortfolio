import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

export default {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/Portfolio'
		},
		prerender: {
			entries: ['/', '/en', '/pl', '/en/', '/pl/']
		}
	}
};
