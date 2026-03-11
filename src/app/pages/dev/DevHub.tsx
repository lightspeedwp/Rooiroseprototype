import {
  Layers, Map, Database, Globe, Palette, ArrowRight,
  LayoutGrid, Wrench, Mail, Settings, FileStack, ClipboardCheck, FileImage,
  LayoutTemplate, Paintbrush, LayoutDashboard, Puzzle, FolderOpen, Sparkles, FileJson,
  SlidersHorizontal, Blocks, ShoppingCart, FormInput,
} from 'lucide-react';
import { Link } from 'react-router';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { Newspaper } from '../../components/icons/NewspaperIcon';

// ─── Prototype Development Tools (general) ──────────────────────────────────
const PROTOTYPE_TOOLS = [
  {
    titleKey: 'devhub.designSystem',
    descKey: 'devhub.designSystemDesc',
    icon: Palette,
    path: '/ontwikkelaar/ontwerpstelsel',
    color: 'bg-purple-500',
  },
  {
    titleKey: 'devhub.componentBrowser',
    descKey: 'devhub.componentBrowserDesc',
    icon: Layers,
    path: '/ontwikkelaar/komponente',
    color: 'bg-blue-500',
  },
  {
    titleKey: 'devhub.routeMap',
    descKey: 'devhub.routeMapDesc',
    icon: Map,
    path: '/ontwikkelaar/roetes',
    color: 'bg-green-500',
  },
  {
    titleKey: 'devhub.dataStructure',
    descKey: 'devhub.dataStructureDesc',
    icon: Database,
    path: '/ontwikkelaar/data',
    color: 'bg-orange-500',
  },
  {
    titleKey: 'devhub.iconBrowser',
    descKey: 'devhub.iconBrowserDesc',
    icon: Sparkles,
    path: '/ontwikkelaar/ikone',
    color: 'bg-yellow-500',
  },
];

// ─── WordPress Migration Tools ──────────────────────────────────────────────
const WP_TOOLS = [
  {
    titleKey: 'devhub.wpMigration',
    descKey: 'devhub.wpMigrationDesc',
    icon: Globe,
    path: '/ontwikkelaar/wordpress',
    color: 'bg-indigo-500',
  },
  {
    titleKey: 'devhub.themeJsonViewer',
    descKey: 'devhub.themeJsonViewerDesc',
    icon: FileJson,
    path: '/ontwikkelaar/temaJson',
    color: 'bg-emerald-500',
  },
  {
    titleKey: 'devhub.presetsBrowser',
    descKey: 'devhub.presetsBrowserDesc',
    icon: SlidersHorizontal,
    path: '/ontwikkelaar/voorinstellings',
    color: 'bg-amber-500',
  },
  {
    titleKey: 'devhub.ollieThemeReference',
    descKey: 'devhub.ollieThemeReferenceDesc',
    icon: Blocks,
    path: '/ontwikkelaar/ollie',
    color: 'bg-blue-500',
  },
  {
    titleKey: 'devhub.patternBrowser',
    descKey: 'devhub.patternBrowserDesc',
    icon: LayoutTemplate,
    path: '/ontwikkelaar/patrone',
    color: 'bg-fuchsia-500',
  },
  {
    titleKey: 'devhub.sectionStyles',
    descKey: 'devhub.sectionStylesDesc',
    icon: LayoutGrid,
    path: '/ontwikkelaar/afdeling-style',
    color: 'bg-violet-500',
  },
  {
    titleKey: 'devhub.blockStyleBrowser',
    descKey: 'devhub.blockStyleBrowserDesc',
    icon: Paintbrush,
    path: '/ontwikkelaar/blok-styl',
    color: 'bg-pink-500',
  },
  {
    titleKey: 'devhub.blockBrowser',
    descKey: 'devhub.blockBrowserDesc',
    icon: Blocks,
    path: '/ontwikkelaar/blokke',
    color: 'bg-cyan-500',
  },
  {
    titleKey: 'devhub.templateBrowser',
    descKey: 'devhub.templateBrowserDesc',
    icon: LayoutDashboard,
    path: '/ontwikkelaar/sjablone',
    color: 'bg-sky-500',
  },
  {
    titleKey: 'devhub.templatePartBrowser',
    descKey: 'devhub.templatePartBrowserDesc',
    icon: Puzzle,
    path: '/ontwikkelaar/sjablone-onderdeel',
    color: 'bg-teal-500',
  },
  {
    titleKey: 'devhub.incFolderBrowser',
    descKey: 'devhub.incFolderBrowserDesc',
    icon: FolderOpen,
    path: '/ontwikkelaar/inc-map',
    color: 'bg-orange-500',
  },
  {
    titleKey: 'devhub.eEditionsCommerce',
    descKey: 'devhub.eEditionsCommerceDesc',
    icon: ShoppingCart,
    path: '/ontwikkelaar/e-editions-handel',
    color: 'bg-emerald-600',
  },
];

