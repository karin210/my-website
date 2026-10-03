// Placeholder content — replace with the real information.

export interface NavLink {
	label: string;
	href: string;
}

export interface Project {
	title: string;
	description: string;
	tags: string[];
	year: number;
	href: string;
}

export interface SkillGroup {
	name: string;
	skills: string[];
}

export interface Service {
	title: string;
	description: string;
	audiences: string[];
	deliverables: string[];
	engagement: string;
}

export interface Job {
	period: string;
	role: string;
	company: string;
	summary: string;
}

export interface Testimonial {
	quote: string;
	author: string;
	role: string;
}

export interface Faq {
	question: string;
	answer: string;
}

export interface Stat {
	value: string;
	label: string;
}

export const profile = {
	name: 'Alex Morgan',
	role: 'Frontend developer & designer',
	location: 'Lisbon, Portugal',
	email: 'hello@example.com',
	headline: 'I build calm, fast interfaces for products people enjoy using.',
	intro:
		'Independent developer with 8 years of experience turning rough ideas into polished, accessible web apps. Currently open to new projects.'
};

export const navLinks: NavLink[] = [
	{ label: 'Projects', href: '#projects' },
	{ label: 'Services', href: '#services' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'FAQ', href: '#faq' }
];

export const stats: Stat[] = [
	{ value: '8+', label: 'Years of experience' },
	{ value: '45', label: 'Projects shipped' },
	{ value: '20', label: 'Happy clients' }
];

export const projects: Project[] = [
	{
		title: 'Fieldnotes',
		description: 'A note-taking app for researchers with offline sync and instant full-text search.',
		tags: ['SvelteKit', 'TypeScript', 'PostgreSQL'],
		year: 2026,
		href: '#'
	},
	{
		title: 'Lumen Analytics',
		description: 'Privacy-first analytics dashboard that turns raw events into readable weekly reports.',
		tags: ['React', 'D3', 'Node.js'],
		year: 2025,
		href: '#'
	},
	{
		title: 'Harbor Market',
		description: 'Headless storefront for a small ceramics studio, tuned to a 98 Lighthouse score.',
		tags: ['Astro', 'Stripe', 'Sanity'],
		year: 2025,
		href: '#'
	},
	{
		title: 'Tidewalk',
		description: 'Mobile-first tide and trail planner used by 12,000 hikers along the coast.',
		tags: ['PWA', 'Vue', 'Mapbox'],
		year: 2024,
		href: '#'
	}
];

export const services: Service[] = [
	{
		title: 'Websites & landing pages',
		description: 'Fast, accessible marketing sites that explain what you do and convert visitors into leads.',
		audiences: ['Companies', 'Professionals'],
		deliverables: ['Design and build', 'CMS setup', 'SEO and performance tuning'],
		engagement: 'Fixed price · 3–6 weeks'
	},
	{
		title: 'Web app development',
		description: 'Custom dashboards, portals and internal tools built from first prototype to production launch.',
		audiences: ['Startups', 'Companies'],
		deliverables: ['Architecture and API design', 'Frontend and backend build', 'Deployment and handover'],
		engagement: 'Milestones · 2–4 months'
	},
	{
		title: 'Design systems & UI audits',
		description: 'A consistent, documented component library, or a review of your current UI with a prioritised fix list.',
		audiences: ['Product teams', 'Agencies'],
		deliverables: ['Component library', 'Accessibility audit', 'Design tokens and docs'],
		engagement: 'Fixed price · 2–4 weeks'
	},
	{
		title: 'White-label & outsourced delivery',
		description: 'A reliable extra pair of hands for your clients’ projects, working quietly under your brand.',
		audiences: ['Agencies', 'Outsourcers'],
		deliverables: ['Pixel-accurate implementation', 'Clear written updates', 'NDA and handover docs'],
		engagement: 'Per project or hourly'
	},
	{
		title: 'Ongoing support & retainers',
		description: 'Reserved monthly hours for improvements, bug fixes and maintenance, with fast turnaround.',
		audiences: ['Companies', 'Professionals'],
		deliverables: ['Prioritised backlog', 'Monitoring and updates', 'Monthly summary'],
		engagement: 'Monthly retainer'
	},
	{
		title: 'Consulting & code reviews',
		description: 'Short, focused sessions to unblock your team, review pull requests or plan a technical roadmap.',
		audiences: ['Product teams', 'Founders'],
		deliverables: ['Written recommendations', 'Live walkthrough', 'Follow-up Q&A'],
		engagement: 'Hourly or day rate'
	}
];

export const skillGroups: SkillGroup[] = [
	{ name: 'Frontend', skills: ['HTML & CSS', 'TypeScript', 'Svelte', 'React', 'Accessibility'] },
	{ name: 'Backend', skills: ['Node.js', 'PostgreSQL', 'REST & GraphQL', 'Serverless'] },
	{ name: 'Design', skills: ['Figma', 'Design systems', 'Prototyping', 'Motion'] }
];

export const jobs: Job[] = [
	{
		period: '2023 – Present',
		role: 'Freelance developer',
		company: 'Self-employed',
		summary: 'Designing and building websites and web apps for startups and small studios.'
	},
	{
		period: '2020 – 2023',
		role: 'Senior frontend engineer',
		company: 'Brightwave',
		summary: 'Led the rebuild of the customer dashboard and introduced a shared component library.'
	},
	{
		period: '2018 – 2020',
		role: 'Web developer',
		company: 'Northpoint Agency',
		summary: 'Delivered 20+ marketing sites and campaign microsites for regional brands.'
	}
];

export const testimonials: Testimonial[] = [
	{
		quote: 'Alex turned a vague brief into a product our users love. Communication was excellent throughout.',
		author: 'Jordan Lee',
		role: 'Founder, Fieldnotes'
	},
	{
		quote: 'Fast, careful and genuinely curious about the problem. We shipped a month ahead of plan.',
		author: 'Sam Rivera',
		role: 'Product lead, Brightwave'
	},
	{
		quote: 'The best accessibility work we have had on any project. Clean code, too.',
		author: 'Priya Nair',
		role: 'CTO, Harbor Market'
	}
];

export const faqs: Faq[] = [
	{
		question: 'What kinds of projects do you take on?',
		answer: 'Marketing sites, web apps and design systems, from first prototype to production launch.'
	},
	{
		question: 'How long does a typical project take?',
		answer: 'Most sites take 3–6 weeks and larger apps 2–4 months, depending on scope.'
	},
	{
		question: 'Do you work with teams or only solo?',
		answer: 'Both. I am happy to join an existing team or own a project end to end.'
	},
	{
		question: 'How can we get started?',
		answer: 'Send a short message using the form below and I will reply within two working days.'
	}
];
