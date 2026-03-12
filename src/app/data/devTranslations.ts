// ─── Dev Tools Translation Dictionary ──────────────────────────────────────────
// Key-based translations for all developer tools pages.
// Default language: Afrikaans (af). Alternate: English (en).

import type { DevLocale } from '../context/DevLanguageContext';

type TranslationMap = Record<string, { af: string; en: string }>;

// ─── Common / Shared ─────────────────────────────────────────────────────────

const COMMON: TranslationMap = {
  'common.devTools': { af: 'Ontwikkelaargereedskap', en: 'Developer Tools' },
  'common.backToSite': { af: '← Terug na werf', en: '← Back to site' },
  'common.backToDevHub': { af: '← Dev Hub', en: '← Dev Hub' },
  'common.copy': { af: 'Kopieer', en: 'Copy' },
  'common.copied': { af: 'Gekopieer', en: 'Copied' },
  'common.copiedToast': { af: 'Gekopieer!', en: 'Copied!' },
  'common.copyImportPath': { af: 'Kopieer invoerpad', en: 'Copy import path' },
  'common.importCopied': { af: 'Invoer gekopieer', en: 'Import copied' },
  'common.search': { af: 'Soek...', en: 'Search...' },
  'common.searchComponents': { af: 'Soek komponente...', en: 'Search components...' },
  'common.searchRoutes': { af: 'Soek roetes...', en: 'Search routes...' },
  'common.filter': { af: 'Filter', en: 'Filter' },
  'common.all': { af: 'Alles', en: 'All' },
  'common.new': { af: 'Nuut', en: 'New' },
  'common.explore': { af: 'Verken', en: 'Explore' },
  'common.internalOnly': { af: 'Intern gebruik slegs', en: 'Internal use only' },
  'common.quickLinks': { af: 'Vinnige Skakels', en: 'Quick Links' },
  'common.components': { af: 'komponente', en: 'components' },
  'common.routes': { af: 'roetes', en: 'routes' },
  'common.dataFiles': { af: 'datalêers', en: 'data files' },
  'common.categories': { af: 'Kategorieë', en: 'Categories' },
  'common.results': { af: 'resultate', en: 'results' },
  'common.clearFilters': { af: 'Wis alle filters', en: 'Clear all filters' },
  'common.files': { af: 'Lêers', en: 'Files' },
  'common.filesLower': { af: 'lêers', en: 'files' },
  'common.copiedPrefix': { af: 'Gekopieer:', en: 'Copied:' },
  'common.copyPath': { af: 'Kopieer pad', en: 'Copy path' },
  'common.searchFiles': { af: 'Soek lêers...', en: 'Search files...' },
  'common.fileNotFound': { af: 'Lêer nie gevind nie', en: 'File not found' },
  'common.relatedTools': { af: 'Verwante Gereedskap', en: 'Related Tools' },
  'common.expandAll': { af: 'Wys alles', en: 'Expand all' },
  'common.collapseAll': { af: 'Vou alles', en: 'Collapse all' },
  'common.tools': { af: 'gereedskap', en: 'tools' },
  'common.forms': { af: 'vorms', en: 'forms' },
  'common.noFormsFound': { af: 'Geen vorms gevind nie.', en: 'No forms found.' },
  'common.fields': { af: 'velde', en: 'fields' },
  'common.file': { af: 'Lêer', en: 'File' },
  'common.field': { af: 'Veld', en: 'Field' },
  'common.type': { af: 'Tipe', en: 'Type' },
  'common.required': { af: 'Verplig', en: 'Required' },
  'common.validation': { af: 'Validasie', en: 'Validation' },
  'common.backToSiteShort': { af: 'Terug na webwerf', en: 'Back to site' },
  'common.save': { af: 'Stoor', en: 'Save' },
  'common.export': { af: 'Voer uit', en: 'Export' },
  'common.reset': { af: 'Herstel', en: 'Reset' },
};

// ─── Stats Labels (capitalized, for hero/badge stats) ────────────────────────

const STATS: TranslationMap = {
  'stats.files': { af: 'Lêers', en: 'Files' },
  'stats.components': { af: 'Komponente', en: 'Components' },
  'stats.categories': { af: 'Kategorieë', en: 'Categories' },
  'stats.results': { af: 'Resultate', en: 'Results' },
  'stats.routes': { af: 'Roetes', en: 'Routes' },
  'stats.legacyRedirects': { af: 'Legacy herleidings', en: 'Legacy redirects' },
  'stats.dynamic': { af: 'Dinamies', en: 'Dynamic' },
  'stats.layouts': { af: 'Uitlegte', en: 'Layouts' },
  'stats.dataFiles': { af: 'Datalêers', en: 'Data Files' },
  'stats.records': { af: 'Rekords', en: 'Records' },
  'stats.typed': { af: 'Getipeer', en: 'Typed' },
  'stats.themeFiles': { af: 'Tema-lêers', en: 'Theme Files' },
  'stats.pluginFiles': { af: 'Plugin-lêers', en: 'Plugin Files' },
  'stats.patterns': { af: 'Patrone', en: 'Patterns' },
  'stats.forms': { af: 'Vorms', en: 'Forms' },
  'stats.totalFields': { af: 'Velde', en: 'Fields' },
  'stats.fileUpload': { af: 'Lêer-oplaai', en: 'File Upload' },
};

// ─── Menu & Footer ───────────────────────────────────────────────────────────

const MENU_FOOTER: TranslationMap = {
  'menu.navLabel': { af: 'Navigasie spyskaart', en: 'Navigation menu' },
  'menu.close': { af: 'Sluit spyskaart', en: 'Close menu' },
  'menu.devPortal': { af: 'Ontwikkelaarportaal', en: 'Developer Portal' },
  'menu.devPortalDesc': { af: 'Tuisblad van die ontwikkelaargereedskap', en: 'Dev tools home page' },
  'footer.designSystem': { af: 'Ontwerpstelsel', en: 'Design System' },
  'footer.patterns': { af: 'Patrone', en: 'Patterns' },
  'footer.backToSite': { af: 'Terug na webwerf', en: 'Back to site' },
};

// ─── DevHub Page ──────────────────────────────────────────────────────────────

