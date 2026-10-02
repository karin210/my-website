<script lang="ts">
	interface Props {
		id: string;
		label: string;
		value: string;
		error: string | null;
		type?: 'text' | 'email';
		multiline?: boolean;
		autocomplete?: 'name' | 'email' | 'off';
		onedit: () => void;
		onleave: () => void;
	}

	let {
		id,
		label,
		value = $bindable(),
		error,
		type = 'text',
		multiline = false,
		autocomplete = 'off',
		onedit,
		onleave
	}: Props = $props();

	const errorId = $derived(`${id}-error`);
</script>

<div class="field">
	<label for={id}>{label}</label>

	{#if multiline}
		<textarea
			{id}
			rows="5"
			required
			bind:value
			oninput={onedit}
			onblur={onleave}
			aria-invalid={error ? 'true' : undefined}
			aria-describedby={error ? errorId : undefined}
		></textarea>
	{:else}
		<input
			{id}
			{type}
			{autocomplete}
			required
			bind:value
			oninput={onedit}
			onblur={onleave}
			aria-invalid={error ? 'true' : undefined}
			aria-describedby={error ? errorId : undefined}
		/>
	{/if}

	{#if error}
		<div class="popup">
			<p id={errorId} role="alert">
				<span class="icon" aria-hidden="true">!</span>
				{error}
			</p>
		</div>
	{/if}
</div>

<style>
	.field {
		position: relative;
		display: grid;
		gap: 0.375rem;
	}

	label {
		font-size: var(--text-sm);
		font-weight: 600;
	}

	input,
	textarea {
		width: 100%;
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		background: var(--color-surface);
		color: var(--color-text);
		font: inherit;
		padding: 0.625rem 0.875rem;
	}

	[aria-invalid='true'] {
		border-color: var(--color-tertiary);
	}

	/* Branded stand-in for the native reportValidity() bubble */
	.popup {
		position: absolute;
		top: 100%;
		left: 0.75rem;
		z-index: 5;
		max-width: calc(100% - 1.5rem);
		margin-top: 0.5rem;
		pointer-events: none;
	}

	.popup p {
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: var(--color-surface);
		color: var(--color-text);
		border: 1px solid var(--color-border);
		border-radius: 0.5rem;
		padding: 0.5rem 0.75rem;
		font-size: var(--text-sm);
		box-shadow: var(--shadow-popup);
	}

	.popup p::before {
		content: '';
		position: absolute;
		bottom: 100%;
		left: 1rem;
		border: 0.5rem solid transparent;
		border-bottom-color: var(--color-border);
	}

	.icon {
		display: inline-grid;
		flex: none;
		place-items: center;
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 0.25rem;
		background: var(--color-tertiary);
		color: var(--color-on-tertiary);
		font-weight: 700;
		font-size: 0.8rem;
	}
</style>
