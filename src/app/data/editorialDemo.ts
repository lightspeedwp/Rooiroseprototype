/**
 * Editorial Demo Pages Data
 * Content for showcasing editorial patterns and components
 * 
 * Pages:
 * - /editorial-demo/ - Pattern showcase with all editorial elements
 * - /editorial-demo/landing-page/ - Marketing-focused landing page
 */

export const EDITORIAL_DEMO_HERO = {
  title: "Die kuns van visuele storievertelling",
  subtitle: "Ontdek die krag van redaksionele patrone in moderne tydskrifontwerp",
  description: "Van heroes tot masonry-uitlegte, van pull quotes tot interaktiewe elemente - verken die volledige spektrum van rooi rose se redaksionele ontwerpstelsel.",
  cta: {
    primary: { text: "Verken patrone", href: "#patterns" },
    secondary: { text: "Bekyk riglyne", href: "/ontwikkelaar/riglyne" }
  },
  image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&h=900&fit=crop", // Writing/editorial
};

export const EDITORIAL_PATTERNS = [
  {
    id: "hero-slider",
    name: "Hero Slider",
    category: "Heroes",
    description: "Roterend beeld-karrossel met outomatiese afspeel vir opvallende visuele impak.",
    features: ["Auto-play", "Fade transitions", "Responsive", "Touch-enabled"],
    usage: "Homepage hero sections, feature carousels"
  },
  {
    id: "article-hero",
    name: "Article Hero",
    category: "Heroes",
    description: "Volledige breedte artikel-kop met featured image, kategorie badge, en byline.",
    features: ["3:2 aspect ratio", "Category badge", "Author byline", "Reading time"],
    usage: "Article pages, long-form content"
  },
  {
    id: "pull-quote",
    name: "Pull Quote",
    category: "Typography",
    description: "Groot, stylvolle aanhalings om sleutelstellings uit te lig.",
    features: ["Playfair Display SC", "Border accent", "Author attribution", "3 color variants"],
    usage: "Article breaks, testimonials, featured statements"
  },
  {
    id: "masonry-grid",
    name: "Masonry Grid",
    category: "Layouts",
    description: "Pinterest-styl grid vir wisselende beeld-groottes.",
    features: ["Responsive columns", "Break-inside avoid", "Gap spacing", "Lazy loading"],
    usage: "Galleries, category pages, portfolio grids"
  },
  {
    id: "callout-box",
    name: "Callout Box",
    category: "Content Blocks",
    description: "Gekleurde inhoudsblokke vir wenke, waarskuwings, en belangrike notas.",
    features: ["4 color variants", "Icon support", "Border accent", "Responsive padding"],
    usage: "Tips, warnings, important information, highlights"
  },
  {
    id: "stats-block",
    name: "Stats Block",
    category: "Content Blocks",
    description: "Vertoon sleutel-statistieke en syfers met visuele impak.",
    features: ["Large numbers", "Custom labels", "Flexbox layout", "Brand colors"],
    usage: "Nutrition facts, data highlights, achievements, metrics"
  },
  {
    id: "gallery-grid",
    name: "Gallery Grid",
    category: "Layouts",
    description: "Uniforme grid vir beeldversamelings met opsionele byskrifte.",
    features: ["3-column grid", "Aspect ratio control", "Captions", "Lightbox ready"],
    usage: "Photo galleries, image collections, visual stories"
  },
  {
    id: "fade-in-scroll",
    name: "Fade-In on Scroll",
    category: "Scrollytelling",
    description: "Progressiewe inhoud-onthulling terwyl jy afrol.",
    features: ["Intersection Observer", "Opacity transition", "Transform effects", "Threshold control"],
    usage: "Immersive storytelling, long-form articles, visual narratives"
  },
  {
    id: "sticky-sidebar",
    name: "Sticky Sidebar",
    category: "Scrollytelling",
    description: "Verwante inhoud bly sigbaar tydens afrol.",
    features: ["Position sticky", "Max-height control", "Overflow scroll", "Mobile-friendly"],
    usage: "Table of contents, recipe ingredients, related links"
  },
  {
    id: "parallax-hero",
    name: "Parallax Background",
    category: "Scrollytelling",
    description: "Agtergrond beweeg stadiger as voorgrond vir diepte-effek.",
    features: ["0.5x scroll speed", "Desktop only", "Performance optimized", "Will-change"],
    usage: "Hero sections, feature introductions, immersive experiences"
  },
  {
    id: "accordion-faq",
    name: "Accordion / FAQ",
    category: "Interactive",
    description: "Uitvoubare vrae-en-antwoorde met schema.org markup.",
    features: ["Single/multiple open", "Smooth transitions", "Keyboard accessible", "SEO friendly"],
    usage: "FAQs, content organization, expandable sections"
  },
  {
    id: "tabs",
    name: "Tabs",
    category: "Interactive",
    description: "Organiseer verwante inhoud in tabblade.",
    features: ["Active state", "Keyboard navigation", "Accessible", "Customizable"],
    usage: "Recipe variations, content categories, multi-view data"
  },
];

