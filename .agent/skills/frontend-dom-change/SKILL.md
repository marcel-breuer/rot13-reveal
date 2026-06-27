# Skill: Frontend DOM Change

## Purpose

Modify browser DOM behavior in the embeddable reveal helper.

## When to Use

Use when changing rendered controls, text output, links, event listeners, reveal timing, UI hardening, or cleanup behavior.

## When Not to Use

Do not use for pure string transform changes or non-DOM package metadata changes.

## Required Context

- `mountRot13Reveal` implementation.
- DOM tests in `tests/rot13.test.ts`.
- README usage and defaults when behavior is user-visible.

## Relevant Project Areas

- `src/index.ts`
- `tests/rot13.test.ts`
- `README.md`

## Procedure

1. Preserve embeddability and avoid framework assumptions.
2. Keep controls keyboard-operable and accessible through standard HTML elements.
3. Prefer `textContent`, `createTextNode`, and element APIs over raw HTML.
4. Ensure encoded data is removed after reveal where feasible.
5. Ensure `destroy()` removes listeners and restores mutated inline styles.

## Validation

Run `bun run lint`, `bun run test`, and `bun run build`.

## Expected Output

Report DOM behavior changes, accessibility or cleanup considerations, and validation.

## Constraints

Do not add CSS frameworks, app-level state libraries, or browser-incompatible APIs.

## Completion Criteria

DOM behavior is tested, accessible, cleaned up correctly, and documented when visible to users.
