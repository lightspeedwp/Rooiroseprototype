// ─── Dev Tool Hero & Related Tools Configuration ────────────────────────────
// Centralized hero config per dev tool page.
// Each page imports its config from here and passes to DevToolHero / DevRelatedTools.
// Dynamic stats are computed in-page; this file provides static metadata only.

import {
  Layers, Map, Database, Globe, Palette, Paintbrush,
  LayoutTemplate, LayoutDashboard, Puzzle, FolderOpen, Sparkles,
  Mail, Settings, FileImage, FileStack, LayoutGrid,
  Rocket, FileCode, FileJson, SlidersHorizontal, Blocks,
  ShoppingCart, ListChecks, Package,
} from 'lucide-react';
import { Newspaper } from '../components/icons/NewspaperIcon';
import type { RelatedTool } from '../components/dev/DevRelatedTools';
import type { LucideIcon } from 'lucide-react';
import type React from 'react';

// ─── Hero Metadata ──────────────────────────────────────────────────────────

export interface DevToolHeroMeta {
  icon: LucideIcon | React.FC<{ size?: number; className?: string }>;
  iconColor: string;
  titleAf: string;
  titleEn: string;
  descAf: string;
  descEn: string;
  badgeAf?: string;
  badgeEn?: string;
}

/** Resolve heroMeta bilingual fields for the current locale.
 *  Returns `{ title, description, badge, icon, iconColor }` ready for DevToolHero props.
 *  Eliminates the `isAf ? heroMeta.titleAf : heroMeta.titleEn` ternary pattern. */
export function resolveHeroMeta(meta: DevToolHeroMeta, locale: 'af' | 'en') {
  const isAf = locale === 'af';
  return {
    title: isAf ? meta.titleAf : meta.titleEn,
    description: isAf ? meta.descAf : meta.descEn,
    badge: meta.badgeAf || meta.badgeEn ? (isAf ? meta.badgeAf : meta.badgeEn) : undefined,
    icon: meta.icon,
    iconColor: meta.iconColor,
  };
}

