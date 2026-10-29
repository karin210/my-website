<script lang="ts">
	import type { InterfaceButtonProps } from './types';

	let { href, type = 'button', disabled = false, label, onclick, children }: InterfaceButtonProps = $props();
</script>

{#if href}
	<a class="btn interface" {href} aria-label={label}>{@render children()}</a>
{:else}
	<button class="btn interface" {type} {disabled} {onclick} aria-label={label}>
		{@render children()}
	</button>
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
