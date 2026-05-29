import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const workflow = readFileSync(".github/workflows/ci.yml", "utf8");
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

  it("exposes an explicit npm publish script guarded by prepack checks", () => {
    expect(packageJson.scripts.prepack).toBe("bun run clean && bun run lint && bun run test && bun run build");
    expect(packageJson.scripts["publish:npm"]).toBe("npm publish --access public --provenance");
  });
});
