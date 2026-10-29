<script lang="ts">
	import { onMount } from 'svelte';
	import { applyTheme, currentTheme, type Theme } from '$lib/theme';
	import InterfaceButton from './buttons/InterfaceButton.svelte';

	let theme: Theme = $state('light');
	const next: Theme = $derived(theme === 'light' ? 'dark' : 'light');

	onMount(() => {
		theme = currentTheme();
	});

	function toggle(): void {
		theme = next;
		applyTheme(theme);
	}
</script>

<InterfaceButton label={`Switch to ${next} theme`} onclick={toggle}>
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		{#if next === 'dark'}
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		{:else}
			<circle cx="12" cy="12" r="5" />
			<path
				d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
			/>
		{/if}
	</svg>
</InterfaceButton>

<style>
	svg {
		width: 1.25rem;
		height: 1.25rem;
	}
</style>
