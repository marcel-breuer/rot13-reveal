import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const testDir = dirname(fileURLToPath(import.meta.url));
const rootDir = join(testDir, "..");

describe("package metadata", () => {
  const previousDomain = ["m", "breuer.dev"].join("-");
  const previousGitHubUrl = ["github.com/m", "breuer"].join("-");
  const previousNpmScope = ["@m", "breuer/"].join("-");

  it("uses the current GitHub handle and npm scope", () => {
    const packageJson = JSON.parse(
      readFileSync(join(rootDir, "package.json"), "utf8"),
    );
    const readme = readFileSync(join(rootDir, "README.md"), "utf8");
    const metadata = JSON.stringify(packageJson);

    expect(packageJson.name).toBe("@marcel-breuer/rot13-reveal");
    expect(metadata).toContain("github.com/marcel-breuer");
    expect(readme).toContain("@marcel-breuer/rot13-reveal");
    expect(readme).toContain("github.com/marcel-breuer/rot13-reveal");
  });

  it("does not reference the previous domain or GitHub handle", () => {
    const packageJson = readFileSync(join(rootDir, "package.json"), "utf8");
    const readme = readFileSync(join(rootDir, "README.md"), "utf8");
    const combinedMetadata = `${packageJson}\n${readme}`;

    expect(combinedMetadata).not.toContain(previousDomain);
    expect(combinedMetadata).not.toContain(previousGitHubUrl);
    expect(combinedMetadata).not.toContain(previousNpmScope);
  });
});
