import React, { useState, useMemo } from 'react';
import { Trophy, CheckCircle2, Star } from 'lucide-react';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { COMPETITIONS, getActiveCompetitions, getClosedCompetitions } from '../data/competitions';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { LeaderboardAd, StickyMobileFooter } from '../components/ads';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { COMPETITIONS_FAQS } from '../data/pageFaqs';

import { CompetitionCard } from '../components/competition/CompetitionCard';
import { SimplePagination } from '../components/common/SimplePagination';
import { CompetitionsSidebarInfo } from '../components/competition/CompetitionsSidebarInfo';

/* ── rooi rose Magazine Competitions Page ──────────────────────────────
 * Editorial design: Full-width hero, tab filters, competition grid
 * Typography: Playfair Display SC headings
 * Layout: Editorial header + tab navigation + 2-column grid
 * ────────────────────────────────────────────────────────────── */

const ITEMS_PER_PAGE = 6;

export const CompetitionsPage = () => {
  const activeCompetitions = getActiveCompetitions();
  const closedCompetitions = getClosedCompetitions();

  const [activePage, setActivePage] = useState(1);
  const [closedPage, setClosedPage] = useState(1);

  const activeTotalPages = Math.ceil(activeCompetitions.length / ITEMS_PER_PAGE);
  const closedTotalPages = Math.ceil(closedCompetitions.length / ITEMS_PER_PAGE);

  const paginatedActive = useMemo(
    () => activeCompetitions.slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE),
    [activeCompetitions, activePage]
  );
  const paginatedClosed = useMemo(
    () => closedCompetitions.slice((closedPage - 1) * ITEMS_PER_PAGE, closedPage * ITEMS_PER_PAGE),
    [closedCompetitions, closedPage]
  );

  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <SEO
        title="Kompetisies - rooi rose"
        description="Wen groot met rooi rose se kompetisies! Sien alle huidige en vorige kompetisies en wenners."
        keywords="kompetisies, wen, pryse, competitions, die papier, trekking"
      />

      {/* Leaderboard Ad */}
      <LeaderboardAd section="kompetisies" />

      {/* Editorial Header - Centered */}
      <div className="bg-white dark:bg-background border-b border-gray-200 dark:border-border">
        <PageContainer>
          <div className="text-center py-12 lg:py-16 max-w-3xl mx-auto">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red/10 dark:bg-brand-red/20 mb-6">
              <Trophy size={32} className="text-brand-red" />
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-normal text-brand-navy dark:text-foreground mb-4 has-brand-serif-font-family uppercase tracking-wider" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
              Kompetisies
            </h1>

            {/* Red Divider */}
            <div className="w-24 h-1 bg-brand-red mx-auto mb-6"></div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Wen groot met <em className="text-brand-red font-normal not-italic">rooi rose</em>! Sien alle aktiewe kompetisies hieronder en skryf in vir jou kans om fantastiese pryse te wen.
            </p>
          </div>
        </PageContainer>
      </div>

      <PageContainer breadcrumbs={[{ label: 'Kompetisies' }]}>
        {/* Main + Sidebar layout */}
        <div className="flex flex-col lg:flex-row gap-8 py-12">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <Tabs defaultValue="active" className="gap-0">
              <TabsList className="bg-gray-100 dark:bg-muted h-12 mb-10 rounded-lg gap-1 p-1 w-full sm:w-auto">
                <TabsTrigger
                  value="active"
                  className="text-sm font-bold px-6 rounded-md data-[state=active]:bg-brand-red data-[state=active]:text-white transition-all"
                >
                  <Star size={16} className="mr-2" />
                  Aktief ({activeCompetitions.length})
                </TabsTrigger>
                <TabsTrigger
                  value="closed"
                  className="text-sm font-bold px-6 rounded-md data-[state=active]:bg-brand-navy data-[state=active]:text-white transition-all"
                >
                  <CheckCircle2 size={16} className="mr-2" />
                  Vorige ({closedCompetitions.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="active">
                {paginatedActive.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {paginatedActive.map((comp) => (
                        <CompetitionCard key={comp.id} competition={comp} />
                      ))}
                    </div>
                    <SimplePagination
                      currentPage={activePage}
                      totalPages={activeTotalPages}
                      onPageChange={(p) => { setActivePage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    />
                  </>
                ) : (
                  <div className="text-center py-20 bg-gray-50 dark:bg-card rounded-xl border border-gray-200 dark:border-border">
                    <Trophy size={64} className="mx-auto text-gray-300 dark:text-gray-600 mb-6" />
                    <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-3 has-brand-serif-font-family" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Geen aktiewe kompetisies</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Hou <em className="text-brand-red font-normal not-italic">rooi rose</em> dop vir opwindende nuwe kompetisies!</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="closed">
                {paginatedClosed.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {paginatedClosed.map((comp) => (
                        <CompetitionCard key={comp.id} competition={comp} />
                      ))}
                    </div>
                    <SimplePagination
                      currentPage={closedPage}
                      totalPages={closedTotalPages}
                      onPageChange={(p) => { setClosedPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    />
                  </>
                ) : (
                  <div className="text-center py-20 bg-gray-50 dark:bg-card rounded-xl border border-gray-200 dark:border-border">
                    <Trophy size={64} className="mx-auto text-gray-300 dark:text-gray-600 mb-6" />
                    <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-3 has-brand-serif-font-family" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Geen vorige kompetisies</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Kyk na ons aktiewe kompetisies hierbo.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>

          <CompetitionsSidebarInfo />
        </div>
      </PageContainer>

      {/* FAQ Section */}
      <PageFAQSection
        items={COMPETITIONS_FAQS}
        description="Vrae oor kompetisies, inskrywings en pryse."
      />

      <StickyMobileFooter section="kompetisies" />
    </div>
  );
};

// Default export for lazy loading
export default CompetitionsPage;