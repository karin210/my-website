
# Project

Personal website to show my portfolio

# Project Structure


# Coding Conventions

## CSS

- `position: absolute` must only be applied to a parent/wrapper element, never to individual sibling children. Removing an element from document flow affects all its siblings, so absolutely positioning children one-by-one cascades into every sibling needing the same treatment. Instead, wrap the group of elements that need to float together in a single parent and apply `position: absolute` to that parent — the children then keep their normal flow relative to the wrapper. If children are being hidden behind an absolutely-positioned sibling, do not fix it by absolutely positioning each child; wrap them in a parent element and set `position: absolute` on the wrapper to bring the whole group to the correct stacking layer while preserving internal document flow.
- Try to separate page sections by setting a `gap` on the parent, not by adding `padding` or `margin` on the children.
- Suppress the mobile tap-highlight on interactive elements: set `-webkit-tap-highlight-color: transparent` on `button`, `a`, and `[role="button"]` (globally) so tapping them on touch devices does not flash the default blue/grey highlight box. Keep `:focus-visible` outlines intact so keyboard users still get visible feedback.
- Visual style rules (fluid type with `clamp()`, fluid layout, tokenised colour system, CSS Modules placement, image treatment, art direction) live in [`art-guidelines.md`](./art-guidelines.md).

## HTML

- Use semantic HTML5 elements (`header`, `nav`, `main`, `section`, `article`, `footer`, etc.); never use `<div>` where a semantic element fits.
- Prefer native interactive elements with built-in accessibility and behavior over custom-built equivalents — e.g. use `<details>`/`<summary>` for collapsible dropdowns instead of a `<div>`/button combo with manually managed open state and hand-rolled `aria-expanded`/`aria-controls`/`role` attributes. Reach for a custom component only when no native element covers the interaction.

## General

- Prefer the simplest and most readable implementation. If the performance difference is not significant, always choose readability and simplicity over performance.
- Prefer idiomatic solutions for the language and framework in use — follow established patterns, conventions, and standard library usage rather than reinventing or fighting the ecosystem.
- Follow the SOLID principles as far as is reasonably possible, never at the expense of simplicity:
  - **Single Responsibility** — each module, component, composable, or function should have one clear reason to change; split mixed concerns (e.g. data fetching vs. rendering, validation vs. presentation) into separate units.
  - **Open/Closed** — design units to be extended (props, slots, composition, configuration) without modifying their existing code.
  - **Liskov Substitution** — any implementation of an interface or shared contract must be usable in place of another without breaking callers.
  - **Interface Segregation** — prefer small, focused interfaces, props, and composables over large catch-all ones; callers should not depend on shape they don't use.
  - **Dependency Inversion** — depend on abstractions, not concretions; inject dependencies (composables, services, clients) rather than hard-wiring them, so they can be swapped or mocked.
  - When SOLID and the "simplest, most readable implementation" rule conflict, favour readability — do not introduce extra layers, abstractions, or indirection purely to satisfy a principle.
- Use a `box-sizing: border-box` approach. It is mandatory on parent/wrapper components and on all direct children of `body` (outermost layout elements); it is strongly recommended — but not required — on all descendant elements below that level.
- Never launch or drive a browser without asking first. Opening a page to preview a change, taking screenshots, or driving the site through browser automation all require explicit approval in advance — ask, wait for a yes, and only then open it. Verifying through the build, type-check, tests, or reading the code needs no permission.
- Commits: never add `Co-Authored-By: Claude <...>` (or any Claude/Claude Code co-author trailer or attribution) to commit messages. This also covers session and tooling links such as `Claude-Session: https://claude.ai/code/...`, `Generated with ...`, or any other trailer naming an AI agent or the tool that produced the change — commit messages must contain no trace of agent involvement, in the subject, body, or trailers. The same applies to pull request titles and descriptions. Commit messages must list the main changes under a `Changelog:` header.

## TypeScript

- Explicit return types on all exported functions; no `any`.
- JavaScript/TypeScript: always end statements with semicolons.

## Accessibility

- All UI components must meet WCAG 2.1 AA: semantic HTML elements, descriptive `alt` text, keyboard navigability, visible focus indicators, sufficient colour contrast.

## Art Guidelines
Minimalistic website 

- **Avoid Pure Black & Pure White:** Never use `#000000` or `#FFFFFF` for primary backgrounds or body text.
  - **Light Mode:** Use off-white/slate backgrounds (e.g., `#F8F9FA`, `#F4F6F8`) so elevated cards/containers (`#FFFFFF`) pop naturally without harsh drop shadows.
  - **Dark Mode:** Use deep charcoal or navy/slate bases (e.g., `#121212`, `#0F172A`) to avoid halation, reduce eyestrain, and support layer elevation/shadows.
- **Text Neutrals:** Use high-contrast off-blacks (`#0F172A`, `#111827`) in light mode and off-whites (`#F8FAFC`, `#E4E4E7`) in dark mode.
- **Brand Tinting:** Prefer tinted dark/light neutrals over pure grayscale to keep UI surfaces harmonious with the brand palette.
