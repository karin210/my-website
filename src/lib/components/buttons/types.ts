import type { Snippet } from 'svelte';

export interface ButtonProps {
	href?: string;
	type?: 'button' | 'submit';
	disabled?: boolean;
	children: Snippet;
}
