import React, { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Search, Map, Copy, ExternalLink, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { HERO_META, resolveHeroMeta, RELATED_TOOLS_MAP } from '../../data/devToolHeroData';

import { copyToClipboard } from '../../utils/clipboard';

interface RouteEntry {
  path: string;
  name: string;
  component: string;
  category: string;
  layout: 'main' | 'checkout' | 'bare';
  legacy?: string;
  dynamic?: boolean;
}

const ROUTE_CATEGORIES = [
  { id: 'all', key: 'cb.cat.all' },
  { id: 'main', key: 'rm.cat.main' },
  { id: 'categories', key: 'rm.cat.categories' },
  { id: 'content', key: 'rm.cat.content' },
  { id: 'eeditions', key: 'rm.cat.eeditions' },
  { id: 'competitions', key: 'rm.cat.competitions' },
  { id: 'information', key: 'rm.cat.information' },
  { id: 'advertise', key: 'rm.cat.advertise' },
  { id: 'submit', key: 'rm.cat.submit' },
  { id: 'policies', key: 'rm.cat.policies' },
  { id: 'commerce', key: 'rm.cat.commerce' },
  { id: 'account', key: 'rm.cat.account' },
  { id: 'newsletter', key: 'rm.cat.newsletter' },
  { id: 'thankYou', key: 'rm.cat.thankYou' },
  { id: 'devtools', key: 'rm.cat.devtools' },
  { id: 'system', key: 'rm.cat.system' },
];

const ROUTES: RouteEntry[] = [
  // Main
  { path: '/', name: 'Tuis', component: 'Home', category: 'main', layout: 'main' },
  
  /* ── rooi rose Magazine Categories ──────────────────────────────────
   * Phase 0: Content Architecture Update (2026-03-11)
   * Updated from newspaper categories to lifestyle magazine categories
   * ──────────────────────────────────────────────────────────────────── */
  // Categories — rooi rose Magazine
  { path: '/kos', name: 'Kos', component: 'CategoryPage', category: 'categories', layout: 'main' },
  { path: '/mode', name: 'Mode', component: 'CategoryPage', category: 'categories', layout: 'main' },
  { path: '/skoonheid', name: 'Skoonheid', component: 'CategoryPage', category: 'categories', layout: 'main' },
  { path: '/gesondheid', name: 'Gesondheid', component: 'CategoryPage', category: 'categories', layout: 'main' },
  { path: '/bekendes', name: 'Bekendes', component: 'CategoryPage', category: 'categories', layout: 'main' },
  { path: '/leefstyl', name: 'Leefstyl', component: 'CategoryPage', category: 'categories', layout: 'main', legacy: '/lifestyle' },
  { path: '/jou-lewe', name: 'Jou lewe', component: 'CategoryPage', category: 'categories', layout: 'main' },
  { path: '/ontspanning', name: 'Ontspanning', component: 'CategoryPage', category: 'categories', layout: 'main' },
  { path: '/wen', name: 'Wen', component: 'CompetitionsPage', category: 'competitions', layout: 'main', legacy: '/kompetisies' },
  { path: '/rooiwarm-wenners', name: 'Rooiwarm wenners', component: 'CategoryPage', category: 'categories', layout: 'main' },
  
  // Content
  { path: '/artikel/:slug', name: 'Artikel', component: 'ArticlePage', category: 'content', layout: 'main', dynamic: true, legacy: '/article/:slug' },
  { path: '/onderwerp/:tagSlug', name: 'Onderwerp', component: 'TagArchivePage', category: 'content', layout: 'main', dynamic: true },
  { path: '/skrywer/:authorName', name: 'Skrywer', component: 'AuthorPage', category: 'content', layout: 'main', dynamic: true },
  { path: '/soek', name: 'Soek', component: 'SearchResultsPage', category: 'content', layout: 'main', legacy: '/search' },
  { path: '/doodsberrigte', name: 'Doodsberrigte', component: 'ObituariesPage', category: 'content', layout: 'main', legacy: '/obituaries' },
  { path: '/doodsberrigte/:slug', name: 'Enkel Doodsberig', component: 'SingleObituaryPage', category: 'content', layout: 'main', dynamic: true },
  { path: '/multimedia', name: 'Multimedia', component: 'MultimediaPage', category: 'content', layout: 'main' },
  { path: '/multimedia/:slug', name: 'Enkel Multimedia', component: 'SingleMultimediaPage', category: 'content', layout: 'main', dynamic: true },
  { path: '/geborg', name: 'Borge', component: 'SponsorsPage', category: 'content', layout: 'main' },
  { path: '/geborg/:sponsorSlug', name: 'Borg argief', component: 'SponsorArchivePage', category: 'content', layout: 'main', dynamic: true },
  // E-Editions
  { path: '/e-uitgawes', name: 'E-Uitgawes', component: 'EEditionsPage', category: 'eeditions', layout: 'main', legacy: '/e-editions' },
  { path: '/e-uitgawe/:slug', name: 'Enkel E-Uitgawe', component: 'SingleEEditionPage', category: 'eeditions', layout: 'main', dynamic: true },
  { path: '/my-e-uitgawes', name: 'My E-Uitgawes', component: 'MyEEditionsPage', category: 'eeditions', layout: 'main', legacy: '/my-e-editions' },
  // Competitions
  { path: '/kompetisies', name: 'Kompetisies', component: 'CompetitionsPage', category: 'competitions', layout: 'main', legacy: '/competitions' },
  { path: '/kompetisies/:slug', name: 'Kompetisie', component: 'CompetitionSinglePage', category: 'competitions', layout: 'main', dynamic: true },
  { path: '/kompetisie-terme-en-voorwaardes', name: 'Kompetisie T&V', component: 'CompetitionTermsPage', category: 'competitions', layout: 'main' },
  // Information
  { path: '/oor-ons', name: 'Oor ons', component: 'About', category: 'information', layout: 'main', legacy: '/about' },
  { path: '/oor-ons/redaksie', name: 'Redaksie', component: 'TeamPage', category: 'information', layout: 'main', legacy: '/about/team' },
  { path: '/kontak', name: 'Kontak', component: 'ContactPage', category: 'information', layout: 'main', legacy: '/contact' },
  { path: '/vrae', name: 'Algemene vrae', component: 'FAQPage', category: 'information', layout: 'main', legacy: '/faqs' },
  { path: '/weer', name: 'Weer', component: 'WeatherPage', category: 'information', layout: 'main', legacy: '/weather' },
  { path: '/verkeer', name: 'Verkeer', component: 'TrafficPage', category: 'information', layout: 'main', legacy: '/traffic' },
  { path: '/inhoudsopgawe', name: 'Inhoudsopgawe', component: 'SitemapPage', category: 'information', layout: 'main', legacy: '/sitemap' },
  // Advertise
  { path: '/adverteer', name: 'Adverteer', component: 'Advertise', category: 'advertise', layout: 'main', legacy: '/advertise' },
  { path: '/adverteer/geklassifiseerd', name: 'Geklassifiseerd', component: 'ClassifiedsPage', category: 'advertise', layout: 'main' },
  { path: '/adverteer/vertoonadvertensies', name: 'Vertoonadvertensies', component: 'DisplayAdvertisingPage', category: 'advertise', layout: 'main' },
  { path: '/adverteer/pamflette', name: 'Pamflette', component: 'LeafletsPage', category: 'advertise', layout: 'main' },
  { path: '/adverteer/geborgde-inhoud', name: 'Geborgde inhoud', component: 'SponsoredContentPage', category: 'advertise', layout: 'main' },
  { path: '/adverteer/borgskappe', name: 'Borgskappe', component: 'SponsorshipsPage', category: 'advertise', layout: 'main' },
  { path: '/adverteer/bylaes', name: 'Bylaes', component: 'SupplementsPage', category: 'advertise', layout: 'main' },
  // Submit
  { path: '/stuur-in', name: 'Stuur in', component: 'SubmitHubPage', category: 'submit', layout: 'main', legacy: '/submit' },
  { path: '/stuur-in/storie', name: 'Storie', component: 'SubmitStoryPage', category: 'submit', layout: 'main' },
  { path: '/stuur-in/lesersbrief', name: 'Lesersbrief', component: 'SubmitLetterPage', category: 'submit', layout: 'main' },
  { path: '/stuur-in/terugvoer', name: 'Terugvoer', component: 'SubmitFeedbackPage', category: 'submit', layout: 'main' },
  { path: '/stuur-in/shoutout', name: 'Shoutout', component: 'SubmitShoutoutPage', category: 'submit', layout: 'main' },
  { path: '/gebeure', name: 'Gebeure', component: 'EventsPage', category: 'submit', layout: 'main', legacy: '/events' },
  { path: '/gebeure/:id', name: 'Enkele Gebeurtenis', component: 'SingleEventPage', category: 'submit', layout: 'main', dynamic: true },
  { path: '/gebeure/dien-in', name: 'Gebeurtenis indieneing', component: 'SubmitEventPage', category: 'submit', layout: 'main' },
  // Policies
  { path: '/beleid', name: 'Beleid', component: 'PoliciesPage', category: 'policies', layout: 'main', legacy: '/policies' },
  { path: '/beleid/privaatheidsbeleid', name: 'Privaatheidsbeleid', component: 'PrivacyPolicyPage', category: 'policies', layout: 'main' },
  { path: '/beleid/koekiebeleid', name: 'Koekiebeleid', component: 'CookiePolicyPage', category: 'policies', layout: 'main' },
  { path: '/beleid/terme-en-voorwaardes', name: 'Terme en voorwaardes', component: 'TermsAndConditionsPage', category: 'policies', layout: 'main' },
  { path: '/beleid/paia', name: 'PAIA', component: 'PAIAPage', category: 'policies', layout: 'main' },
  { path: '/beleid/gebruikersreels', name: 'Gebruikersreels', component: 'UserRulesPage', category: 'policies', layout: 'main' },
  { path: '/beleid/advertensie-riglyne', name: 'Advertensie-riglyne', component: 'AdvertisingGuidelinesPage', category: 'policies', layout: 'main' },
  { path: '/beleid/perskode', name: 'Perskode', component: 'PressCodePage', category: 'policies', layout: 'main' },
  { path: '/beleid/ki-beleid', name: 'KI-beleid', component: 'AIPolicyPage', category: 'policies', layout: 'main' },
  { path: '/beleid/kommentaarbeleid', name: 'Kommentaarbeleid', component: 'CommentPolicyPage', category: 'policies', layout: 'main' },
  { path: '/beleid/terugsendingsbeleid', name: 'Terugsendingsbeleid', component: 'ReturnsPolicyPage', category: 'policies', layout: 'main' },
  { path: '/beleid/klagteprosedure', name: 'Klagteprosedure', component: 'ComplaintsProcedurePage', category: 'policies', layout: 'main' },
  // Commerce
  { path: '/inteken', name: 'Inteken', component: 'SubscribeEEdition', category: 'commerce', layout: 'main', legacy: '/subscribe' },
  { path: '/inteken/e-uitgawe', name: 'E-Uitgawe inteken', component: 'SubscribeEEdition', category: 'commerce', layout: 'main' },
  { path: '/inteken/aflewering', name: 'Aflewering inteken', component: 'SubscribeDelivery', category: 'commerce', layout: 'main' },
  { path: '/mandjie', name: 'Mandjie', component: 'CartPage', category: 'commerce', layout: 'main', legacy: '/cart' },
  { path: '/betaal', name: 'Betaal', component: 'CheckoutPage', category: 'commerce', layout: 'checkout' },
  { path: '/bestelling-bevestiging', name: 'Bestelling bevestiging', component: 'OrderConfirmationPage', category: 'commerce', layout: 'checkout' },
  // Account
  { path: '/my-rekening', name: 'My rekening', component: 'MyAccount', category: 'account', layout: 'main', legacy: '/my-account' },
  { path: '/registreer', name: 'Registreer', component: 'RegisterPage', category: 'account', layout: 'main', legacy: '/register' },
  { path: '/rekening-aktivering', name: 'Rekening aktivering', component: 'AccountActivationPage', category: 'account', layout: 'main' },
  // Newsletter
  { path: '/nuusbrief-inteken', name: 'Nuusbrief inteken', component: 'NewsletterSubscribe', category: 'newsletter', layout: 'main' },
  { path: '/nuusbrief-argief', name: 'Nuusbrief argief', component: 'NewsletterArchivePage', category: 'newsletter', layout: 'main' },
  { path: '/bestuur-my-nuusbriewe', name: 'Bestuur nuusbriewe', component: 'ManageNewslettersPage', category: 'newsletter', layout: 'main' },
  { path: '/nuusbrief-inteken-bevestiging', name: 'Inskrywing bevestiging', component: 'NewsletterConfirmationPage', category: 'newsletter', layout: 'main' },
  { path: '/nuusbrief-herbetrokkenheid', name: 'Herbetrokkenheid', component: 'NewsletterReEngagementPage', category: 'newsletter', layout: 'main' },
  { path: '/nuusbrief-uitskryf-bevestiging', name: 'Uitskrywing bevestiging', component: 'NewsletterUnsubscribeConfirmPage', category: 'newsletter', layout: 'main' },
  { path: '/nuusbrief-uitskryf-sukses', name: 'Uitskrywing sukses', component: 'NewsletterUnsubscribeSuccessPage', category: 'newsletter', layout: 'main' },
  // Thank You
  { path: '/dankie-advertensie-navraag', name: 'Dankie (Advertensie)', component: 'ThankYouAdvertisingPage', category: 'thankYou', layout: 'main' },
  { path: '/dankie-vir-kontak', name: 'Dankie (Kontak)', component: 'ThankYouContactPage', category: 'thankYou', layout: 'main' },
  { path: '/dankie-vir-nuusbrief-inskrywing', name: 'Dankie (Nuusbrief)', component: 'ThankYouNewsletterPage', category: 'thankYou', layout: 'main' },
  { path: '/dankie-vir-registrasie', name: 'Dankie (Registrasie)', component: 'ThankYouRegistrationPage', category: 'thankYou', layout: 'main' },
  { path: '/dankie-vir-jou-indiening', name: 'Dankie (Indiening)', component: 'ThankYouSubmissionPage', category: 'thankYou', layout: 'main' },
  { path: '/dankie-vir-kompetisie-inskrywing', name: 'Dankie (Kompetisie)', component: 'ThankYouCompetitionPage', category: 'thankYou', layout: 'main' },
  // Dev Tools
  { path: '/ontwikkelaar', name: 'Dev Hub', component: 'DevHub', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/komponente', name: 'Komponentblaaier', component: 'ComponentBrowser', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/roetes', name: 'Roetekaart', component: 'RouteMap', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/data', name: 'Datastruktuur', component: 'DataBrowser', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/wordpress', name: 'WordPress Migrasie', component: 'WordPressMigration', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/ontwerpstelsel', name: 'Ontwerpstelsel', component: 'DesignSystem', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/tokens', name: 'Ontwerpstelsel (herlei)', component: 'DesignSystem', category: 'devtools', layout: 'bare', legacy: '/ontwikkelaar/ontwerpstelsel' },
  { path: '/ontwikkelaar/token-kartering', name: 'Token-kartering', component: 'TokenMapper', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/stylgids', name: 'Ontwerpstelsel (herlei)', component: 'DesignSystem', category: 'devtools', layout: 'bare', legacy: '/ontwikkelaar/ontwerpstelsel' },
  { path: '/ontwikkelaar/afdeling-style', name: 'Afdeling-style', component: 'SectionStyles', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/riglyne', name: 'Riglyne', component: 'GuidelinesBrowser', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/e-pos-voorskou', name: 'E-pos Voorskou', component: 'EmailPreviews', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/stelselkonfig', name: 'Stelselkonfig', component: 'SystemConfig', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/inhoud', name: 'Inhoud', component: 'ContentBrowser', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/lansering', name: 'Lansering Kontrolelys', component: 'LaunchChecklist', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/beelde', name: 'Beeldbateblaaier', component: 'ImageAssetBrowser', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/patrone', name: 'Patroonblaaier', component: 'PatternBrowser', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/blok-styl', name: 'Blok-stylblaaier', component: 'BlockStyleBrowser', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/sjablone', name: 'Template-blaaier', component: 'TemplateBrowser', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/sjablone-onderdeel', name: 'Template-deelblaaier', component: 'TemplatePartBrowser', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/inc-map', name: 'Inc-lêerblaaier', component: 'IncFolderBrowser', category: 'devtools', layout: 'bare' },
  { path: '/ontwikkelaar/ikone', name: 'Ikoonblaaier', component: 'IconBrowser', category: 'devtools', layout: 'bare' },
  { path: '/foundations', name: 'Ontwerpstelsel (herlei)', component: 'Navigate → /ontwikkelaar/ontwerpstelsel', category: 'devtools', layout: 'main' },
  // System
  { path: '/vanlyn', name: 'Vanlyn', component: 'OfflinePage', category: 'system', layout: 'main' },
  { path: '/*', name: '404', component: 'NotFoundPage', category: 'system', layout: 'main' },
];

export const RouteMap = () => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    return ROUTES.filter((r) => {
      const matchCategory = activeCategory === 'all' || r.category === activeCategory;
      const matchSearch =
        !search ||
        r.path.toLowerCase().includes(search.toLowerCase()) ||
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.component.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  const stats = useMemo(() => ({
    total: ROUTES.length,
    legacy: ROUTES.filter((r) => r.legacy).length,
    dynamic: ROUTES.filter((r) => r.dynamic).length,
    layouts: 3,
  }), []);

  const handleCopyPath = (path: string) => {
    copyToClipboard(path);
    toast.success(`${t('common.copiedPrefix')} ${path}`);
  };

  const isAf = locale === 'af';
  const heroMeta = HERO_META.routeMap;
  const hero = resolveHeroMeta(heroMeta, locale);

  return (
    <div>
      <DevToolHero
        icon={hero.icon}
        iconColor={hero.iconColor}
        title={hero.title}
        description={hero.description}
        stats={[
          { label: t('stats.routes'), value: stats.total },
          { label: t('stats.legacyRedirects'), value: stats.legacy },
          { label: t('stats.dynamic'), value: stats.dynamic },
          { label: t('stats.layouts'), value: stats.layouts },
        ]}
        badge={`${ROUTES.length} ${t('common.routes')}`}
      />

      {/* Search */}
      <div className="relative max-w-md mb-6">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/30" />
        <input
          type="text"
          placeholder={t('rm.searchPlaceholder')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:border-gray-400 dark:focus:border-white/30"
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {ROUTE_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
              activeCategory === cat.id
                ? 'bg-brand-red text-white'
                : 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10'
            }`}
          >
            {t(cat.key)}
          </button>
        ))}
      </div>

      {/* Route table */}
      <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-white/10 text-left text-xs text-gray-400 dark:text-white/30 uppercase tracking-widest">
                <th className="px-4 py-3">{t('rm.path')}</th>
                <th className="px-4 py-3">{t('rm.name')}</th>
                <th className="px-4 py-3">{t('rm.component')}</th>
                <th className="px-4 py-3">{t('rm.layout')}</th>
                <th className="px-4 py-3">{t('rm.legacy')}</th>
                <th className="px-4 py-3 w-10"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((route) => (
                <tr key={route.path + route.name} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5">
                  <td className="px-4 py-3 font-mono text-xs">
                    <Link to={route.path.includes(':') ? '#' : route.path} className="text-brand-red hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
                      {route.path}
                      {route.dynamic && (
                        <span className="text-[9px] px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 uppercase ml-1">
                          {t('rm.dynamic')}
                        </span>
                      )}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-white/70">{route.name}</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-400 dark:text-white/40">{route.component}</td>
                  <td className="px-4 py-3">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase ${
                      route.layout === 'main' ? 'bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-300' :
                      route.layout === 'checkout' ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-300' :
                      'bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300'
                    }`}>
                      {route.layout}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-400 dark:text-white/30">
                    {route.legacy || '—'}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleCopyPath(route.path)}
                      className="text-gray-300 dark:text-white/20 hover:text-gray-900 dark:hover:text-white transition-colors"
                      title={t('rm.copyPath')}
                    >
                      <Copy size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t border-gray-200 dark:border-white/10 text-xs text-gray-400 dark:text-white/30">
          {filtered.length} {t('rm.showing')} {ROUTES.length} {t('common.routes')}
        </div>
      </div>

      <DevRelatedTools tools={RELATED_TOOLS_MAP.routeMap} />
    </div>
  );
};