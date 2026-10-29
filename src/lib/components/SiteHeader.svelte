<script lang="ts">
	import { navLinks, profile } from '$lib/data/content';
	import SecondaryButton from './buttons/SecondaryButton.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header id="top">
	<div class="bar">
		<a class="brand" href="#top">{profile.name}</a>
		<nav aria-label="Main">
			<ul>
				{#each navLinks as link (link.href)}
					<li><a href={link.href}>{link.label}</a></li>
				{/each}
			</ul>
		</nav>
		<div class="actions">
			<ThemeToggle />
			<SecondaryButton href="#contact">Contact me</SecondaryButton>
		</div>
	</div>
</header>

<style>
	header {
		--color-focus: var(--color-on-primary);
		position: sticky;
		top: 0;
		z-index: 10;
		background: var(--color-primary);
		color: var(--color-on-primary);
	}

	.bar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem 1.5rem;
		width: var(--container);
		margin-inline: auto;
		padding-block: 0.75rem;
	}

	.brand {
		font-family: var(--font-heading);
		font-size: var(--text-lg);
		font-weight: 600;
		text-decoration: none;
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	nav {
		order: 3;
		width: 100%;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.5rem;
		font-size: var(--text-sm);
	}

	nav a {
		text-decoration: none;
		opacity: 0.9;
	}

	nav a:hover {
		text-decoration: underline;
		opacity: 1;
	}

	@media (min-width: 48rem) {
		nav {
			order: 0;
			width: auto;
		}
	}
</style>
