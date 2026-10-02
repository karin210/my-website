<script lang="ts">
	import { faqs } from '$lib/data/content';
</script>

<section id="faq" class="section" aria-labelledby="faq-title">
	<header class="section-intro">
		<h2 id="faq-title">Frequently asked questions</h2>
	</header>

	<div class="list">
		{#each faqs as faq (faq.question)}
			<details class="card">
				<summary>{faq.question}</summary>
				<p class="muted">{faq.answer}</p>
			</details>
		{/each}
	</div>
</section>

<style>
	.list {
		display: grid;
		gap: 0.75rem;
		max-width: 48rem;
	}

	details {
		display: grid;
		gap: 0.75rem;
	}

	summary {
		font-weight: 600;
		cursor: pointer;
	}
</style>