const DEVHUB: TranslationMap = {
  'devhub.portalLabel': { af: 'Ontwikkelaar Portaal', en: 'Developer Portal' },
  'devhub.title': { af: 'Dev Hub', en: 'Dev Hub' },
  'devhub.subtitle': { af: 'Ontwerp-tokens, komponentbiblioteke, roetes, en alles wat jy nodig het om vir <em>rooi rose</em> te ontwikkel.', en: 'Design tokens, component libraries, routes, and everything you need to develop for <em>rooi rose</em>.' },

  // Stats
  'devhub.statRoutes': { af: 'Roetes', en: 'Routes' },
  'devhub.statComponents': { af: 'Komponente', en: 'Components' },
  'devhub.statPages': { af: 'Bladsye', en: 'Pages' },
  'devhub.statGuidelines': { af: 'Riglyne', en: 'Guidelines' },

  // Tool cards
  'devhub.componentBrowser': { af: 'Komponentblaaier', en: 'Component Browser' },
  'devhub.componentBrowserDesc': { af: 'Blaai deur alle aangepaste komponente — gegroepeer volgens kategorie met live voorbeelde, eienskappe, en invoerpadde.', en: 'Browse all custom components — grouped by category with live examples, properties, and import paths.' },
  'devhub.designSystem': { af: 'Ontwerpstelsel', en: 'Design System' },
  'devhub.designSystemDesc': { af: "Kleure met WCAG kontras, tipografie, spasiëring, skadu's, UI-komponente, en token-uitvoer — alles in een plek.", en: 'Colors with WCAG contrast, typography, spacing, shadows, UI components, and token export — all in one place.' },
  'devhub.sitemap': { af: 'Inhoudsopgawe', en: 'Sitemap' },
  'devhub.sitemapDesc': { af: 'Volledige webwerf-kaart met alle bladsye, kategorieë, roetes, en dinamiese inhoud.', en: 'Complete website map with all pages, categories, routes, and dynamic content.' },
  'devhub.emailPreviews': { af: 'E-pos Voorskou', en: 'Email Previews' },
  'devhub.emailPreviewsDesc': { af: '7 WooCommerce e-pos sjablone vir intekening-bevestigings, hernuwings, kansellasies, en meer.', en: '7 WooCommerce email templates for subscription confirmations, renewals, cancellations, and more.' },
  'devhub.routeMap': { af: 'Roetekaart', en: 'Route Map' },
  'devhub.routeMapDesc': { af: 'Volledige Afrikaans-roetehiërargie met erfenis-Engelse omleidings en dinamiese roetes.', en: 'Complete Afrikaans route hierarchy with legacy English redirects and dynamic routes.' },
  'devhub.dataStructure': { af: 'Datastruktuur', en: 'Data Structure' },
  'devhub.dataStructureDesc': { af: 'Artikels, skrywers, kompetisies, gebeure, en etikettargitektuur — alles in een plek.', en: 'Articles, authors, competitions, events, and tagging architecture — all in one place.' },
  'devhub.wpMigration': { af: 'WordPress Migrasie', en: 'WordPress Migration' },
  'devhub.wpMigrationDesc': { af: 'Volledige omskakelingsbeplanning — tipografie, token-kartering, tema/inprop lêerstrukture, FAQ CPT, en 10-fase padkaart.', en: 'Complete conversion planning — typography, token mapping, theme/plugin file structures, FAQ CPT, and 10-phase roadmap.' },
  'devhub.tokenMapper': { af: 'Token-kartering', en: 'Token Mapper' },
  'devhub.tokenMapperDesc': { af: 'CSS-veranderlikes → WordPress theme.json voorinstellings. Kleure, tipografie, spasiëring, skadu, rande — met kopieer en JSON uitvoer.', en: 'CSS variables → WordPress theme.json presets. Colors, typography, spacing, shadows, borders — with copy and JSON export.' },
  'devhub.sectionStyles': { af: 'Afdeling-style', en: 'Section Styles' },
  'devhub.sectionStylesDesc': { af: '9 afdeling-style met CSS/JSON voorbeelde en WordPress-blokopmaak — gereed vir tema-integrasie.', en: '9 section styles with CSS/JSON examples and WordPress block markup — ready for theme integration.' },
  'devhub.guidelinesBrowser': { af: 'Riglyne-blaaier', en: 'Guidelines Browser' },
  'devhub.guidelinesBrowserDesc': { af: 'Blaai deur alle riglyn .md lêers — gids-boom, gerenderde markdown, en soekfunksie.', en: 'Browse all guideline .md files — folder tree, rendered markdown, and search functionality.' },
  'devhub.tokenExtraction': { af: 'Token-ekstraksie', en: 'Token Extraction' },
  'devhub.tokenExtractionDesc': { af: 'Lewendige ekstraksie van ontwerp-tokens uit CSS — kleure, tipografie, spasiëring, rande, skadu, en uitleg.', en: 'Live extraction of design tokens from CSS — colors, typography, spacing, borders, shadows, and layout.' },
  'devhub.systemConfig': { af: 'Stelselkonfigurasie', en: 'System Configuration' },
  'devhub.systemConfigDesc': { af: 'WordPress kern, WooCommerce, Payfast, Issuu, Gravity Forms, Yoast SEO, en sekuriteit instellings vir produksie.', en: 'WordPress core, WooCommerce, Payfast, Issuu, Gravity Forms, Yoast SEO, and security settings for production.' },
  'devhub.contentBrowser': { af: 'Inhoud Blaaier', en: 'Content Browser' },
  'devhub.contentBrowserDesc': { af: 'Blaai deur alle statiese inhoudlêers onder /content/ — bladsye, beleid, versamelings met volledig gerenderde markdown.', en: 'Browse all static content files under /content/ — pages, policies, collections with fully rendered markdown.' },
  'devhub.launchChecklist': { af: 'Lansering Kontrolelys', en: 'Launch Checklist' },
  'devhub.launchChecklistDesc': { af: '10-fase lanseringskontrolelys — van voor-lansering beplanning tot na-lansering monitering.', en: '10-phase launch checklist — from pre-launch planning through post-launch monitoring.' },
  'devhub.imageAssets': { af: 'Beeldbateblaaier', en: 'Image Asset Browser' },
  'devhub.imageAssetsDesc': { af: "Blaai deur alle hero-beelde, spanfoto's en Unsplash-bates — met aflaai, metadata en WordPress-lêername.", en: 'Browse all hero images, team photos, and Unsplash assets — with download, metadata, and WordPress filenames.' },
  'devhub.patternBrowser': { af: 'Patroonblaaier', en: 'Pattern Browser' },
  'devhub.patternBrowserDesc': { af: '130+ WordPress-blokpatrone — bladsy, argief, enkel, afdeling — met PHP-kopparameters, sjabloon/deel-gebruik, en prioriteite.', en: '130+ WordPress block patterns — page, archive, single, section — with PHP header params, template/part usage, and priorities.' },
  'devhub.blockStyleBrowser': { af: 'Blok-stylblaaier', en: 'Block Style Browser' },
  'devhub.blockStyleBrowserDesc': { af: '41+ blok-stylvariasies — JSON-skemas, CSS-terugval, per-blok gegroepeer met kopieer-na-knipbord.', en: '41+ block style variations — JSON schemas, CSS fallbacks, per-block grouped with copy-to-clipboard.' },
  'devhub.blockBrowser': { af: 'Blokblaaier', en: 'Blocks Browser' },
  'devhub.blockBrowserDesc': { af: 'Volledige blok-inventaris — React, WP Kern, WooCommerce, derdeparty — met styl-kruisverwysings, CSS-oudit, en riglyne.', en: 'Complete block inventory — React, WP Core, WooCommerce, third-party — with style cross-references, CSS audit, and guidelines.' },
  'devhub.templateBrowser': { af: 'Template-blaaier', en: 'Template Browser' },
  'devhub.templateBrowserDesc': { af: '33 WordPress FSE-sjablone — hiërargie, patroonsamestelling, React-roete kruisverwysing, en prioriteite.', en: '33 WordPress FSE templates — hierarchy, pattern composition, React route cross-reference, and priorities.' },
  'devhub.templatePartBrowser': { af: 'Template-deelblaaier', en: 'Template Part Browser' },
  'devhub.templatePartBrowserDesc': { af: '16 sjabloondele — kopstuk, voetskrif, sybalk, meta, woo — met sjabloon-gebruiksmatriks.', en: '16 template parts — header, footer, sidebar, meta, woo — with template usage matrix.' },
  'devhub.incFolderBrowser': { af: 'Inc-lêerblaaier', en: 'Inc/ Folder Browser' },
  'devhub.incFolderBrowserDesc': { af: 'PHP inc/ lêers — CPT-registrasies, taksonomieë, blok-style, meta-velde, en hooks.', en: 'PHP inc/ files — CPT registrations, taxonomies, block styles, meta fields, and hooks.' },
  'devhub.wpDataModel': { af: 'WordPress Datamodel', en: 'WordPress Data Model' },
  'devhub.wpDataModelDesc': { af: '7 CPTs, 9 taksonomieë, SCF-velde, en inhoudsverhoudinge — die volledige produksie-datamodel.', en: '7 CPTs, 9 taxonomies, SCF fields, and content relationships — the complete production data model.' },
  'devhub.iconBrowser': { af: 'Ikoonblaaier', en: 'Icon Browser' },
  'devhub.iconBrowserDesc': { af: '50+ ikone — koppelvlak vs inhoud geklassifiseer, SVG-uitvoer, WordPress Dashicon-eweknie, en gebruik per komponent.', en: '50+ icons — interface vs content classified, SVG export, WordPress Dashicon equivalents, and usage per component.' },

  'devhub.themeJsonViewer': { af: 'Theme.json Blaaier', en: 'Theme.json Viewer' },
  'devhub.themeJsonViewerDesc': { af: 'Volledige theme.json v3 verkenner — kleure, tipografie, spasiëring, skaduwees, rande, element-style, en sjablone.', en: 'Full theme.json v3 explorer — colors, typography, spacing, shadows, borders, element styles, and templates.' },

  'devhub.presetsBrowser': { af: 'Voorinstellings Blaaier', en: 'Presets Browser' },
  'devhub.presetsBrowserDesc': { af: 'Alle theme.json voorinstellings — kleure, lettergroottes, spasiëring, skaduwees, grensradius, grenswydte, en aspekverhoudings met blok-styl kruisverwysings.', en: 'All theme.json presets — colors, font sizes, spacing, shadows, border radius, border widths, and aspect ratios with block style cross-references.' },
  'devhub.ollieThemeReference': { af: 'Ollie Tema Verwysing', en: 'Ollie Theme Reference' },
  'devhub.ollieThemeReferenceDesc': { af: 'Volledige Ollie v1.5.4 inventaris — 59 patrone, 8 sjablone, 3 onderdele, 21 blokstyle, 21 stylvariasies, elk met migrasie-besluit.', en: 'Complete Ollie v1.5.4 inventory — 59 patterns, 8 templates, 3 parts, 21 block styles, 21 style variations, each with migration decision.' },

  'devhub.eEditionsCommerce': { af: 'E-Uitgawes Handel', en: 'E-Editions Commerce' },

  'eec.title': { af: 'E-Uitgawes Handel', en: 'E-Editions Commerce' },

  'formBuilderPreview.title': { af: 'Vormpatroon-galery', en: 'Form Pattern Gallery' },
  'devhub.formBuilderPreview': { af: 'Vormpatroon-galery', en: 'Form Pattern Gallery' },
  'devhub.formBuilderPreviewDesc': { af: 'Inventaris van alle vorms — velde, validasie, WP handlers en lêerliggings.', en: 'Inventory of all forms — fields, validation, WP handlers and file locations.' },

  // Quick Links
  'devhub.home': { af: 'Tuisblad', en: 'Home' },
  'devhub.articleExample': { af: 'Artikel Voorbeeld', en: 'Article Example' },
  'devhub.newsCategory': { af: 'Nuuskategorie', en: 'News Category' },
  'devhub.eEditions': { af: 'E-Uitgawes', en: 'E-Editions' },
  'devhub.policiesHub': { af: 'Beleid Hub', en: 'Policies Hub' },
  'devhub.competitions': { af: 'Kompetisies', en: 'Competitions' },
  'devhub.advertise': { af: 'Adverteer', en: 'Advertise' },
  'devhub.contact': { af: 'Kontak', en: 'Contact' },
  'devhub.footer': { af: 'Ontwikkelaargereedskap', en: 'Developer Tools' },

  // Section headings
  'devhub.sectionPrototype': { af: 'Prototipe Ontwikkelingsgereedskap', en: 'Prototype Development Tools' },
  'devhub.sectionWordpress': { af: 'WordPress Migrasie Gereedskap', en: 'WordPress Migration Tools' },
  'devhub.sectionWpQuickLinks': { af: 'WP Migrasie Hub — Snelskakels', en: 'WP Migration Hub — Quick Links' },
  'devhub.sectionReference': { af: 'Verwysings', en: 'Reference' },
  'devhub.sectionOperations': { af: 'Bedrywighede & Lansering', en: 'Operations & Launch' },
};

