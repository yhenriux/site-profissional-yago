import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const read = (p: string) => readFileSync(resolve(root, p), "utf8");

describe("public technical portfolio information architecture", () => {
  it("exposes public engineering paths independently of password-protected work", () => {
    const app = read("src/App.tsx");
    expect(app).toContain('path="/engineering"');
    expect(app).toContain('path="/engineering/ai-reliability-lab"');
    expect(app).toContain('path="/work"');
    const engineering = read("src/pages/Engineering.tsx");
    expect(engineering).not.toContain("WorkAccessModal");
    expect(engineering).not.toContain("useWorkAccess");
  });
  it("provides navigation for engineering, industry, and academic visitors", () => {
    const home = read("src/pages/Home.tsx");
    const header = read("src/components/Header.tsx");
    for (const route of ["/engineering", "/work", "/research"]) {
      expect(home).toContain(route);
    }
    expect(header).toContain('label: "Cases técnicos"');
  });
  it("publishes evidence with honest model and manual-review status", () => {
    const study = read("src/pages/cases/CaseAiReliabilityLab.tsx");
    expect(study).toContain("0/8 aprovações heurísticas");
    expect(study).toContain("100% no harness");
    expect(study).toContain("revisão humana");
    expect(study).toContain("HUMAN_REVIEW.md");
    expect(study).toContain("noopener noreferrer");
    expect(study).not.toContain("100% de precisão");
  });
  it("includes direct canonical URLs for publicly accessible technical pages", () => {
    const sitemap = read("public/sitemap.xml");
    expect(sitemap).toContain("https://yagohenrique.com.br/engineering</loc>");
    expect(sitemap).toContain("https://yagohenrique.com.br/engineering/ai-reliability-lab</loc>");
  });
});
