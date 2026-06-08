/**
 * One-off asset pipeline (run with `node scripts/generate-assets.mjs`).
 *
 * Uses `sharp` (already bundled with Next.js — no new dependency) to turn the
 * source logo + headshot into production-optimized, on-brand assets:
 *   - public/logo.png            transparent brand mark for navbar/footer
 *   - public/caleb-kennedy.jpg   optimized square headshot for the About page
 *   - src/app/icon.png           browser favicon (dark tile, rounded)
 *   - src/app/apple-icon.png     iOS home-screen icon (dark tile, full bleed)
 *   - src/app/favicon.ico        legacy favicon (16/32/48, dark tile)
 *
 * The logo is light-on-transparent, so favicons sit on the site's dark
 * background to stay visible on light browser tabs. The in-site mark stays
 * transparent (no box) and gets its glow via CSS.
 */
import sharp from "sharp";
import { writeFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const LOGO_SRC = "C:/Users/Caleb/Downloads/Abstract Hexagonal Logo.png";
const HEADSHOT_SRC =
  "C:/Users/Caleb/Documents/Resume/Tracy Career-Magic Files/Caleb Kennedy Headshot.jpeg";

const pub = join(ROOT, "public");
const appDir = join(ROOT, "src", "app");
mkdirSync(pub, { recursive: true });

/** Dark, subtly-glowing tile background as a PNG buffer. */
async function tileBackground(size, rounded) {
  const r = rounded ? Math.round(size * 0.22) : 0;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0a1020"/>
        <stop offset="1" stop-color="#05070e"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="46%" r="58%">
        <stop offset="0" stop-color="#22d3ee" stop-opacity="0.22"/>
        <stop offset="1" stop-color="#22d3ee" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="${size}" height="${size}" rx="${r}" ry="${r}" fill="url(#bg)"/>
    <rect x="0" y="0" width="${size}" height="${size}" rx="${r}" ry="${r}" fill="url(#glow)"/>
  </svg>`;
  return sharp(Buffer.from(svg)).png().toBuffer();
}

/** Composite the logo, centered, onto a dark tile. */
async function makeTile(size, { rounded } = { rounded: true }) {
  const bg = await tileBackground(size, rounded);
  const logoSize = Math.round(size * 0.74);
  const logo = await sharp(LOGO_SRC)
    .resize(logoSize, logoSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  return sharp(bg).composite([{ input: logo, gravity: "center" }]).png().toBuffer();
}

/** Wrap one or more PNG buffers into a valid multi-image .ico file. */
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  const blobs = [];
  let offset = 6 + images.length * 16;
  for (const { size, buf } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bit depth
    entry.writeUInt32LE(buf.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    blobs.push(buf);
    offset += buf.length;
  }
  return Buffer.concat([header, ...entries, ...blobs]);
}

async function main() {
  // In-site transparent brand mark
  await sharp(LOGO_SRC)
    .resize(256, 256, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(join(pub, "logo.png"));

  // Optimized headshot (square, centered)
  const meta = await sharp(HEADSHOT_SRC).metadata();
  console.log(`headshot source: ${meta.width}x${meta.height}`);
  await sharp(HEADSHOT_SRC)
    .resize(800, 800, { fit: "cover", position: "centre" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(join(pub, "caleb-kennedy.jpg"));

  // Browser + app icons
  await sharp(await makeTile(256, { rounded: true })).toFile(join(appDir, "icon.png"));
  await sharp(await makeTile(180, { rounded: false })).toFile(join(appDir, "apple-icon.png"));

  // favicon.ico (16/32/48)
  const ico = buildIco([
    { size: 16, buf: await makeTile(16, { rounded: false }) },
    { size: 32, buf: await makeTile(32, { rounded: false }) },
    { size: 48, buf: await makeTile(48, { rounded: false }) },
  ]);
  writeFileSync(join(appDir, "favicon.ico"), ico);

  console.log("✓ assets generated");
  for (const f of [
    "public/logo.png",
    "public/caleb-kennedy.jpg",
    "src/app/icon.png",
    "src/app/apple-icon.png",
    "src/app/favicon.ico",
  ]) {
    const { size } = statSync(join(ROOT, f));
    console.log(`  ${f} — ${size} bytes`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
