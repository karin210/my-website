<script lang="ts">
	import { testimonials } from '$lib/data/content';
</script>

<section class="section" aria-labelledby="testimonials-title">
	<header class="section-intro">
		<h2 id="testimonials-title">Kind words</h2>
	</header>

	<ul class="grid">
		{#each testimonials as item (item.author)}
			<li>
				<figure class="card">
					<blockquote>“{item.quote}”</blockquote>
					<figcaption>
						<strong>{item.author}</strong>
						<span class="muted">{item.role}</span>
					</figcaption>
				</figure>
			</li>
		{/each}
	</ul>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
		gap: 1.25rem;
	}

	figure {
		display: grid;
		gap: 1rem;
		height: 100%;
		align-content: space-between;
	}

	figcaption {
		display: grid;
		font-size: var(--text-sm);
	}
</style>
