<script lang="ts">
	import type { ButtonProps } from './types';

	let { href, type = 'button', disabled = false, children }: ButtonProps = $props();
</script>

{#if href}
	<a class="btn tertiary" {href}>{@render children()}</a>
{:else}
	<button class="btn tertiary" {type} {disabled}>{@render children()}</button>
{/if}

<style>
	.tertiary {
		background: transparent;
		border-color: currentColor;
		color: var(--color-text);
	}

	.tertiary:hover:not(:disabled) {
		background: var(--color-secondary);
	}
</style>
