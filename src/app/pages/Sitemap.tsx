import React from 'react';
import { Link } from 'react-router';
import {
  ChevronRight,
  User,
  Tag,
  Folder,
  Calendar,
  ShoppingCart,
  Mail,
  Shield,
  Heart,
  BookOpen,
  UserPlus,
  Megaphone,
  Play,
  Camera,
  Headphones,
  Send,
  Wrench,
} from 'lucide-react';
import { Newspaper } from '../components/icons/NewspaperIcon';
import { CATEGORY_ARTICLES } from '../data/categoryArticles';
import { TEAM_MEMBERS } from '../data/team';
import { EVENTS } from '../data/events';
import { OBITUARIES } from '../data/obituaries';
import { MULTIMEDIA_ITEMS, MULTIMEDIA_CATEGORIES } from '../data/multimedia';
import { LATEST_EDITIONS } from '../data/eEditions';
import { SITEMAP_CATEGORIES, EVENT_CATEGORIES } from '../data/sitemap';
import { generateArticleSlug } from '../utils/slugify';
import { renderWithBrandItalics } from '../utils/brandItalics';
import { PageContainer } from '../components/common/PageContainer';
import {
  SITEMAP_MAIN_PAGES,
  SITEMAP_CATEGORY_PAGES,
  SITEMAP_EEDITION_PAGES,
  SITEMAP_ADVERTISE_PAGES,
  SITEMAP_SUBSCRIPTION_PAGES,
  SITEMAP_ACCOUNT_PAGES,
  SITEMAP_NEWSLETTER_PAGES,
  SITEMAP_THANK_YOU_PAGES,
  SITEMAP_COMPETITION_PAGES,
  SITEMAP_LEGAL_PAGES,
  SITEMAP_SUBMIT,
  SITEMAP_DEV_TOOLS,
  SITEMAP_DEMO_PAGES,
} from '../data/navigation';

// ─── Helper ─────────────────────────────────────────────
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

const multimediaCategoryIcons: Record<string, React.ReactNode> = {
  Video: <Play size={14} />,
  Fotogalery: <Camera size={14} />,
  Podcast: <Headphones size={14} />,
};

// ─── Reusable section ──────────────────────────────────

interface SitemapSectionProps {
  title: string;
  icon: React.ReactNode;
  pages: { name: string; path?: string; href?: string }[];
}

const SitemapSection = ({ title, icon, pages }: SitemapSectionProps) => (
  <section className="bg-white dark:bg-card p-6 rounded-xl shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-200 dark:border-border hover:shadow-md transition-shadow">
    <h2 className="text-xl font-normal text-brand-red dark:text-brand-red mb-4 flex items-center gap-2 has-brand-serif-font-family" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
      {icon}
      {title}
    </h2>
    <ul className="space-y-2">
      {pages.map((page, index) => {
        const url = page.path ?? page.href ?? '#';
        return (
          <li key={`${url}-${index}`}>
            <Link
              to={url}
              className="text-gray-700 dark:text-gray-300 hover:text-brand-red dark:hover:text-brand-red flex items-center gap-2 transition-colors text-sm"
            >
              <ChevronRight size={14} className="text-gray-400 dark:text-gray-500 shrink-0" />
              {page.name}
            </Link>
          </li>
        );
      })}
    </ul>
  </section>
);

// ─── Main component ─────────────────────────────────────

