import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const workflow = readFileSync(".github/workflows/ci.yml", "utf8");
const dependabot = readFileSync(".github/dependabot.yml", "utf8");
const packageJson = JSON.parse(readFileSync("package.json", "utf8")) as {
  scripts: Record<string, string>;
};

describe("release workflow", () => {
  it("keeps CI verification separate from npm publishing", () => {
    expect(workflow).toContain("verify:");
    expect(workflow).toContain("bun run lint");
    expect(workflow).toContain("bun run test");
    expect(workflow).toContain("bun run build");
    expect(workflow).not.toContain("npm publish");
    expect(workflow).not.toContain("NPM_TOKEN");
  });

  it("avoids redundant and unnecessary workflow runs", () => {
    expect(workflow).toContain("cancel-in-progress: true");
    expect(workflow).toContain('paths-ignore:');
    expect(workflow).toContain('bun install --frozen-lockfile');
    expect(workflow).toMatch(/uses: actions\/cache@v\d+/);
    expect(workflow).toContain('path: ~/.bun/install/cache');
  });

  it("exposes an explicit npm publish script guarded by prepack checks", () => {
    expect(packageJson.scripts.prepack).toBe("bun run clean && bun run lint && bun run test && bun run build");
    expect(packageJson.scripts["publish:npm"]).toBe("npm publish --access public");
  });
});

describe("Dependabot configuration", () => {
  it("runs monthly dependency updates at midnight and assigns them", () => {
    expect(dependabot).toContain("version: 2");
    expect(dependabot).toContain('package-ecosystem: "bun"');
    expect(dependabot).toContain('package-ecosystem: "github-actions"');
    expect(dependabot.match(/interval: monthly/g)).toHaveLength(2);
    expect(dependabot).toContain('time: "00:00"');
    expect(dependabot).toContain('timezone: "Europe/Berlin"');
    expect(dependabot.match(/marcel-breuer/g)).toHaveLength(2);
  });
});
