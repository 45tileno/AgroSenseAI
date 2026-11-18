# AgroSenseAI redesign plan

## Scope
Redesign the existing static HTML/Tailwind dashboard without changing the existing application behavior, element IDs, authentication flow, AI recommendation flow, disease detection flow, reminders, crop guide, or chat assistant hooks. The work targets visual hierarchy, navigation clarity, responsive layout, accessibility polish, and perceived product quality.

## Design exploration
- **Field Operations Console / 0.06** — warm, grounded farm intelligence with a restrained dark-green shell and crisp operational cards.
- **Editorial Agronomy Journal / 0.04** — cream paper surfaces, serif-led storytelling, and report-like reading flow.
- **Climate-tech Glass Lab / 0.08** — translucent panels, luminous cyan accents, and a more futuristic sensor aesthetic.

### Chosen direction: Field Operations Console

- **Design Movement:** contemporary agri-tech operations software with a tactile, field-ready tone.
- **Core Principles:** make the next action obvious; separate live status from analysis; use color as meaning, not decoration; keep dense data calm and scannable.
- **Color Philosophy:** deep pine and ink create trust and concentration; oat and fog surfaces reduce glare; one chartreuse signal color marks live/healthy states while amber and coral are reserved for attention.
- **Layout Paradigm:** a full-width utility header with a compact vertical rail for primary modules and a two-column workbench for inputs and AI output; on mobile the rail becomes a horizontal scroll-free segmented nav.
- **Signature Elements:** live pulse/status chips, thin field-grid texture, and compact metric tiles with a left signal bar.
- **Interaction Philosophy:** tabs feel like workspaces, not browser tabs; active states are explicit; primary actions are visually dominant and never rely on emoji alone.
- **Animation:** only subtle pulse for live status, short 160–220ms transitions for hover/focus, and no large background crossfades behind working content.
- **Typography System:** Inter for UI and data; heavier tracking for eyebrow labels; headline hierarchy uses tight 1.05–1.15 line-height and restrained uppercase metadata.
- **Brand Essence:** practical intelligence for growers who need a clearer read on the field, now. Personality: grounded, precise, optimistic.
- **Brand Voice:** concise, useful, field-aware. Example lines: “Know what changed overnight.” and “Turn today’s conditions into the next best action.”
- **Wordmark & Logo:** retain the existing sprout mark but place it in a small rounded square with a signal-green accent and a cleaner text lockup.
- **Signature Brand Color:** chlorophyll lime `#b7e34a`, used sparingly for live signals and high-value actions.

## Implementation
1. Add a route manifest for the single-page route.
2. Add a scoped visual system at the end of `index.html` so current Tailwind classes and JavaScript hooks remain stable.
3. Restyle the page shell, header, dashboard container, stats, navigation, forms, result panels, controls, and authentication surfaces.
4. Add responsive behavior that removes the current overflowing tab strip and keeps the workbench usable on small screens.
5. Build locally, inspect generated CSS, and verify the deployed-compatible static entrypoint.
6. Commit and push to `origin/main` so the connected Vercel project can deploy the redesign.

## Project structure
- `index.html`: application markup, existing UI hooks, and the new visual system.
- `AgroSenseAI.html`: legacy/static companion page retained as-is.
- `build-css.js`: Tailwind build helper.
- `dist/output.css`: generated stylesheet produced by the existing build command.
- `public/manus-routes.json`: single-page route declaration for the managed preview contract.
