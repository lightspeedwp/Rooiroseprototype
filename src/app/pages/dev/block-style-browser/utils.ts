// ─── BSP-015: Preset Validation ─────────────────────────────────────────────

export interface ValidationWarning {
  type: 'hardcoded-hex' | 'hardcoded-px' | 'css-var-syntax';
  path: string;
  value: string;
}

export function validateJsonStyle(jsonStyle: Record<string, unknown>, path = ''): ValidationWarning[] {
  const warnings: ValidationWarning[] = [];
  for (const [key, value] of Object.entries(jsonStyle)) {
    const currentPath = path ? `${path}.${key}` : key;
    if (typeof value === 'object' && value !== null) {
      warnings.push(...validateJsonStyle(value as Record<string, unknown>, currentPath));
    } else if (typeof value === 'string') {
      // Check for hardcoded hex (but allow inside gradients that use preset refs, and rgba())
      if (/#[0-9a-fA-F]{3,8}\b/.test(value) && !value.includes('var(--wp--preset--') && !value.includes('var:preset|')) {
        warnings.push({ type: 'hardcoded-hex', path: currentPath, value });
      }
      // Check for hardcoded px (e.g. '4px', '8px') but not '0' or '0px' or preset refs
      if (/^\d+px$/.test(value.trim())) {
        warnings.push({ type: 'hardcoded-px', path: currentPath, value });
      }
      // Check for CSS var(--wp--preset--...) syntax instead of var:preset|
      if (/var\(--wp--preset--/.test(value)) {
        warnings.push({ type: 'css-var-syntax', path: currentPath, value });
      }
    }
  }
  return warnings;
}

// ─── BSP-016: Preset Reference Extraction ────────────────────────────────────

export interface PresetRef {
  type: 'color' | 'spacing' | 'font-size' | 'font-family' | 'border-radius' | 'border-width' | 'shadow' | 'other';
  slug: string;
  raw: string;
}

export function extractPresetRefs(jsonStyle: Record<string, unknown>): PresetRef[] {
  const refs: PresetRef[] = [];
  const seen = new Set<string>();

  function walk(obj: unknown) {
    if (typeof obj === 'string') {
      // Match var:preset|type|slug pattern
      const match = obj.match(/var:preset\|([^|]+)\|([^)]+)/g);
      if (match) {
        for (const m of match) {
          const parts = m.split('|');
          if (parts.length === 3) {
            const type = parts[1] as PresetRef['type'];
            const slug = parts[2];
            const key = `${type}:${slug}`;
            if (!seen.has(key)) {
              seen.add(key);
              refs.push({ type, slug, raw: m });
            }
          }
        }
      }
    } else if (typeof obj === 'object' && obj !== null) {
      for (const value of Object.values(obj)) {
        walk(value);
      }
    }
  }

  walk(jsonStyle);
  return refs;
}

// ─── GC-009: Block-specific guideline resolution ────────────────────────────

/**
 * Resolve a block-specific guideline filename from the targetBlock field.
 * e.g. "core/button" → "core/button.md" (matches `/guidelines/components/blocks/core/button.md`)
 *      "woocommerce/product-image" → "woocommerce/product-image.md"
 * Falls back to the generic "block-styles.md" if no block-specific file exists in the glob.
 */
export function resolveBlockGuideline(targetBlock: string, glob: Record<string, unknown>): { filename: string; isSpecific: boolean } {
  // Convert "core/button" → look for file ending in "components/blocks/core/button.md"
  const specificSuffix = `components/blocks/${targetBlock}.md`;
  const hasSpecific = Object.keys(glob).some(path => path.endsWith(specificSuffix));
  if (hasSpecific) {
    // Return just the suffix portion; WpMarkdownViewer's non-fullPath mode matches endsWith
    return { filename: `${targetBlock}.md`, isSpecific: true };
  }
  return { filename: 'block-styles.md', isSpecific: false };
}

// ─── Recursively count leaf keys in an object ────────────────────────────────
export function countJsonKeys(obj: unknown, depth = 0): number {
  if (typeof obj !== 'object' || obj === null || depth > 10) return 1;
  let count = 0;
  for (const v of Object.values(obj)) count += countJsonKeys(v, depth + 1);
  return count;
}
