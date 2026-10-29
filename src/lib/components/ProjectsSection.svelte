<script lang="ts">
	import { projects } from '$lib/data/content';
	import DevicePreview from './DevicePreview.svelte';
	import TertiaryButton from './buttons/TertiaryButton.svelte';
</script>

<section id="projects" class="section" aria-labelledby="projects-title">
	<header class="section-intro">
		<h2 id="projects-title">Selected projects</h2>
		<p>A few things I have designed and built recently.</p>
	</header>

	<ul class="grid">
		{#each projects as project (project.title)}
			<li>
				<article class="card">
					<DevicePreview title={project.title} previews={project.previews} />
					<p class="muted year">{project.year}</p>
					<h3>{project.title}</h3>
					<p class="muted">{project.description}</p>
					<ul class="tags" aria-label="Tags">
						{#each project.tags as tag (tag)}
							<li>{tag}</li>
						{/each}
					</ul>
					<div class="cta">
						<TertiaryButton href={project.href} external>
								Visit website<span class="sr-only"> for {project.title} (opens in a new tab)</span>
							</TertiaryButton>
					</div>
				</article>
			</li>
		{/each}
	</ul>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr));
		gap: 1.25rem;
	}

	article {
		display: grid;
		gap: 0.75rem;
		height: 100%;
		align-content: start;
	}

	.year {
		font-size: var(--text-sm);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tags li {
		background: var(--color-secondary);
		color: var(--color-on-secondary);
		border-radius: 999px;
		padding: 0.125rem 0.75rem;
		font-size: var(--text-sm);
	}

	.cta {
		display: flex;
	}
</style>
