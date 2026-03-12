import React, { useState } from 'react';
import { Link } from 'react-router';
import { BookOpen, Calendar, CheckCircle2, AlertTriangle, ChevronRight } from 'lucide-react';
import { PageContainer } from '../components/common/PageContainer';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { EEDITIONS_FAQS } from '../data/pageFaqs';
import { LATEST_EDITIONS } from '../data/eEditions';
import { Button } from '../components/ui/button';
import { LeaderboardAd, SidebarAds, InFeedAd, StickyMobileFooter } from '../components/ads';
import { SEO } from '../components/common/SEO';
import { ContentHero } from '../components/patterns/ContentHero';
import { HERO_IMAGES } from '../data/heroImages';
import { renderWithBrandItalics } from '../utils/brandItalics';
import { getOwnershipStatus, INDIVIDUAL_PURCHASE_IDS } from '../data/mockUserAccess';
import { parseEditionDate, SUBSCRIPTION_CUTOFF } from '../data/mockUserAccess';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { DemoStateSwitcher } from '../components/common/DemoStateSwitcher';

export const EEditionsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 24;

  // Demo state switcher — controls which user/purchase state is displayed.
  // In production, this would be replaced by real auth + WooCommerce Memberships API.
  type ArchiveDemoState = 'logged-out' | 'subscriber' | 'expired-subscriber' | 'logged-in-no-purchases' | 'logged-in-with-purchases';
  const [demoState, setDemoState] = useState<ArchiveDemoState>('logged-out');
  const isLoggedIn = demoState !== 'logged-out';

  // Override ownership based on demo state
  const getEditionOwnership = (editionId: string, editionDate: string): 'subscription' | 'purchase' | null => {
    switch (demoState) {
      case 'logged-out':
      case 'logged-in-no-purchases':
        return null;
      case 'expired-subscriber':
        return INDIVIDUAL_PURCHASE_IDS.some(p => p.editionId === editionId) ? 'purchase' : null;
      case 'subscriber': {
        const parsed = parseEditionDate(editionDate);
        return parsed && parsed >= SUBSCRIPTION_CUTOFF ? 'subscription' : null;
      }
      case 'logged-in-with-purchases':
        // Only show individual purchases — no subscription coverage
        return INDIVIDUAL_PURCHASE_IDS.some(p => p.editionId === editionId) ? 'purchase' : null;
    }
  };

  const totalPages = Math.ceil(LATEST_EDITIONS.length / ITEMS_PER_PAGE);
  const currentEditions = LATEST_EDITIONS.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      <SEO
        title="E-uitgawes"
        description="Blaai deur rooi rose se e-uitgawes — die volledige koerant in digitale formaat. Koop individuele uitgawes vir R35 elk of teken in."
        keywords="e-uitgawes, digitaal, koerant, lees, argief, die papier"
      />
      {/* Leaderboard Ad */}
      <LeaderboardAd section="e-uitgawes" />

      <PageContainer breadcrumbs={[{ label: 'E-uitgawes' }]} noPadding />

      <ContentHero 
        title="E-uitgawes"
        subtitle="Koop individuele e-uitgawes vir R35 elk — kies jou streek en voeg by jou mandjie. Beskikbaar vir Gauteng en Vrystaat, Wes-Kaap, Oos-Kaap en KwaZulu-Natal."
        image={HERO_IMAGES.eEditions}
      />

      <div className="alignwide py-10">
        
        {/* ─── Expired Subscriber Banner ─── */}
        {demoState === 'expired-subscriber' && (
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-700 rounded-xl p-6 mb-8 flex flex-col sm:flex-row items-center gap-4">
            <AlertTriangle size={24} className="text-amber-600 dark:text-amber-400 shrink-0" />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-normal text-amber-900 dark:text-amber-200 mb-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h4)", fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}>Jou intekening het verstryk</h3>
              <p className="text-amber-700 dark:text-amber-300 text-sm">Hernieu jou intekening om weer toegang te kry tot alle e-uitgawes.</p>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold shrink-0">
              <Link to="/inteken/e-uitgawe">Hernieu intekening</Link>
            </Button>
          </div>
        )}

        <div className="text-center mb-12">
          <Button asChild variant="outline" className="border-primary dark:border-primary text-primary dark:text-primary hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white font-bold text-lg h-auto py-3 px-6 rounded-full shadow-sm">
            <Link to="/my-e-uitgawes" className="flex items-center">
               <BookOpen size={20} className="mr-2"/>
               Gaan na my biblioteek
            </Link>
          </Button>
        </div>

        {/* CTA Banner Removed */}{/* Main Layout with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          
          {/* Main Content Column */}
          <div className="flex-1 min-w-0 max-w-[1440px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {currentEditions.map((edition) => {
                const ownership = isLoggedIn ? getEditionOwnership(edition.id, edition.date) : null;
                const isOwned = ownership !== null;
                return (
                <div 
                  key={edition.id} 
                  className="group flex flex-col"
                >
                  <Link to={`/e-uitgawe/${edition.id}`} className="block relative aspect-[3/4] bg-white dark:bg-card rounded-lg overflow-hidden shadow-lg mb-3 border-2 border-gray-200 dark:border-border group-hover:border-primary dark:group-hover:border-primary transition-[border-color]">
                    {/* Newspaper cover placeholder with rooi rose branding */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex flex-col">
                      {/* Header with logo area */}
                      <div className="bg-primary p-3 text-center">
                        <h3
                          className="text-white font-normal text-lg md:text-xl font-heading"
                          style={{ fontVariationSettings: "'GRAD' -50, 'wdth' 64, 'opsz' 24", letterSpacing: 'var(--ls-h3)' }}
                        >DIE PAPIER</h3>
                        <p className="text-white/80 text-[10px] md:text-xs">{renderWithBrandItalics(edition.title)}</p>
                      </div>
                      
                      {/* Cover image */}
                      <div className="flex-1 overflow-hidden">
                        <ImageWithFallback 
                          src={edition.coverImage} 
                          alt={edition.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                      
                      {/* Date strip */}
                      <div className="bg-brand-navy p-2 text-center">
                        <p className="text-white text-xs md:text-sm font-bold flex items-center justify-center gap-1">
                          <Calendar size={12} />
                          {edition.date}
                        </p>
                      </div>
                    </div>

                    {/* Ownership badge */}
                    {isOwned && (
                      <div className="absolute top-12 right-0 bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-l-full shadow-md flex items-center gap-1 z-10">
                        <CheckCircle2 size={11} />
                        {ownership === 'subscription' ? 'Intekening' : 'Gekoop'}
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <span className="text-white font-bold text-lg">Lees meer</span>
                    </div>
                  </Link>

                  <div className="flex flex-col flex-1">
                    <h3 className="font-normal text-gray-800 dark:text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors line-clamp-2 mb-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h-compact)' }}>
                      <Link to={`/e-uitgawe/${edition.id}`}>{renderWithBrandItalics(edition.title)}</Link>
                    </h3>
                    
                    <div className="mt-auto pt-2 flex items-center justify-between">
                      {isOwned ? (
                        <>
                          <span className="text-green-600 dark:text-green-400 text-xs font-bold">In biblioteek</span>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="h-8 text-xs border-brand-navy dark:border-brand-navy-light text-brand-navy dark:text-brand-navy-light hover:bg-brand-navy dark:hover:bg-brand-navy-light hover:text-white dark:hover:text-white"
                          >
                            <Link to={`/e-uitgawe/${edition.id}`}>
                              <BookOpen size={14} className="mr-1" />
                              Lees
                            </Link>
                          </Button>
                        </>
                      ) : (
                        <>
                          <span className="font-bold text-brand-navy dark:text-foreground">{edition.price}</span>
                          <Button 
                            asChild
                            variant="outline" 
                            size="sm"
                            className="h-8 text-xs border-brand-navy dark:border-brand-navy-light text-brand-navy dark:text-brand-navy-light hover:bg-brand-navy dark:hover:bg-brand-navy-light hover:text-white dark:hover:text-white"
                          >
                            <Link to={`/e-uitgawe/${edition.id}`}>
                              <ChevronRight size={14} className="mr-1" />
                              Kies uitgawe
                            </Link>
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mb-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="border-gray-300 dark:border-gray-700 disabled:opacity-50"
                >
                  Vorige
                </Button>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                        currentPage === page
                          ? 'bg-primary text-white'
                          : 'bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-muted'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="border-gray-300 dark:border-gray-700 disabled:opacity-50"
                >
                  Volgende
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="w-full lg:w-[300px] lg:max-w-[300px] shrink-0 hidden lg:block">
            <div className="sticky top-24">
              {/* Subscriber CTA Widget */}
              <div className="bg-white dark:bg-card rounded-xl shadow-sm dark:shadow-[var(--shadow-dark-200)] p-6 border border-gray-200 dark:border-border mb-8">
                <h3
                  className="font-normal text-brand-navy dark:text-foreground mb-3 font-heading"
                  style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}
                >Reeds 'n intekenaar?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed">
                  Intekenare het toegang tot alle e-uitgawes vanaf hul intekeningdatum.
                </p>
                <div className="flex flex-col gap-3">
                  <Link 
                    to="/my-rekening"
                    className="inline-block bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3 px-6 rounded-lg transition-colors text-center text-sm"
                  >
                    Teken in na rekening
                  </Link>
                  <Link 
                    to="/my-e-uitgawes"
                    className="inline-block bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3 px-6 rounded-lg transition-colors text-center text-sm"
                  >
                    My E-Uitgawes
                  </Link>
                </div>
              </div>

              {/* Subscription Widget */}
              <div className="bg-brand-navy text-white p-6 rounded-xl shadow-sm mb-8">
                <h3
                  className="font-normal mb-3 font-heading"
                  style={{ fontVariationSettings: "var(--fvs-h3)", letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)', lineHeight: 'var(--lh-h3)' }}
                >Wil jy elke week lees?</h3>
                <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                  Teken in en kry toegang tot alle e-uitgawes vanaf jou intekeningdatum.
                </p>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-11">
                  <Link to="/inteken/e-uitgawe">
                    Bekyk intekenopsies
                  </Link>
                </Button>
              </div>

              <SidebarAds section="e-uitgawes" variant="standard" />
              <div className="mt-8 bg-gray-50 dark:bg-card p-6 rounded-xl border border-gray-200 dark:border-border">
                <h4 className="font-normal text-brand-navy dark:text-foreground mb-3 font-heading" style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)', fontSize: 'var(--text-h4)' }}>Op soek na iets spesifiek?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Gebruik die argief soekfunksie om deur ouer koerante te blaai.
                </p>
                <Button variant="outline" className="w-full border-brand-navy text-brand-navy dark:border-brand-navy-light dark:text-brand-navy-light">
                  Deursoek Argief
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* In-feed ad for mobile */}
        <div className="lg:hidden mt-8">
          <InFeedAd section="e-uitgawes" />
        </div>

        {/* Mobile: Subscriber CTA (hidden on desktop where it's in sidebar) */}
        <div className="lg:hidden mt-8">
          <div className="bg-white dark:bg-card rounded-xl shadow-sm dark:shadow-[var(--shadow-dark-200)] p-8 text-center border border-gray-200 dark:border-border">
            <h3
              className="font-normal text-brand-navy dark:text-foreground mb-3 font-heading"
              style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}
            >Reeds 'n intekenaar?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Intekenare het toegang tot alle e-uitgawes vanaf hul intekeningdatum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/my-rekening"
                className="inline-block bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Teken in na rekening
              </Link>
              <Link 
                to="/my-e-uitgawes"
                className="inline-block bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                My E-Uitgawes
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Leaderboard Ad above FAQ */}
      <LeaderboardAd section="e-uitgawes" />

      {/* FAQ Section */}
      <PageFAQSection
        items={EEDITIONS_FAQS}
        description="Vrae oor ons digitale e-uitgawes en hoe om dit te koop."
      />

      {/* ─── Demo State Switcher ─── */}
      <DemoStateSwitcher
        value={demoState}
        onChange={(v) => setDemoState(v as ArchiveDemoState)}
        options={[
          { value: 'logged-out', label: 'Uitgelogd' },
          { value: 'subscriber', label: 'Intekenaar' },
          { value: 'expired-subscriber', label: 'Verstrykte intekenaar' },
          { value: 'logged-in-no-purchases', label: 'Ingelogd (geen koop)' },
          { value: 'logged-in-with-purchases', label: 'Ingelogd (koop)' },
        ]}
      />

      <StickyMobileFooter section="e-uitgawes" />
    </div>
  );
};