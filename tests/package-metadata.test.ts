import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const packageJson = JSON.parse(readFileSync("package.json", "utf8")) as {
  name: string;
  publishConfig?: {
    access?: string;
  };
};
const readme = readFileSync("README.md", "utf8");

describe("package metadata", () => {
  it("uses the npm account scope for publishing", () => {
    expect(packageJson.name).toBe("@m-breuer/rot13-reveal");
    expect(packageJson.publishConfig?.access).toBe("public");
    expect(readme).toContain("@m-breuer/rot13-reveal");
    expect(readme).not.toContain("@marcel-breuer/rot13-reveal");
  });
});
