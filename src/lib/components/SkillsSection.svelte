<script lang="ts">
	import { skillGroups } from '$lib/data/content';
</script>

<section id="skills" class="section" aria-labelledby="skills-title">
	<header class="section-intro">
		<h2 id="skills-title">Skills</h2>
		<p>The tools I reach for most often.</p>
	</header>

	<ul class="grid">
		{#each skillGroups as group (group.name)}
			<li class="card">
				<h3>{group.name}</h3>
				<ul class="list muted">
					{#each group.skills as skill (skill)}
						<li>{skill}</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
		gap: 1.25rem;
	}

	.card {
		display: grid;
		gap: 0.75rem;
		align-content: start;
	}

	.list {
		display: grid;
		gap: 0.25rem;
	}
</style>
