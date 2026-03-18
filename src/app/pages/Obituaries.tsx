import React, { useState } from 'react';
import { Link } from 'react-router';
import { MapPin, Calendar, Heart, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { OBITUARIES_FAQS } from '../data/pageFaqs';
import { OBITUARIES } from '../data/obituaries';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { LeaderboardAd, SidebarAds, InFeedAd, StickyMobileFooter } from '../components/ads';

/* ── rooi rose Magazine Obituaries Page ──────────────────────────────
 * Editorial design: Respectful, elegant layout with soft colors
 * Typography: Playfair Display SC headings
 * Layout: Editorial header + list layout with photos
 * ────────────────────────────────────────────────────────────── */

const ITEMS_PER_PAGE = 10;

export const ObituariesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(OBITUARIES.length / ITEMS_PER_PAGE);
  const paginatedItems = OBITUARIES.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen">
      <SEO
        title="Doodsberrigte - rooi rose"
        description="Doodsberrigte en begrafniskennisgewings in rooi rose. Eerbetuigings aan geliefdes wat ons ontval het."
        keywords="doodsberrigte, obituaries, begrafnis, afsterwe, herdenking, die papier"
      />

      {/* Leaderboard Ad */}
      <LeaderboardAd section="doodsberrigte" />

      {/* Editorial Header - Centered, Respectful */}
      <div className="bg-white dark:bg-background border-b border-gray-200 dark:border-border">
        <PageContainer>
          <div className="text-center py-12 lg:py-16 max-w-3xl mx-auto">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
              <Heart size={32} className="text-gray-600 dark:text-gray-400" />
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-normal text-brand-navy dark:text-foreground mb-4 has-brand-serif-font-family uppercase tracking-wider" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
              Doodsberrigte
            </h1>

            {/* Divider */}
            <div className="w-24 h-1 bg-gray-300 dark:bg-gray-700 mx-auto mb-6"></div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Eerbetuigings aan geliefdes wat ons ontval het. Ons dra ons innige medelye oor aan alle families en naasbestaandes.
            </p>
          </div>
        </PageContainer>
      </div>

      <PageContainer breadcrumbs={[{ label: 'Doodsberrigte' }]}>
        <div className="flex flex-col lg:flex-row gap-8 py-12">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Obituaries List */}
            <div className="grid gap-6">
              {paginatedItems.map((obit, idx) => (
                <div key={obit.id}>
                  <Link
                    to={`/doodsberrigte/${obit.slug}`}
                    className="block bg-white dark:bg-card border border-gray-100 dark:border-border rounded-lg p-5 md:p-6 shadow-sm dark:shadow-[var(--shadow-dark-200)] hover:shadow-md transition-shadow group"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-5">
                      {/* Photo */}
                      <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-100 dark:border-border group-hover:border-primary dark:group-hover:border-primary transition-colors">
                        <ImageWithFallback
                          src={obit.imageUrl}
                          alt={obit.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-normal text-brand-navy dark:text-foreground font-heading mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                          {obit.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-2">
                          {obit.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-gray-400 dark:text-gray-500" />
                            {obit.dateOfDeath}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-gray-400 dark:text-gray-500" />
                            {obit.location}
                          </span>
                          <span className="text-gray-400 dark:text-gray-500">
                            Ouderdom: {obit.age}
                          </span>
                        </div>
                      </div>

                      {/* Read More Arrow */}
                      <div className="hidden md:flex items-center text-text-link-red dark:text-text-link-red opacity-0 group-hover:opacity-100 transition-opacity font-bold text-sm whitespace-nowrap">
                        Lees meer →
                      </div>
                    </div>
                  </Link>

                  {/* In-feed ad after 3rd item */}
                  {idx === 2 && <InFeedAd section="doodsberrigte" />}
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="flex items-center justify-center gap-2 mt-12 pb-20" aria-label="Paginasie">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg hover:bg-gray-50 dark:hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={16} />
                  Vorige
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
                  Volgende
                  <ChevronRight size={16} />
                </button>
              </nav>
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[300px] shrink-0 space-y-6">
            {/* Promote a listing */}
            <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-50 dark:bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart size={20} className="text-primary dark:text-primary" />
                </div>
                <h3 className="font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                  Plaas 'n doodsberig
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Eerbetuig 'n geliefde met 'n persoonlike doodsberig in <em>rooi rose</em>. Stuur ons die oorledene se besonderhede, 'n lewensbeskrywing en foto.
              </p>
              <div className="bg-gray-50 dark:bg-background rounded-lg p-4 mb-4 text-sm">
                <p className="font-bold text-brand-navy dark:text-foreground mb-2">Tariewe:</p>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Standaard (tot 150 woorde): <strong>R350</strong></li>
                  <li>Uitgebrei (tot 300 woorde + foto): <strong>R650</strong></li>
                  <li>Premium (onbeperkte woorde + foto): <strong>R950</strong></li>
                </ul>
              </div>
              <div className="space-y-3">
                <a
                  href="mailto:doodsberrigte@rooirose.co.za"
                  className="flex items-center gap-2 text-sm text-text-link-red dark:text-text-link-red hover:underline font-medium"
                >
                  <Mail size={16} />
                  doodsberrigte@rooirose.co.za
                </a>
              </div>
            </div>

            {/* Recent obituaries quick links */}
            <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] p-6">
              <h3 className="font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                Onlangse Doodsberrigte
              </h3>
              <div className="space-y-4">
                {OBITUARIES.slice(0, 5).map((obit) => (
                  <Link
                    key={obit.id}
                    to={`/doodsberrigte/${obit.slug}`}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={obit.imageUrl}
                        alt={obit.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-brand-navy dark:text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors line-clamp-1">
                        {obit.name}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        {obit.location} &middot; {obit.dateOfDeath}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar Ads */}
            <SidebarAds section="doodsberrigte" variant="standard" />

            {/* Medelye CTA */}
            <div className="bg-brand-navy dark:bg-background rounded-lg p-6 text-white">
              <h3 className="font-normal font-heading mb-3" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                Medelye oordra
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Wil u u medelye aan 'n naasbestaande oordra? Stuur 'n boodskap aan die redaksie.
              </p>
              <Link
                to="/kontak"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-bold text-sm px-5 py-2.5 rounded transition-colors"
              >
                Stuur 'n boodskap
              </Link>
            </div>
          </aside>
        </div>
      </PageContainer>

      {/* Leaderboard Ad above FAQ */}
      <LeaderboardAd section="doodsberrigte" />

      <PageFAQSection items={OBITUARIES_FAQS} />

      <StickyMobileFooter section="doodsberrigte" />
    </div>
  );
};

export default ObituariesPage;