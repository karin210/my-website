import desktopFrame from '$lib/assets/images/desktop-frame.png';
import phoneFrame from '$lib/assets/images/phone-frame.png';
import tabletFrame from '$lib/assets/images/tablet-frame.png';

export type DeviceKind = 'desktop' | 'phone' | 'tablet';

export interface DeviceFrame {
	label: string;
	frame: string;
	/** Frame image size in px. */
	width: number;
	height: number;
	/** The transparent screen area inside the frame image, in px. */
	screen: { x: number; y: number; width: number; height: number };
}

export const deviceKinds: DeviceKind[] = ['desktop', 'phone', 'tablet'];

export const devices: Record<DeviceKind, DeviceFrame> = {
	desktop: {
		label: 'Desktop',
		frame: desktopFrame,
		width: 1024,
		height: 768,
		screen: { x: 101, y: 39, width: 836, height: 503 }
	},
	phone: {
		label: 'Phone',
		frame: phoneFrame,
		width: 1012,
		height: 2041,
		screen: { x: 46, y: 109, width: 935, height: 1828 }
	},
	tablet: {
		label: 'Tablet',
		frame: tabletFrame,
		width: 1125,
		height: 1648,
		screen: { x: 155, y: 182, width: 800, height: 1280 }
	}
};

/**
 * CSS padding that fits a box over the frame's screen. Percent padding is relative to
 * the width on every side, so the top and bottom are converted with the frame width too.
 */
export function screenInsets({ width, height, screen }: DeviceFrame): string {
	const percent = (px: number): string => `${(px / width) * 100}%`;
	const right = width - screen.x - screen.width;
	const bottom = height - screen.y - screen.height;
	return `${percent(screen.y)} ${percent(right)} ${percent(bottom)} ${percent(screen.x)}`;
}
