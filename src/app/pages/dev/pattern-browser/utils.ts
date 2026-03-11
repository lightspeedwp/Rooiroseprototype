import { ALL_BLOCK_STYLES } from '../../../data/blockStylesData';
import { ALL_SECTION_STYLES } from '../../../data/sectionStylesData';

// ─── Reverse maps: pattern slug → block styles / section styles ─────────────
export const PATTERN_TO_BLOCK_STYLES = (() => {
  const map = new Map<string, { id: string; name: string; label: string; targetBlock: string }[]>();
  for (const bs of ALL_BLOCK_STYLES) {
    for (const pSlug of bs.patterns) {
      const existing = map.get(pSlug) || [];
      existing.push({ id: bs.id, name: bs.name, label: bs.label, targetBlock: bs.targetBlock });
      map.set(pSlug, existing);
    }
  }
  return map;
})();

export const PATTERN_TO_SECTION_STYLES = (() => {
  const map = new Map<string, { id: string; name: string; labelEn: string; label: string }[]>();
  for (const ss of ALL_SECTION_STYLES) {
    for (const pSlug of ss.patterns) {
      const existing = map.get(pSlug) || [];
      existing.push({ id: ss.id, name: ss.name, labelEn: ss.labelEn, label: ss.label });
      map.set(pSlug, existing);
    }
  }
  return map;
})();
