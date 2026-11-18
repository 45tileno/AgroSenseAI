# AgroSenseAI redesign TODO

## Refresh the application shell and visual hierarchy
- [ ] Replace the photo-dominated dashboard shell with the chosen Field Operations Console treatment while keeping all existing application sections and JavaScript hooks.
- [ ] Preserve the existing authentication, recommendations, recommendation history, disease detection, reminders, crop guide, chat assistant, PDF download, camera, and upload behaviors.

## Improve dashboard navigation and responsive behavior
- [ ] Make the primary workspaces visually distinct and readable without the current horizontal overflow.
- [ ] Ensure the dashboard remains usable at desktop, tablet, and mobile widths.

## Polish data-entry and AI result surfaces
- [ ] Establish clear primary/secondary actions, readable field labels, focus states, and calmer result panels.
- [ ] Make live status, farm health, and metric cards scan-friendly and semantically color-coded.

## Add field analytics
- [x] Add a seven-day trend chart to the Field Operations Console with selectable soil moisture, ambient temperature, and light metrics, live selected-zone context, current/average/target readouts, and an operational takeaway.
- [x] Add CSV export for the selected field and analytics metric, including the seven-day values and report metadata.
- [x] Add PDF export for a formatted analytics report using the existing browser PDF library.
- [x] Add predictive soil-moisture alerts based on each zone's irrigation threshold, with an optional desktop notification permission flow.
- [x] Add a comparison view with selectable zones and side-by-side cards that follow the active analytics metric.

## Verify and deliver
- [ ] Build the existing static project successfully.
- [ ] Add and verify the single-page route manifest.
- [ ] Commit and push the completed redesign to the connected `main` branch.
