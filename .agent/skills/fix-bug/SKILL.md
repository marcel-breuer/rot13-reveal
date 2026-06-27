# Skill: Fix Bug

## Purpose

Correct defective behavior with a focused regression test.

## When to Use

Use when `rot13`, DOM reveal behavior, cleanup, timing, package metadata, or CI behavior is wrong.

## When Not to Use

Do not use for feature work, dependency upgrades, or broad refactors without a concrete defect.

## Required Context

- Bug report or failing test.
- Minimal related source and test files.
- Existing behavior documented in README or package metadata, if relevant.

## Relevant Project Areas

- `src/index.ts`
- `tests/rot13.test.ts`
- `tests/workflow.test.ts`
- `.github/workflows/ci.yml`
- `package.json`

## Procedure

1. Reproduce or reason to a specific failing behavior.
2. Add or update a regression test that fails without the fix when feasible.
3. Make the smallest source or configuration change that fixes the issue.
4. Avoid unrelated cleanup.
5. Update documentation only if documented behavior was wrong or ambiguous.

## Validation

Run the relevant failing test first when practical, then run `bun run lint`, `bun run test`, and `bun run build` for source fixes.

## Expected Output

Report the bug fixed, regression coverage, changed files, validation, and residual risk.

## Constraints

Do not weaken tests or quality checks to make the fix pass.

## Completion Criteria

The defect is fixed, regression coverage exists or is justified as unnecessary, and relevant validation passes.
