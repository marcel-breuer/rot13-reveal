# Shared Skills

Read the applicable `AGENTS.md` first, then identify and read only the skills relevant to the task. `AGENTS.md` remains authoritative. If instructions conflict, report the conflict and apply the stricter or safer rule.

| Skill | Purpose | Use when | File |
| --- | --- | --- | --- |
| Implement Feature | Add package behavior without changing unrelated surfaces | Adding or extending `rot13`, `mountRot13Reveal`, options, or packaging behavior | `.agent/skills/implement-feature/SKILL.md` |
| Fix Bug | Correct defective behavior with regression coverage | A reported or discovered bug affects transforms, DOM reveal flow, cleanup, timing, or packaging | `.agent/skills/fix-bug/SKILL.md` |
| Write Tests | Add focused Vitest coverage | Behavior needs coverage or existing tests need targeted expansion | `.agent/skills/write-tests/SKILL.md` |
| Refactor Code | Improve structure without behavior changes | Simplifying or reorganizing source while preserving public behavior | `.agent/skills/refactor-code/SKILL.md` |
| Review Code | Review changes for correctness and risk | Reviewing a diff, PR, branch, or local change | `.agent/skills/review-code/SKILL.md` |
| Update Dependencies | Change package dependencies or tooling versions | Adding, removing, or upgrading dependencies in `package.json` and `bun.lock` | `.agent/skills/update-dependencies/SKILL.md` |
| Public API Change | Modify exported package API or distribution contract | Changing exports, types, package metadata, or README API docs | `.agent/skills/public-api-change/SKILL.md` |
| Frontend DOM Change | Modify rendered DOM behavior | Changing buttons, links, event handling, accessibility, or cleanup behavior | `.agent/skills/frontend-dom-change/SKILL.md` |
| Security Review | Check security and privacy impact | Reviewing obfuscation claims, DOM output, publishing, dependencies, or data handling | `.agent/skills/security-review/SKILL.md` |
| Documentation Change | Update user-facing or governance docs | Changing README, agent rules, skills, or adapter files | `.agent/skills/documentation-change/SKILL.md` |
| CI/CD Change | Modify verification or release workflow | Changing `.github/workflows/ci.yml` or release-related scripts | `.agent/skills/ci-cd-change/SKILL.md` |
