import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const workflow = readFileSync(".github/workflows/ci.yml", "utf8");
const packageJson = JSON.parse(readFileSync("package.json", "utf8")) as {
  scripts: Record<string, string>;
};

describe("release workflow", () => {
  it("publishes new package versions after main branch verification", () => {
    expect(workflow).toContain("verify:");
    expect(workflow).toContain("publish:");
    expect(workflow).toContain("needs: verify");
    expect(workflow).toContain("github.event_name == 'push' && github.ref == 'refs/heads/main'");
    expect(workflow).toContain("bun run lint");
    expect(workflow).toContain("bun run test");
    expect(workflow).toContain("bun run build");
    expect(workflow).toContain("registry-url: \"https://registry.npmjs.org\"");
    expect(workflow).toContain("Verify npm authentication");
    expect(workflow).toContain("npm whoami");
    expect(workflow).toContain("npm view \"${PACKAGE_NAME}@${PACKAGE_VERSION}\" version");
    expect(workflow).toContain("steps.package.outputs.published == 'false'");
    expect(workflow).toContain("npm publish --access public --provenance");
    expect(workflow).toContain("NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}");
  });

  it("exposes an explicit npm publish script guarded by prepack checks", () => {
    expect(packageJson.scripts.prepack).toBe("bun run clean && bun run lint && bun run test && bun run build");
    expect(packageJson.scripts["publish:npm"]).toBe("npm publish --access public");
  });
});
