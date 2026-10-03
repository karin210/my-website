<script lang="ts">
	import { services } from '$lib/data/content';
	import SecondaryButton from './buttons/SecondaryButton.svelte';
</script>

<section id="services" class="section" aria-labelledby="services-title">
	<header class="section-intro">
		<h2 id="services-title">Services</h2>
		<p>
			How I can help outsourcers, companies and independent professionals. Not sure what fits?
			Describe the problem and we will shape the scope together.
		</p>
	</header>

	<ul class="grid">
		{#each services as service (service.title)}
			<li>
				<article class="card">
					<header>
						<ul class="audiences" aria-label="Ideal for">
							{#each service.audiences as audience (audience)}
								<li>{audience}</li>
							{/each}
						</ul>
						<h3>{service.title}</h3>
						<p class="muted">{service.description}</p>
					</header>

					<ul class="deliverables">
						{#each service.deliverables as item (item)}
							<li>{item}</li>
						{/each}
					</ul>

					<footer>
						<p class="engagement">{service.engagement}</p>
						<SecondaryButton href="#contact">Request a quote</SecondaryButton>
					</footer>
				</article>
			</li>
		{/each}
	</ul>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 19rem), 1fr));
		gap: 1.25rem;
	}

	.card {
		display: grid;
		grid-template-rows: auto 1fr auto;
		gap: 1.25rem;
		height: 100%;
	}

	header {
		display: grid;
		gap: 0.75rem;
		align-content: start;
	}

	.audiences {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.audiences li {
		padding: 0.125rem 0.625rem;
		border-radius: 999px;
		background: var(--color-secondary);
		color: var(--color-on-secondary);
		font-size: var(--text-sm);
		font-weight: 600;
	}

	.deliverables {
		display: grid;
		gap: 0.375rem;
		align-content: start;
	}

	.deliverables li {
		display: flex;
		gap: 0.5rem;
		font-size: var(--text-sm);
	}

	.deliverables li::before {
		content: '✓';
		color: var(--color-primary);
		font-weight: 700;
	}

	footer {
		display: grid;
		gap: 0.75rem;
		justify-items: start;
		padding-top: 1rem;
		border-top: 1px solid var(--color-border);
	}

	.engagement {
		font-size: var(--text-sm);
		font-weight: 600;
	}

	@media (prefers-color-scheme: dark) {
		.deliverables li::before {
			color: var(--color-focus);
		}
	}
</style>