// ─── Reference Tools ────────────────────────────────────────────────────────
const REFERENCE_TOOLS = [
  {
    titleKey: 'devhub.guidelinesBrowser',
    descKey: 'devhub.guidelinesBrowserDesc',
    icon: Newspaper,
    path: '/ontwikkelaar/riglyne',
    color: 'bg-emerald-500',
  },
  {
    titleKey: 'devhub.contentBrowser',
    descKey: 'devhub.contentBrowserDesc',
    icon: FileStack,
    path: '/ontwikkelaar/inhoud',
    color: 'bg-cyan-500',
  },
  {
    titleKey: 'devhub.imageAssets',
    descKey: 'devhub.imageAssetsDesc',
    icon: FileImage,
    path: '/ontwikkelaar/beelde',
    color: 'bg-sky-500',
  },
];

// ─── Operations & Launch Tools ──────────────────────────────────────────────
const OPERATIONS_TOOLS = [
  {
    titleKey: 'devhub.launchChecklist',
    descKey: 'devhub.launchChecklistDesc',
    icon: ClipboardCheck,
    path: '/ontwikkelaar/lansering',
    color: 'bg-lime-500',
  },
  {
    titleKey: 'devhub.emailPreviews',
    descKey: 'devhub.emailPreviewsDesc',
    icon: Mail,
    path: '/ontwikkelaar/e-pos-voorskou',
    color: 'bg-rose-500',
  },
  {
    titleKey: 'devhub.systemConfig',
    descKey: 'devhub.systemConfigDesc',
    icon: Settings,
    path: '/ontwikkelaar/stelselkonfig',
    color: 'bg-purple-500',
  },
  {
    titleKey: 'devhub.formBuilderPreview',
    descKey: 'devhub.formBuilderPreviewDesc',
    icon: FormInput,
    path: '/ontwikkelaar/form-builder-preview',
    color: 'bg-teal-500',
  },
];

// ─── WP Migration Quick Cards (compact links inside the WP section) ─────────
const WP_QUICK_CARDS = [
  { label: 'Content Model', labelAf: 'Inhoudmodel', mono: 'CPTs', path: '/ontwikkelaar/wordpress', from: 'from-blue-500/10', to: 'to-cyan-500/10', border: 'border-blue-500/20', text: 'text-blue-500 dark:text-blue-300' },
  { label: 'Block Mapping', labelAf: 'Blok-kartering', mono: 'Blocks', path: '/ontwikkelaar/wordpress', from: 'from-green-500/10', to: 'to-emerald-500/10', border: 'border-green-500/20', text: 'text-green-500 dark:text-green-300' },
  { label: 'theme.json', labelAf: 'theme.json', mono: 'JSON', path: '/ontwikkelaar/wordpress', from: 'from-amber-500/10', to: 'to-orange-500/10', border: 'border-amber-500/20', text: 'text-amber-500 dark:text-amber-300' },
  { label: 'Roadmap', labelAf: 'Padkaart', mono: '10 Phases', path: '/ontwikkelaar/wordpress', from: 'from-purple-500/10', to: 'to-pink-500/10', border: 'border-purple-500/20', text: 'text-purple-500 dark:text-purple-300' },
  { label: 'Data Model', labelAf: 'Datamodel', mono: '7 CPTs', path: '/ontwikkelaar/wordpress', from: 'from-indigo-500/10', to: 'to-blue-500/10', border: 'border-indigo-500/20', text: 'text-indigo-500 dark:text-indigo-300' },
];

const QUICK_LINKS = [
  { key: 'devhub.home', path: '/' },
  { key: 'devhub.articleExample', path: '/artikel/demo' },
  { key: 'devhub.newsCategory', path: '/nuus' },
  { key: 'devhub.eEditions', path: '/e-uitgawes' },
  { key: 'devhub.policiesHub', path: '/beleid' },
  { key: 'devhub.competitions', path: '/kompetisies' },
  { key: 'devhub.advertise', path: '/adverteer' },
  { key: 'devhub.contact', path: '/kontak' },
];

const STATS = [
  { key: 'devhub.statRoutes', value: '130+' },
  { key: 'devhub.statComponents', value: '90+' },
  { key: 'devhub.statPages', value: '70+' },
  { key: 'devhub.statGuidelines', value: '187' },
];

const ALL_TOOLS_COUNT = PROTOTYPE_TOOLS.length + WP_TOOLS.length + REFERENCE_TOOLS.length + OPERATIONS_TOOLS.length;

