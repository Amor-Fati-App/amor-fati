# Active Context

## Current Focus

Initialize and standardize Memory Bank documentation so future sessions can recover reliable
project context immediately.

## Recent Actions Completed

- Reviewed existing `memory-bank/projectbrief.md` (comprehensive PRD source).
- Audited current app entry flow and auth structure (`main.jsx`, `App.jsx`, `useAuth.jsx`,
  `AuthRoute.jsx`, onboarding/auth pages).
- Created initialization plan document:
  - `memory-bank/initialize-memory-bank-plan.md`
- Created initial core docs:
  - `memory-bank/projectBrief.md`
  - `memory-bank/productContext.md`
  - `memory-bank/systemPatterns.md`

## In-Progress Decisions

- Keep legacy `projectbrief.md` untouched as source-of-truth PRD history.
- Introduce canonical Memory Bank core files with camelCase naming per Memory Bank spec.

## Next Steps

1. Create remaining core files (`techContext.md`, `progress.md`).
2. Seed optional learning files (`raw_reflection_log.md`, `consolidated_learnings.md`).
3. Verify folder structure and summarize assumptions + confidence.
4. Commit and push initialization milestone.

## Working Assumptions

- The web client is current implementation priority.
- Supabase auth/profile model will remain central to near-term development.
- Product direction from PRD v2.0 remains active unless superseded.

## Open Questions

- Preferred canonical naming: retain both `projectbrief.md` and `projectBrief.md` long-term?
- Should memory docs include more implementation-specific roadmap items now or after next
  feature milestone?
