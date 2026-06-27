# Repository Instructions

These instructions apply to every human or AI coding agent working in this repository, regardless of the tool, model, IDE, extension, CLI, automation platform, or execution environment.

## Scope and Applicability

- This root `AGENTS.md` is the canonical source for project-wide rules.
- Local `AGENTS.md` files MAY add directory-specific rules. The nearest applicable `AGENTS.md` takes precedence for local implementation details.
- Local rules MUST NOT weaken security, privacy, licensing, or compliance requirements.
- Agent-specific adapter files MUST be thin references to this file, local `AGENTS.md` files, and `.agent/skills/`; they MUST NOT duplicate or contradict the canonical rules.
- Shared skills in `.agent/skills/` supplement this file and never override it.

## Instruction Priority

Use this priority order:

1. Explicit task requirements and acceptance criteria.
2. Security, privacy, legal, and compliance requirements.
3. Nearest applicable local `AGENTS.md`.
4. Root `AGENTS.md`.
5. Existing architecture and established repository patterns.
6. Repository configuration.
7. Tests and technical documentation.
8. Official language and framework documentation.
9. Established community standards.
10. Explicitly documented assumptions.

Agents MUST NOT invent business requirements.

## Project Overview

- This repository is a TypeScript library package, `@marcel-breuer/rot13-reveal`, for client-side ROT13 obfuscation and interaction-triggered reveal behavior.
- Runtime code lives in `src/index.ts` and exports `rot13`, `mountRot13Reveal`, and `RevealOptions`.
- Tests live in `tests/` and use Vitest. DOM behavior is tested with the `jsdom` test environment.
- Build output is generated into `dist/` by `tsup` as ESM, CommonJS, and declaration files.
- Bun is the package manager. `bun.lock` is the authoritative lockfile.
- CI is defined in `.github/workflows/ci.yml` and runs install, lint, tests, and build on Node.js 24 with Bun.
- No Docker, database, backend service, infrastructure-as-code, or web application framework is currently configured.

## Source of Truth

For technical decisions, prefer:

1. Existing implementation and established patterns.
2. Project configuration.
3. Tests.
4. Repository documentation.
5. Official TypeScript, Bun, Vitest, jsdom, and tsup documentation.
6. Established JavaScript and TypeScript standards.

Agents MUST NOT replace existing conventions with personal preferences without a concrete technical reason.

## Token Efficiency

- Read only files relevant to the current task.
- Do not scan the full repository when targeted inspection is sufficient.
- Prefer precise searches over broad file reads.
- Avoid repeatedly reading unchanged files.
- Do not restate the complete task before starting.
- Do not repeat rules already defined in this file.
- Do not include long implementation plans unless task complexity requires them.
- Keep plans concise and focused on execution-critical steps.
- Do not narrate routine tool usage.
- Report only findings that affect implementation, validation, risk, or review.
- Prefer diffs and targeted edits over rewriting complete files.
- Avoid creating abstractions, documentation, comments, tests, or files that are not required.
- Do not produce large code excerpts in final responses when file references are sufficient.
- Do not duplicate the same information across summaries, findings, and completion reports.
- Use concise tables or short lists where they reduce repetition.
- Token efficiency MUST NOT justify skipping required analysis, validation, security review, or correctness checks.

Final output SHOULD normally contain only what changed, which files changed, validations executed, and unresolved issues, assumptions, or risks. Omit empty sections.

## Language and Framework Standards

- Use TypeScript for source and tests.
- Preserve strict TypeScript behavior from `tsconfig.json`.
- Public exports MUST have explicit, stable types.
- Runtime code SHOULD remain browser-compatible and avoid Node-only APIs.
- Keep production dependency count at zero unless a task explicitly justifies adding a runtime dependency.
- DOM code MUST use standard browser APIs and clean up event listeners or mutated styles when lifecycle helpers expose cleanup.
- Asynchronous behavior MUST be deterministic and testable.
- Do not introduce framework-specific code unless the package scope changes through an explicit requirement.

## Architecture Rules

- Keep package implementation in `src/`.
- Keep tests in `tests/`.
- Keep generated build output in `dist/`; do not hand-edit generated files.
- `rot13` MUST remain a deterministic string transform with no side effects.
- `mountRot13Reveal` owns DOM rendering, event binding, reveal timing, optional mailto rendering, UI hardening, and cleanup for its container.
- New behavior SHOULD be added through focused options or small helpers only when it preserves the simple public API.
- New abstractions require a concrete benefit for readability, testing, reuse, or public API stability.

## Code Quality

- Run configured linting, tests, and builds relevant to the change.
- Keep functions focused and observable behavior clear.
- Do not leave dead code, commented-out code, unused imports, or unused variables.
- Avoid speculative abstractions and unnecessary duplication.
- Use meaningful constants for unexplained literals when they improve clarity.
- Comments SHOULD explain why; avoid comments that restate what the code does.
- Do not make unintended public API changes.
- Explicitly identify breaking changes.
- Do not add broad disable comments, ignore rules, unsafe casts, or type assertions only to bypass checks.
- Do not weaken existing quality checks.

## Naming Conventions

