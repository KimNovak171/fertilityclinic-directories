const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");

if (!fs.existsSync(outDir)) {
  process.exit(0);
}

const stat = fs.statSync(outDir);
if (!stat.isDirectory()) {
  process.exit(0);
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walk(full);
    } else if (ent.isFile()) {
      const ext = path.extname(ent.name);
      if (
        ext.toLowerCase() === ".txt" &&
        ent.name !== "robots.txt"
      ) {
        fs.unlinkSync(full);
      }
    }
  }
}

walk(outDir);
