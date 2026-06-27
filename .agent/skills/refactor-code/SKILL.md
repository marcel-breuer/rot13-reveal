# Skill: Refactor Code

## Purpose

Improve code structure while preserving public behavior.

## When to Use

Use for simplifying `src/index.ts`, reducing duplication, or improving internal clarity without changing package behavior.

## When Not to Use

Do not use when behavior or public API changes are intended; use `implement-feature` or `public-api-change` instead.

## Required Context

- Current source file.
- Existing tests covering affected behavior.
- Any documented behavior in README.

## Relevant Project Areas

- `src/index.ts`
- `tests/rot13.test.ts`
- `README.md`

## Procedure

1. Identify the behavior-preserving transformation.
2. Keep exported API names and types stable.
3. Avoid broad rewrites and speculative helpers.
4. Add tests only when existing coverage is insufficient to prove behavior is preserved.
5. Review the diff for accidental public behavior changes.

## Validation

Run `bun run lint`, `bun run test`, and `bun run build`.

## Expected Output

Report the structural change, validations, and confirmation that public behavior is intended to be unchanged.

## Constraints

Do not hand-edit `dist/` or reformat unrelated files.

## Completion Criteria

Code is simpler or clearer, behavior is preserved, and validation passes.