// ─── Component Browser ────────────────────────────────────────────────────────

const COMPONENT_BROWSER: TranslationMap = {
  'cb.title': { af: 'Komponentblaaier', en: 'Component Browser' },
  'cb.file': { af: 'Lêer', en: 'File' },
  'cb.props': { af: 'Eienskappe', en: 'Props' },
  'cb.usage': { af: 'Gebruik', en: 'Usage' },
  'cb.tags': { af: 'Etikette', en: 'Tags' },
  'cb.searchPlaceholder': { af: 'Soek komponente, eienskappe, of etikette...', en: 'Search components, properties, or tags...' },
  'cb.hideSidebar': { af: 'Verberg sydpaneel', en: 'Hide sidebar' },
  'cb.showSidebar': { af: 'Wys sydpaneel', en: 'Show sidebar' },
  'cb.noResults': { af: 'Geen komponente gevind nie', en: 'No components found' },
  'cb.noResultsHint': { af: "Probeer 'n ander soekterm of kategorie.", en: 'Try a different search term or category.' },
  'cb.filePath': { af: 'Lêerpad', en: 'File path' },
  'cb.propsLabel': { af: 'Eienskappe (Props)', en: 'Properties (Props)' },
  'cb.overview': { af: 'Oorsig', en: 'Overview' },
  'cb.totalComponents': { af: 'Totaal komponente', en: 'Total components' },
  'cb.custom': { af: 'Aangepas', en: 'Custom' },
  'cb.designFoundations': { af: 'Ontwerp-fondamente', en: 'Design Foundations' },
  'cb.styleGuide': { af: 'Stylgids', en: 'Style Guide' },

  // Categories
  'cb.cat.all': { af: 'Alles', en: 'All' },
  'cb.cat.allDesc': { af: 'Alle komponente', en: 'All components' },
  'cb.cat.ui': { af: 'UI Primitiewe', en: 'UI Primitives' },
  'cb.cat.uiDesc': { af: 'ShadCN/Radix UI basiskomponente', en: 'ShadCN/Radix UI base components' },
  'cb.cat.common': { af: 'Algemeen', en: 'Common' },
  'cb.cat.commonDesc': { af: 'Gedeelde hulpkomponente', en: 'Shared utility components' },
  'cb.cat.layouts': { af: 'Uitleg', en: 'Layouts' },
  'cb.cat.layoutsDesc': { af: 'Bladsy-uitlegomhulsels', en: 'Page layout wrappers' },
  'cb.cat.patterns': { af: 'Patrone', en: 'Patterns' },
  'cb.cat.patternsDesc': { af: 'Herbruikbare UI-patrone', en: 'Reusable UI patterns' },
  'cb.cat.home': { af: 'Tuisblad', en: 'Home' },
  'cb.cat.homeDesc': { af: 'Tuisblad-spesifieke komponente', en: 'Homepage-specific components' },
  'cb.cat.category': { af: 'Kategorie', en: 'Category' },
  'cb.cat.categoryDesc': { af: 'Kategorie-argiefkomponente', en: 'Category archive components' },
  'cb.cat.ads': { af: 'Advertensies', en: 'Ads' },
  'cb.cat.adsDesc': { af: 'Advertensie-slots en -houers', en: 'Ad slots and containers' },
  'cb.cat.brand': { af: 'Handelsmerk', en: 'Brand' },
  'cb.cat.brandDesc': { af: 'Handelsmerk en bemarking', en: 'Brand and marketing' },
  'cb.cat.newsletter': { af: 'Nuusbrief', en: 'Newsletter' },
  'cb.cat.newsletterDesc': { af: 'Nuusbriefkomponente', en: 'Newsletter components' },
  'cb.cat.parts': { af: 'Struktuur', en: 'Structure' },
  'cb.cat.partsDesc': { af: 'Kopstuk, voetskrif, navigasie', en: 'Header, footer, navigation' },
  'cb.cat.templates': { af: 'Sjablone', en: 'Templates' },
  'cb.cat.templatesDesc': { af: 'E-pos sjablone', en: 'Email templates' },
};

// ─── Route Map ────────────────────────────────────────────────────────────────

const ROUTE_MAP: TranslationMap = {
  'rm.title': { af: 'Roetekaart', en: 'Route Map' },
  'rm.totalRoutes': { af: 'Totaal Roetes', en: 'Total Routes' },
  'rm.legacyRedirects': { af: 'Erfenis Omleidings', en: 'Legacy Redirects' },
  'rm.dynamicRoutes': { af: 'Dinamiese Roetes', en: 'Dynamic Routes' },
  'rm.layouts': { af: 'Uitleg-tipes', en: 'Layout Types' },
  'rm.path': { af: 'Pad', en: 'Path' },
  'rm.legacy': { af: 'Erfenis', en: 'Legacy' },
  'rm.page': { af: 'Bladsy', en: 'Page' },
  'rm.layout': { af: 'Uitleg', en: 'Layout' },
  'rm.dynamic': { af: 'Dinamies', en: 'Dynamic' },
  'rm.name': { af: 'Naam', en: 'Name' },
  'rm.component': { af: 'Komponent', en: 'Component' },
  'rm.category': { af: 'Kategorie', en: 'Category' },
  'rm.copyPath': { af: 'Kopieer pad', en: 'Copy path' },
  'rm.searchPlaceholder': { af: 'Soek roetes, bladsye, of paaie...', en: 'Search routes, pages, or paths...' },
  'rm.noResults': { af: 'Geen roetes gevind nie', en: 'No routes found' },

  // Categories
  'rm.cat.main': { af: 'Hoofblad', en: 'Main' },
  'rm.cat.categories': { af: 'Kategorieë', en: 'Categories' },
  'rm.cat.content': { af: 'Inhoud', en: 'Content' },
  'rm.cat.secondary': { af: 'Sekondêr', en: 'Secondary' },
  'rm.cat.eeditions': { af: 'E-Uitgawes', en: 'E-Editions' },
  'rm.cat.competitions': { af: 'Kompetisies', en: 'Competitions' },
  'rm.cat.information': { af: 'Inligting', en: 'Information' },
  'rm.cat.advertise': { af: 'Adverteer', en: 'Advertise' },
  'rm.cat.submit': { af: 'Stuur in', en: 'Submit' },
  'rm.cat.policies': { af: 'Beleid', en: 'Policies' },
  'rm.cat.commerce': { af: 'Handel', en: 'Commerce' },
  'rm.cat.account': { af: 'Rekening', en: 'Account' },
  'rm.cat.newsletter': { af: 'Nuusbrief', en: 'Newsletter' },
  'rm.cat.thankYou': { af: 'Dankie', en: 'Thank You' },
  'rm.cat.devtools': { af: 'Ontwikkelaar', en: 'Developer' },
  'rm.cat.system': { af: 'Stelsel', en: 'System' },
};

