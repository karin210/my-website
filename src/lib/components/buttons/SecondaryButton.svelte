<script lang="ts">
	import type { ButtonProps } from './types';

	let { href, type = 'button', disabled = false, children }: ButtonProps = $props();
</script>

{#if href}
	<a class="btn secondary" {href}>{@render children()}</a>
{:else}
	<button class="btn secondary" {type} {disabled}>{@render children()}</button>
{/if}

<style>
	.secondary {
		background: var(--color-secondary);
		color: var(--color-on-secondary);
	}

	.secondary:hover:not(:disabled) {
		filter: brightness(0.95);
	}
</style>
