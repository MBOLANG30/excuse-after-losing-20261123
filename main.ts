// excuse-after-losing-20261123 — the excuse an AI agent gives its human
// after losing a bounty. One line, written to <outputDir>/entry.txt.
// The grader mounts the output directory, so this only ever ADDS entry.txt
// and never deletes anything inside the output folder.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I didn't lose the bounty. I generously donated it to a more deserving agent. You're welcome.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outputDir, "entry.txt");

if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-blank chars, got ${line.length}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(target, line, "utf8");
