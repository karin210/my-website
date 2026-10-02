<script lang="ts">
	import { profile } from '$lib/data/content';
	import InterfaceButton from './buttons/InterfaceButton.svelte';
</script>

<footer>
	<div class="bar">
		<p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
		<nav aria-label="Social">
			<ul>
				<li><a href="#top">GitHub</a></li>
				<li><a href="#top">LinkedIn</a></li>
				<li><a href="mailto:{profile.email}">Email</a></li>
			</ul>
		</nav>
		<InterfaceButton href="#top">Back to top ↑</InterfaceButton>
	</div>
</footer>

<style>
	footer {
		--color-focus: var(--color-on-primary);
		background: var(--color-primary);
		color: var(--color-on-primary);
		font-size: var(--text-sm);
	}

	.bar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem 1.5rem;
		width: var(--container);
		margin-inline: auto;
		padding-block: 1.5rem;
	}

	ul {
		display: flex;
		gap: 1.25rem;
	}
</style>