export const EDITORIAL_DEMO_STATS = [
  { number: "12+", label: "Redaksionele Patrone" },
  { number: "4", label: "Kategorieë" },
  { number: "100%", label: "Responsive" },
  { number: "AAA", label: "Toeganklikheid" },
];

export const EDITORIAL_DEMO_QUOTES = [
  {
    quote: "Goeie ontwerp is so min ontwerp as moontlik",
    author: "Dieter Rams",
    role: "Industrial Designer"
  },
  {
    quote: "Inhoud voorsien is soos water. Jy kan dit vloei of jy kan dit vries",
    author: "Josh Clark",
    role: "Designer"
  },
  {
    quote: "Ontwerp is nie net hoe dit lyk nie, dis hoe dit werk",
    author: "Steve Jobs",
    role: "Apple Co-founder"
  },
];

export const EDITORIAL_DEMO_GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
    alt: "Colorful food photography",
    caption: "Kos fotografie"
  },
  {
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop",
    alt: "Fashion editorial",
    caption: "Mode redaksionele"
  },
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop",
    alt: "Beauty products",
    caption: "Skoonheidsprodukte"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    alt: "Health and wellness",
    caption: "Gesondheid en welstand"
  },
  {
    src: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?w=800&h=600&fit=crop",
    alt: "Lifestyle magazine",
    caption: "Leefstyl tydskrif"
  },
  {
    src: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&h=600&fit=crop",
    alt: "Cafe lifestyle",
    caption: "Koffie leefstyl"
  },
];

export const EDITORIAL_DEMO_CALLOUTS = [
  {
    type: "info" as const,
    title: "Wenk",
    content: "Gebruik hierdie patrone om visueel-ryk, aantreklike redaksionele ervarings te skep."
  },
  {
    type: "success" as const,
    title: "Beste Praktyk",
    content: "Kombineer verskeie patrone vir maksimum impak en gebruikersbetrokkenheid."
  },
  {
    type: "warning" as const,
    title: "Let op",
    content: "Gebruik parallax en animasies spaarsamig vir optimale prestasie."
  },
];

