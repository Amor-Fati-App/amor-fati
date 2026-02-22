# Tech Context

## Current Stack

- Language: JavaScript (React app, no TypeScript intended by project rules).
- Frontend framework: React 19.
- Build tool: Vite 7.
- Routing: `react-router-dom` 7.
- Auth / backend-as-a-service: Supabase (`@supabase/supabase-js`).
- Styling: Tailwind CSS 4 + project CSS assets.
- Testing tooling present: Cypress (E2E), ESLint.

## Repository Layout Notes

- Root-level package scripts proxy into `amor-fati/` for client commands.
- Main application code lives under `amor-fati/src`.
- Design reference artifacts are in `design-plans/`.

## Core Commands

- Install: `npm install`
- Run dev app: `npm start`
- Build client: `npm run build:client`
- Preview build: `npm run preview:client`
- Lint client: `npm run lint --prefix amor-fati`
- Open Cypress: `npm run cypress --prefix amor-fati`

## Environment Dependencies

- Supabase client expects:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY`

## Tooling and Quality Constraints

- ESLint is configured in `amor-fati/eslint.config.js`.
- Project conventions emphasize JavaScript-only and consistent formatting.
- Current test coverage appears minimal; Cypress scaffold is present.

## Known Technical Risks

- Auth and route guarding rely on imperative redirects (`location.href`) in places.
- Onboarding/profile flow depends on Supabase schema assumptions not documented in code.
- README is default Vite template and not yet project-specific.
