<script lang="ts">
	import SkillsRow from './SkillsRow.svelte';

	type Props = {
		exp: any;
		side: 'left' | 'right';
	};

	let { exp, side }: Props = $props();
</script>

<div class="w-full flex md:contents">
	<!-- LEFT -->
	{#if side === 'left'}
		<div class="md:w-full md:pr-16 flex justify-end">
			<div class="w-full max-w-xl group">
				<div
					class="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition shadow-xl"
				>
					<!-- LOGO -->
					{#if exp.logo}
						<div class="mb-4 flex justify-center">
							<div class="overflow-hidden rounded-2xl">
								<img
									src={exp.logo}
									alt={exp.company}
									class="h-32 w-auto object-contain opacity-95 group-hover:opacity-100 transition"
								/>
							</div>
						</div>
					{/if}

					<!-- TITLE -->
					<div class="text-lg font-semibold text-white">
						{exp.position}
					</div>

					<div class="text-sm text-slate-300 mt-1">
						{exp.company}
					</div>

					<div class="text-xs text-slate-500 mt-1">
						{exp.location} • {exp.locationType}
					</div>

					<div class="text-xs text-slate-500 mt-1">
						{exp.from} — {exp.to}
					</div>

					{#if exp.employment}
						<div class="text-xs text-slate-400 mt-2">
							<span class="text-slate-300">{exp.employment}</span>
						</div>
					{/if}

					<!-- DESCRIPTION -->
					<ul class="mt-4 space-y-2 text-sm text-slate-400 leading-relaxed">
						{#each exp.description as d}
							<li class="flex gap-2">
								<span class="text-blue-400">•</span>
								<span>{d}</span>
							</li>
						{/each}
					</ul>

					<!-- SKILLS -->
					{#if exp.skills}
						<SkillsRow skills={exp.skills} showName={false} />
					{/if}
				</div>
			</div>
		</div>

		<div></div>
	{/if}

	<!-- RIGHT -->
	{#if side === 'right'}
		<div></div>

		<div class="md:w-full md:pl-16 flex justify-start">
			<div class="w-full max-w-xl group">
				<div
					class="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition shadow-xl"
				>
					<!-- LOGO -->
					{#if exp.logo}
						<div class="mb-4 flex justify-center">
							<div class="overflow-hidden rounded-2xl">
								<img
									src={exp.logo}
									alt={exp.company}
									class="h-32 w-auto object-contain opacity-95 group-hover:opacity-100 transition"
								/>
							</div>
						</div>
					{/if}

					<div class="text-lg font-semibold text-white">
						{exp.position}
					</div>

					<div class="text-sm text-slate-300 mt-1">
						{exp.company}
					</div>

					<div class="text-xs text-slate-500 mt-1">
						{exp.location} • {exp.locationType}
					</div>

					<div class="text-xs text-slate-500 mt-1">
						{exp.from} — {exp.to}
					</div>

					{#if exp.employment}
						<div class="text-xs text-slate-400 mt-2">
							<span class="text-slate-300">{exp.employment}</span>
						</div>
					{/if}

					<ul class="mt-4 space-y-2 text-sm text-slate-400 leading-relaxed">
						{#each exp.description as d}
							<li class="flex gap-2">
								<span class="text-blue-400">•</span>
								<span>{d}</span>
							</li>
						{/each}
					</ul>

					{#if exp.skills}
						<SkillsRow skills={exp.skills} showName={false} />
					{/if}
				</div>
			</div>
		</div>
	{/if}
</div>
