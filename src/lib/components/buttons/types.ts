import type { Snippet } from 'svelte';

export interface ButtonProps {
	href?: string;
	/** Opens the link in a new tab (adds rel="noopener noreferrer"). */
	external?: boolean;
	type?: 'button' | 'submit';
	disabled?: boolean;
	children: Snippet;
}

export interface InterfaceButtonProps extends ButtonProps {
	/** Accessible name; set it when the button has no visible text (icon-only). */
	label?: string;
	onclick?: () => void;
}
