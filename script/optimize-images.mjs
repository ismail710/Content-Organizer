import path from "node:path";
import { promises as fs } from "node:fs";
import sharp from "sharp";

const root = process.cwd();

const targets = [
  "client/public/amphi.jpeg",
  "client/public/groupe.jpeg",
  "client/public/reunion.jpg",
  "client/public/logo/Jendouba.png",
  "client/public/logo/inat.png",
  "client/public/logo/CRTEAN.png",
  "client/public/logo/Fayoum.png",
  "client/public/logo/logo_IAV.png",
  "client/public/logo/ibn-tofail.png",
  "client/public/logo/ITC.png",
  "client/public/logo/OIKON.png",
  "client/public/logo/UniZg.png",
  "client/public/logo/iresa.png",
  "client/public/logo/logo EU.png",
  "client/public/project team/zeljko.png",
  "client/public/project team/hadi.jpg",
  "client/public/project team/nasr.jpg",
  "client/public/project team/kenza.jpg",
  "client/public/project team/zeineb.png",
];

async function ensureFile(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function toWebpPath(filePath) {
  const parsed = path.parse(filePath);
  return path.join(parsed.dir, `${parsed.name}.webp`);
}

async function optimizeImage(relativePath) {
  const input = path.join(root, relativePath);
  const exists = await ensureFile(input);
  if (!exists) {
    console.log(`skip missing: ${relativePath}`);
    return;
  }

  const output = toWebpPath(input);
  const before = (await fs.stat(input)).size;

  const img = sharp(input);
  const metadata = await img.metadata();

  let pipeline = img.rotate();

  if ((metadata.width ?? 0) > 2200) {
    pipeline = pipeline.resize({ width: 2200, withoutEnlargement: true });
  }

  await pipeline.webp({ quality: 78, effort: 5 }).toFile(output);

  const after = (await fs.stat(output)).size;
  const saved = before - after;
  const pct = before > 0 ? ((saved / before) * 100).toFixed(1) : "0.0";

  console.log(`${relativePath} -> ${path.relative(root, output)} | ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB (${pct}% saved)`);
}

async function main() {
  for (const target of targets) {
    await optimizeImage(target);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
