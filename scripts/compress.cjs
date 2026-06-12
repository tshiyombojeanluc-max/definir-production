const sharp = require('sharp')
const { readdirSync, statSync, readFileSync, writeFileSync } = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')

function walk(dir) {
  const results = []
  try {
    for (const f of readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, f.name)
      if (f.isDirectory()) results.push(...walk(p))
      else if (/\.(jpg|jpeg|png)$/i.test(f.name)) results.push(p)
    }
  } catch(e) {}
  return results
}

const dirs = [
  path.join(ROOT, 'public', 'images', 'models'),
  path.join(ROOT, 'public', 'images', 'projects'),
  path.join(ROOT, 'public', 'images', 'about'),
]

async function run() {
  let saved = 0, count = 0, errors = 0
  for (const d of dirs) {
    const images = walk(d)
    console.log(`\nScanning ${path.relative(ROOT, d)} — ${images.length} images`)
    for (const img of images) {
      const before = statSync(img).size
      const maxW = img.includes('models') ? 900 : 1400
      try {
        // Read into buffer first — avoids Windows path issues with sharp
        const inputBuf = readFileSync(img)
        const buf = await sharp(inputBuf)
          .resize({ width: maxW, withoutEnlargement: true })
          .jpeg({ quality: 82, mozjpeg: true })
          .toBuffer()
        if (buf.length < before) {
          writeFileSync(img, buf)
          saved += before - buf.length
          count++
          const pct = Math.round((1 - buf.length / before) * 100)
          const rel = path.relative(ROOT, img).replace(/\\/g, '/')
          console.log(`  ✓ ${rel}  ${(before/1e6).toFixed(1)}MB → ${(buf.length/1e6).toFixed(1)}MB  -${pct}%`)
        }
      } catch(e) {
        errors++
        console.error(`  ✗ ${path.basename(img)}: ${e.message}`)
      }
    }
  }
  const totalBefore = dirs.flatMap(walk).reduce((s,f) => { try { return s + statSync(f).size } catch(e) { return s } }, 0)
  console.log(`\n━━━ Done ━━━`)
  console.log(`Compressed : ${count} images`)
  console.log(`Errors     : ${errors}`)
  console.log(`Space saved: ${(saved/1e6).toFixed(1)} MB`)
}

run().catch(console.error)