export const HERO_META: Record<string, DevToolHeroMeta> = {
  componentBrowser: {
    icon: Layers,
    iconColor: 'bg-blue-500',
    titleAf: 'Komponentblaaier',
    titleEn: 'Component Browser',
    descAf: 'Alle React-komponente in die projek — gegroepeer volgens kategorie, met invoerpaaie, props, en etikette.',
    descEn: 'All React components in the project — grouped by category, with import paths, props, and tags.',
  },
  routeMap: {
    icon: Map,
    iconColor: 'bg-green-500',
    titleAf: 'Roetekaart',
    titleEn: 'Route Map',
    descAf: 'Volledige roetehiërargie — elke pad, komponent, uitleg-tipe, en Legacy English ekwivalente.',
    descEn: 'Full route hierarchy — every path, component, layout type, and legacy English equivalents.',
  },
  dataBrowser: {
    icon: Database,
    iconColor: 'bg-orange-500',
    titleAf: 'Datastruktuurblaaier',
    titleEn: 'Data Structure Browser',
    descAf: 'Alle data-lêers in die prototipe — uitvoere, rekordtelling, TypeScript-vorms, en verwysings.',
    descEn: 'All data files in the prototype — exports, record counts, TypeScript shapes, and references.',
  },
  wordPressMigration: {
    icon: Globe,
    iconColor: 'bg-indigo-500',
    titleAf: 'WordPress Migrasie Hub',
    titleEn: 'WordPress Migration Hub',
    descAf: 'Volledige migrasiebeplanner — inhoudmodel, blok-kartering, tema-instellings, en padkaart na WordPress FSE.',
    descEn: 'Full migration planner — content model, block mapping, theme settings, and roadmap to WordPress FSE.',
  },
  guidelinesBrowser: {
    icon: Newspaper,
    iconColor: 'bg-emerald-500',
    titleAf: 'Riglyne-blaaier',
    titleEn: 'Guidelines Browser',
    descAf: 'Blaai deur alle riglynlêers — ontwerptokens, inhoudstandaarde, WordPress-migrasie, en meer.',
    descEn: 'Browse all guideline files — design tokens, content standards, WordPress migration, and more.',
  },
  contentBrowser: {
    icon: FileStack,
    iconColor: 'bg-cyan-500',
    titleAf: 'Inhoudblaaier',
    titleEn: 'Content Browser',
    descAf: 'Statiese inhoudlêers — bladsy-inhoud, beleidsdokumente, en versamelings in Markdown-formaat.',
    descEn: 'Static content files — page content, policy documents, and collections in Markdown format.',
  },
  emailPreviews: {
    icon: Mail,
    iconColor: 'bg-rose-500',
    titleAf: 'E-pos Voorskou',
    titleEn: 'Email Previews',
    descAf: 'WooCommerce e-pos sjablone, vormindiening-bevestigings en personeelantwoorde — 30 sjablone vir handel, kontakvorms, indiening, registrasie, nuusbrief, en kompetisies.',
    descEn: 'WooCommerce email templates, form submission confirmations and staff replies — 30 templates for commerce, contact forms, submissions, registration, newsletters, and competitions.',
  },
  systemConfig: {
    icon: Settings,
    iconColor: 'bg-purple-500',
    titleAf: 'Stelselkonfigurasie',
    titleEn: 'System Configuration',
    descAf: 'WordPress, WooCommerce, Payfast, Issuu, en derdeparty-integrasie konfigurasie verwysing.',
    descEn: 'WordPress, WooCommerce, Payfast, Issuu, and third-party integration configuration reference.',
  },
  launchChecklist: {
    icon: Rocket,
    iconColor: 'bg-orange-500',
    titleAf: 'Lansering Kontrolelys',
    titleEn: 'Launch Checklist',
    descAf: '10-fase lanseringskontrolelys — van DNS en bedieneropstelling tot inhoudmigrasie en na-lansering monitering.',
    descEn: '10-phase launch checklist — from DNS and server setup to content migration and post-launch monitoring.',
  },
  imageAssetBrowser: {
    icon: FileImage,
    iconColor: 'bg-sky-500',
    titleAf: 'Beeldbateblaaier',
    titleEn: 'Image Asset Browser',
    descAf: 'Alle beelde in die prototipe — rol-filters, groottes, WP-media opsomming, en groep-uitvoer.',
    descEn: 'All images in the prototype — role filters, dimensions, WP media summary, and batch export.',
  },
  patternBrowser: {
    icon: LayoutTemplate,
    iconColor: 'bg-fuchsia-500',
    titleAf: 'Patroonblaaier',
    titleEn: 'Pattern Browser',
    descAf: '57 WordPress-patrone — PHP-generering, blok-HTML, statusopsporing, en kruisverwysings na blokstyle en afdelingstyle.',
    descEn: '57 WordPress patterns — PHP generation, block HTML, status tracking, and cross-links to block styles and section styles.',
  },
  blockStyleBrowser: {
    icon: Paintbrush,
    iconColor: 'bg-pink-500',
    titleAf: 'Blok-stylblaaier',
    titleEn: 'Block Style Browser',
    descAf: 'Alle blok-stylvariasies — JSON + CSS, kategorie-filters, standaard-merking, en kruisverwysings na patrone.',
    descEn: 'All block style variations — JSON + CSS, category filters, default marking, and cross-links to patterns.',
  },
  themeJsonViewer: {
    icon: FileJson,
    iconColor: 'bg-emerald-500',
    titleAf: 'Theme.json Blaaier',
    titleEn: 'Theme.json Viewer',
    descAf: 'Volledige theme.json v3 verkenner — kleure, tipografie, spasiëring, skaduwees, rande, element-style, en sjablone.',
    descEn: 'Full theme.json v3 explorer — colors, typography, spacing, shadows, borders, element styles, and templates.',
  },
  presetsBrowser: {
    icon: SlidersHorizontal,
    iconColor: 'bg-amber-500',
    titleAf: 'Voorinstellings Blaaier',
    titleEn: 'Presets Browser',
    descAf: 'Alle theme.json voorinstellings — kleure, lettergroottes, spasiëring, skaduwees, grensradius, grenswydte, en aspekverhoudings met blok-styl kruisverwysings.',
    descEn: 'All theme.json presets — colors, font sizes, spacing, shadows, border radius, border widths, and aspect ratios with block style cross-references.',
  },
  ollieThemeReference: {
    icon: Blocks,
    iconColor: 'bg-blue-500',
    titleAf: 'Ollie Tema Verwysing',
    titleEn: 'Ollie Theme Reference',
    descAf: 'Volledige Ollie v1.5.4 inventaris — 59 patrone, 8 sjablone, 3 onderdele, 21 blokstyle, 21 stylvariasies, elk met \'n migrasie-besluit (Behou/Wysig/Vervang/Verwyder).',
    descEn: 'Complete Ollie v1.5.4 inventory — 59 patterns, 8 templates, 3 parts, 21 block styles, 21 style variations, each with a migration decision (Keep/Modify/Replace/Delete).',
  },
  formBuilderPreview: {
    icon: FileStack,
    iconColor: 'bg-teal-500',
    titleAf: 'Vormpatroon-galery',
    titleEn: 'Form Pattern Gallery',
    descAf: 'Inventaris van alle vorms in die kodebasis — velde, validasie, WP handlers en lêerliggings.',
    descEn: 'Inventory of all forms in the codebase — fields, validation, WP handlers and file locations.',
  },
  sectionStyles: {
    icon: LayoutGrid,
    iconColor: 'bg-violet-500',
    titleAf: 'Afdeling Style',
    titleEn: 'Section Styles',
    descAf: 'Volledige verwysing vir al 18 afdeling style — CSS, JSON, PHP registrasie, WP blok kode, template- en patroongebruik.',
    descEn: 'Complete reference for all 18 section styles — CSS, JSON, PHP registration, WP block code, template and pattern usage.',
  },
  designSystem: {
    icon: Palette,
    iconColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
    titleAf: 'Ontwerpstelsel',
    titleEn: 'Design System',
    descAf: 'Kleure met WCAG kontras, tipografie met lewendige voorbeelde, spasiëring, skaduwees, UI-komponente, en token-uitvoer — alles in een plek.',
    descEn: 'Colors with WCAG contrast, typography with live specimens, spacing, shadows, UI components, and token export — all in one place.',
  },
  iconBrowser: {
    icon: Sparkles,
    iconColor: 'bg-yellow-500',
    titleAf: 'Ikoonblaaier',
    titleEn: 'Icon Browser',
    descAf: 'Volledige register van alle ikone — koppelvlak vs inhoud geklassifiseer, SVG-uitvoer, WordPress Dashicon-eweknieë, en gebruik per komponent.',
    descEn: 'Complete registry of all icons — interface vs content classified, SVG export, WordPress Dashicon equivalents, and usage per component.',
  },
  eEditionsCommerce: {
    icon: ShoppingCart,
    iconColor: 'bg-emerald-500',
    titleAf: 'E-Uitgawes Handel',
    titleEn: 'E-Editions Commerce',
    descAf: 'WooCommerce produk-konfigurasie vir e-uitgawe intekenings, individuele aankope, lidmaatskapreels, Payfast-integrasie, en opstelling gids.',
    descEn: 'WooCommerce product configuration for e-edition subscriptions, individual purchases, membership rules, Payfast integration, and setup guide.',
  },
  templateBrowser: {
    icon: LayoutDashboard,
    iconColor: 'bg-indigo-500',
    titleAf: 'Template-blaaier',
    titleEn: 'Template Browser',
    descAf: 'Alle WordPress FSE templates — volledige hiërargie, blok-samestelling, afdeling-style kartering, en HTML kode uitvoer.',
    descEn: 'All WordPress FSE templates — full hierarchy, block composition, section style mapping, and HTML code export.',
  },
  templatePartBrowser: {
    icon: Puzzle,
    iconColor: 'bg-teal-500',
    titleAf: 'Sjabloon Onderdele',
    titleEn: 'Template Part Browser',
    descAf: 'Herbruikbare sjabloon onderdele — kopstukke, voetskrifte, sybalke, en navigasie-elemente met blok-analise.',
    descEn: 'Reusable template parts — headers, footers, sidebars, and navigation elements with block analysis.',
  },
  blockBrowser: {
    icon: Blocks,
    iconColor: 'bg-cyan-500',
    titleAf: 'Blokblaaier',
    titleEn: 'Blocks Browser',
    descAf: 'Volledige blok-inventaris — React komponente, WordPress kern, WooCommerce, en derdeparty-blokke met styl-kruisverwysings, CSS-oudit, en riglyn-skakels.',
    descEn: 'Complete block inventory — React components, WordPress core, WooCommerce, and third-party blocks with style cross-references, CSS audit, and guideline links.',
  },
};

