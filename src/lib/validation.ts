export type FieldName = 'name' | 'email' | 'message';
export type FieldValues = Record<FieldName, string>;
export type FieldErrors = Record<FieldName, string | null>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validators: Record<FieldName, (value: string) => string | null> = {
	name: (value) => (value.trim() ? null : 'Please enter your name.'),
	email: (value) => {
		if (!value.trim()) return 'Please enter your email address.';
		return EMAIL_PATTERN.test(value.trim()) ? null : 'Please enter a valid email address.';
	},
	message: (value) => {
		if (!value.trim()) return 'Please write a message.';
		return value.trim().length >= 10 ? null : 'Your message should be at least 10 characters.';
	}
};

export function validateField(field: FieldName, value: string): string | null {
	return validators[field](value);
}

export function validateAll(values: FieldValues): FieldErrors {
	return {
		name: validateField('name', values.name),
		email: validateField('email', values.email),
		message: validateField('message', values.message)
	};
}