// ─── Data Browser ─────────────────────────────────────────────────────────────

const DATA_BROWSER: TranslationMap = {
  'db.title': { af: 'Datastruktuur & Lêerindeks', en: 'Data Structure & File Index' },
  'db.headerTitle': { af: 'Datastruktuur', en: 'Data Structure' },
  'db.subtitle': { af: 'Alle statiese datalêers in', en: 'All static data files in' },
  'db.subtitleSuffix': { af: '— artikels, spanlede, kompetisies, navigasie, en meer.', en: '— articles, team members, competitions, navigation, and more.' },
  'db.records': { af: 'rekords', en: 'records' },
  'db.exports': { af: 'Uitvoere', en: 'Exports' },
  'db.exportsSection': { af: 'Uitvoere (Exports)', en: 'Exports' },
  'db.shape': { af: 'Vorm', en: 'Shape' },
  'db.dataStructure': { af: 'Datastruktuur', en: 'Data Structure' },
  'db.dataFiles': { af: 'Datalêers', en: 'Data files' },
  'db.typed': { af: 'Getipeer', en: 'Typed' },
  'db.withRecords': { af: 'Met Rekords', en: 'With Records' },
};

// ─── WordPress Migration ──────────────────────────────────────────────────────

const WP_MIGRATION: TranslationMap = {
  'wp.headerTitle': { af: 'WordPress Migrasie', en: 'WordPress Migration' },
  'wp.heroLabel': { af: 'WordPress Migrasie Beplanner', en: 'WordPress Migration Planner' },
  'wp.heroTitle': { af: 'React → WordPress Omskakeling', en: 'React → WordPress Conversion' },
  'wp.heroSubtitle': { af: "Volledige beplanning: tipografie-uitbreiding, token-kartering (Tailwind → theme.json), lêerstrukture vir die blok-tema en blok-inprop, FAQ CPT-argitektuur, en 'n 10-fase padkaart.", en: 'Complete planning: typography expansion, token mapping (Tailwind → theme.json), file structures for the block theme and block plugin, FAQ CPT architecture, and a 10-phase roadmap.' },
  'wp.backToDevHub': { af: '← Dev Hub', en: '← Dev Hub' },
  'wp.footer': { af: 'WordPress Migrasie Beplanner', en: 'WordPress Migration Planner' },

  // Tabs
  'wp.tab.overview': { af: 'Oorsig', en: 'Overview' },
  'wp.tab.typography': { af: 'Tipografie', en: 'Typography' },
  'wp.tab.tokens': { af: 'Token-kartering', en: 'Token Mapping' },
  'wp.tab.themeFiles': { af: 'Tema Lêers', en: 'Theme Files' },
  'wp.tab.pluginFiles': { af: 'Inprop Lêers', en: 'Plugin Files' },
  'wp.tab.sponsorships': { af: 'Borgskappe', en: 'Sponsorships' },
  'wp.tab.searchFilters': { af: 'Soekfilters', en: 'Search Filters' },
  'wp.tab.faqCpt': { af: 'FAQ CPT', en: 'FAQ CPT' },
  'wp.tab.themeJson': { af: 'theme.json', en: 'theme.json' },
  'wp.tab.blockMapping': { af: 'Blok-kartering', en: 'Block Mapping' },
  'wp.tab.roadmap': { af: 'Padkaart', en: 'Roadmap' },

  // Priority
  'wp.priority.critical': { af: 'Kritiek', en: 'Critical' },
  'wp.priority.important': { af: 'Belangrik', en: 'Important' },
  'wp.priority.optional': { af: 'Opsioneel', en: 'Optional' },

  // Sponsorships
  'wp.spon.title': { af: 'Borgskap-argitektuur', en: 'Sponsorship Architecture' },
  'wp.spon.subtitle': { af: "Die 'dp_sponsor' CPT en gepaardgaande logika vir geborgde inhoud.", en: "The 'dp_sponsor' CPT and associated logic for sponsored content." },
  'wp.spon.cpt': { af: 'Post Tipe (CPT)', en: 'Post Type (CPT)' },
  'wp.spon.fields': { af: 'Pasgemaakte Velde', en: 'Custom Fields' },
  'wp.spon.logic': { af: 'Vertoon Logika', en: 'Display Logic' },
  'wp.spon.desc': { af: "Borgskappe word bestuur as 'n aparte CPT wat gekoppel word aan artikels via 'n verhoudingsveld.", en: 'Sponsorships are managed as a separate CPT linked to articles via a relationship field.' },

  // Search Filters
  'wp.search.title': { af: 'Soek & Filtrering', en: 'Search & Filtering' },
  'wp.search.subtitle': { af: 'Gevorderde soekblokke en faset-filtrering vir argiewe.', en: 'Advanced search blocks and faceted filtering for archives.' },
  'wp.search.blocks': { af: 'Pasgemaakte Blokke', en: 'Custom Blocks' },
  'wp.search.taxonomies': { af: 'Taksonomie Filters', en: 'Taxonomy Filters' },
  'wp.search.desc': { af: 'Ons gebruik die inheemse WordPress Query Loop blok uitgebrei met pasgemaakte filter-variasies.', en: 'We use the native WordPress Query Loop block extended with custom filter variations.' },

  // Overview tab
  'wp.overview.title': { af: 'WordPress Migrasie Oorsig', en: 'WordPress Migration Overview' },
  'wp.overview.subtitle': { af: "Volledige beplanning vir die omskakeling van die Figma Make React werf na 'n WordPress blok-tema en blok-inprop.", en: 'Complete planning for converting the Figma Make React site to a WordPress block theme and block plugin.' },
  'wp.overview.themeFiles': { af: 'Tema Lêers', en: 'Theme Files' },
  'wp.overview.pluginFiles': { af: 'Inprop Lêers', en: 'Plugin Files' },
  'wp.overview.typographyPresets': { af: 'Tipografie Voorinstelling', en: 'Typography Presets' },
  'wp.overview.conversionPhases': { af: 'Omskakelingsfases', en: 'Conversion Phases' },
  'wp.overview.blockTheme': { af: 'Blok-tema', en: 'Block Theme' },
  'wp.overview.blockThemeDesc': { af: 'Die WordPress blok-tema bevat die visuele stelsel — theme.json tokens, HTML-sjablone, sjabloondele, blokpatrone, en bate.', en: 'The WordPress block theme contains the visual system — theme.json tokens, HTML templates, template parts, block patterns, and assets.' },
  'wp.overview.blockPlugin': { af: 'Blok-inprop', en: 'Block Plugin' },
  'wp.overview.blockPluginDesc': { af: 'Die blok-inprop bevat die funksionaliteit — pasgemaakte blokke, CPTs, taksonomieë, en REST API-uitbreidings.', en: 'The block plugin contains the functionality — custom blocks, CPTs, taxonomies, and REST API extensions.' },
};

// ─── Design System / Token Extractor ──────────────────────────────────────────

const DESIGN_SYSTEM_EXTRACTOR: TranslationMap = {
  'ds.title': { af: 'Ontwerpstelsel', en: 'Design System' },
  'ds.tokenExtraction': { af: 'Token-ekstraksie', en: 'Token Extraction' },
  'ds.downloadJSON': { af: 'Ontwerp-tokens JSON afgelaai', en: 'Design tokens JSON downloaded' },
  'ds.copyCSSVars': { af: 'CSS veranderlikes gekopieer', en: 'CSS variables copied' },
};

// ─── Token Mapper ─────────────────────────────────────────────────────────────

const TOKEN_MAPPER: TranslationMap = {
  'tm.title': { af: 'Token-kartering', en: 'Token Mapper' },
};

// ─── System Config ────────────────────────────────────────────────────────────

const SYSTEM_CONFIG: TranslationMap = {
  'sc.title': { af: 'Stelselkonfigurasie', en: 'System Configuration' },
  'sc.sections': { af: 'Afdelings', en: 'Sections' },
  'sc.sectionsLower': { af: 'afdelings', en: 'sections' },
};

// ─── Section Styles ───────────────────────────────────────────────────────────

