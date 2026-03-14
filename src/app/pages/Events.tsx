import React, { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Calendar, MapPin, Clock, Info, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { EVENTS } from '../data/events';
import { PageContainer } from '../components/common/PageContainer';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { EVENTS_FAQS } from '../data/pageFaqs';
import { LeaderboardAd, SidebarAds, InFeedAd, StickyMobileFooter } from '../components/ads';

/* ── rooi rose Magazine Events Page ──────────────────────────────
 * Editorial design: Large magazine-style event cards
 * Typography: Playfair Display SC headings
 * Layout: Editorial header + category filters + event grid
 * ────────────────────────────────────────────────────────────── */

const ITEMS_PER_PAGE = 8;

export const EventsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Alles');
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories from events data
  const categories = useMemo(() => {
    const cats = [...new Set(EVENTS.map((e) => e.category))].sort();
    return ['Alles', ...cats];
  }, []);

  // Filter events based on active category
  const filteredEvents = useMemo(() => {
    if (activeCategory === 'Alles') return EVENTS;
    return EVENTS.filter((e) => e.category === activeCategory);
  }, [activeCategory]);

  // Reset page on category change
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <SEO
        title="Gebeure | rooi rose"
        description="Vind uit wat gebeur in jou omgewing. Feeste, sport, markte en samekomste."
        keywords="gebeure, kalender, feeste, sport, bloemfontein, vrystaat, markte"
      />

      {/* Leaderboard Ad */}
      <LeaderboardAd section="gebeure" />

      <PageContainer breadcrumbs={[{ label: 'Gebeure' }]}>
        {/* Editorial Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family uppercase tracking-wider mb-4" style={{ letterSpacing: '0.15em' }}>
              Gebeure
            </h1>
            <div className="w-24 h-1 bg-brand-red mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Bly op hoogte van wat in jou omgewing gebeur.
            </p>
          </div>
          <Link
            to="/gebeure/dien-in"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-red-hover transition-colors shadow-sm"
          >
            <Calendar size={20} /> Voeg gebeurtenis by
          </Link>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Filter size={16} className="text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">
              Filter op kategorie
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const count =
                category === 'Alles'
                  ? EVENTS.length
                  : EVENTS.filter((e) => e.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-brand-red text-white shadow-md scale-105'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105'
                  }`}
                >
                  {category}
                  <span className={`ml-2 text-xs ${activeCategory === category ? 'text-white/80' : 'text-gray-400'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results count */}
        {activeCategory !== 'Alles' && (
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
            {filteredEvents.length} gebeurtenis{filteredEvents.length !== 1 ? 'se' : ''} in "{activeCategory}"
          </p>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Events List */}
            {paginatedEvents.length > 0 ? (
              <div className="grid gap-6">
                {paginatedEvents.map((event, idx) => (
                  <div key={event.id} className="contents">
                    <Link
                      to={`/gebeure/${event.id}`}
                      className="group flex flex-col md:flex-row bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg overflow-hidden shadow-sm dark:shadow-[var(--shadow-dark-200)] hover:shadow-md transition-shadow duration-300"
                    >
                      {/* Date Box */}
                      <div className="bg-primary text-white p-6 md:p-8 flex flex-col items-center justify-center min-w-[140px] md:w-[140px]">
                        <span
                          className="text-3xl md:text-4xl font-normal font-heading leading-none mb-1 text-center"
                        >
                          {event.date.includes(' ')
                            ? event.date.split(' ')[0]
                            : event.date}
                        </span>
                        <span className="text-sm uppercase tracking-wider font-medium opacity-90 text-center">
                          {event.date.includes(' ')
                            ? event.date.split(' ').slice(1).join(' ')
                            : ''}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8 flex-grow flex flex-col justify-center border-l-0 md:border-l border-gray-100 dark:border-border">
                        <div className="flex items-center gap-2 text-xs text-primary dark:text-primary font-bold uppercase mb-2 tracking-wide">
                          <span className="bg-red-50 dark:bg-primary/10 px-2 py-0.5 rounded">
                            {event.category}
                          </span>
                        </div>

                        <h3
                          className="text-2xl font-normal text-brand-navy dark:text-foreground mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors font-heading"
                          style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}
                        >
                          {event.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed max-w-2xl line-clamp-2">
                          {event.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-gray-500 dark:text-gray-400 font-medium">
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-brand-navy-light dark:text-brand-navy-light" />{' '}
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-brand-navy-light dark:text-brand-navy-light" />{' '}
                            {event.location}
                          </div>
                        </div>
                      </div>

                      {/* Action */}
                      <div className="p-6 md:px-8 flex items-center justify-center border-t md:border-t-0 md:border-l border-gray-100 dark:border-border bg-gray-50 dark:bg-background md:bg-white dark:md:bg-card w-full md:w-auto">
                        <button className="text-[--brand-navy-light] dark:text-brand-navy-light font-bold group-hover:text-primary dark:group-hover:text-primary group-hover:underline flex items-center gap-2 text-sm whitespace-nowrap">
                          <Info size={16} /> Meer inligting
                        </button>
                      </div>
                    </Link>

                    {/* In-feed ad after 4th item */}
                    {idx === 3 && <InFeedAd section="gebeure" />}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white dark:bg-card rounded-lg border border-dashed border-gray-300 dark:border-border">
                <Calendar className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600 mb-4" />
                <h3 className="text-xl font-normal text-gray-900 dark:text-foreground mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                  Geen gebeure gevind nie
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Daar is tans geen gebeure in die "{activeCategory}" kategorie nie.
                </p>
                <button
                  onClick={() => handleCategoryChange('Alles')}
                  className="text-text-link-red dark:text-text-link-red font-bold hover:underline"
                >
                  Wys alle gebeure
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="flex items-center justify-center gap-2 mt-10 pb-20" aria-label="Paginasie">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg hover:bg-gray-50 dark:hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={16} /> Vorige
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 text-sm font-bold rounded-lg transition-colors ${
                      page === currentPage
                        ? 'bg-primary text-white'
                        : 'bg-white dark:bg-card text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-border hover:bg-gray-50 dark:hover:bg-muted'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg hover:bg-gray-50 dark:hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Volgende <ChevronRight size={16} />
                </button>
              </nav>
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[300px] shrink-0 space-y-6">
            <SidebarAds section="gebeure" variant="standard" />
          </aside>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">Het ons iets gemis?</p>
          <Link
            to="/kontak"
            className="text-text-link-red dark:text-text-link-red font-bold hover:underline"
          >
            Laat weet ons
          </Link>
        </div>
      </PageContainer>

      {/* Leaderboard Ad above FAQ */}
      <LeaderboardAd section="gebeure" />

      {/* FAQ Section */}
      <PageFAQSection
        items={EVENTS_FAQS}
        description="Vrae oor gebeure en hoe om jou eie gebeurtenis in te dien."
        variant="muted"
      />

      <StickyMobileFooter section="gebeure" />
    </div>
  );
};