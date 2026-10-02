<script lang="ts">
	import { jobs } from '$lib/data/content';
</script>

<section id="experience" class="section" aria-labelledby="experience-title">
	<header class="section-intro">
		<h2 id="experience-title">Experience</h2>
	</header>

	<ol class="timeline">
		{#each jobs as job (job.period)}
			<li class="card">
				<p class="muted period">{job.period}</p>
				<h3>{job.role} · {job.company}</h3>
				<p class="muted">{job.summary}</p>
			</li>
		{/each}
	</ol>
</section>

<style>
	.timeline {
		display: grid;
		gap: 1rem;
	}

	.card {
		display: grid;
		gap: 0.375rem;
		border-inline-start: 4px solid var(--color-tertiary);
	}

	.period {
		font-size: var(--text-sm);
	}
</style>
