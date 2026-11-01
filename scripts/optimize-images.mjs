import sharp from "sharp";
import { readdir, stat, rename, unlink } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const DIR = "src/assets";
const MAX_W = 1600;
const PROFILE_MAX = 512;
const LOGO_MAX = 512;

const files = await readdir(DIR);

for (const f of files) {
  const ext = extname(f).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;
  const path = join(DIR, f);
  const before = (await stat(path)).size;

  let maxW = MAX_W;
  if (f.startsWith("yago-profile")) maxW = PROFILE_MAX;
  if (f.includes("ux-craft-academy-logo")) maxW = LOGO_MAX;

  const img = sharp(path, { failOn: "none" });
  const meta = await img.metadata();
  const targetW = Math.min(maxW, meta.width || maxW);

  const tmp = path + ".tmp";
  let pipeline = sharp(path).rotate().resize({ width: targetW, withoutEnlargement: true });
  if (ext === ".png") {
    // Keep PNG for transparent logo, otherwise convert profile to PNG still (kept for import compatibility)
    pipeline = pipeline.png({ compressionLevel: 9, quality: 80, palette: true });
  } else {
    pipeline = pipeline.jpeg({ quality: 78, mozjpeg: true, progressive: true });
  }
  await pipeline.toFile(tmp);
  const after = (await stat(tmp)).size;
  if (after < before) {
    await unlink(path);
    await rename(tmp, path);
    console.log(`${f}: ${(before/1024).toFixed(0)}KB -> ${(after/1024).toFixed(0)}KB`);
  } else {
    await unlink(tmp);
    console.log(`${f}: kept original (${(before/1024).toFixed(0)}KB)`);
  }
}