function ToolCard({ card, t }: { card: typeof PROTOTYPE_TOOLS[0]; t: (key: string) => string }) {
  const Icon = card.icon;
  return (
    <Link
      to={card.path}
      className="group bg-white dark:bg-white/[0.03] hover:bg-gray-50 dark:hover:bg-white/[0.06] border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 rounded-xl p-5 transition-all duration-200"
    >
      <div className={`w-10 h-10 rounded-lg ${card.color} flex items-center justify-center mb-4`}>
        <Icon size={20} className="text-white" />
      </div>
      <h3 className="text-sm text-gray-900 dark:text-white mb-1.5 group-hover:text-brand-red transition-colors">
        {t(card.titleKey)}
      </h3>
      <p className="text-[12px] text-gray-500 dark:text-white/40 leading-relaxed">
        {t(card.descKey)}
      </p>
      <div className="mt-3 flex items-center gap-1 text-[11px] text-gray-400 dark:text-white/25 group-hover:text-brand-red transition-colors">
        {t('common.explore')} <ArrowRight size={10} />
      </div>
    </Link>
  );
}

export const DevHub = () => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';

  return (
    <div>
      {/* Hero */}
      <DevToolHero
        icon={Wrench}
        iconColor="bg-brand-red"
        title={t('devhub.title')}
        descriptionHtml={t('devhub.subtitle')}
        stats={STATS.map((stat) => ({
          label: t(stat.key),
          value: stat.value,
        }))}
        badge={`${ALL_TOOLS_COUNT} ${t('common.tools')}`}
      />

      {/* ─── Section 1: Prototype Development Tools ─── */}
      <div className="mb-10">
        <Link to="/ontwikkelaar/prototipe" className="group inline-flex items-center gap-2 mb-4">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/25 group-hover:text-brand-red transition-colors">
            {t('devhub.sectionPrototype')}
          </h2>
          <span className="px-2 py-0.5 rounded text-[10px] bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30">
            {PROTOTYPE_TOOLS.length}
          </span>
          <ArrowRight size={10} className="text-gray-300 dark:text-white/20 group-hover:text-brand-red transition-colors" />
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {PROTOTYPE_TOOLS.map((card) => (
            <ToolCard key={card.path} card={card} t={t} />
          ))}
        </div>
      </div>

      {/* ─── Section 2: WordPress Migration Tools ─── */}
      <div className="mb-10">
        <Link to="/ontwikkelaar/wordpress" className="group inline-flex items-center gap-2 mb-4">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/25 group-hover:text-brand-red transition-colors">
            {t('devhub.sectionWordpress')}
          </h2>
          <span className="px-2 py-0.5 rounded text-[10px] bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
            {WP_TOOLS.length}
          </span>
          <ArrowRight size={10} className="text-gray-300 dark:text-white/20 group-hover:text-brand-red transition-colors" />
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {WP_TOOLS.map((card) => (
            <ToolCard key={card.path + card.titleKey} card={card} t={t} />
          ))}
        </div>

        {/* WP Quick Cards */}
        <div className="mt-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/20 mb-3">
            {t('devhub.sectionWpQuickLinks')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {WP_QUICK_CARDS.map((card) => (
              <Link
                key={card.mono}
                to={card.path}
                className={`bg-gradient-to-br ${card.from} ${card.to} hover:opacity-80 border ${card.border} rounded-lg p-3 transition-all group`}
              >
                <div className={`text-[10px] font-mono ${card.text} mb-0.5`}>{card.mono}</div>
                <div className="text-sm text-gray-900 dark:text-white transition-colors">
                  {isAf ? card.labelAf : card.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Section 3: Reference Tools ─── */}
      <div className="mb-10">
        <Link to="/ontwikkelaar/verwysings" className="group inline-flex items-center gap-2 mb-4">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/25 group-hover:text-brand-red transition-colors">
            {t('devhub.sectionReference')}
          </h2>
          <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30">
            {REFERENCE_TOOLS.length}
          </span>
          <ArrowRight size={10} className="text-gray-300 dark:text-white/20 group-hover:text-brand-red transition-colors" />
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {REFERENCE_TOOLS.map((card) => (
            <ToolCard key={card.path} card={card} t={t} />
          ))}
        </div>
      </div>

      {/* ─── Section 4: Operations & Launch ─── */}
      <div className="mb-10">
        <Link to="/ontwikkelaar/bedrywighede" className="group inline-flex items-center gap-2 mb-4">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/25 group-hover:text-brand-red transition-colors">
            {t('devhub.sectionOperations')}
          </h2>
          <span className="px-2 py-0.5 rounded text-[10px] bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-300 border border-orange-200 dark:border-orange-500/30">
            {OPERATIONS_TOOLS.length}
          </span>
          <ArrowRight size={10} className="text-gray-300 dark:text-white/20 group-hover:text-brand-red transition-colors" />
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {OPERATIONS_TOOLS.map((card) => (
            <ToolCard key={card.path} card={card} t={t} />
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/25 mb-3">
          {t('common.quickLinks')}
        </h2>
        <div className="flex flex-wrap gap-2">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-3 py-1.5 bg-white dark:bg-white/[0.03] hover:bg-gray-100 dark:hover:bg-white/[0.06] border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-600 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {t(link.key)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};