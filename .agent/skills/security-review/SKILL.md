# Skill: Security Review

## Purpose

Assess security, privacy, and release-safety impact for this package.

## When to Use

Use for security reviews, dependency changes, DOM output changes, package publishing changes, or claims about obfuscation and privacy.

## When Not to Use

Do not use for routine implementation unless the change touches a trust boundary, DOM insertion, dependencies, release workflow, or sensitive data handling.

## Required Context

- Changed files or target scope.
- README claims about ROT13 and privacy.
- Dependency and workflow files when relevant.

## Relevant Project Areas

- `src/index.ts`
- `README.md`
- `package.json`
- `bun.lock`
- `.github/workflows/ci.yml`

## Procedure

1. Check that ROT13 is not represented as encryption or secret protection.
2. Check DOM writes for unsafe HTML insertion.
3. Check whether encoded data remains exposed longer than necessary.
4. Review dependency additions for maintenance, license, and supply-chain risk.
5. Review CI and publishing changes for least privilege and explicit release control.

## Validation

Run tests or static checks relevant to the reviewed change. For dependency changes, include the dependency validation path.

## Expected Output

Report actionable findings with severity and file references, or state that no material issues were found.

## Constraints

Do not upload repository contents to external scanners or services without approval.

## Completion Criteria

Security and privacy risks are assessed, actionable issues are documented or fixed, and validation is reported.
