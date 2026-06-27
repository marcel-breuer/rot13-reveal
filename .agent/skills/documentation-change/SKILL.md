# Skill: Documentation Change

## Purpose

Update user-facing or governance documentation accurately and concisely.

## When to Use

Use when changing `README.md`, `AGENTS.md`, `.agent/skills/`, or agent adapter files.

## When Not to Use

Do not use for source-only changes unless documentation also changes.

## Required Context

- The documentation being changed.
- Source, tests, package metadata, or workflow files that support factual claims.

## Relevant Project Areas

- `README.md`
- `AGENTS.md`
- `.agent/skills/`
- `CLAUDE.md`
- `.cursor/rules/`
- `.github/copilot-instructions.md`

## Procedure

1. Verify each technical statement against repository files.
2. Keep instructions concise and avoid duplicating canonical rules.
3. Document only existing commands and supported workflows.
4. Update adapters as thin references only.
5. Review for stale, conflicting, or unsupported claims.

## Validation

Run configured documentation formatting checks if present. If none are configured, manually review changed Markdown and run `git diff --check`.

## Expected Output

Report documentation files changed, validation performed, and any unsupported formats or assumptions.

## Constraints

Do not modify application code, tests, dependencies, lockfiles, CI, or infrastructure during documentation-only tasks unless explicitly requested.

## Completion Criteria

Documentation is accurate, concise, non-duplicative, and validated by review or configured checks.
