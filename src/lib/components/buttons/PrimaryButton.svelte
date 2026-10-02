<script lang="ts">
	import type { ButtonProps } from './types';

	let { href, type = 'button', disabled = false, children }: ButtonProps = $props();
</script>

{#if href}
	<a class="btn primary" {href}>{@render children()}</a>
{:else}
	<button class="btn primary" {type} {disabled}>{@render children()}</button>
{/if}

<style>
	.primary {
		background: var(--color-primary);
		color: var(--color-on-primary);
		min-height: 3.25rem;
		padding-inline: clamp(1.5rem, 3vw, 2rem);
		font-size: var(--text-base);
	}

	.primary:hover:not(:disabled) {
		filter: brightness(1.12);
	}
</style>