export const EDITORIAL_DEMO_FAQS = [
  {
    question: "Wat is redaksionele patrone?",
    answer: "Redaksionele patrone is herbruikbare ontwerp-komponente wat saamgestel word om visueel-ryk, aantreklike tydskrif-styl uitlegte te skep. Hulle sluit in heroes, pull quotes, galleries, scrollytelling-effekte, en meer."
  },
  {
    question: "Hoe kies ek die regte patroon?",
    answer: "Oorweeg jou inhoud-tipe en gebruikerservaring-doelwitte. Heroes is ideaal vir impakvolle openings, pull quotes beklemtoon sleutelboodskappe, galleries toon beelde, en scrollytelling skep meeslepende narratiewe."
  },
  {
    question: "Is hierdie patrone responsive?",
    answer: "Ja, alle redaksionele patrone is volledig responsive en geoptimeer vir desktop, tablet, en mobiele toestelle. Sommige effekte (soos parallax) is uitgeskakel op mobiel vir prestasie."
  },
  {
    question: "Kan ek hierdie patrone kombineer?",
    answer: "Absoluut! Die patrone is ontwerp om saam te werk. Kombineer heroes met galleries, pull quotes met scrollytelling, en callouts met statistieke vir ryk, diverse uitlegte."
  },
];

// Landing Page Specific Content
export const LANDING_PAGE_HERO = {
  title: "Skep ongelooflike redaksionele ervarings",
  subtitle: "rooi rose se ontwerpstelsel",
  description: "Alles wat jy nodig het om beeldskone, magazine-kwaliteit webbladsye te bou - van heroes tot galleries, pull quotes tot interaktiewe komponente.",
  cta: {
    primary: { text: "Begin nou", href: "/ontwikkelaar/patrone" },
    secondary: { text: "Bekyk dokumentasie", href: "/ontwikkelaar/riglyne" }
  },
  image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&h=900&fit=crop",
};

export const LANDING_PAGE_FEATURES = [
  {
    icon: "Palette",
    title: "Beeldskoon Ontwerp",
    description: "Professionele tydskrif-kwaliteit uitlegte met Playfair Display SC en Karla tipografie."
  },
  {
    icon: "Smartphone",
    title: "Volledig Responsive",
    description: "Werk perfek op alle toestelle - van groot desktop skerms tot klein mobiele fone."
  },
  {
    icon: "Zap",
    title: "Prestasie Geoptimeer",
    description: "Vinnige laaitye met lazy loading, code splitting, en performante animasies."
  },
  {
    icon: "Accessibility",
    title: "Toeganklik",
    description: "AAA toeganklikheids-standaarde met ARIA labels, keyboard navigasie, en screen reader ondersteuning."
  },
  {
    icon: "Package",
    title: "Modular Komponente",
    description: "Herbruikbare, saamgestelde patrone wat maklik is om te implementeer en aan te pas."
  },
  {
    icon: "BookOpen",
    title: "Omvattende Dokumentasie",
    description: "Gedetailleerde riglyne, kode-voorbeelde, en beste praktyke vir elke patroon."
  },
];

export const LANDING_PAGE_TESTIMONIALS = [
  {
    quote: "Die redaksionele ontwerpstelsel het ons produksie-tyd met 50% verminder en ons inhoud lyk beter as ooit.",
    author: "Sarah van der Merwe",
    role: "Redakteur, rooi rose",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    quote: "Ongelooflike komponente wat maklik is om te implementeer en perfek werk op alle toestelle.",
    author: "Johan Pretorius",
    role: "Webontwikkelaar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    quote: "Die toeganklikheids-fokus maak dit eenvoudig om inklusiewe, gebruikersvriendelike ervarings te skep.",
    author: "Anke Botha",
    role: "UX Designer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
];

export const LANDING_PAGE_CTA = {
  title: "Gereed om jou redaksionele ervaring te transformeer?",
  description: "Begin vandag met die rooi rose ontwerpstelsel en skep beeldskone, magazine-kwaliteit webbladsye.",
  primaryButton: { text: "Verken patrone", href: "/ontwikkelaar/patrone" },
  secondaryButton: { text: "Lees dokumentasie", href: "/ontwikkelaar/riglyne" },
};

export const LANDING_PAGE_STATS = [
  { number: "12+", label: "Redaksionele Patrone" },
  { number: "145+", label: "Ontwerp Tokens" },
  { number: "177", label: "WordPress Patrone" },
  { number: "100%", label: "Responsive" },
];
