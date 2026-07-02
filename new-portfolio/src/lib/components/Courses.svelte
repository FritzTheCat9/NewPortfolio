<script lang="ts">
	import type { Course, Translations } from '$lib/types';

	type Props = {
		courses: Course[];
		translations: Translations;
	};

	let { courses, translations }: Props = $props();
</script>

<div class="my-10 space-y-12">
	{#each courses as course, index}
		<div class="flex flex-col items-center gap-8 md:flex-row">
			<!-- Image -->
			<div class={`flex justify-center md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
				<a
					href={course.link}
					target="_blank"
					rel="noopener noreferrer"
					class="transition-transform hover:scale-[1.02]"
				>
					<img
						src={course.image}
						alt={course.name}
						class="w-full max-w-sm rounded-xl border border-slate-700 bg-slate-900 object-contain shadow-lg"
					/>
				</a>
			</div>

			<!-- Content -->
			<div
				class={`flex flex-col items-center text-center md:w-1/2 ${
					index % 2 === 0 ? 'md:order-1' : 'md:order-2'
				}`}
			>
				<a href={course.link} target="_blank" rel="noopener noreferrer" class="group">
					<h3 class="text-2xl font-bold transition-colors group-hover:text-blue-400">
						{course.name}
					</h3>
				</a>

				<p class="mt-3 text-lg text-slate-300">
					{course.issuer}
				</p>

				<p class="mt-1 text-sm text-slate-500">
					{translations.completedIn}
					{course.date}
				</p>

				<a
					href={course.link}
					target="_blank"
					rel="noopener noreferrer"
					class="mt-6 inline-flex rounded-lg border border-blue-500 px-4 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500 hover:text-white"
				>
					{translations.viewCourse}
				</a>
			</div>
		</div>
	{/each}
</div>