const SECTION_STYLES: TranslationMap = {
  'ss.title': { af: 'Afdeling Style', en: 'Section Styles' },
  'ss.totalStyles': { af: 'Totale style', en: 'Total styles' },
  'ss.background': { af: 'Agtergrond', en: 'Background' },
  'ss.gradients': { af: 'Gradiënte', en: 'Gradients' },
  'ss.component': { af: 'Komponent', en: 'Component' },
  'ss.searchPlaceholder': { af: 'Soek per naam, patroon, template...', en: 'Search by name, pattern, template...' },
  'ss.conversionTitle': { af: '6-Stap Omskakelingsproses', en: '6-Step Conversion Process' },
  'ss.step1': { af: 'Identifiseer die React-afdeling en Tailwind klasse', en: 'Identify the React section and Tailwind classes' },
  'ss.step2': { af: 'Skep die JSON metadata lêer', en: 'Create the JSON metadata file' },
  'ss.step3': { af: 'Skep die CSS lêer met WP theme.json tokens', en: 'Create the CSS file with WP theme.json tokens' },
  'ss.step4': { af: 'Registreer in inc/block-styles.php', en: 'Register in inc/block-styles.php' },
  'ss.step4Link': { af: '(sien Inc-lêers)', en: '(see Inc/ Files)' },
  'ss.step5': { af: 'Gebruik in WP patrone met is-style-{name} klas', en: 'Use in WP patterns with is-style-{name} class' },
  'ss.step5Link': { af: '(sien Patrone)', en: '(see Patterns)' },
  'ss.step6': { af: 'Toets in die Block Editor — style verskyn in toolbar', en: 'Test in Block Editor — style appears in toolbar' },
  'ss.backgroundStyles': { af: 'Agtergrond Style', en: 'Background Styles' },
  'ss.gradientStyles': { af: 'Gradiënt Style', en: 'Gradient Styles' },
  'ss.componentStyles': { af: 'Komponent Style', en: 'Component Styles' },
  'ss.noResults': { af: 'Geen style gevind nie', en: 'No styles found' },
  'ss.wpMarkup': { af: 'WP Kode', en: 'WP Markup' },
  'ss.guidelines': { af: 'Riglyn', en: 'Guidelines' },
  'ss.reactClass': { af: 'React Klas', en: 'React Class' },
  'ss.wpBlock': { af: 'WP Blok', en: 'WP Block' },
  'ss.cssFile': { af: 'CSS Lêer', en: 'CSS File' },
  'ss.properties': { af: 'Eienskappe', en: 'Properties' },
  'ss.usedInTemplates': { af: 'Gebruik in Templates', en: 'Used in Templates' },
  'ss.usedInParts': { af: 'Gebruik in Template-onderdele', en: 'Used in Template Parts' },
  'ss.usedInPatterns': { af: 'Gebruik in Patrone', en: 'Used in Patterns' },
  'ss.reactComponents': { af: 'React Komponente', en: 'React Components' },
};

// ─── Guidelines Browser ──────────────────────────────────────────────────────

const GUIDELINES_BROWSER: TranslationMap = {
  'gb.title': { af: 'Riglyne-blaaier', en: 'Guidelines Browser' },
};

// ─── Content Browser ─────────────────────────────────────────────────────────

const CONTENT_BROWSER: TranslationMap = {
  'ctb.title': { af: 'Inhoud Blaaier', en: 'Content Browser' },
};

// ─── Email Previews ──────────────────────────────────────────────────────────

const EMAIL_PREVIEWS: TranslationMap = {
  'ep.title': { af: 'E-pos Voorskou', en: 'Email Previews' },
  'ep.woocommerce': { af: 'WooCommerce', en: 'WooCommerce' },
  'ep.confirmations': { af: 'Bevestigings', en: 'Confirmations' },
  'ep.replies': { af: 'Antwoorde', en: 'Replies' },
  'ep.total': { af: 'Totaal', en: 'Total' },
  'ep.templates': { af: 'sjablone', en: 'templates' },
  'ep.implementationNotes': { af: 'Implementeringsnotas', en: 'Implementation Notes' },
  'ep.previewMobile': { af: 'Mobiele voorskou', en: 'Mobile preview' },
  'ep.previewDesktop': { af: 'Rekenaar voorskou', en: 'Desktop preview' },
  'ep.subject': { af: 'Onderwerp', en: 'Subject' },
  'ep.wpHandler': { af: 'WP Handler', en: 'WP Handler' },
  'ep.replyPositive': { af: 'Positief', en: 'Positive' },
  'ep.replyNegative': { af: 'Afwysing', en: 'Declined' },
  'ep.replyInfo': { af: 'Inligting', en: 'Info' },
  'ep.replyAction': { af: 'Aksie nodig', en: 'Action needed' },
};

// ─── Launch Checklist ────────────────────────────────────────────────────────

const LAUNCH_CHECKLIST: TranslationMap = {
  'lc.title': { af: 'Lansering Kontrolelys', en: 'Launch Checklist' },
  'lc.wpMigration': { af: 'WP Migrasie', en: 'WP Migration' },
  'lc.launch': { af: 'Lansering', en: 'Launch' },
  'lc.roadmapTasks': { af: 'Padkaart Take', en: 'Roadmap Tasks' },
  'lc.checklistItems': { af: 'Kontrolelys Items', en: 'Checklist Items' },
  'lc.roadmapTitle': { af: 'WordPress Migrasie-padkaart', en: 'WordPress Migration Roadmap' },
  'lc.roadmapSubtitle': { af: '10-fase migrasieplan met take-opvolging', en: '10-phase migration plan with task tracking' },
  'lc.overallProgress': { af: 'Algehele Vordering', en: 'Overall Progress' },
  'lc.tasks': { af: 'take', en: 'tasks' },
  'lc.done': { af: 'Voltooi', en: 'Done' },
  'lc.inProgress': { af: 'Besig', en: 'In Progress' },
  'lc.pending': { af: 'Hangend', en: 'Pending' },
  'lc.phase': { af: 'Fase', en: 'Phase' },
  'lc.checklist': { af: 'Kontrolelys', en: 'Checklist' },
  'lc.complete': { af: 'voltooi', en: 'complete' },
  'lc.totalEstimate': { af: 'Totale skatting', en: 'Total estimate' },
  'lc.weeks': { af: 'weke', en: 'weeks' },
  'lc.estimateNote': { af: 'Werklike tyd hang af van hulpbronne en prioriteite', en: 'Actual time depends on resources and priorities' },
  'lc.itemsCompleted': { af: 'items voltooi', en: 'items completed' },
  'lc.confirmReset': { af: 'Wis alle gemerkde items? Dit kan nie ongedaan gemaak word nie.', en: 'Clear all checked items? This cannot be undone.' },
  'lc.resetSuccess': { af: 'Kontrolelys teruggestel', en: 'Checklist reset' },
  'lc.exportSuccess': { af: 'Vordering uitgevoer', en: 'Progress exported' },
  'lc.saveSuccess': { af: 'Vordering gestoor', en: 'Progress saved' },
};

// ─── Image Asset Browser ─────────────────────────────────────────────────────

const IMAGE_ASSET_BROWSER: TranslationMap = {
  'ia.title': { af: 'Beeldbateblaaier', en: 'Image Asset Browser' },
  'ia.images': { af: 'Beelde', en: 'Images' },
  'ia.imagesLower': { af: 'beelde', en: 'images' },
  'ia.wpMedia': { af: 'WP Media', en: 'WP Media' },
  'ia.searchPlaceholder': { af: 'Soek per naam, URL, lêernaam of beskrywing...', en: 'Search by name, URL, filename or description...' },
  'ia.gridView': { af: 'Roosteraansig', en: 'Grid view' },
  'ia.listView': { af: 'Lysaansig', en: 'List view' },
  'ia.selectAll': { af: 'Kies alles', en: 'Select all' },
  'ia.clearSelection': { af: 'Wis seleksie', en: 'Clear selection' },
  'ia.copySelected': { af: 'Kopieer geselekteer', en: 'Copy selected' },
  'ia.wpMediaSummary': { af: 'WP Media Biblioteek Opsomming', en: 'WP Media Library Summary' },
  'ia.dimensions': { af: 'Afmetings', en: 'Dimensions' },
  'ia.wpFilename': { af: 'WP Lêernaam', en: 'WP Filename' },
  'ia.usedBy': { af: 'Gebruik deur', en: 'Used by' },
  'ia.source': { af: 'Bron', en: 'Source' },
  'ia.role': { af: 'Rol', en: 'Role' },
  'ia.noResults': { af: 'Geen beelde gevind nie', en: 'No images found' },
  'ia.clearFilters': { af: 'Wis alle filters', en: 'Clear all filters' },
  'ia.download': { af: 'Laai af', en: 'Download' },
  'ia.full': { af: 'Vol', en: 'Full' },
  'ia.description': { af: 'Beskrywing', en: 'Description' },
  'ia.dataFile': { af: 'Datalêer', en: 'Data File' },
  'ia.sourceFile': { af: 'Bronlêer', en: 'Source' },
  'ia.summary': { af: 'Opsomming', en: 'Summary' },
  'ia.total': { af: 'Totaal', en: 'Total' },
  'ia.articles': { af: 'Artikels', en: 'Articles' },
  'ia.team': { af: 'Span', en: 'Team' },
  'ia.newsletter': { af: 'Nuusbrief', en: 'Newsletter' },
  'ia.grid': { af: 'Rooster', en: 'Grid' },
  'ia.list': { af: 'Lys', en: 'List' },
  'ia.urlCopied': { af: 'URL Gekopieer!', en: 'URL Copied!' },
  'ia.copyUrl': { af: 'Kopieer Unsplash URL', en: 'Copy Unsplash URL' },
  'ia.importCopied': { af: 'Invoer gekopieer!', en: 'Import copied!' },
  'ia.copyImport': { af: 'Kopieer invoerpad', en: 'Copy import path' },
};

