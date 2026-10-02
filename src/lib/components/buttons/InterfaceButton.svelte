<script lang="ts">
	import type { ButtonProps } from './types';

	let { href, type = 'button', disabled = false, children }: ButtonProps = $props();
</script>

{#if href}
	<a class="btn interface" {href}>{@render children()}</a>
{:else}
	<button class="btn interface" {type} {disabled}>{@render children()}</button>
{/if}

<style>
	.interface {
		background: transparent;
		border-radius: var(--radius);
		min-height: 2.5rem;
		padding-inline: 0.75rem;
		color: inherit;
	}

	.interface:hover:not(:disabled) {
		background: rgb(255 255 255 / 0.12);
	}
</style>