- Source and test files use lowercase descriptive names with `.ts` extensions.
- Exported functions use `camelCase`.
- Types use `PascalCase`.
- Constants use `UPPER_SNAKE_CASE` when module-level and immutable.
- Tests use behavior-focused `describe` and `it` names.
- Names MUST be domain-specific and unambiguous.

## Testing Rules

- Use Vitest for tests.
- Place tests in `tests/` with `*.test.ts` names.
- Use `// @vitest-environment jsdom` for tests that exercise DOM behavior.
- Add or update tests for new or changed business logic, public API behavior, bug fixes, DOM lifecycle behavior, and build or release workflow changes.
- Test observable behavior rather than implementation details.
- Keep tests deterministic and isolated.
- Use fake timers for timer-dependent behavior where appropriate.
- Do not remove or weaken tests merely to make changes pass.
- Do not ignore failures or update snapshots without review. This repository currently has no snapshot test workflow.

## Validation Commands

Use project-defined commands. If a command cannot be executed, state why.

| Change type | Required validation |
| --- | --- |
| TypeScript source | `bun run lint`, `bun run test`, `bun run build` |
| Tests | `bun run test`; include `bun run lint` when types change |
| Public API or package metadata | `bun run lint`, `bun run test`, `bun run build` |
| CI workflow | `bun run test` for workflow tests, plus review `.github/workflows/ci.yml` syntax |
| Dependencies | `bun install`, lockfile review, `bun run lint`, `bun run test`, `bun run build` |
| Documentation or governance only | Review changed Markdown and run available formatting checks only if configured |

Available commands:

- `bun install`
- `bun run clean`
- `bun run lint`
- `bun run test`
- `bun run test:watch`
- `bun run build`
- `bun run prepack`
- `bun run publish:npm`

`bun run publish:npm` MUST NOT be run without explicit release approval.

## Dependency Management

- Bun is the package manager; keep `bun.lock` synchronized with `package.json`.
- Do not edit lockfiles without a dependency or package-manager change.
- Do not add runtime dependencies unless the feature cannot reasonably be implemented with platform APIs or existing dev tooling.
- Before adding a dependency, consider security, maintenance, license compatibility, package size, browser compatibility, and whether it duplicates existing functionality.
- Do not perform unrelated upgrades.
- Do not make unrequested major-version updates.

## Security, Privacy, and Compliance

- ROT13 is obfuscation, not encryption. Do not describe it as encryption or as protection for secrets.
- Do not commit secrets, credentials, tokens, private keys, or production personal data.
- Keep `.env` and local credentials out of version control.
- Do not add telemetry, external services, network calls, or data collection without explicit approval.
- Validate inputs at trust boundaries when new boundaries are introduced.
- Use context-appropriate output handling for DOM changes; prefer `textContent` or DOM node APIs over raw HTML insertion.
- Do not bypass authentication, authorization, browser security controls, or package-publishing safeguards.
- Do not log sensitive values.
- Do not upload repository content to external systems without authorization.
- Preserve MIT license compatibility.

## Frontend and DOM Rules

- The package is a DOM utility, not a frontend app.
- Preserve accessibility of rendered controls. Buttons MUST remain keyboard-operable and use clear text labels.
- Preserve cleanup behavior for event listeners and inline styles.
- Support loading, revealed, and destroyed states without stale encoded data where feasible.
- Avoid adding CSS frameworks or application-level state management.
- Keep DOM output minimal and embeddable in host pages.

## Documentation Rules

- Update `README.md` when public API, installation, requirements, behavior, defaults, build output, or release process changes.
- Keep documentation consistent with code, tests, and package metadata.
- Do not make unverified claims.
- Do not document commands that are not present in `package.json` or repository configuration.
- Do not manually edit generated documentation or generated build output.

## Git and Change Scope

- Limit changes to the task.
- Do not perform unrelated refactoring.
- Do not format untouched files.
- Do not overwrite local user changes.
- Do not use destructive Git commands unless explicitly requested.
- Do not commit, push, tag, release, or open pull requests without explicit instruction.
- Do not change CI/CD, package publishing, infrastructure, or security posture unless necessary for the task.
- Keep changes small and reviewable.

## Agent Workflow

1. Read the task and acceptance criteria.
2. Read the applicable `AGENTS.md`.
3. Identify and read only relevant skills from `.agent/skills/`.
4. Inspect only relevant files and existing patterns.
5. Evaluate architecture, dependencies, and risks.
6. Plan the smallest viable change.
7. Implement the change.
8. Add or update tests when behavior changes.
9. Run relevant validation commands.
10. Review the diff for unintended changes.
11. Report changes, validation, assumptions, and remaining risks concisely.

Agents MUST NOT begin implementation before checking the relevant rules and skills.

## Definition of Done

A task is complete only when:

- Acceptance criteria are met.
- Architecture rules are followed.
- Relevant tests exist or skipped tests are justified.
- Required validation succeeds or skipped checks are disclosed.
- No known unnecessary warnings remain.
- Security and privacy requirements are met.
- Documentation is updated where required.
- No unintended files changed.
- Assumptions and remaining risks are stated.