// ─── Pattern Browser ─────────────────────────────────────────────────────────

const PATTERN_BROWSER: TranslationMap = {
  'pb.title': { af: 'Patroonblaaier', en: 'Pattern Browser' },
  'pb.searchPlaceholder': { af: 'Soek patrone...', en: 'Search patterns...' },
  'pb.noResults': { af: 'Geen patrone gevind nie', en: 'No patterns found' },
  'pb.totalPatterns': { af: 'Totale patrone', en: 'Total patterns' },
  'pb.categories': { af: 'Kategorieë', en: 'Categories' },
  'pb.priority': { af: 'Prioriteit', en: 'Priority' },
  'pb.status': { af: 'Status', en: 'Status' },
  'pb.template': { af: 'Sjabloon', en: 'Template' },
  'pb.templatePart': { af: 'Sjabloon-onderdeel', en: 'Template Part' },
  'pb.sectionStyles': { af: 'Afdeling-style', en: 'Section Styles' },
  'pb.blockStyles': { af: 'Blok-style', en: 'Block Styles' },
  'pb.phpHeader': { af: 'PHP Kopskrif', en: 'PHP Header' },
  'pb.blockHtml': { af: 'Blok HTML', en: 'Block HTML' },
  'pb.fullPhp': { af: 'Volledige PHP', en: 'Full PHP' },
  'pb.patterns': { af: 'Patrone', en: 'Patterns' },
  'pb.patternsLower': { af: 'patrone', en: 'patterns' },
  'pb.withHtml': { af: 'Met HTML', en: 'With HTML' },
  'pb.withNotes': { af: 'Met Notas', en: 'With Notes' },
  'pb.notStarted': { af: 'Nie Begin', en: 'Not Started' },
  'pb.migrationProgress': { af: 'Migrasie Vordering', en: 'Migration Progress' },
  'pb.searchPlaceholderFull': { af: 'Soek patrone, slugs, blokke, of implementasie...', en: 'Search patterns, slugs, blocks, or implementation...' },
  'pb.exportJson': { af: 'Uitvoer JSON', en: 'Export JSON' },
  'pb.all': { af: 'Alles', en: 'All' },
  'pb.phpHeaderRef': { af: 'PHP Kopparameters Verwysing', en: 'PHP Header Parameters Reference' },
  'pb.required': { af: 'Verplig', en: 'Req' },
  'pb.type': { af: 'Tipe', en: 'Type' },
  'pb.description': { af: 'Beskrywing', en: 'Description' },
  'pb.clickToChangeStatus': { af: 'Klik om status te verander', en: 'Click to change status' },
  'pb.noPatterns': { af: 'Geen patrone pas by jou soektog nie', en: 'No patterns match your search' },
  'pb.clearSearch': { af: 'Wis soektog', en: 'Clear search' },
  'pb.implNotes': { af: 'Implementasienotas', en: 'Implementation Notes' },
  'pb.blockMapping': { af: 'Blok-kartering', en: 'Block Mapping' },
  'pb.innerBlocks': { af: 'Binneblokke', en: 'Inner Blocks' },
  'pb.attributes': { af: 'Kenmerke', en: 'Attributes' },
  'pb.noNotes': { af: 'Nog geen implementasienotas nie', en: 'No implementation notes yet' },
  'pb.blocks': { af: 'Blokke', en: 'Blocks' },
  'pb.slug': { af: 'Slug', en: 'Slug' },
  'pb.file': { af: 'Lêer', en: 'File' },
  'pb.statusSaved': { af: 'Status gestoor', en: 'Status saved' },
  'pb.copyFile': { af: 'Kopieer Lêer', en: 'Copy File' },
  'pb.preview': { af: 'Voorskou', en: 'Preview' },
  'pb.implGuide': { af: 'Implementasie Gids', en: 'Implementation Guide' },
  'pb.typography': { af: 'Tipografie', en: 'Typography' },
  'pb.cssMapping': { af: 'CSS Kartering', en: 'CSS Mapping' },
  'pb.usedIn': { af: 'Gebruik in', en: 'Used In' },
  'pb.noDirectUsage': { af: 'Geen direkte gebruik', en: 'No direct usage' },
  'pb.sections': { af: 'Afdelings', en: 'Sections' },
  'pb.wpBlocks': { af: 'WP Blokke', en: 'WP Blocks' },
  'pb.sectionStylesLabel': { af: 'Afdeling Style', en: 'Section Styles' },
  'pb.blockStylesLabel': { af: 'Blok Style', en: 'Block Styles' },
  'pb.dynamicFeatures': { af: 'Dinamiese Kenmerke', en: 'Dynamic Features' },
  'pb.name': { af: 'Naam', en: 'Name' },
  'pb.default': { af: 'Verstek', en: 'Default' },
  'pb.info': { af: 'Inligting', en: 'Info' },
  'pb.blockHtmlAvailable': { af: 'Blok HTML beskikbaar', en: 'Block HTML available' },
  'pb.implNotesAvailable': { af: 'Implementasie notas', en: 'Implementation notes' },
  'pb.typoCorrection': { af: 'Tipografie korreksie nodig', en: 'Typography correction needed' },
  'pb.blockHtmlDesc': { af: 'WordPress blok-opmaak struktuur — kopieer en pas aan vir die patroonlêer.', en: 'WordPress block markup structure — copy and adapt for the pattern file.' },
  'pb.noBlockHtml': { af: 'Geen blok HTML beskikbaar vir hierdie patroon nie.', en: 'No block HTML available for this pattern yet.' },
  'pb.fullPhpPrefix': { af: 'Volledige PHP patroonlêer — gereed om te stoor as ', en: 'Full PHP pattern file — ready to save as ' },
  'pb.wpMigration': { af: 'WP Migrasie', en: 'WP Migration' },

  // ─── FormBuilderPreview (fb.*) ──────────────────────────
  'fb.fields': { af: 'Velde', en: 'Fields' },
  'fb.fieldsLower': { af: 'velde', en: 'fields' },
  'fb.field': { af: 'Veld', en: 'Field' },
  'fb.file': { af: 'Lêer', en: 'File' },
  'fb.type': { af: 'Tipe', en: 'Type' },
  'fb.required': { af: 'Verplig', en: 'Required' },
  'fb.validation': { af: 'Validasie', en: 'Validation' },
  'fb.emailTemplates': { af: 'E-possjablone', en: 'Email Templates' },
  'fb.forms': { af: 'Vorms', en: 'Forms' },
  'fb.formsLower': { af: 'vorms', en: 'forms' },
  'fb.title': { af: 'Vormpatroon-galery', en: 'Form Pattern Gallery' },
  'fb.searchPlaceholder': { af: 'Soek vorms, velde, handlers...', en: 'Search forms, fields, handlers...' },
  'fb.expandAll': { af: 'Wys alles', en: 'Expand all' },
  'fb.collapseAll': { af: 'Vou alles', en: 'Collapse all' },
  'fb.all': { af: 'Alles', en: 'All' },
  'fb.noForms': { af: 'Geen vorms gevind nie.', en: 'No forms found.' },
  'fb.wpHandlerSummary': { af: 'WordPress Handler Opsomming', en: 'WordPress Handler Summary' },

  // ─── BlockStyleBrowser (bsb.*) ──────────────────────────
  'bsb.totalStyles': { af: 'Totale Style', en: 'Total Styles' },
  'bsb.blockTypes': { af: 'Blok Tipes', en: 'Block Types' },
  'bsb.defaults': { af: 'Verstek', en: 'Defaults' },
  'bsb.stylesLower': { af: 'style', en: 'styles' },
  'bsb.searchPlaceholder': { af: 'Soek per naam, blok, CSS klas...', en: 'Search by name, block, CSS class...' },
  'bsb.warning': { af: 'waarskuwing', en: 'warning' },
  'bsb.warnings': { af: 'waarskuwings', en: 'warnings' },
  'bsb.valid': { af: 'geldig', en: 'valid' },
  'bsb.presetViolations': { af: 'Preset Oortredings', en: 'Preset Violations' },
  'bsb.hideJson': { af: 'Verberg JSON', en: 'Hide JSON' },
  'bsb.showJsonCss': { af: 'Wys JSON + CSS', en: 'Show JSON + CSS' },
  'bsb.presetRefs': { af: 'Preset Verwysings', en: 'Preset References' },
  'bsb.usedIn': { af: 'Gebruik in', en: 'Used in' },
  'bsb.noStyles': { af: 'Geen blok-style gevind nie', en: 'No block styles found' },

  // ─── TemplateBrowser (tb.*) ──────────────────────────────
  'tb.title': { af: 'Template-blaaier', en: 'Template Browser' },
  'tb.searchPlaceholder': { af: 'Soek per naam, lêer, roete, patroon...', en: 'Search by name, file, route, pattern...' },
  'tb.routes': { af: 'Roetes', en: 'Routes' },
  'tb.components': { af: 'Komponente', en: 'Components' },
  'tb.patternsLower': { af: 'patrone', en: 'patterns' },
  'tb.hideCode': { af: 'Verberg kode', en: 'Hide code' },
  'tb.showCode': { af: 'Wys template kode', en: 'Show template code' },
  'tb.copyFilename': { af: 'Kopieer lêernaam', en: 'Copy filename' },
  'tb.noTemplates': { af: 'Geen templates gevind nie', en: 'No templates found' },

  // ─── TemplatePartBrowser (tpb.*) ─────────────────────────
  'tpb.title': { af: 'Template-deelblaaier', en: 'Template Part Browser' },
  'tpb.searchPlaceholder': { af: 'Soek per naam, lêer, template...', en: 'Search by name, file, template...' },
  'tpb.component': { af: 'Komponent', en: 'Component' },
  'tpb.usedInTemplates': { af: 'Gebruik in Templates', en: 'Used in Templates' },
  'tpb.hideCode': { af: 'Verberg kode', en: 'Hide code' },
  'tpb.showCode': { af: 'Wys template-deel kode', en: 'Show template part code' },
  'tpb.copyFilename': { af: 'Kopieer lêernaam', en: 'Copy filename' },
  'tpb.noResults': { af: 'Geen template-onderdele gevind nie', en: 'No template parts found' },

  // ─── IncFolderBrowser (inc.*) ────────────────────────────
  'inc.title': { af: 'Inc-lêerblaaier', en: 'Inc/ Folder Browser' },
  'inc.searchPlaceholder': { af: 'Soek per lêernaam, funksie, hook...', en: 'Search by filename, function, hook...' },
  'inc.functions': { af: 'Funksies', en: 'Functions' },
  'inc.wpDocs': { af: 'WP Documentasie', en: 'WP Documentation' },
  'inc.dependencies': { af: 'Afhanklikhede', en: 'Dependencies' },
  'inc.phpCode': { af: 'Kode', en: 'Code' },
  'inc.copyPhp': { af: 'Kopieer PHP', en: 'Copy PHP' },
  'inc.noFiles': { af: 'Geen lêers gevind nie', en: 'No files found' },
};

