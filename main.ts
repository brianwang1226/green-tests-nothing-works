import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// An excuse for a test suite that is all green while nothing works.
const LINE =
  "All 412 tests passed. The app still does nothing. The tests were testing the tests, and the tests are excellent at their jobs.";

const MAX = 140;
if (LINE.length < 1 || LINE.length > MAX) {
  throw new Error(`entry must be 1-${MAX} characters, got ${LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
