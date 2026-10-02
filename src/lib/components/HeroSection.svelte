<script lang="ts">
	import { profile, stats } from '$lib/data/content';
	import PrimaryButton from './buttons/PrimaryButton.svelte';
	import TertiaryButton from './buttons/TertiaryButton.svelte';
</script>

<section class="section" aria-labelledby="hero-title">
	<div class="copy">
		<p class="eyebrow">{profile.role} · {profile.location}</p>
		<h1 id="hero-title">{profile.headline}</h1>
		<p class="muted">{profile.intro}</p>
		<div class="actions">
			<PrimaryButton href="#contact">Let's work together</PrimaryButton>
			<TertiaryButton href="#projects">View projects</TertiaryButton>
		</div>
	</div>

	<dl class="stats">
		{#each stats as stat (stat.label)}
			<div class="card">
				<dt class="muted">{stat.label}</dt>
				<dd>{stat.value}</dd>
			</div>
		{/each}
	</dl>
</section>

<style>
	.copy {
		display: grid;
		gap: 1.25rem;
		max-width: 46rem;
	}

	.eyebrow {
		color: var(--color-primary);
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 12rem), 1fr));
		gap: 1rem;
	}

	.stats div {
		display: flex;
		flex-direction: column-reverse;
		gap: 0.25rem;
	}

	dd {
		font-family: var(--font-heading);
		font-size: var(--text-h2);
		font-weight: 600;
	}

	dt {
		font-size: var(--text-sm);
	}

	@media (prefers-color-scheme: dark) {
		.eyebrow {
			color: var(--color-focus);
		}
	}
</style>
