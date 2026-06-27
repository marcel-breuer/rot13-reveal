# Skill: Implement Feature

## Purpose

Add focused behavior to the TypeScript package while preserving the existing public contract and minimal dependency footprint.

## When to Use

Use when adding or extending `rot13`, `mountRot13Reveal`, options, generated package output, or documented package behavior.

## When Not to Use

Do not use for pure tests, documentation-only changes, dependency upgrades, or code review without implementation.

## Required Context

- Relevant task requirements.
- `src/index.ts`.
- Related tests in `tests/`.
- `README.md` when public behavior changes.
- `package.json` when exports, scripts, or package metadata change.

## Relevant Project Areas

- `src/index.ts`
- `tests/*.test.ts`
- `README.md`
- `package.json`

## Procedure

1. Identify the smallest public or internal behavior change that satisfies the task.
2. Preserve existing exported names unless a breaking change is explicitly required.
3. Prefer platform DOM and TypeScript APIs over new dependencies.
4. Update or add Vitest coverage for observable behavior.
5. Update README examples or API docs when user-visible behavior changes.

## Validation

Run `bun run lint`, `bun run test`, and `bun run build` for source or package behavior changes.

## Expected Output

Report changed behavior, changed files, validations run, and any public API or compatibility impact.

## Constraints

Do not hand-edit `dist/`. Do not add runtime dependencies without explicit justification.

## Completion Criteria

The feature is implemented, documented when needed, tested, and passes required validation.
