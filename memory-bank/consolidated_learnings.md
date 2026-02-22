# Consolidated Learnings

## Documentation Initialization Pattern

### Preserve + Canonicalize

- When a project already has legacy documentation with valuable context, preserve it and introduce
  canonical files required by the current documentation standard.
- Explicitly cross-reference legacy and canonical files to prevent split-brain documentation.

### Practical Bootstrapping Flow

- For React apps, initialize project context quickly by tracing:
  1. `main` entry
  2. Router composition
  3. Auth/state providers
  4. Protected route behavior
- This yields enough fidelity to seed `systemPatterns.md` and `techContext.md` without overfitting.

### Memory Bank Reliability Principle

- Memory Bank initialization should prioritize high-signal, actionable context over placeholders.
- Include explicit assumptions, open questions, and near-term next steps to support continuity
  between sessions.
