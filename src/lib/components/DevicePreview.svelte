<script lang="ts">
	import { deviceKinds, devices, screenInsets, type DeviceKind } from '$lib/data/devices';

	interface Props {
		title: string;
		/** Screenshot per device; a device without one shows an empty frame. */
		previews?: Partial<Record<DeviceKind, string>>;
	}

	let { title, previews = {} }: Props = $props();

	const id = $props.id();
	const name = `device-${id}`;
	let selected: DeviceKind = $state('desktop');

	const device = $derived(devices[selected]);
	const screenshot = $derived(previews[selected]);
</script>

<div class="preview">
	<fieldset class="tabs">
		<legend class="sr-only">Device preview for {title}</legend>
		{#each deviceKinds as kind (kind)}
			<label class:active={selected === kind}>
				<input class="sr-only" type="radio" {name} value={kind} bind:group={selected} />
				{devices[kind].label}
			</label>
		{/each}
	</fieldset>

	<figure class="stage">
		<div class="device" style:aspect-ratio="{device.width} / {device.height}">
			<div class="screen" style:padding={screenInsets(device)}>
				{#if screenshot}
					<img
						class="shot"
						src={screenshot}
						alt="{title} on {device.label.toLowerCase()}"
						loading="lazy"
						decoding="async"
					/>
				{/if}
			</div>
			<img class="frame" src={device.frame} alt="" width={device.width} height={device.height} />
		</div>
	</figure>
</div>

<style>
	.preview {
		display: grid;
		gap: 0.75rem;
	}

	.tabs {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		justify-self: start;
		margin: 0;
		padding: 0.25rem;
		border: 1px solid var(--color-border);
		border-radius: 999px;
		background: var(--color-background);
	}

	label {
		position: relative;
		border-radius: 999px;
		padding: 0.25rem 0.875rem;
		color: var(--color-text-muted);
		font-size: var(--text-sm);
		font-weight: 600;
		cursor: pointer;
	}

	label:hover {
		color: var(--color-text);
	}

	label.active {
		background: var(--color-primary);
		color: var(--color-on-primary);
	}

	label:has(input:focus-visible) {
		outline: 3px solid var(--color-focus);
		outline-offset: 2px;
	}

	/* The stage keeps one size so switching devices never moves the content below. */
	.stage {
		display: grid;
		place-items: center;
		aspect-ratio: 4 / 3;
		margin: 0;
		border-radius: var(--radius);
		background: var(--color-secondary);
	}

	/*
	 * Screen and frame share one grid cell: the frame sits on top of the screenshot.
	 * minmax(0, 1fr) tracks stop a large screenshot from stretching the device.
	 */
	.device {
		display: grid;
		grid-template: minmax(0, 1fr) / minmax(0, 1fr);
		height: 92%;
		max-width: 100%;
	}

	.screen,
	.frame {
		grid-area: 1 / 1;
	}

	.screen {
		display: grid;
		grid-template: minmax(0, 1fr) / minmax(0, 1fr);
		box-sizing: border-box;
		overflow: hidden;
		background: var(--color-surface);
	}

	/* Image treatment: slight colour lift plus a soft vignette. */
	.screen > * {
		grid-area: 1 / 1;
		min-width: 0;
		min-height: 0;
	}

	.screen::after {
		content: '';
		grid-area: 1 / 1;
		box-shadow: inset 0 0 2rem rgb(15 23 42 / 0.25);
	}

	.shot {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
		filter: saturate(1.05) contrast(1.03);
	}

	.frame {
		width: 100%;
		height: 100%;
		min-height: 0;
		pointer-events: none;
	}
</style>
