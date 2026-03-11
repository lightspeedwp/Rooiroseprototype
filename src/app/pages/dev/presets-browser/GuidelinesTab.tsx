import React, { useState } from 'react';
import { BookOpen, ChevronUp } from 'lucide-react';
import { WpMarkdownViewer } from '../../../components/dev/WpMarkdownViewer';
import { wpAllGuidelines } from '../../../data/wpFileLoader';

interface GuidelineDoc {
  filename: string;
  titleEn: string;
  titleAf: string;
  descEn: string;
  descAf: string;
  categories: string[];
  badge?: string;
}

const GUIDELINE_DOCS: GuidelineDoc[] = [
  {
    filename: 'DESIGN-SYSTEM-GUIDE.md',
    titleEn: 'Design System Guide',
    titleAf: 'Ontwerpstelsel-gids',
    descEn: 'Canonical reference for all 145+ design tokens — typography, colours, spacing, shadows, transitions, and more.',
    descAf: 'Kanoniese verwysing vir alle 145+ ontwerp-tokens — tipografie, kleure, spasiering, skaduwees, oorgange en meer.',
    categories: ['All Presets'],
    badge: 'Master',
  },
  {
    filename: 'colors.md',
    titleEn: 'Colors',
    titleAf: 'Kleure',
    descEn: 'Brand palette (#142135 Navy, #D70025 Red), neutral scale, semantic roles, and dark mode pairing.',
    descAf: 'Handelsmerk-palet (#142135 Marine, #D70025 Rooi), neutrale skaal, semantiese rolle en donker-modus koppels.',
    categories: ['Colors'],
  },
  {
    filename: 'typography.md',
    titleEn: 'Typography',
    titleAf: 'Tipografie',
    descEn: 'Font families (Inter + Roboto Serif), font sizes (100–900 scale), fluid clamp values, and type scale rationale.',
    descAf: 'Lettertipe-families (Inter + Roboto Serif), lettergroottes (100–900 skaal), vloeibare clamp-waardes en tipe-skaal rasionaal.',
    categories: ['Font Sizes', 'Typography Presets'],
  },
  {
    filename: 'typography-implementation-guide.md',
    titleEn: 'Typography Implementation Guide',
    titleAf: 'Tipografie Implementeringsgids',
    descEn: 'Comprehensive guidelines for implementing typography across ALL text elements — headings, body, UI, forms, navigation. Enforces Inter and Roboto Serif only.',
    descAf: 'Omvattende riglyne vir die implementering van tipografie oor ALLE tekselemente — opskrifte, lyf, koppelvlak, vorms, navigasie.',
    categories: ['Font Sizes', 'Typography Presets'],
    badge: 'New',
  },
  {
    filename: 'spacing.md',
    titleEn: 'Spacing',
    titleAf: 'Spasiering',
    descEn: 'Fluid spacing scale (7 presets), no-margin policy, blockGap/padding rules, React ↔ WordPress mapping, zero inter-section blockGap standard.',
    descAf: 'Vloeibare spasierskaal (7 voorinstellings), geen-marge-beleid, blockGap/opvulling-reëls, React ↔ WordPress karteer.',
    categories: ['Spacing'],
    badge: 'v2.0',
  },
  {
    filename: 'ui-presets.md',
    titleEn: 'UI Presets',
    titleAf: 'KV Voorinstellings',
    descEn: 'Buttons, shadows (100–600 elevation scale), border radii, border widths, and responsive breakpoints.',
    descAf: 'Knoppies, skaduwees (100–600 hoogteskaal), grenspaaie, grensbreedtes en responsiewe breekpunte.',
    categories: ['Shadows', 'Border Radius', 'Border Widths'],
  },
  {
    filename: 'layout.md',
    titleEn: 'Layout',
    titleAf: 'Uitleg',
    descEn: 'Container widths (1280px / 1440px / 800px), grid systems, aspect ratios, and responsive column strategies.',
    descAf: 'Houerbreedtes (1280px / 1440px / 800px), rasteronderstelsels, aspekverhoudings en responsiewe kolomstrategieë.',
    categories: ['Aspect Ratios'],
  },
  {
    filename: 'iconography.md',
    titleEn: 'Iconography',
    titleAf: 'Ikonografie',
    descEn: 'Icon library overview, size standards (16/20/24/32px), usage rules, and React-to-WordPress migration mapping.',
    descAf: 'Ikoonbiblioteek-oorsig, groottestandaarde (16/20/24/32px), gebruiksreëls en React-na-WordPress migrasiekarteer.',
    categories: ['Icons'],
  },
  {
    filename: 'dark-mode.md',
    titleEn: 'Dark Mode',
    titleAf: 'Donker Modus',
    descEn: 'Dark mode token pairs, section style overrides, and block-level dark mode implementation strategy.',
    descAf: 'Donker-modus token-pare, afdeling-styl oorskrywings en blok-vlak donker-modus implementeringsstrategie.',
    categories: ['Colors'],
  },
  {
    filename: 'interactions.md',
    titleEn: 'Interactions',
    titleAf: 'Interaksies',
    descEn: 'Transition tokens, hover/focus state standards, animation durations, and accessibility motion preferences.',
    descAf: 'Oorgangstokens, sweef/fokus-toestandstandaarde, animasie-duurtes en toeganklikheids-bewegingsvoorkeure.',
    categories: ['Shadows'],
  },
  {
    filename: 'presets-and-tokens.md',
    titleEn: 'WordPress Presets Reference',
    titleAf: 'WordPress Voorinstellings Verwysing',
    descEn: 'How WordPress presets work — CSS variable namespaces, slug rules, colour/typography/spacing/shadow/border preset mechanics.',
    descAf: 'Hoe WordPress-voorinstellings werk — CSS-veranderlike naamruimtes, slug-reëls, kleur/tipografie/spasiering/skaduwee/rand voorinstelling-meganika.',
    categories: ['All Presets'],
    badge: 'WP',
  },
  {
    filename: 'borders.md',
    titleEn: 'Borders & Radii',
    titleAf: 'Grense & Radii',
    descEn: 'Border widths (0–300 scale), border radius (100–9999 scale), dark mode border colours, and theme.json custom settings.',
    descAf: 'Grensbreedtes (0–300 skaal), grensradius (100–9999 skaal), donker-modus grenskleure en theme.json pasgemaakte instellings.',
    categories: ['Border Radius', 'Border Widths'],
    badge: 'New',
  },
  {
    filename: 'shadows.md',
    titleEn: 'Shadows',
    titleAf: 'Skaduwees',
    descEn: 'Shadow presets (100–600 elevation scale), dark mode shadow overrides, hover lift patterns, and theme.json preset syntax.',
    descAf: 'Skaduwee-voorinstellings (100–600 hoogteskaal), donker-modus skaduwee-oorskrywings, sweef-lig-patrone en theme.json voorinstelling-sintaks.',
    categories: ['Shadows'],
    badge: 'New',
  },
  {
    filename: 'aspect-ratios.md',
    titleEn: 'Aspect Ratios',
    titleAf: 'Aspekverhoudings',
    descEn: 'Aspect ratio utility classes — square, video (16:9), 4:3, 3:2, portrait (3:4), newspaper (A4). WordPress CSS classes and Tailwind equivalents.',
    descAf: 'Aspekverhouding hulpklasse — vierkant, video (16:9), 4:3, 3:2, portret (3:4), koerant (A4). WordPress CSS-klasse en Tailwind-ekwivalente.',
    categories: ['Aspect Ratios'],
    badge: 'New',
  },
];

