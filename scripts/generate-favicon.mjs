import sharp from "sharp";
import toIco from "to-ico";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const svgPath = join(root, "src/assets/icons/rochenette-legaspina-logo-light.svg");
const svgBuffer = readFileSync(svgPath);

// Generate PNG buffers at multiple sizes for ICO
const sizes = [16, 32, 48];
const pngBuffers = await Promise.all(
  sizes.map((size) =>
    sharp(svgBuffer).resize(size, size).png().toBuffer()
  )
);

const icoBuffer = await toIco(pngBuffers);
writeFileSync(join(root, "src/app/favicon.ico"), icoBuffer);
console.log("favicon.ico generated at src/app/favicon.ico");
