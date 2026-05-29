import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const workflow = readFileSync(".github/workflows/ci.yml", "utf8");

describe("GitHub Actions npm publishing", () => {
  it("publishes only new package versions after main branch verification", () => {
    expect(workflow).toContain("publish:");
    expect(workflow).toContain("needs: verify");
    expect(workflow).toContain("github.event_name == 'push' && github.ref == 'refs/heads/main'");
    expect(workflow).toContain("registry-url: \"https://registry.npmjs.org\"");
    expect(workflow).toContain("package-manager-cache: false");
    expect(workflow).toContain("npm view \"${PACKAGE_NAME}@${PACKAGE_VERSION}\" version");
    expect(workflow).toContain("steps.package.outputs.published == 'false'");
    expect(workflow).toContain("id-token: write");
    expect(workflow).toContain("npm publish --access public");
    expect(workflow).not.toContain("NODE_AUTH_TOKEN");
  });
});
