# System Patterns

## High-Level Architecture

- Frontend-first React SPA using Vite.
- Client-side routing with `react-router-dom`.
- Auth and user session handled through Supabase client SDK.
- App is currently organized as a single web client (no separate backend service in repo).

## Application Flow (Current)

1. `src/main.jsx` boots app with `AuthProvider` and `BrowserRouter`.
2. `src/App.jsx` defines top-level routes:
   - `/` -> Landing
   - `/signup` -> SignUp
   - `/login` -> LogIn
   - `/app/*` -> Protected section via `AuthRoute`
3. Protected area renders `Layout` + nested routes (`/app`, `/app/onboarding`).

## Auth Pattern

- Auth context is implemented in `src/hooks/useAuth.jsx`.
- Session and user are stored in React state.
- Supabase `onAuthStateChange` updates local auth state.
- Guarding is currently done by:
  - `AuthRoute` calling `client.auth.getUser()` and redirecting to `/login` on error.
  - Login/Signup pages redirecting when `session` exists.

## UI Composition Patterns

- Page-level components in `src/pages/*`.
- Shared components in `src/components/*`.
- Route nesting through lightweight `Layout` wrapper and `<Outlet />`.
- Styling appears utility-first (Tailwind v4 dependency) with some custom CSS assets.

## Data / State Patterns

- Local component state via `useState`.
- Cross-app auth state via Context provider.
- No global store library currently in use.
- Onboarding currently attempts profile fetch from Supabase `profiles` table.

## Notable Implementation Gaps (Observed)

- Some redirect logic occurs directly in render path instead of effect/hooks.
- AuthRoute redirects using `location.href` (full reload behavior).
- Onboarding `profile` handling may need normalization (array vs object checks).
- Error handling style is inconsistent across components.
