export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

/** The theme currently shown: the pinned one, otherwise the system preference. */
export function currentTheme(): Theme {
	const pinned = document.documentElement.dataset.theme;
	if (pinned === 'light' || pinned === 'dark') return pinned;
	return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/** Pins the theme on <html> and remembers it for the next visit. */
export function applyTheme(theme: Theme): void {
	document.documentElement.dataset.theme = theme;
	try {
		localStorage.setItem(STORAGE_KEY, theme);
	} catch {
		// Storage can be blocked; the choice then lasts for this visit only.
	}
}