// ─── Block Style Browser ─────────────────────────────────────────────────────

const BLOCK_STYLE_BROWSER: TranslationMap = {
  'bsb.title': { af: 'Blok-stylblaaier', en: 'Block Style Browser' },
  'bsb.searchPlaceholder': { af: 'Soek blok-style...', en: 'Search block styles...' },
  'bsb.noResults': { af: 'Geen blok-style gevind nie', en: 'No block styles found' },
  'bsb.totalStyles': { af: 'Totale style', en: 'Total styles' },
  'bsb.blockTypes': { af: 'Bloktipes', en: 'Block types' },
  'bsb.jsonStyle': { af: 'JSON Styl', en: 'JSON Style' },
  'bsb.cssFallback': { af: 'CSS Terugval', en: 'CSS Fallback' },
  'bsb.presetRefs': { af: 'Voorinstelling-verwysings', en: 'Preset References' },
  'bsb.default': { af: 'verstek', en: 'default' },
  'bsb.usedInPatterns': { af: 'Gebruik in patrone', en: 'Used in patterns' },
};

// ─── Template Browser ────────────────────────────────────────────────────────

const TEMPLATE_BROWSER: TranslationMap = {
  'tb.title': { af: 'Template-blaaier', en: 'Template Browser' },
  'tb.searchPlaceholder': { af: 'Soek sjablone...', en: 'Search templates...' },
  'tb.noResults': { af: 'Geen sjablone gevind nie', en: 'No templates found' },
  'tb.totalTemplates': { af: 'Totale sjablone', en: 'Total templates' },
  'tb.hierarchy': { af: 'Hiërargie', en: 'Hierarchy' },
  'tb.patternComposition': { af: 'Patroonsamestelling', en: 'Pattern Composition' },
  'tb.reactRoute': { af: 'React Roete', en: 'React Route' },
  'tb.templateParts': { af: 'Sjabloondele', en: 'Template Parts' },
  'tb.viewCode': { af: 'Wys kode', en: 'View code' },
  'tb.hideCode': { af: 'Versteek kode', en: 'Hide code' },
};

// ─── Template Part Browser ───────────────────────────────────────────────────

const TEMPLATE_PART_BROWSER: TranslationMap = {
  'tpb.title': { af: 'Template-deelblaaier', en: 'Template Part Browser' },
  'tpb.searchPlaceholder': { af: 'Soek sjabloondele...', en: 'Search template parts...' },
  'tpb.noResults': { af: 'Geen sjabloondele gevind nie', en: 'No template parts found' },
  'tpb.totalParts': { af: 'Totale dele', en: 'Total parts' },
  'tpb.area': { af: 'Area', en: 'Area' },
  'tpb.usedInTemplates': { af: 'Gebruik in sjablone', en: 'Used in templates' },
  'tpb.reactComponent': { af: 'React Komponent', en: 'React Component' },
  'tpb.viewCode': { af: 'Wys kode', en: 'View code' },
  'tpb.hideCode': { af: 'Versteek kode', en: 'Hide code' },
};

// ─── Inc Folder Browser ──────────────────────────────────────────────────────

const INC_FOLDER_BROWSER: TranslationMap = {
  'ifb.title': { af: 'Inc-lêerblaaier', en: 'Inc/ Folder Browser' },
  'ifb.searchPlaceholder': { af: 'Soek PHP lêers, funksies, of hooks...', en: 'Search PHP files, functions, or hooks...' },
  'ifb.noResults': { af: 'Geen lêers gevind nie', en: 'No files found' },
  'ifb.totalFiles': { af: 'Totale lêers', en: 'Total files' },
  'ifb.functions': { af: 'Funksies', en: 'Functions' },
  'ifb.hooks': { af: 'Hooks', en: 'Hooks' },
  'ifb.dependencies': { af: 'Afhanklikhede', en: 'Dependencies' },
  'ifb.copyRequire': { af: 'Kopieer require_once', en: 'Copy require_once' },
  'ifb.viewCode': { af: 'Wys kode', en: 'View code' },
  'ifb.hideCode': { af: 'Versteek kode', en: 'Hide code' },
};

// ─── Icon Browser ────────────────────────────────────────────────────────────

