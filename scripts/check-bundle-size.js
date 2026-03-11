#!/usr/bin/env node

/**
 * PERF-051: Build Size Budget Enforcement Script
 *
 * Checks that build output stays within defined size budgets.
 * Run after `pnpm build` to validate chunk sizes.
 *
 * Usage:
 *   node scripts/check-bundle-size.js
 *   node scripts/check-bundle-size.js --verbose
 *   node scripts/check-bundle-size.js --ci  (exits with code 1 on failure)
 *
 * Generated: 2026-03-03
 */

import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

// ─── Budget Configuration ───────────────────────────────────────────────────
// All sizes in KB (uncompressed). Gzip typically achieves 60-80% reduction.
const BUDGETS = {
  // Individual chunk budgets (by prefix/pattern)
  chunks: {
    'vendor-react':    200,   // React + React DOM (~180KB)
    'vendor-radix':    250,   // Radix UI primitives
    'vendor-recharts': 400,   // Recharts + D3 (heavy, lazy-loaded)
    'vendor-router':   100,   // React Router
    'vendor-embla':     60,   // Embla Carousel
    'vendor-forms':    120,   // react-hook-form + zod + hookform resolvers
    'vendor-markdown': 100,   // react-markdown + remark-gfm
    'vendor-utils':    150,   // date-fns + lucide-react + clsx + tailwind-merge
    'vendor-common':   150,   // Catch-all vendor
    'index':           120,   // Entry point (app shell + critical path)
  },

  // Aggregate budgets
  totals: {
    allJs:  2500,   // Total JS budget (KB)
    allCss:  300,   // Total CSS budget (KB)
    largest: 500,   // No single chunk larger than this (KB)
  },
};

// ─── Helpers ────────────────────────────────────────────────────────────────
const KB = 1024;
const toKB = (bytes) => (bytes / KB).toFixed(1);
const isJs = (f) => extname(f) === '.js' && !f.endsWith('.gz') && !f.endsWith('.br');
const isCss = (f) => extname(f) === '.css' && !f.endsWith('.gz') && !f.endsWith('.br');

function collectFiles(dir) {
  const results = [];
  try {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        results.push(...collectFiles(fullPath));
      } else {
        results.push({ name: entry.name, path: fullPath, size: statSync(fullPath).size });
      }
    }
  } catch {
    // Directory doesn't exist
  }
  return results;
}

function matchChunkBudget(filename) {
  // Strip hash: "vendor-react-abc123.js" -> "vendor-react"
  const base = basename(filename, extname(filename));
  // Remove hash suffix (last segment after final hyphen that looks like a hash)
  const withoutHash = base.replace(/-[a-zA-Z0-9]{8,}$/, '');

  for (const [pattern] of Object.entries(BUDGETS.chunks)) {
    if (withoutHash === pattern || withoutHash.startsWith(pattern + '-')) {
      return pattern;
    }
  }
  return null;
}

// ─── Main ───────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const verbose = args.includes('--verbose');
const ci = args.includes('--ci');

const distDir = join(process.cwd(), 'dist');
const allFiles = collectFiles(distDir);

const jsFiles = allFiles.filter(f => isJs(f.name));
const cssFiles = allFiles.filter(f => isCss(f.name));

if (jsFiles.length === 0) {
  console.error('No JS files found in dist/. Run `pnpm build` first.');
  process.exit(1);
}

const violations = [];
const warnings = [];

console.log('\n  Bundle Size Report');
console.log('  ' + '='.repeat(60));

// ─── JS Chunks ──────────────────────────────────────────────────────────────
console.log('\n  JS Chunks:');
const totalJs = jsFiles.reduce((sum, f) => sum + f.size, 0);

// Sort by size descending
jsFiles.sort((a, b) => b.size - a.size);

