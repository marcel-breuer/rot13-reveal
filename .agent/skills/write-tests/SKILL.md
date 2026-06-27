# Skill: Write Tests

## Purpose

Add focused Vitest coverage for package behavior and workflow invariants.

## When to Use

Use when adding missing tests, improving regression coverage, or validating DOM behavior.

## When Not to Use

Do not use for documentation-only work or implementation that does not change or clarify behavior.

## Required Context

- Behavior under test.
- Existing related tests.
- Source or workflow files referenced by the tests.

## Relevant Project Areas

- `tests/rot13.test.ts`
- `tests/workflow.test.ts`
- `src/index.ts`
- `.github/workflows/ci.yml`
- `package.json`

## Procedure

1. Add tests at the observable behavior boundary.
2. Use `jsdom` only for DOM-dependent tests.
3. Use fake timers for timer behavior.
4. Keep fixtures inline and minimal unless reuse is justified.
5. Avoid assertions that lock in irrelevant implementation details.

## Validation

Run `bun run test`. Run `bun run lint` when types or imports change.

## Expected Output

Report tested behavior, changed test files, and validation.

## Constraints

Do not skip, weaken, or delete tests unless the task explicitly requires it and the reason is documented.

## Completion Criteria

Tests cover the target behavior and pass with relevant validation.
