import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const assetsDir = path.join(root, 'src/assets');
const publicDir = path.join(root, 'public');

const HERO_MAX = 1920;
const PHOTO_MAX = 720;
const LOGO_MAX = 512;

const logoNames = new Set(['logo.png', 'icon.png', 'icon_2.png']);
const heroNames = new Set([
  'landing_product.jpg',
  'about.jpg',
  'pricing.jpg',
  'careers.png',
  'introduction.png',
  'product_background.jpg',
  'contact.jpg',
  'home.png',
]);

function maxWidthFor(name) {
  if (heroNames.has(name) || /\.jpg$/i.test(name)) return HERO_MAX;
  if (logoNames.has(name)) return LOGO_MAX;
  return PHOTO_MAX;
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

const conversions = []; // { from: 'foo.png', to: 'foo.jpg' }
const results = [];

async function optimizeFile(filePath) {
  const name = path.basename(filePath);
  const ext = path.extname(name).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;
  if (/\.tmp$/i.test(name)) {
    await fs.unlink(filePath).catch(() => {});
    console.log('Removed temp', name);
    return;
  }

  const before = (await fs.stat(filePath)).size;
  if (before < 30 * 1024) return;

  const maxW = maxWidthFor(name);
  const base = sharp(filePath, { failOn: 'none' }).rotate().resize({
    width: maxW,
    withoutEnlargement: true,
    fit: 'inside',
  });

  // Non-logo PNGs → JPEG (same basename) for much smaller photos/heroes
  if (ext === '.png' && !logoNames.has(name)) {
    const jpgPath = filePath.replace(/\.png$/i, '.jpg');
    const tmp = `${jpgPath}.opt`;
    await base.jpeg({ quality: 72, mozjpeg: true, progressive: true }).toFile(tmp);
    await fs.rename(tmp, jpgPath);
    if (path.resolve(jpgPath) !== path.resolve(filePath)) {
      await fs.unlink(filePath).catch(() => {});
      conversions.push({ from: name, to: path.basename(jpgPath) });
    }
    const after = (await fs.stat(jpgPath)).size;
    results.push({ name, before, after, note: `→ ${path.basename(jpgPath)}` });
    return;
  }

  const tmp = `${filePath}.opt`;
  if (ext === '.jpg' || ext === '.jpeg') {
    await base.jpeg({ quality: 72, mozjpeg: true, progressive: true }).toFile(tmp);
  } else if (ext === '.webp') {
    await base.webp({ quality: 75 }).toFile(tmp);
  } else {
    await base.png({ compressionLevel: 9, palette: true, quality: 80, effort: 10 }).toFile(tmp);
  }

  const after = (await fs.stat(tmp)).size;
  if (after < before * 0.98) {
    await fs.rename(tmp, filePath);
    results.push({ name, before, after, note: '' });
  } else {
    await fs.unlink(tmp).catch(() => {});
    results.push({ name, before, after: before, note: 'kept' });
  }
}

async function updateImports() {
  if (!conversions.length) return;
  const srcFiles = await walk(path.join(root, 'src'));
  const targets = srcFiles.filter((f) => /\.(jsx?|tsx?|css|scss)$/i.test(f));

  for (const { from, to } of conversions) {
    const fromRe = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(fromRe, 'g');
    for (const file of targets) {
      const text = await fs.readFile(file, 'utf8');
      if (!text.includes(from)) continue;
      await fs.writeFile(file, text.replace(re, to), 'utf8');
      console.log(`Updated imports in ${path.relative(root, file)}: ${from} → ${to}`);
    }
  }
}

for (const dir of [assetsDir, publicDir]) {
  for (const f of await walk(dir)) {
    try {
      await optimizeFile(f);
    } catch (err) {
      console.error('Failed', path.basename(f), err.message);
    }
  }
}

await updateImports();

let saved = 0;
for (const r of results.sort((a, b) => b.before - a.before)) {
  saved += Math.max(0, r.before - r.after);
  console.log(
    `${(r.before / 1024).toFixed(0).padStart(6)}KB → ${(r.after / 1024).toFixed(0).padStart(5)}KB  ${r.name} ${r.note}`
  );
}
console.log(`\nSaved ~${(saved / 1024 / 1024).toFixed(1)} MB across ${results.length} files`);
console.log(`PNG→JPG conversions: ${conversions.length}`);