for (const file of jsFiles) {
  const sizeKB = parseFloat(toKB(file.size));
  const budgetKey = matchChunkBudget(file.name);
  const budget = budgetKey ? BUDGETS.chunks[budgetKey] : null;

  let status = '  ';
  if (budget) {
    if (sizeKB > budget) {
      status = 'FAIL';
      violations.push(`${file.name}: ${sizeKB}KB > ${budget}KB budget`);
    } else if (sizeKB > budget * 0.9) {
      status = 'WARN';
      warnings.push(`${file.name}: ${sizeKB}KB (90%+ of ${budget}KB budget)`);
    } else {
      status = ' OK ';
    }
  }

  const budgetStr = budget ? ` / ${budget}KB` : '';
  const pct = budget ? ` (${Math.round((sizeKB / budget) * 100)}%)` : '';
  console.log(`    [${status}] ${file.name.padEnd(45)} ${String(sizeKB + 'KB').padStart(10)}${budgetStr}${pct}`);
}

// ─── CSS Files ──────────────────────────────────────────────────────────────
if (cssFiles.length > 0) {
  console.log('\n  CSS Files:');
  const totalCss = cssFiles.reduce((sum, f) => sum + f.size, 0);
  for (const file of cssFiles) {
    console.log(`    ${file.name.padEnd(45)} ${(toKB(file.size) + 'KB').padStart(10)}`);
  }

  if (parseFloat(toKB(totalCss)) > BUDGETS.totals.allCss) {
    violations.push(`Total CSS: ${toKB(totalCss)}KB > ${BUDGETS.totals.allCss}KB budget`);
  }
}

// ─── Aggregate Checks ───────────────────────────────────────────────────────
console.log('\n  Totals:');
console.log(`    Total JS:  ${toKB(totalJs)}KB / ${BUDGETS.totals.allJs}KB`);
if (cssFiles.length > 0) {
  const totalCss = cssFiles.reduce((sum, f) => sum + f.size, 0);
  console.log(`    Total CSS: ${toKB(totalCss)}KB / ${BUDGETS.totals.allCss}KB`);
}

if (parseFloat(toKB(totalJs)) > BUDGETS.totals.allJs) {
  violations.push(`Total JS: ${toKB(totalJs)}KB > ${BUDGETS.totals.allJs}KB budget`);
}

// Check largest chunk
const largest = jsFiles[0];
if (largest && parseFloat(toKB(largest.size)) > BUDGETS.totals.largest) {
  violations.push(`Largest chunk ${largest.name}: ${toKB(largest.size)}KB > ${BUDGETS.totals.largest}KB limit`);
}

// ─── Compression Estimates ──────────────────────────────────────────────────
const gzFiles = allFiles.filter(f => f.name.endsWith('.gz'));
const brFiles = allFiles.filter(f => f.name.endsWith('.br'));

if (gzFiles.length > 0 || brFiles.length > 0) {
  console.log('\n  Compressed:');
  if (gzFiles.length > 0) {
    const totalGz = gzFiles.reduce((sum, f) => sum + f.size, 0);
    console.log(`    Gzip total:   ${toKB(totalGz)}KB (${Math.round((1 - totalGz / (totalJs || 1)) * 100)}% reduction)`);
  }
  if (brFiles.length > 0) {
    const totalBr = brFiles.reduce((sum, f) => sum + f.size, 0);
    console.log(`    Brotli total: ${toKB(totalBr)}KB (${Math.round((1 - totalBr / (totalJs || 1)) * 100)}% reduction)`);
  }
}

// ─── Summary ────────────────────────────────────────────────────────────────
console.log('\n  ' + '='.repeat(60));

if (warnings.length > 0) {
  console.log(`\n  Warnings (${warnings.length}):`);
  warnings.forEach(w => console.log(`    - ${w}`));
}

if (violations.length > 0) {
  console.log(`\n  VIOLATIONS (${violations.length}):`);
  violations.forEach(v => console.log(`    - ${v}`));
  console.log('\n  Budget check FAILED.\n');
  if (ci) process.exit(1);
} else {
  console.log('\n  All chunks within budget.\n');
}
