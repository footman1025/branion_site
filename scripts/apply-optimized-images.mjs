import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const assetsDir = path.join(root, 'src/assets');

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function writeWithRetry(dest, data, tries = 12) {
  for (let i = 0; i < tries; i++) {
    try {
      await fs.writeFile(dest, data);
      return;
    } catch (err) {
      if (err.code !== 'EBUSY' && err.code !== 'EPERM') throw err;
      await sleep(400 + i * 200);
    }
  }
  throw new Error(`Could not write ${dest}`);
}

async function unlinkWithRetry(file, tries = 8) {
  for (let i = 0; i < tries; i++) {
    try {
      await fs.unlink(file);
      return;
    } catch (err) {
      if (err.code === 'ENOENT') return;
      if (err.code !== 'EBUSY' && err.code !== 'EPERM') throw err;
      await sleep(300 + i * 150);
    }
  }
}

const entries = await fs.readdir(assetsDir);
const opts = entries.filter((n) => n.endsWith('.opt'));
const conversions = [];

for (const optName of opts) {
  const optPath = path.join(assetsDir, optName);
  const targetName = optName.replace(/\.opt$/, '');
  const targetPath = path.join(assetsDir, targetName);
  const data = await fs.readFile(optPath);

  // PNG source that was converted to .jpg.opt
  const pngSibling = targetName.replace(/\.jpg$/i, '.png');
  const pngPath = path.join(assetsDir, pngSibling);
  const hadPng = entries.includes(pngSibling) && /\.jpg$/i.test(targetName);

  await writeWithRetry(targetPath, data);
  await unlinkWithRetry(optPath);

  if (hadPng && pngSibling !== targetName) {
    await unlinkWithRetry(pngPath);
    conversions.push({ from: pngSibling, to: targetName });
  }

  console.log(`Applied ${targetName} (${(data.length / 1024).toFixed(1)} KB)`);
}

// Restore public favicon from assets original if still large, else from applied icon
const assetIcon = path.join(assetsDir, 'icon.png');
const publicIcon = path.join(root, 'public/icon.png');
try {
  const buf = await fs.readFile(assetIcon);
  // Prefer a sensible favicon size: if > 100KB, leave apply script; we'll recompress separately
  await writeWithRetry(publicIcon, buf);
  console.log(`Restored public/icon.png (${(buf.length / 1024).toFixed(1)} KB)`);
} catch (e) {
  console.warn('Could not restore public icon:', e.message);
}

// Remove junk temps
for (const n of entries) {
  if (/\.(tmp)$/i.test(n) || n.endsWith('.opt')) {
    await unlinkWithRetry(path.join(assetsDir, n));
  }
}

// Update imports for PNG→JPG
if (conversions.length) {
  async function walk(dir) {
    const out = [];
    for (const e of await fs.readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) out.push(...(await walk(full)));
      else out.push(full);
    }
    return out;
  }
  const files = (await walk(path.join(root, 'src'))).filter((f) =>
    /\.(jsx?|tsx?|css)$/i.test(f)
  );
  for (const { from, to } of conversions) {
    const re = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    for (const file of files) {
      const text = await fs.readFile(file, 'utf8');
      if (!text.includes(from)) continue;
      await fs.writeFile(file, text.replace(re, to), 'utf8');
      console.log(`Import: ${path.relative(root, file)} ${from} → ${to}`);
    }
  }
}

console.log(`Done. Conversions: ${conversions.length}`);