interface GuidelinesTabProps {
  search: string;
  isAf: boolean;
}

export const GuidelinesTab: React.FC<GuidelinesTabProps> = ({ search, isAf }) => {
  const filtered = GUIDELINE_DOCS.filter(d =>
    `${d.titleEn} ${d.titleAf} ${d.descEn} ${d.descAf} ${d.categories.join(' ')}`.toLowerCase().includes(search.toLowerCase())
  );
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  if (selectedDoc) {
    return (
      <div>
        <button
          onClick={() => setSelectedDoc(null)}
          className="mb-4 text-sm text-custom-primary hover:underline flex items-center gap-1"
        >
          <ChevronUp size={14} /> {isAf ? 'Terug na lys' : 'Back to list'}
        </button>
        <WpMarkdownViewer
          glob={wpAllGuidelines}
          filename={selectedDoc}
          label={selectedDoc}
          maxHeight={600}
          locale={isAf ? 'af' : 'en'}
        />
      </div>
    );
  }

  return (
    <div className="grid gap-3">
      {filtered.map(d => (
        <button
          key={d.filename}
          onClick={() => setSelectedDoc(d.filename)}
          className="text-left p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] hover:border-custom-primary/30 transition-colors"
        >
          <div className="flex items-center gap-2 mb-1">
            <BookOpen size={14} className="text-custom-primary" />
            <span className="text-sm text-gray-900 dark:text-white">{isAf ? d.titleAf : d.titleEn}</span>
            {d.badge && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-custom-primary/10 text-custom-primary">{d.badge}</span>
            )}
          </div>
          <p className="text-[11px] text-gray-500 dark:text-white/40">{isAf ? d.descAf : d.descEn}</p>
        </button>
      ))}
    </div>
  );
};
