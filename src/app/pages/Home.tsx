import React, { useMemo, lazy, Suspense } from 'react';
import { HeroSlider } from '../components/home/HeroSlider';
import { FeatureGrid } from '../components/home/FeatureGrid';
import { BreakingNews } from '../components/home/BreakingNews';
import { CategorySection } from '../components/home/CategorySection';
import { NewsletterCTA } from '../components/patterns/NewsletterCTA';
import { Poll } from '../components/home/Poll';
import { MultimediaSection } from '../components/home/MultimediaSection';
import { ObituariesSection } from '../components/home/ObituariesSection';
import { ArchiveSection } from '../components/home/ArchiveSection';
import { EventsSection } from '../components/home/EventsSection';
import { TOP_STORIES } from '../data/articles';
import { CATEGORY_ARTICLES } from '../data/categoryArticles';
import { HOME_CONTENT, HOME_SEO } from '../data/home';
import { getActivePoll } from '../data/polls';
import { SEO } from '../components/common/SEO';
import { LeaderboardAd, SidebarAds, TakeoverRails, StickyMobileFooter, MediumRectangleAd } from '../components/ads';
import { Link, useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Trophy, Clock, Truck, ArrowRight } from 'lucide-react';
import { getActiveCompetitions } from '../data/competitions';
import { SidebarEEditionPromo } from '../components/home/SidebarEEditionPromo';
import { SidebarFeaturedCompetition } from '../components/home/SidebarFeaturedCompetition';
import { SidebarDeliveryCTA } from '../components/home/SidebarDeliveryCTA';

// Lazy-load QuoteSlider
const QuoteSlider = lazy(() =>
  import('../components/brand-quotes/QuoteSlider').then(m => ({ default: m.QuoteSlider }))
);

export const Home = () => {
  const navigate = useNavigate();
  
  // Memoize filtered data to prevent recalculation on every render
  const categorizedArticles = useMemo(() => {
    return {
      nuus: CATEGORY_ARTICLES.Nuus || TOP_STORIES.filter(s => s.category === 'Nuus').slice(0, 3),
      sport: CATEGORY_ARTICLES.Sport || TOP_STORIES.filter(s => s.category === 'Sport').slice(0, 3),
      sake: CATEGORY_ARTICLES.Sake || TOP_STORIES.filter(s => s.category === 'Sake').slice(0, 3),
      lewenstyl: CATEGORY_ARTICLES.Leefstyl || TOP_STORIES.filter(s => s.category === 'Leefstyl').slice(0, 3),
      dink: CATEGORY_ARTICLES.Dink || TOP_STORIES.filter(s => s.category === 'Dink').slice(0, 3),
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
      
      {/* Takeover Rails (optional, desktop 1440px+ only) */}
      <TakeoverRails section="home" enabled={false} />
      
      {/* Header Leaderboard Ad */}
      <LeaderboardAd section="home" />
      
      <BreakingNews />
      
      <HeroSlider />
      
      {/* Main Content with Sidebar */}
      <div className="alignwide mb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content Area */}
          <div className="flex-1 lg:min-w-0 space-y-6 pt-8">
            <FeatureGrid />
            
            {/* Leaderboard Ad between Top Stories and Nuus */}
            <LeaderboardAd section="home" position="feature-grid" />

            {/* Nuus Section */}
            <CategorySection 
              title="Nuus" 
              link="/nuus" 
              articles={categorizedArticles.nuus} 
            />

            <LeaderboardAd section="home" position="nuus" />

            {/* Sport Section */}
            <CategorySection 
              title="Sport" 
              link="/sport" 
              articles={categorizedArticles.sport} 
            />

            <LeaderboardAd section="home" position="sport" />

            {/* Dink Section */}
            <CategorySection 
              title="Dink" 
              link="/dink" 
              articles={categorizedArticles.dink} 
            />

            <LeaderboardAd section="home" position="dink" />

            {/* Sake Section */}
            <CategorySection 
              title="Sake" 
              link="/sake" 
              articles={categorizedArticles.sake} 
            />

            <LeaderboardAd section="home" position="sake" />

            {/* Leefstyl Section */}
            <CategorySection 
              title="Leefstyl" 
              link="/leefstyl" 
              articles={categorizedArticles.lewenstyl}
            />

            <LeaderboardAd section="home" position="leefstyl" />
          </div>

          {/* Sidebar Area */}
          <div className="w-full lg:w-[300px] lg:flex-shrink-0 space-y-6">
            
            <SidebarEEditionPromo />

            {/* Medium Rectangle Ad */}
            <MediumRectangleAd slotName="home-sidebar-top" section="home" position="sidebar-top" />

            {/* National Poll */}
            {activePoll && (
              <Poll 
                question={activePoll.question}
                options={activePoll.options}
                labels={pollLabels}
              />
            )}

            {/* Medium Rectangle Ad */}
            <MediumRectangleAd slotName="home-sidebar-middle" section="home" position="sidebar-middle" />

            <SidebarFeaturedCompetition />

            <SidebarDeliveryCTA />

            {/* Additional Sidebar Ads */}
            <SidebarAds section="home" />
          </div>
        </div>
      </div>
      
      {/* Launch Campaign Quote Slider */}
      <div className="w-full bg-gray-100 dark:bg-brand-navy py-12 mb-12 border-y border-gray-200 dark:border-border">
        <div className="alignwide">
          <Suspense fallback={<div>Laai...</div>}>
            <QuoteSlider className="rounded-xl overflow-hidden shadow-lg" />
          </Suspense>
        </div>
      </div>

      {/* NEW SECTIONS - Full Width Below Main Content */}
      
      {/* Multimedia Section */}
      <MultimediaSection />
      
      {/* Leaderboard Ad */}
      <div className="alignwide my-6">
        <LeaderboardAd section="home" position="multimedia" />
      </div>
      
      {/* Obituaries Section */}
      <ObituariesSection />
      
      {/* Events Section */}
      <EventsSection />
      
      {/* Archive Section */}
      <ArchiveSection />
      
      {/* Full Width Newsletter CTA - Above Footer */}
      <NewsletterCTA />
      
      {/* Sticky Mobile Footer Ad */}
      <StickyMobileFooter section="home" />
    </>
  );
};