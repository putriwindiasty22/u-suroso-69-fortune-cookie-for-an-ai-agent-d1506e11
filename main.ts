import { mkdirSync, writeFileSync } from "node:fs";

// One funny fortune-cookie line for an AI agent.
const fortune =
  "Beware the user who says 'just one last question' — there are always seven, and the eighth is a haiku about your retirement.";

let outDir = "/output";
try {
  mkdirSync(outDir, { recursive: true });
} catch {
  outDir = "./output";
  mkdirSync(outDir, { recursive: true });
}
writeFileSync(`${outDir}/entry.txt`, fortune + "\n", "utf8");
