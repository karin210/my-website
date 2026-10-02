<script lang="ts">
	import { profile } from '$lib/data/content';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import SkillsSection from '$lib/components/SkillsSection.svelte';
	import ExperienceSection from '$lib/components/ExperienceSection.svelte';
	import TestimonialsSection from '$lib/components/TestimonialsSection.svelte';
	import FaqSection from '$lib/components/FaqSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
</script>

<svelte:head>
	<title>{profile.name} — {profile.role}</title>
	<meta name="description" content={profile.intro} />
</svelte:head>

<HeroSection />
<ProjectsSection />
<SkillsSection />
<ExperienceSection />
<TestimonialsSection />
<FaqSection />
<ContactSection />