// ─── Related Tools Per Page ─────────────────────────────────────────────────

export const RELATED_TOOLS_MAP: Record<string, RelatedTool[]> = {
  componentBrowser: [
    { path: '/ontwikkelaar/ontwerpstelsel', labelAf: 'Ontwerpstelsel', labelEn: 'Design System', descAf: 'Kleure, tipografie, spasiëring, skaduwees, en komponentvoorbeelde', descEn: 'Colors, typography, spacing, shadows, and component specimens', icon: Palette, color: 'bg-purple-500' },
    { path: '/ontwikkelaar/roetes', labelAf: 'Roetekaart', labelEn: 'Route Map', descAf: 'Sien watter roetes elke komponent gebruik', descEn: 'See which routes each component uses', icon: Map, color: 'bg-green-500' },
    { path: '/ontwikkelaar/ikone', labelAf: 'Ikoonblaaier', labelEn: 'Icon Browser', descAf: 'Alle ikone met Lucide-voorskou en Dashicon-kartering', descEn: 'All icons with Lucide preview and Dashicon mapping', icon: Sparkles, color: 'bg-yellow-500' },
  ],
  routeMap: [
    { path: '/ontwikkelaar/komponente', labelAf: 'Komponentblaaier', labelEn: 'Component Browser', descAf: 'Sien komponentbesonderhede vir elke roete', descEn: 'See component details for each route', icon: Layers, color: 'bg-blue-500' },
    { path: '/ontwikkelaar/sjablone', labelAf: 'Template-blaaier', labelEn: 'Template Browser', descAf: 'WP sjablone gekaart na React-roetes', descEn: 'WP templates mapped to React routes', icon: LayoutDashboard, color: 'bg-indigo-500' },
    { path: '/ontwikkelaar/data', labelAf: 'Datastruktuur', labelEn: 'Data Browser', descAf: 'Data-lêers wat roetes onderlê', descEn: 'Data files backing routes', icon: Database, color: 'bg-orange-500' },
  ],
  dataBrowser: [
    { path: '/ontwikkelaar/komponente', labelAf: 'Komponentblaaier', labelEn: 'Component Browser', descAf: 'Komponente wat hierdie data invoer', descEn: 'Components importing this data', icon: Layers, color: 'bg-blue-500' },
    { path: '/ontwikkelaar/wordpress', labelAf: 'WordPress Migrasie', labelEn: 'WordPress Migration', descAf: 'Hoe data-lêers na CPTs en velde migreer', descEn: 'How data files migrate to CPTs and fields', icon: Globe, color: 'bg-indigo-500' },
    { path: '/ontwikkelaar/roetes', labelAf: 'Roetekaart', labelEn: 'Route Map', descAf: 'Roetes wat hierdie data-lêers gebruik', descEn: 'Routes consuming these data files', icon: Map, color: 'bg-green-500' },
  ],
  wordPressMigration: [
    { path: '/ontwikkelaar/patrone', labelAf: 'Patroonblaaier', labelEn: 'Pattern Browser', descAf: '57 WP-patrone met PHP-generering en statusopsporing', descEn: '57 WP patterns with PHP generation and status tracking', icon: LayoutTemplate, color: 'bg-fuchsia-500' },
    { path: '/ontwikkelaar/blok-styl', labelAf: 'Blok-stylblaaier', labelEn: 'Block Style Browser', descAf: '22 blok-stylvariasies met JSON + CSS', descEn: '22 block style variations with JSON + CSS', icon: Paintbrush, color: 'bg-pink-500' },
    { path: '/ontwikkelaar/sjablone', labelAf: 'Template-blaaier', labelEn: 'Template Browser', descAf: '21 WP-sjablone met hiërargie en kode-aansig', descEn: '21 WP templates with hierarchy and code viewer', icon: LayoutDashboard, color: 'bg-indigo-500' },
    { path: '/ontwikkelaar/inc-map', labelAf: 'Inc-lêerblaaier', labelEn: 'Inc/ Files', descAf: 'PHP inc/ lêers — CPTs, taksonomieë, blok style', descEn: 'PHP inc/ files — CPTs, taxonomies, block styles', icon: FolderOpen, color: 'bg-orange-500' },
    { path: '/ontwikkelaar/afdeling-style', labelAf: 'Afdeling-style', labelEn: 'Section Styles', descAf: 'CSS afdeling-style met JSON + PHP omskakelaar', descEn: 'CSS section styles with JSON + PHP converter', icon: LayoutGrid, color: 'bg-violet-500' },
  ],
  guidelinesBrowser: [
    { path: '/ontwikkelaar/inhoud', labelAf: 'Inhoudblaaier', labelEn: 'Content Browser', descAf: 'Statiese inhoudlêers vir bladsye en beleid', descEn: 'Static content files for pages and policies', icon: FileStack, color: 'bg-cyan-500' },
    { path: '/ontwikkelaar/ontwerpstelsel', labelAf: 'Ontwerpstelsel', labelEn: 'Design System', descAf: 'Ontwerptokens wat in riglyne gedefinieer word', descEn: 'Design tokens defined in guidelines', icon: Palette, color: 'bg-purple-500' },
    { path: '/ontwikkelaar/wordpress', labelAf: 'WordPress Migrasie', labelEn: 'WordPress Migration', descAf: 'Migrasie-riglyne in aksie', descEn: 'Migration guidelines in action', icon: Globe, color: 'bg-indigo-500' },
  ],
  contentBrowser: [
    { path: '/ontwikkelaar/riglyne', labelAf: 'Riglyne-blaaier', labelEn: 'Guidelines Browser', descAf: 'Ontwerp- en ontwikkelingsriglyne', descEn: 'Design and development guidelines', icon: Newspaper, color: 'bg-emerald-500' },
    { path: '/ontwikkelaar/data', labelAf: 'Datastruktuur', labelEn: 'Data Browser', descAf: 'Gestruktureerde data-lêers afgelei van hierdie inhoud', descEn: 'Structured data files derived from this content', icon: Database, color: 'bg-orange-500' },
    { path: '/ontwikkelaar/wordpress', labelAf: 'WordPress Migrasie', labelEn: 'WordPress Migration', descAf: 'Hoe inhoud na WordPress migreer', descEn: 'How content migrates to WordPress', icon: Globe, color: 'bg-indigo-500' },
  ],
  systemConfig: [
    { path: '/ontwikkelaar/e-pos-voorskou', labelAf: 'E-pos Voorskou', labelEn: 'Email Previews', descAf: 'WooCommerce e-pos sjablone', descEn: 'WooCommerce email templates', icon: Mail, color: 'bg-rose-500' },
    { path: '/ontwikkelaar/lansering', labelAf: 'Lansering Kontrolelys', labelEn: 'Launch Checklist', descAf: 'Stelselopstelling voor lansering', descEn: 'System setup before launch', icon: Rocket, color: 'bg-orange-500' },
    { path: '/ontwikkelaar/wordpress', labelAf: 'WordPress Migrasie', labelEn: 'WordPress Migration', descAf: 'WordPress-konfigurasie en migrasie', descEn: 'WordPress configuration and migration', icon: Globe, color: 'bg-indigo-500' },
  ],
  launchChecklist: [
    { path: '/ontwikkelaar/stelselkonfig', labelAf: 'Stelselkonfigurasie', labelEn: 'System Config', descAf: 'Stelselinstellings wat voor lansering bevestig moet word', descEn: 'System settings that must be confirmed before launch', icon: Settings, color: 'bg-purple-500' },
    { path: '/ontwikkelaar/e-pos-voorskou', labelAf: 'E-pos Voorskou', labelEn: 'Email Previews', descAf: 'E-pos sjablone toetsing', descEn: 'Email template testing', icon: Mail, color: 'bg-rose-500' },
    { path: '/ontwikkelaar/wordpress', labelAf: 'WordPress Migrasie', labelEn: 'WordPress Migration', descAf: 'Migrasie-status en padkaart', descEn: 'Migration status and roadmap', icon: Globe, color: 'bg-indigo-500' },
  ],
  imageAssetBrowser: [
    { path: '/ontwikkelaar/komponente', labelAf: 'Komponentblaaier', labelEn: 'Component Browser', descAf: 'Komponente wat hierdie beelde gebruik', descEn: 'Components using these images', icon: Layers, color: 'bg-blue-500' },
    { path: '/ontwikkelaar/patrone', labelAf: 'Patroonblaaier', labelEn: 'Pattern Browser', descAf: 'WP-patrone wat beelde verwys', descEn: 'WP patterns referencing images', icon: LayoutTemplate, color: 'bg-fuchsia-500' },
    { path: '/ontwikkelaar/wordpress', labelAf: 'WordPress Migrasie', labelEn: 'WordPress Migration', descAf: 'WP mediabiblioteek migrasie', descEn: 'WP media library migration', icon: Globe, color: 'bg-indigo-500' },
  ],
  patternBrowser: [
    { path: '/ontwikkelaar/blokke', labelAf: 'Blokblaaier', labelEn: 'Blocks Browser', descAf: 'Blokke wat in patrone gebruik word', descEn: 'Blocks used in patterns', icon: Blocks, color: 'bg-cyan-500' },
    { path: '/ontwikkelaar/blok-styl', labelAf: 'Blok-stylblaaier', labelEn: 'Block Style Browser', descAf: 'Blok-style wat in patrone gebruik word', descEn: 'Block styles used in patterns', icon: Paintbrush, color: 'bg-pink-500' },
    { path: '/ontwikkelaar/afdeling-style', labelAf: 'Afdeling-style', labelEn: 'Section Styles', descAf: 'CSS afdeling-style kruisverwys na patrone', descEn: 'CSS section styles cross-linked to patterns', icon: LayoutGrid, color: 'bg-violet-500' },
    { path: '/ontwikkelaar/sjablone', labelAf: 'Template-blaaier', labelEn: 'Template Browser', descAf: 'Sjablone wat patrone insluit', descEn: 'Templates that include patterns', icon: LayoutDashboard, color: 'bg-indigo-500' },
    { path: '/ontwikkelaar/inc-map', labelAf: 'Inc-lêerblaaier', labelEn: 'Inc/ Files', descAf: 'PHP-registrasie van patrone', descEn: 'PHP registration of patterns', icon: FolderOpen, color: 'bg-orange-500' },
  ],
  blockStyleBrowser: [
    { path: '/ontwikkelaar/blokke', labelAf: 'Blokblaaier', labelEn: 'Blocks Browser', descAf: 'Volledige blok-inventaris oor alle domeine', descEn: 'Complete block inventory across all domains', icon: Blocks, color: 'bg-cyan-500' },
    { path: '/ontwikkelaar/patrone', labelAf: 'Patroonblaaier', labelEn: 'Pattern Browser', descAf: 'Patrone wat blok-style gebruik', descEn: 'Patterns using block styles', icon: LayoutTemplate, color: 'bg-fuchsia-500' },
    { path: '/ontwikkelaar/afdeling-style', labelAf: 'Afdeling-style', labelEn: 'Section Styles', descAf: 'Afdeling-style kruisverwysings', descEn: 'Section style cross-references', icon: LayoutGrid, color: 'bg-violet-500' },
    { path: '/ontwikkelaar/inc-map', labelAf: 'Inc-lêerblaaier', labelEn: 'Inc/ Files', descAf: 'PHP blok-styl registrasie lêer', descEn: 'PHP block style registration file', icon: FolderOpen, color: 'bg-orange-500' },
    { path: '/ontwikkelaar/ontwerpstelsel', labelAf: 'Ontwerpstelsel', labelEn: 'Design System', descAf: 'Ontwerptokens wat blok-style dryf', descEn: 'Design tokens driving block styles', icon: Palette, color: 'bg-purple-500' },
  ],
  themeJsonViewer: [
    { path: '/ontwikkelaar/blok-styl', labelAf: 'Blok-stylblaaier', labelEn: 'Block Style Browser', descAf: 'Blok-style wat voorinstellings gebruik', descEn: 'Block styles using presets', icon: Paintbrush, color: 'bg-pink-500' },
    { path: '/ontwikkelaar/ontwerpstelsel', labelAf: 'Ontwerpstelsel', labelEn: 'Design System', descAf: 'Ontwerptokens gekaart na theme.json', descEn: 'Design tokens mapped to theme.json', icon: Palette, color: 'bg-purple-500' },
    { path: '/ontwikkelaar/patrone', labelAf: 'Patroonblaaier', labelEn: 'Pattern Browser', descAf: 'Patrone wat theme.json voorinstellings verwys', descEn: 'Patterns referencing theme.json presets', icon: LayoutTemplate, color: 'bg-fuchsia-500' },
    { path: '/ontwikkelaar/sjablone-onderdeel', labelAf: 'Sjabloon Onderdele', labelEn: 'Template Parts', descAf: 'Sjabloon onderdele gedefinieer in theme.json', descEn: 'Template parts defined in theme.json', icon: Puzzle, color: 'bg-teal-500' },
  ],
  presetsBrowser: [
    { path: '/ontwikkelaar/blok-styl', labelAf: 'Blok-stylblaaier', labelEn: 'Block Style Browser', descAf: 'Blok-stylvariasies met JSON + CSS', descEn: 'Block style variations with JSON + CSS', icon: Paintbrush, color: 'bg-pink-500' },
    { path: '/ontwikkelaar/ontwerpstelsel', labelAf: 'Ontwerpstelsel', labelEn: 'Design System', descAf: 'Ontwerptokens gekaart na theme.json', descEn: 'Design tokens mapped to theme.json', icon: Palette, color: 'bg-purple-500' },
    { path: '/ontwikkelaar/patrone', labelAf: 'Patroonblaaier', labelEn: 'Pattern Browser', descAf: 'Patrone wat theme.json voorinstellings verwys', descEn: 'Patterns referencing theme.json presets', icon: LayoutTemplate, color: 'bg-fuchsia-500' },
    { path: '/ontwikkelaar/sjablone-onderdeel', labelAf: 'Sjabloon Onderdele', labelEn: 'Template Parts', descAf: 'Sjabloon onderdele gedefinieer in theme.json', descEn: 'Template parts defined in theme.json', icon: Puzzle, color: 'bg-teal-500' },
  ],
  ollieThemeReference: [
    { path: '/ontwikkelaar/blok-styl', labelAf: 'Blok-stylblaaier', labelEn: 'Block Style Browser', descAf: 'Blok-stylvariasies met JSON + CSS', descEn: 'Block style variations with JSON + CSS', icon: Paintbrush, color: 'bg-pink-500' },
    { path: '/ontwikkelaar/ontwerpstelsel', labelAf: 'Ontwerpstelsel', labelEn: 'Design System', descAf: 'Ontwerptokens gekaart na theme.json', descEn: 'Design tokens mapped to theme.json', icon: Palette, color: 'bg-purple-500' },
    { path: '/ontwikkelaar/patrone', labelAf: 'Patroonblaaier', labelEn: 'Pattern Browser', descAf: 'Patrone wat theme.json voorinstellings verwys', descEn: 'Patterns referencing theme.json presets', icon: LayoutTemplate, color: 'bg-fuchsia-500' },
    { path: '/ontwikkelaar/sjablone-onderdeel', labelAf: 'Sjabloon Onderdele', labelEn: 'Template Parts', descAf: 'Sjabloon onderdele gedefinieer in theme.json', descEn: 'Template parts defined in theme.json', icon: Puzzle, color: 'bg-teal-500' },
  ],
  formBuilderPreview: [
    { path: '/ontwikkelaar/komponente', labelAf: 'Komponentblaaier', labelEn: 'Component Browser', descAf: 'Komponente wat vorms bevat', descEn: 'Components containing forms', icon: Layers, color: 'bg-blue-500' },
    { path: '/ontwikkelaar/roetes', labelAf: 'Roetekaart', labelEn: 'Route Map', descAf: 'Roetes wat elke vorm huisves', descEn: 'Routes hosting each form', icon: Map, color: 'bg-green-500' },
    { path: '/ontwikkelaar/e-pos-voorskou', labelAf: 'E-pos Voorskou', labelEn: 'Email Previews', descAf: 'Vormindiening-bevestigings e-posse', descEn: 'Form submission confirmation emails', icon: Mail, color: 'bg-rose-500' },
    { path: '/ontwikkelaar/wordpress', labelAf: 'WordPress Migrasie', labelEn: 'WordPress Migration', descAf: 'Gravity Forms en WP vorm-migrasie', descEn: 'Gravity Forms and WP form migration', icon: Globe, color: 'bg-indigo-500' },
  ],
  sectionStyles: [
    { path: '/ontwikkelaar/blokke', labelAf: 'Blokblaaier', labelEn: 'Blocks Browser', descAf: 'Blokke wat afdeling-style gebruik', descEn: 'Blocks using section styles', icon: Blocks, color: 'bg-cyan-500' },
    { path: '/ontwikkelaar/blok-styl', labelAf: 'Blok-stylblaaier', labelEn: 'Block Style Browser', descAf: 'Verwante blok styl variasies — JSON, CSS, per-blok gegroepeer', descEn: 'Related block style variations — JSON, CSS, grouped per block', icon: Paintbrush, color: 'bg-pink-500' },
    { path: '/ontwikkelaar/patrone', labelAf: 'Patroonblaaier', labelEn: 'Pattern Browser', descAf: '76 WordPress patrone — sien watter patrone hierdie afdeling style gebruik', descEn: '76 WordPress patterns — see which patterns use these section styles', icon: LayoutTemplate, color: 'bg-fuchsia-500' },
    { path: '/ontwikkelaar/sjablone', labelAf: 'Template-blaaier', labelEn: 'Template Browser', descAf: 'FSE templates waar afdeling style toegepas word', descEn: 'FSE templates where section styles are applied', icon: LayoutDashboard, color: 'bg-indigo-500' },
    { path: '/ontwikkelaar/inc-map', labelAf: 'Inc-lêerblaaier', labelEn: 'Inc/ Folder Browser', descAf: 'PHP inc/block-styles.php — registrasie kode vir alle afdeling style', descEn: 'PHP inc/block-styles.php — registration code for all section styles', icon: FolderOpen, color: 'bg-orange-500' },
    { path: '/ontwikkelaar/komponente', labelAf: 'Komponentblaaier', labelEn: 'Component Browser', descAf: 'React komponente wat hierdie afdeling style gebruik', descEn: 'React components that use these section styles', icon: Layers, color: 'bg-blue-500' },
  ],
  templateBrowser: [
    { path: '/ontwikkelaar/sjablone-onderdeel', labelAf: 'Template-deelblaaier', labelEn: 'Template Part Browser', descAf: 'Kopstuk, voetskrif, sybalk — onderdele wat in templates gebruik word', descEn: 'Header, footer, sidebar — parts used within templates', icon: Puzzle, color: 'bg-cyan-500' },
    { path: '/ontwikkelaar/blokke', labelAf: 'Blokblaaier', labelEn: 'Blocks Browser', descAf: 'Blokke wat in templates gebruik word', descEn: 'Blocks used in templates', icon: Blocks, color: 'bg-cyan-500' },
    { path: '/ontwikkelaar/patrone', labelAf: 'Patroonblaaier', labelEn: 'Pattern Browser', descAf: '76 WordPress patrone wat templates saamstel', descEn: '76 WordPress patterns that compose templates', icon: LayoutTemplate, color: 'bg-fuchsia-500' },
    { path: '/ontwikkelaar/afdeling-style', labelAf: 'Afdeling-style', labelEn: 'Section Styles', descAf: '18 afdeling style — agtergronde, gradiënte, komponent style', descEn: '18 section styles — backgrounds, gradients, component styles', icon: LayoutGrid, color: 'bg-violet-500' },
    { path: '/ontwikkelaar/blok-styl', labelAf: 'Blok-stylblaaier', labelEn: 'Block Style Browser', descAf: 'Blok styl variasies wat in templates gebruik word', descEn: 'Block style variations used within templates', icon: Paintbrush, color: 'bg-pink-500' },
    { path: '/ontwikkelaar/inc-map', labelAf: 'Inc-lêerblaaier', labelEn: 'Inc/ Folder Browser', descAf: 'PHP include lêers — CPTs en blokke geregistreer vir templates', descEn: 'PHP include files — CPTs and blocks registered for templates', icon: FolderOpen, color: 'bg-orange-500' },
  ],
  templatePartBrowser: [
    { path: '/ontwikkelaar/sjablone', labelAf: 'Template-blaaier', labelEn: 'Template Browser', descAf: 'Volledige WordPress FSE template-hirargie en kode-uitvoer', descEn: 'Complete WordPress FSE template hierarchy and code export', icon: LayoutDashboard, color: 'bg-indigo-500' },
    { path: '/ontwikkelaar/blokke', labelAf: 'Blokblaaier', labelEn: 'Blocks Browser', descAf: 'Blokke wat in onderdele gebruik word', descEn: 'Blocks used in template parts', icon: Blocks, color: 'bg-cyan-500' },
    { path: '/ontwikkelaar/patrone', labelAf: 'Patroonblaaier', labelEn: 'Pattern Browser', descAf: '76 WordPress patrone wat templates saamstel', descEn: '76 WordPress patterns that compose templates', icon: LayoutTemplate, color: 'bg-fuchsia-500' },
    { path: '/ontwikkelaar/blok-styl', labelAf: 'Blok-stylblaaier', labelEn: 'Block Style Browser', descAf: 'Blok styl variasies wat in templates gebruik word', descEn: 'Block style variations used within templates', icon: LayoutGrid, color: 'bg-pink-500' },
    { path: '/ontwikkelaar/inc-map', labelAf: 'Inc-lêerblaaier', labelEn: 'Inc/ Folder Browser', descAf: 'PHP include lêers — CPTs en blokke geregistreer vir templates', descEn: 'PHP include files — CPTs and blocks registered for templates', icon: FolderOpen, color: 'bg-orange-500' },
    { path: '/ontwikkelaar/komponente', labelAf: 'Komponentblaaier', labelEn: 'Component Browser', descAf: 'Alle React komponente wat na WordPress gemigreer word', descEn: 'All React components being migrated to WordPress', icon: Layers, color: 'bg-blue-500' },
  ],
  incFolderBrowser: [
    { path: '/ontwikkelaar/wordpress', labelAf: 'WordPress Migrasie', labelEn: 'WordPress Migration', descAf: 'Volledige migrasie beplanner met inhoudmodel, blok kartering, padkaart', descEn: 'Full migration planner with content model, block mapping, roadmap', icon: Globe, color: 'bg-indigo-500' },
    { path: '/ontwikkelaar/blok-styl', labelAf: 'Blok-stylblaaier', labelEn: 'Block Style Browser', descAf: 'Blok styl variasies geregistreer deur inc/block-styles.php', descEn: 'Block style variations registered by inc/block-styles.php', icon: Paintbrush, color: 'bg-pink-500' },
    { path: '/ontwikkelaar/afdeling-style', labelAf: 'Afdeling-style', labelEn: 'Section Styles', descAf: 'Afdeling style CSS geregistreer deur die blok styl laaier', descEn: 'Section style CSS registered by the block styles loader', icon: LayoutDashboard, color: 'bg-violet-500' },
    { path: '/ontwikkelaar/sjablone', labelAf: 'Template-blaaier', labelEn: 'Template Browser', descAf: 'Templates wat afhang van CPTs en blokke wat hier geregistreer word', descEn: 'Templates that depend on CPTs and blocks registered here', icon: LayoutDashboard, color: 'bg-indigo-500' },
    { path: '/ontwikkelaar/patrone', labelAf: 'Patroonblaaier', labelEn: 'Pattern Browser', descAf: 'Patrone wat CPTs en taksonomieë gebruik wat hier geregistreer word', descEn: 'Patterns that use CPTs and taxonomies registered here', icon: LayoutTemplate, color: 'bg-fuchsia-500' },
    { path: '/ontwikkelaar/data', labelAf: 'Datastruktuur', labelEn: 'Data Browser', descAf: 'React data lêers wat die prototipe weergawe van hierdie CPTs bevat', descEn: 'React data files containing prototype versions of these CPTs', icon: Database, color: 'bg-amber-500' },
  ],
  designSystem: [
    { path: '/ontwikkelaar/komponente', labelAf: 'Komponentblaaier', labelEn: 'Component Browser', descAf: 'Alle React komponente met lewendige voorbeelde en eienskappe', descEn: 'All React components with live examples and properties', icon: Layers, color: 'bg-blue-500' },
    { path: '/ontwikkelaar/ikone', labelAf: 'Ikoonblaaier', labelEn: 'Icon Browser', descAf: '50+ ikone — SVG uitvoer, Dashicon ekwivalente, en gebruik per komponent', descEn: '50+ icons — SVG export, Dashicon equivalents, and usage per component', icon: LayoutGrid, color: 'bg-yellow-500' },
    { path: '/ontwikkelaar/afdeling-style', labelAf: 'Afdeling-style', labelEn: 'Section Styles', descAf: '18 afdeling style wat hierdie ontwerp-tokens gebruik', descEn: '18 section styles that use these design tokens', icon: LayoutTemplate, color: 'bg-violet-500' },
    { path: '/ontwikkelaar/blok-styl', labelAf: 'Blok-stylblaaier', labelEn: 'Block Style Browser', descAf: 'Blok styl variasies met CSS van hierdie tokens', descEn: 'Block style variations using CSS from these tokens', icon: Paintbrush, color: 'bg-pink-500' },
  ],
  eEditionsCommerce: [
    { path: '/ontwikkelaar/e-pos-voorskou', labelAf: 'E-pos Voorskou', labelEn: 'Email Previews', descAf: 'Intekening lewensiklus e-posse', descEn: 'Subscription lifecycle emails', icon: Mail, color: 'bg-rose-500' },
    { path: '/ontwikkelaar/lansering', labelAf: 'Lansering Kontrolelys', labelEn: 'Launch Checklist', descAf: 'Handel-verwante lanseringstake', descEn: 'Commerce-related launch tasks', icon: ListChecks, color: 'bg-lime-500' },
    { path: '/ontwikkelaar/stelselkonfig', labelAf: 'Stelselkonfigurasie', labelEn: 'System Config', descAf: 'Issuu integrasie en instellings', descEn: 'Issuu integration and settings', icon: Settings, color: 'bg-purple-500' },
    { path: '/ontwikkelaar/wordpress', labelAf: 'WordPress Migrasie', labelEn: 'WordPress Migration', descAf: 'Blok-kartering en inhoudmodel', descEn: 'Block mapping and content model', icon: Package, color: 'bg-indigo-500' },
  ],
  iconBrowser: [
    { path: '/ontwikkelaar/komponente', labelAf: 'Komponentblaaier', labelEn: 'Component Browser', descAf: 'Sien watter komponente elke ikoon gebruik', descEn: 'See which components use each icon', icon: Layers, color: 'bg-blue-500' },
    { path: '/ontwikkelaar/ontwerpstelsel', labelAf: 'Ontwerpstelsel', labelEn: 'Design System', descAf: 'Ikoongroottes, kleure, en ontwerp-tokens', descEn: 'Icon sizes, colors, and design tokens', icon: Palette, color: 'bg-purple-500' },
    { path: '/ontwikkelaar/patrone', labelAf: 'Patroonblaaier', labelEn: 'Pattern Browser', descAf: 'WordPress patrone wat ikone bevat', descEn: 'WordPress patterns containing icons', icon: LayoutTemplate, color: 'bg-fuchsia-500' },
    { path: '/ontwikkelaar/wordpress', labelAf: 'WordPress Migrasie', labelEn: 'WordPress Migration', descAf: 'Dashicon-kartering vir WP blokke', descEn: 'Dashicon mapping for WP blocks', icon: Globe, color: 'bg-indigo-500' },
  ],
  emailPreviews: [
    { path: '/ontwikkelaar/stelselkonfig', labelAf: 'Stelselkonfigurasie', labelEn: 'System Config', descAf: 'WooCommerce e-pos instellings', descEn: 'WooCommerce email settings', icon: Settings, color: 'bg-purple-500' },
    { path: '/ontwikkelaar/lansering', labelAf: 'Lansering Kontrolelys', labelEn: 'Launch Checklist', descAf: 'E-pos sjablone toetsing voor lansering', descEn: 'Email template testing before launch', icon: Rocket, color: 'bg-orange-500' },
    { path: '/ontwikkelaar/e-editions-handel', labelAf: 'E-Uitgawes Handel', labelEn: 'E-Editions Commerce', descAf: 'Handel e-posse vir intekenings en aankope', descEn: 'Commerce emails for subscriptions and purchases', icon: ShoppingCart, color: 'bg-emerald-500' },
    { path: '/ontwikkelaar/form-builder-preview', labelAf: 'Vormpatroon-galery', labelEn: 'Form Pattern Gallery', descAf: 'Vorms wat bevestigings e-posse stuur', descEn: 'Forms that send confirmation emails', icon: FileStack, color: 'bg-teal-500' },
  ],
  blockBrowser: [
    { path: '/ontwikkelaar/blok-styl', labelAf: 'Blok-stylblaaier', labelEn: 'Block Style Browser', descAf: 'Blok-stylvariasies met JSON + CSS', descEn: 'Block style variations with JSON + CSS', icon: Paintbrush, color: 'bg-pink-500' },
    { path: '/ontwikkelaar/afdeling-style', labelAf: 'Afdeling-style', labelEn: 'Section Styles', descAf: 'Afdeling-style wat blokke gebruik', descEn: 'Section styles applied to blocks', icon: LayoutGrid, color: 'bg-violet-500' },
    { path: '/ontwikkelaar/patrone', labelAf: 'Patroonblaaier', labelEn: 'Pattern Browser', descAf: 'Patrone wat blokke bevat', descEn: 'Patterns containing blocks', icon: LayoutTemplate, color: 'bg-fuchsia-500' },
    { path: '/ontwikkelaar/sjablone', labelAf: 'Template-blaaier', labelEn: 'Template Browser', descAf: 'Templates wat blokke gebruik', descEn: 'Templates using blocks', icon: LayoutDashboard, color: 'bg-indigo-500' },
    { path: '/ontwikkelaar/sjablone-onderdeel', labelAf: 'Sjabloon Onderdele', labelEn: 'Template Parts', descAf: 'Onderdele wat blokke gebruik', descEn: 'Parts using blocks', icon: Puzzle, color: 'bg-teal-500' },
    { path: '/ontwikkelaar/riglyne', labelAf: 'Riglyne-blaaier', labelEn: 'Guidelines Browser', descAf: 'Blok-riglyne dokumentasie', descEn: 'Block guidelines documentation', icon: Newspaper, color: 'bg-emerald-500' },
  ],
};