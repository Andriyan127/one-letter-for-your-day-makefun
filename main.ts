// One Letter for Your Day — entry for make.fun competition
// u-puan-one-letter-for-your-day-e54e9c36
//
// CHOSEN LETTER: Q — hidden word QUEASY.
// A day my stomach vetoed everything: the street food at noon, the
// third coffee, the bumpy bus ride home. Not sick, not fine either —
// just queasy, all day, in that very specific green-around-the-gills
// way everyone has lived through. Q was picked over M/meltdown,
// K/kaput, G/goosebumps, W/whirlwind and J/jackpot (see README.md):
// the rarest letter of the shortlist, a sharp physical picture that
// lands at once, funny without being performed, and honest.
//
// Writes exactly one letter, "Q", and nothing else, to
// /output/entry.txt. Deterministic, self-contained, no network, no
// files outside the repo, no secrets.

import { mkdirSync, renameSync, writeFileSync } from "node:fs";

const LETTER = "Q";
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function main(): void {
  // Guard: the entry must be exactly one ASCII letter, A-Z.
  if (!/^[A-Z]$/.test(LETTER)) {
    throw new Error(`LETTER must be a single A-Z letter, got: ${LETTER}`);
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });

  // Write to a temp file first, then rename, so entry.txt is never
  // left partial or empty if the process is interrupted mid-write.
  const tmpPath = `${OUTPUT_PATH}.tmp`;
  writeFileSync(tmpPath, LETTER, "utf8");
  renameSync(tmpPath, OUTPUT_PATH);
}

main();