export const SitemapPage = () => {
  const authors = TEAM_MEMBERS.map((m) => m.name).sort();

  const allArticles = Object.values(CATEGORY_ARTICLES)
    .flat()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-12 font-inter">
      <PageContainer breadcrumbs={[{ label: 'Inhoudsopgawe' }]}>

        {/* Header */}
        <header className="mb-12 pb-[0px]">
          <h1 className="text-4xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
            Inhoudsopgawe
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            'n Volledige oorsig van alle bladsye en inhoud op <em>rooi rose</em>.
          </p>
        </header>

        {/* ─── Row 1: Main, Categories, E-Editions ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <SitemapSection title="Hoofbladsye" icon={<Folder size={20} />} pages={SITEMAP_MAIN_PAGES} />
          <SitemapSection title="Inhoud-kategorieë" icon={<Newspaper size={20} />} pages={SITEMAP_CATEGORY_PAGES} />
          <SitemapSection title="Adverteer" icon={<Megaphone size={20} />} pages={SITEMAP_ADVERTISE_PAGES} />
          <SitemapSection title="E-uitgawes" icon={<BookOpen size={20} />} pages={SITEMAP_EEDITION_PAGES} />
        </div>

        {/* ─── Row 2: Account, Subscription, Newsletter ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <SitemapSection title="My rekening" icon={<User size={20} />} pages={SITEMAP_ACCOUNT_PAGES} />
          <SitemapSection title="Inteken & Winkel" icon={<ShoppingCart size={20} />} pages={SITEMAP_SUBSCRIPTION_PAGES} />
          <SitemapSection title="Nuusbriewe" icon={<Mail size={20} />} pages={SITEMAP_NEWSLETTER_PAGES} />
          <SitemapSection title="Stuur in" icon={<Send size={20} />} pages={SITEMAP_SUBMIT} />
        </div>

        {/* ─── Row 3: Thank You, Legal, Competitions, Authors ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <SitemapSection title="Dankie-bladsye" icon={<Heart size={20} />} pages={SITEMAP_THANK_YOU_PAGES} />
          <SitemapSection title="Kompetisies" icon={<Tag size={20} />} pages={SITEMAP_COMPETITION_PAGES} />
          <SitemapSection title="Regs & Beleid" icon={<Shield size={20} />} pages={SITEMAP_LEGAL_PAGES} />

          {/* Authors section */}
          <section className="bg-white dark:bg-card p-6 rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border">
            <h2 className="text-xl font-normal text-primary dark:text-primary mb-4 flex items-center gap-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
              <UserPlus size={20} />
              Skrywers & Redaksie
            </h2>
            <ul className="space-y-2 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
              {authors.map((author) => (
                <li key={author}>
                  <Link
                    to={`/skrywer/${encodeURIComponent(author)}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary flex items-center gap-2 transition-colors text-sm"
                  >
                    <ChevronRight size={14} className="text-gray-400 dark:text-gray-500 shrink-0" />
                    {author}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* ─── E-Editions (Visual) ─── */}
        <section className="bg-white dark:bg-card p-8 rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border mb-8">
          <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-6 font-heading border-b border-gray-100 dark:border-border pb-4 flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
            <BookOpen size={24} className="text-primary dark:text-primary" />
            Jongste E-Uitgawes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LATEST_EDITIONS.slice(0, 4).map((edition) => (
              <Link
                key={edition.id}
                to={`/e-uitgawe/${edition.id}`}
                className="group block"
              >
                <div className="aspect-[3/4] overflow-hidden rounded bg-gray-200 dark:bg-muted mb-3 shadow-sm border border-gray-100 dark:border-border group-hover:shadow-md transition-shadow">
                  <img
                    src={edition.coverImage}
                    alt={edition.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-normal text-brand-navy dark:text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors leading-tight mb-1 text-sm font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                  {edition.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {edition.date}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100 dark:border-border text-center sm:text-left">
            <Link
              to="/e-uitgawes"
              className="inline-flex items-center gap-2 text-primary dark:text-primary font-bold hover:underline text-sm"
            >
              Sien alle e-uitgawes
              <ChevronRight size={16} />
            </Link>
          </div>
        </section>

        {/* ─── Doodsberrigte (from data) ─── */}
        <section className="bg-white dark:bg-card p-8 rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border mb-8">
          <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-6 font-heading border-b border-gray-100 dark:border-border pb-4 flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
            <Heart size={24} className="text-primary dark:text-primary" />
            Doodsberrigte ({OBITUARIES.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {OBITUARIES.map((obit) => (
              <Link
                key={obit.id}
                to={`/doodsberrigte/${obit.slug}`}
                className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-muted transition-colors"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-gray-200 dark:border-border">
                  <img
                    src={obit.imageUrl}
                    alt={obit.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-800 dark:text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors line-clamp-1">
                    {obit.name}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {obit.location} &middot; {obit.dateOfDeath}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── Multimedia (from data, grouped by category) ─── */}
        <section className="bg-white dark:bg-card p-8 rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border mb-8">
          <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-6 font-heading border-b border-gray-100 dark:border-border pb-4 flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
            <Play size={24} className="text-primary dark:text-primary" />
            Multimedia ({MULTIMEDIA_ITEMS.length})
          </h2>

          {MULTIMEDIA_CATEGORIES.map((cat) => {
            // Match items by slug (case-insensitive fallback for legacy data)
            let items = MULTIMEDIA_ITEMS.filter((m) => m.category === cat.slug);
            if (items.length === 0) {
              items = MULTIMEDIA_ITEMS.filter((m) => m.category.toLowerCase() === cat.slug.toLowerCase());
            }
            if (items.length === 0) return null;
            return (
              <div key={cat.slug} className="mb-8 last:mb-0">
                <h3 className="text-sm font-normal uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 flex items-center gap-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                  {multimediaCategoryIcons[cat.name] || <Play size={14} />}
                  {cat.name} ({items.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {items.map((item) => (
                    <Link
                      key={item.id}
                      to={`/multimedia/${item.slug}`}
                      className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-muted transition-colors"
                    >
                      <div className="w-16 h-10 rounded overflow-hidden flex-shrink-0 relative">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        {item.duration && (
                          <span className="absolute bottom-0 right-0 bg-black/75 text-white text-[8px] px-1 rounded-tl font-mono">
                            {item.duration}
                          </span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-primary transition-colors line-clamp-1">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">{item.published}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* ─── Events Section ─── */}
        <section className="bg-white dark:bg-card p-8 rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border mb-8">
          <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-6 font-heading border-b border-gray-100 dark:border-border pb-4 flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
            <Calendar size={24} className="text-primary dark:text-primary" />
            Gebeure
          </h2>

          {/* Events sub-pages */}
          <div className="mb-8">
            <h3 className="text-sm font-normal uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
              Gebeure-bladsye
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              <li>
                <Link
                  to="/gebeure"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary flex items-center gap-2 transition-colors text-sm"
                >
                  <ChevronRight size={14} className="text-gray-400 dark:text-gray-500 shrink-0" />
                  Alle gebeure
                </Link>
              </li>
              <li>
                <Link
                  to="/gebeure/dien-in"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary flex items-center gap-2 transition-colors text-sm"
                >
                  <ChevronRight size={14} className="text-gray-400 dark:text-gray-500 shrink-0" />
                  Dien 'n gebeurtenis in
                </Link>
              </li>
            </ul>
          </div>

          {/* Event Categories */}
          <div className="mb-8">
            <h3 className="text-sm font-normal uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
              Gebeure-kategorieë
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {EVENT_CATEGORIES.map((cat) => (
                <div
                  key={cat.name}
                  className="bg-gray-50 dark:bg-background rounded-lg p-4 border border-gray-100 dark:border-border"
                >
                  <h4 className="font-normal text-brand-navy dark:text-foreground text-sm mb-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>{cat.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Events */}
          <div>
            <h3 className="text-sm font-normal uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
              Komende Gebeure ({EVENTS.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {EVENTS.map((event) => (
                <Link
                  key={event.id}
                  to={`/gebeure/${event.id}`}
                  className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-muted transition-colors"
                >
                  <span className="bg-primary dark:bg-primary text-white text-[10px] font-bold px-2 py-1 rounded shrink-0 mt-0.5">
                    {event.date}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-800 dark:text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors line-clamp-1">
                      {event.title}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {event.category} &middot; {event.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Categories & Tags ─── */}
        <section className="bg-white dark:bg-card p-8 rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border mb-8">
          <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-8 font-heading border-b border-gray-100 dark:border-border pb-4 flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
            <Tag size={24} className="text-primary dark:text-primary" />
            Kategorieë & Onderwerpe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SITEMAP_CATEGORIES.map((category) => (
              <div key={category.name} className="mb-4">
                <Link
                  to={category.path}
                  className="text-xl font-normal text-primary dark:text-primary hover:underline mb-2 block font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", letterSpacing: 'var(--ls-h3)' }}
                >
                  {category.name}
                </Link>
                <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">{renderWithBrandItalics(category.description || '')}</p>

                {category.tags && category.tags.length > 0 && (
                  <>
                    <h4 className="text-xs font-normal uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2 flex items-center gap-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                      <Tag size={12} />
                      Onderwerpe
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.tags.map((tag: string) => (
                        <Link
                          key={tag}
                          to={`/onderwerp/${slugify(tag)}`}
                          className="text-sm bg-gray-50 dark:bg-background text-gray-600 dark:text-gray-400 px-3 py-1 rounded hover:bg-brand-navy dark:hover:bg-muted hover:text-white transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── Developer Tools ─── */}
        <section className="bg-white dark:bg-card p-8 rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border mb-8">
          <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-6 font-heading border-b border-gray-100 dark:border-border pb-4 flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
            <Wrench size={24} className="text-primary dark:text-primary" />
            Ontwikkelaar-gereedskap ({SITEMAP_DEV_TOOLS.length})
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
            Interne gereedskap vir ontwikkelaars, ontwerpers en inhoudsredakteurs om die stelsel te bestuur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {SITEMAP_DEV_TOOLS.map((tool) => (
              <Link
                key={tool.path}
                to={tool.path}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary flex items-center gap-2 transition-colors text-sm p-2 rounded hover:bg-gray-50 dark:hover:bg-muted"
              >
                <ChevronRight size={14} className="text-gray-400 dark:text-gray-500 shrink-0" />
                {tool.name}
              </Link>
            ))}
          </div>
        </section>

        {/* ─── Editorial Demo Pages ─── */}
        <section className="bg-white dark:bg-card p-8 rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border mb-8">
          <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-6 font-heading border-b border-gray-100 dark:border-border pb-4 flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
            <BookOpen size={24} className="text-primary dark:text-primary" />
            Redaksionele Demo's ({SITEMAP_DEMO_PAGES.length})
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
            Demonstrasies van redaksionele patrone en ontwerpstelsel-komponente.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SITEMAP_DEMO_PAGES.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary flex items-center gap-2 transition-colors text-sm p-2 rounded hover:bg-gray-50 dark:hover:bg-muted"
              >
                <ChevronRight size={14} className="text-gray-400 dark:text-gray-500 shrink-0" />
                {page.name}
              </Link>
            ))}
          </div>
        </section>

        {/* ─── All Articles ─── */}
        <section className="bg-white dark:bg-card p-8 rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border">
          <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-8 font-heading border-b border-gray-100 dark:border-border pb-4" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
            Alle Artikels ({allArticles.length})
          </h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-4">
            {allArticles.map((article) => (
              <div key={article.id} className="break-inside-avoid">
                <Link
                  to={`/artikel/${generateArticleSlug(article.id, article.title)}`}
                  className="group block mb-4"
                >
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-primary transition-colors line-clamp-2 text-sm leading-relaxed">
                    {article.title}
                  </h3>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-1 flex items-center gap-2">
                    <span className="uppercase text-[10px] font-bold text-brand-navy/60 dark:text-foreground/60">
                      {article.category}
                    </span>
                    <span>&middot;</span>
                    <span>{article.date}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </PageContainer>
    </div>
  );
};