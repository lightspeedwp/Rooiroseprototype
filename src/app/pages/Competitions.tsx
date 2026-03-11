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
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-16">
      <SEO
        title="Kompetisies - Die Papier"
        description="Wen groot met Die Papier se kompetisies! Sien alle huidige en vorige kompetisies en wenners."
        keywords="kompetisies, wen, pryse, die papier, inskrywing"
      />

      {/* Leaderboard Ad */}
      <LeaderboardAd section="kompetisies" />

      <PageContainer breadcrumbs={[{ label: 'Kompetisies' }]}>
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Trophy size={32} className="text-custom-primary dark:text-primary" />
            <h1 className="text-4xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>Kompetisies</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            Wen groot met <em>Die Papier</em>! Sien alle aktiewe kompetisies hieronder en skryf in
            vir jou kans om fantastiese pryse te wen.
          </p>
        </header>

        {/* Main + Sidebar layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <Tabs defaultValue="active" className="gap-0">
              <TabsList className="bg-gray-200/70 dark:bg-muted h-11 mb-8 rounded-lg gap-0">
                <TabsTrigger
                  value="active"
                  className="text-sm font-bold px-5 rounded-lg data-[state=active]:bg-custom-primary data-[state=active]:text-white"
                >
                  <Star size={14} className="mr-1.5" />
                  Aktief ({activeCompetitions.length})
                </TabsTrigger>
                <TabsTrigger
                  value="closed"
                  className="text-sm font-bold px-5 rounded-lg data-[state=active]:bg-brand-navy data-[state=active]:text-white"
                >
                  <CheckCircle2 size={14} className="mr-1.5" />
                  Vorige ({closedCompetitions.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="active">
                {paginatedActive.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div className="text-center py-16 bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border">
                    <Trophy size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                    <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Geen aktiewe kompetisies</h3>
                    <p className="text-gray-600 dark:text-gray-400">Hou <em>Die Papier</em> dop vir opwindende nuwe kompetisies!</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="closed">
                {paginatedClosed.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div className="text-center py-16 bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border">
                    <Trophy size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                    <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Geen vorige kompetisies</h3>
                    <p className="text-gray-600 dark:text-gray-400">Kyk na ons aktiewe kompetisies hierbo.</p>
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
