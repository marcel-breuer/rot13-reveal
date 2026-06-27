# Skill: Review Code

## Purpose

Review changes for correctness, security, test coverage, and maintainability.

## When to Use

Use when asked to review a diff, branch, pull request, commit, or local changes.

## When Not to Use

Do not use when the task is to implement changes unless review is explicitly requested.

## Required Context

- The diff or files under review.
- Relevant tests and configuration.
- Public API documentation when exports or behavior changed.

## Relevant Project Areas

- `src/`
- `tests/`
- `README.md`
- `package.json`
- `.github/workflows/ci.yml`

## Procedure

1. Inspect only files relevant to the reviewed change.
2. Prioritize bugs, regressions, security/privacy issues, missing tests, and release risks.
3. Cite file paths and line numbers for findings.
4. Distinguish required fixes from optional improvements.
5. Avoid repeating unchanged rules from `AGENTS.md`.

## Validation

Run targeted validation only when requested or needed to confirm a finding. Otherwise state what was reviewed.

## Expected Output

Lead with findings ordered by severity. Include open questions and a brief summary only when useful.

## Constraints

Do not make code changes during a review unless explicitly requested.

## Completion Criteria

Material risks are identified clearly, or the review states that no issues were found and notes residual test gaps.
