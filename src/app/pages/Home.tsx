import React, { useMemo, lazy, Suspense } from 'react';
import { HeroSlider } from '../components/home/HeroSlider';
import { CategorySection } from '../components/home/CategorySection';
import { PullQuoteSection } from '../components/home/PullQuoteSection';
import { NewsletterCTA } from '../components/patterns/NewsletterCTA';
import { Poll } from '../components/home/Poll';
import { TOP_STORIES } from '../data/articles';
import { CATEGORY_ARTICLES } from '../data/categoryArticles';
import { HOME_CONTENT, HOME_SEO } from '../data/home';
import { getActivePoll } from '../data/polls';
import { SEO } from '../components/common/SEO';
import { LeaderboardAd, MediumRectangleAd, StickyMobileFooter } from '../components/ads';
import { SidebarEEditionPromo } from '../components/home/SidebarEEditionPromo';
import { SidebarFeaturedCompetition } from '../components/home/SidebarFeaturedCompetition';

/* ── rooi rose Magazine Homepage ──────────────────────────────────────
 * Editorial design: Magazine-style layout with generous white space
 * Typography: Playfair Display SC + Karla
 * Layout: Hero slider, alternating category sections, pull quotes
 * Background colors: Alternating editorial accent tones (blush, beige, grey)
 * ────────────────────────────────────────────────────────────────── */

export const Home = () => {
  // Memoize filtered data for rooi rose categories
  const categorizedArticles = useMemo(() => {
    return {
      kos: CATEGORY_ARTICLES.Kos || TOP_STORIES.filter(s => s.category === 'Kos').slice(0, 3),
      mode: CATEGORY_ARTICLES.Mode || TOP_STORIES.filter(s => s.category === 'Mode').slice(0, 3),
      skoonheid: CATEGORY_ARTICLES.Skoonheid || TOP_STORIES.filter(s => s.category === 'Skoonheid').slice(0, 3),
      gesondheid: CATEGORY_ARTICLES.Gesondheid || TOP_STORIES.filter(s => s.category === 'Gesondheid').slice(0, 3),
      bekendes: CATEGORY_ARTICLES.Bekendes || TOP_STORIES.filter(s => s.category === 'Bekendes').slice(0, 3),
      leefstyl: CATEGORY_ARTICLES.Leefstyl || TOP_STORIES.filter(s => s.category === 'Leefstyl').slice(0, 3),
      jouLewe: CATEGORY_ARTICLES.Dink || TOP_STORIES.filter(s => s.category === 'Jou lewe' || s.category === 'Dink').slice(0, 3),
      ontspanning: CATEGORY_ARTICLES.Ontspanning || TOP_STORIES.filter(s => s.category === 'Ontspanning').slice(0, 3),
    };
  }, []);

  const activePoll = getActivePoll();

  const pollLabels = {
    title: HOME_CONTENT.sidebar.poll.title,
    voteButton: HOME_CONTENT.sidebar.poll.buttons.vote,
    votedButton: HOME_CONTENT.sidebar.poll.buttons.voted,
    errorSelection: HOME_CONTENT.sidebar.poll.messages.error,
    successTitle: HOME_CONTENT.sidebar.poll.messages.successTitle,
    successDesc: HOME_CONTENT.sidebar.poll.messages.successDesc
  };

  return (
    <>
      <SEO 
        description={HOME_SEO.description}
        keywords={HOME_SEO.keywords}
      />
      
      {/* Header Leaderboard Ad */}
      <div className="bg-[var(--muted)] py-4">
        <LeaderboardAd section="home" />
      </div>
      
      {/* === HERO SLIDER === */}
      <HeroSlider />
      
      <LeaderboardAd section="home" position="feature-grid" />

      {/* === MAIN EDITORIAL CONTENT === */}
      
      {/* Kos Section (White background) */}
      <CategorySection 
        title="Kos" 
        link="/kos" 
        articles={categorizedArticles.kos}
        bgColor="white"
      />

      {/* Pull Quote 1 */}
      <PullQuoteSection 
        quote="Kook met liefde, eet met vreugde"
        bgColor="grey"
      />

      {/* Mode Section (Blush background) */}
      <CategorySection 
        title="Mode" 
        link="/mode" 
        articles={categorizedArticles.mode}
        bgColor="blush"
      />

      <LeaderboardAd section="home" position="mode" />

      {/* Skoonheid Section (Beige background) */}
      <CategorySection 
        title="Skoonheid" 
        link="/skoonheid" 
        articles={categorizedArticles.skoonheid}
        bgColor="beige"
      />

      {/* Pull Quote 2 */}
      <PullQuoteSection 
        quote="Jou eie skoonheid is jou krag"
        bgColor="grey"
      />

      {/* Gesondheid Section (White background) */}
      <CategorySection 
        title="Gesondheid" 
        link="/gesondheid" 
        articles={categorizedArticles.gesondheid}
        bgColor="white"
      />

      <LeaderboardAd section="home" position="gesondheid" />

      {/* Bekendes Section (Blush background) */}
      <CategorySection 
        title="Bekendes" 
        link="/bekendes" 
        articles={categorizedArticles.bekendes}
        bgColor="blush"
      />

      {/* Leefstyl Section (Beige background) */}
      <CategorySection 
        title="Leefstyl" 
        link="/leefstyl" 
        articles={categorizedArticles.leefstyl}
        bgColor="beige"
      />

      {/* Pull Quote 3 */}
      <PullQuoteSection 
        quote="Maak elke dag buitengewoon"
        bgColor="grey"
      />

      <LeaderboardAd section="home" position="leefstyl" />

      {/* Jou lewe Section (White background) */}
      <CategorySection 
        title="Jou lewe" 
        link="/jou-lewe" 
        articles={categorizedArticles.jouLewe}
        bgColor="white"
      />

      {/* Ontspanning Section (Blush background) */}
      <CategorySection 
        title="Ontspanning" 
        link="/ontspanning" 
        articles={categorizedArticles.ontspanning}
        bgColor="blush"
      />

      {/* === SIDEBAR CONTENT (Mobile: Below main content) === */}
      <section className="bg-[var(--muted)] py-12">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* E-Edition Promo - Editorial Magazine Design */}
            <div className="bg-[var(--base)] shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-border relative">
              {/* Decorative top accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-30"></div>
              <SidebarEEditionPromo />
            </div>

            {/* National Poll - Editorial Magazine Design */}
            {activePoll && (
              <div className="bg-[var(--base)] shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-border relative">
                {/* Decorative top accent */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-30"></div>
                <Poll 
                  question={activePoll.question}
                  options={activePoll.options}
                  labels={pollLabels}
                />
              </div>
            )}

            {/* Featured Competition - Editorial Magazine Design */}
            <div className="bg-[var(--base)] shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-border relative">
              {/* Decorative top accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-30"></div>
              <SidebarFeaturedCompetition />
            </div>

          </div>
        </div>
      </section>

      <MediumRectangleAd slotName="home-sidebar-bottom" section="home" position="sidebar-bottom" />

      {/* === NEWSLETTER CTA === */}
      <NewsletterCTA />
      
      {/* Sticky Mobile Footer Ad */}
      <StickyMobileFooter section="home" />
    </>
  );
};