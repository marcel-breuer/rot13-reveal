# Skill: Update Dependencies

## Purpose

Manage package dependency and tooling changes safely.

## When to Use

Use when adding, removing, or upgrading dependencies in `package.json` or `bun.lock`.

## When Not to Use

Do not use for source-only, test-only, documentation-only, or CI-only changes.

## Required Context

- Requested dependency change.
- `package.json`.
- `bun.lock`.
- Relevant source or test usage.

## Relevant Project Areas

- `package.json`
- `bun.lock`
- `src/`
- `tests/`

## Procedure

1. Confirm whether the dependency is runtime or development-only.
2. Prefer no new runtime dependency unless platform APIs or existing tooling are insufficient.
3. Use Bun to update dependency metadata and lockfile.
4. Review transitive impact and licensing/security concerns at a practical level.
5. Remove unused dependencies when no longer needed.

## Validation

Run `bun install`, `bun run lint`, `bun run test`, and `bun run build`.

## Expected Output

Report dependency changes, lockfile impact, validation, and any security or compatibility notes.

## Constraints

Do not perform unrelated upgrades or unrequested major-version updates.

## Completion Criteria

Dependency metadata and lockfile are consistent, usage is justified, and validation passes.