const ICON_BROWSER: TranslationMap = {
  'ib.title': { af: 'Ikoonblaaier', en: 'Icon Browser' },
  'ib.searchPlaceholder': { af: 'Soek ikone per naam, etiket, of tipe...', en: 'Search icons by name, tag, or type...' },
  'ib.noResults': { af: 'Geen ikone gevind nie', en: 'No icons found' },
  'ib.totalIcons': { af: 'Totale ikone', en: 'Total icons' },
  'ib.interface': { af: 'Koppelvlak', en: 'Interface' },
  'ib.content': { af: 'Inhoud', en: 'Content' },
  'ib.social': { af: 'Sosiaal', en: 'Social' },
  'ib.both': { af: 'Beide', en: 'Both' },
  'ib.size': { af: 'Grootte', en: 'Size' },
  'ib.dashicon': { af: 'Dashicon Eweknie', en: 'Dashicon Equivalent' },
  'ib.copyImport': { af: 'Kopieer invoer', en: 'Copy import' },
  'ib.copyJsx': { af: 'Kopieer JSX', en: 'Copy JSX' },
  'ib.copySvg': { af: 'Kopieer SVG', en: 'Copy SVG' },
  'ib.downloadSvg': { af: 'Laai SVG af', en: 'Download SVG' },
  'ib.usedIn': { af: 'Gebruik in', en: 'Used in' },
};

// ─── Style Guide ─────────────────────────────────────────────────────────────

const STYLE_GUIDE: TranslationMap = {
  'sg.title': { af: 'Stylgids', en: 'Style Guide' },
};

// ─── Foundations ─────────────────────────────────────────────────────────────

const FOUNDATIONS: TranslationMap = {
  'fn.title': { af: 'Fondamente', en: 'Foundations' },
};

// ─── Theme.json Viewer ──────────────────────────────────────────────────────

const THEME_JSON_VIEWER: TranslationMap = {
  'tjv.title': { af: 'Theme.json Blaaier', en: 'Theme.json Viewer' },
  'tjv.tab.overview': { af: 'Oorsig', en: 'Overview' },
  'tjv.tab.settings': { af: 'Instellings', en: 'Settings' },
  'tjv.tab.styles': { af: 'Style', en: 'Styles' },
  'tjv.tab.templates': { af: 'Sjablone', en: 'Templates' },
  'tjv.tab.rawJson': { af: 'Rou JSON', en: 'Raw JSON' },
  'tjv.keyDecisions': { af: 'Sleutelbesluite', en: 'Key Decisions' },
  'tjv.layout': { af: 'Uitleg', en: 'Layout' },
  'tjv.colors': { af: 'Kleure', en: 'Colors' },
  'tjv.fontFamilies': { af: 'Lettertipe-families', en: 'Font Families' },
  'tjv.fontSizes': { af: 'Lettergroottes', en: 'Font Sizes' },
  'tjv.spacing': { af: 'Spasiëring', en: 'Spacing' },
  'tjv.shadows': { af: 'Skaduwees', en: 'Shadows' },
  'tjv.borders': { af: 'Grense', en: 'Borders' },
  'tjv.downloadJson': { af: 'Laai JSON af', en: 'Download JSON' },
};

// ─── Presets Browser ─────────────────────────────────────────────────────────

const PRESETS_BROWSER: TranslationMap = {
  'psb.title': { af: 'Voorinstellings Blaaier', en: 'Presets Browser' },
  'psb.searchPlaceholder': { af: 'Soek voorinstellings...', en: 'Search presets...' },
  'psb.noResults': { af: 'Geen voorinstellings gevind nie', en: 'No presets found' },
  'psb.tab.colors': { af: 'Kleure', en: 'Colors' },
  'psb.tab.fontSizes': { af: 'Lettergroottes', en: 'Font Sizes' },
  'psb.tab.spacing': { af: 'Spasiëring', en: 'Spacing' },
  'psb.tab.shadows': { af: 'Skaduwees', en: 'Shadows' },
  'psb.tab.borderRadius': { af: 'Grensradius', en: 'Border Radius' },
  'psb.tab.borderWidths': { af: 'Grenswydte', en: 'Border Widths' },
  'psb.tab.aspectRatios': { af: 'Aspekverhoudings', en: 'Aspect Ratios' },
  'psb.cssVar': { af: 'CSS Veranderlike', en: 'CSS Variable' },
  'psb.jsonRef': { af: 'JSON Verwysing', en: 'JSON Reference' },
  'psb.rawValue': { af: 'Rou Waarde', en: 'Raw Value' },
  'psb.usedInBlockStyles': { af: 'Gebruik in blok-style', en: 'Used in block styles' },
};

// ─── Ollie Theme Reference ──────────────────────────────────────────────────

const OLLIE_THEME_REFERENCE: TranslationMap = {
  'otr.title': { af: 'Ollie Tema Verwysing', en: 'Ollie Theme Reference' },
  'otr.tab.overview': { af: 'Oorsig', en: 'Overview' },
  'otr.tab.templatesParts': { af: 'Sjablone & Dele', en: 'Templates & Parts' },
  'otr.tab.patterns': { af: 'Patrone', en: 'Patterns' },
  'otr.tab.blockStyles': { af: 'Blok-style', en: 'Block Styles' },
  'otr.tab.styleVariations': { af: 'Stylvariasies', en: 'Style Variations' },
  'otr.tab.migrationPlan': { af: 'Migrasieplan', en: 'Migration Plan' },
  'otr.keep': { af: 'Behou', en: 'Keep' },
  'otr.modify': { af: 'Wysig', en: 'Modify' },
  'otr.replace': { af: 'Vervang', en: 'Replace' },
  'otr.delete': { af: 'Verwyder', en: 'Delete' },
  'otr.new': { af: 'Nuut', en: 'New' },
  'otr.searchPlaceholder': { af: 'Soek patrone...', en: 'Search patterns...' },
  'otr.noResults': { af: 'Geen patrone gevind nie', en: 'No patterns found' },
  'otr.copyAsJson': { af: 'Kopieer as JSON', en: 'Copy as JSON' },
  'otr.directoryTree': { af: 'Gids-boom', en: 'Directory Tree' },
};

// ─── Section Landing Pages ──────────────────────────────────────────────────

const SECTION_LANDING_PAGES: TranslationMap = {
  'proto.title': { af: 'Prototipe Ontwikkelingsgereedskap', en: 'Prototype Development Tools' },
  'proto.desc': { af: 'Ontwerp-tokens, komponentbiblioteke, roetekaarte, datastrukture, en ikone.', en: 'Design tokens, component libraries, route maps, data structures, and icons.' },
  'proto.quickGuide': { af: 'Vinnige Gids', en: 'Quick Guide' },
  'ref.title': { af: 'Verwysingsgereedskap', en: 'Reference Tools' },
  'ref.desc': { af: 'Riglyne, inhoud, en beeldbates — die volledige verwysingsbibliotiek.', en: 'Guidelines, content, and image assets — the complete reference library.' },
  'ref.contentIntegrity': { af: 'Inhoud Integriteitsreël', en: 'Content Integrity Rule' },
  'ops.title': { af: 'Bedrywighede & Lansering', en: 'Operations & Launch' },
  'ops.desc': { af: 'Lanseringskontrolelys, e-possjablone, stelselkonfigurasie, en vormpatrone.', en: 'Launch checklist, email templates, system configuration, and form patterns.' },
};

// ─── Merge all dictionaries ──────────────────────────────────────────────────

const ALL_TRANSLATIONS: TranslationMap = {
  ...COMMON,
  ...STATS,
  ...MENU_FOOTER,
  ...DEVHUB,
  ...COMPONENT_BROWSER,
  ...ROUTE_MAP,
  ...DATA_BROWSER,
  ...WP_MIGRATION,
  ...DESIGN_SYSTEM_EXTRACTOR,
  ...TOKEN_MAPPER,
  ...SYSTEM_CONFIG,
  ...SECTION_STYLES,
  ...GUIDELINES_BROWSER,
  ...CONTENT_BROWSER,
  ...EMAIL_PREVIEWS,
  ...LAUNCH_CHECKLIST,
  ...IMAGE_ASSET_BROWSER,
  ...PATTERN_BROWSER,
  ...BLOCK_STYLE_BROWSER,
  ...TEMPLATE_BROWSER,
  ...TEMPLATE_PART_BROWSER,
  ...INC_FOLDER_BROWSER,
  ...ICON_BROWSER,
  ...STYLE_GUIDE,
  ...FOUNDATIONS,
  ...THEME_JSON_VIEWER,
  ...PRESETS_BROWSER,
  ...OLLIE_THEME_REFERENCE,
  ...SECTION_LANDING_PAGES,
};

/**
 * Returns a translated string for the given key and locale.
 * Falls back to the Afrikaans value if key is not found.
 */
export function getTranslation(key: string, locale: DevLocale): string {
  const entry = ALL_TRANSLATIONS[key];
  if (!entry) return key;
  return entry[locale] || entry.af;
}

/**
 * Hook-friendly translation function factory.
 */
export function createTranslator(locale: DevLocale) {
  return (key: string): string => getTranslation(key, locale);
}