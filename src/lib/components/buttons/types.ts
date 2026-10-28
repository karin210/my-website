import type { Snippet } from 'svelte';

export interface ButtonProps {
	href?: string;
	/** Opens the link in a new tab (adds rel="noopener noreferrer"). */
	external?: boolean;
	type?: 'button' | 'submit';
	disabled?: boolean;
	children: Snippet;
}
