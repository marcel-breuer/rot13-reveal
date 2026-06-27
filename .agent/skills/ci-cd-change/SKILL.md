# Skill: CI/CD Change

## Purpose

Modify verification and release workflow configuration safely.

## When to Use

Use when changing `.github/workflows/ci.yml` or release-related package scripts.

## When Not to Use

Do not use for source-only or documentation-only changes.

## Required Context

- `.github/workflows/ci.yml`.
- `package.json` scripts.
- `tests/workflow.test.ts`.

## Relevant Project Areas

- `.github/workflows/ci.yml`
- `package.json`
- `tests/workflow.test.ts`

## Procedure

1. Preserve separation between CI verification and npm publishing unless release automation is explicitly requested.
2. Keep workflow permissions least-privilege.
3. Keep Node.js and Bun setup aligned with package requirements.
4. Update workflow tests when expected CI behavior changes.
5. Avoid adding secrets or publishing steps without explicit approval.

## Validation

Run `bun run test` for workflow assertions. Run `bun run lint` and `bun run build` when scripts or package behavior change.

## Expected Output

Report workflow or script changes, validation, and release/security implications.

## Constraints

Do not run publishing commands or add deployment credentials without explicit release approval.

## Completion Criteria

CI/CD behavior is intentional, tested where possible, and least-privilege.
