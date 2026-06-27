# Skill: Public API Change

## Purpose

Control changes to exported symbols, package entry points, types, and documented API behavior.

## When to Use

Use when changing exports from `src/index.ts`, `RevealOptions`, package `exports`, build output expectations, or README API docs.

## When Not to Use

Do not use for internal-only refactors that preserve public behavior.

## Required Context

- `src/index.ts`.
- `package.json`.
- `README.md`.
- Existing API tests.

## Relevant Project Areas

- `src/index.ts`
- `tests/rot13.test.ts`
- `README.md`
- `package.json`
- `tsconfig.json`

## Procedure

1. Identify whether the change is additive, compatible, or breaking.
2. Preserve ESM, CommonJS, and declaration output expectations.
3. Update tests for exported behavior and types where feasible.
4. Update README API sections and examples.
5. Call out breaking changes explicitly.

## Validation

Run `bun run lint`, `bun run test`, and `bun run build`.

## Expected Output

Report API changes, compatibility impact, changed files, and validation.

## Constraints

Do not change package entry points or generated output expectations without a task requirement.

## Completion Criteria

The public contract is coherent across source, tests, package metadata, and documentation.
