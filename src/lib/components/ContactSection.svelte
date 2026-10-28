<script lang="ts">
	import { profile } from '$lib/data/content';
	import { validateAll, type FieldName, type FieldValues } from '$lib/validation';
	import FormField from './FormField.svelte';
	import SecondaryButton from './buttons/SecondaryButton.svelte';
	import whatsappIcon from '$lib/assets/icons/whatsapp-icon.svg?raw';
	import phoneIcon from '$lib/assets/icons/phone-call-icon.svg?raw';

	// wa.me needs the international number with digits only (no "+", spaces or dashes).
	const whatsappHref = `https://wa.me/${profile.phone.replace(/\D/g, '')}`;
	const phoneHref = `tel:${profile.phone.replace(/[^\d+]/g, '')}`;

	const values: FieldValues = $state({ name: '', email: '', message: '' });
	const edited: Record<FieldName, boolean> = $state({ name: false, email: false, message: false });
	const blurred: Record<FieldName, boolean> = $state({ name: false, email: false, message: false });

	let submitting = $state(false);
	let sent = $state(false);

	const errors = $derived(validateAll(values));
	const isValid = $derived(Object.values(errors).every((error) => error === null));

	// An error is only surfaced once the field has been both edited and left.
	function visibleError(field: FieldName): string | null {
		return edited[field] && blurred[field] ? errors[field] : null;
	}

	async function handleSubmit(event: SubmitEvent): Promise<void> {
		event.preventDefault();
		if (!isValid || submitting) return;

		submitting = true;
		// Placeholder: replace with the real request.
		await new Promise((resolve) => setTimeout(resolve, 800));
		submitting = false;
		sent = true;
	}
</script>

<section id="contact" class="section" aria-labelledby="contact-title">
	<div class="panel">
		<header class="section-intro">
			<h2 id="contact-title">Let's build something together</h2>
			<p>Tell me about your project, or write directly to {profile.email}.</p>
			<ul class="channels">
				<li>
					<SecondaryButton href={whatsappHref} external>
						<span class="icon" aria-hidden="true">{@html whatsappIcon}</span>
						WhatsApp
					</SecondaryButton>
				</li>
				<li>
					<SecondaryButton href={phoneHref}>
						<span class="icon" aria-hidden="true">{@html phoneIcon}</span>
						Call {profile.phone}
					</SecondaryButton>
				</li>
			</ul>
		</header>

		{#if sent}
			<p class="status" role="status">Thanks {values.name}! I will get back to you within two working days.</p>
		{:else}
			<form novalidate onsubmit={handleSubmit}>
				<FormField
					id="contact-name"
					label="Name"
					autocomplete="name"
					bind:value={values.name}
					error={visibleError('name')}
					onedit={() => (edited.name = true)}
					onleave={() => (blurred.name = true)}
				/>
				<FormField
					id="contact-email"
					label="Email"
					type="email"
					autocomplete="email"
					bind:value={values.email}
					error={visibleError('email')}
					onedit={() => (edited.email = true)}
					onleave={() => (blurred.email = true)}
				/>
				<FormField
					id="contact-message"
					label="Message"
					multiline
					bind:value={values.message}
					error={visibleError('message')}
					onedit={() => (edited.message = true)}
					onleave={() => (blurred.message = true)}
				/>
				<div class="submit">
					<SecondaryButton type="submit" disabled={!isValid || submitting}>
						{submitting ? 'Sending…' : 'Send message'}
					</SecondaryButton>
				</div>
			</form>
		{/if}
	</div>
</section>

<style>
	.panel {
		display: grid;
		gap: var(--gap-content);
		background: var(--color-secondary);
		color: var(--color-on-secondary);
		border-radius: var(--radius);
		padding: clamp(1.5rem, 5vw, 3rem);
	}

	.panel :global(.field) {
		color: var(--color-text);
	}

	.channels {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		list-style: none;
		padding: 0;
	}

	.icon {
		display: inline-flex;
	}

	.icon :global(svg) {
		width: 1.25rem;
		height: 1.25rem;
	}

	form {
		display: grid;
		gap: 1.25rem;
		max-width: 36rem;
	}

	.submit {
		display: flex;
	}

	.status {
		font-weight: 600;
	}
</style>
