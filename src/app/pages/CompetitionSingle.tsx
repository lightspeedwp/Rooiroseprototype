import React, { useMemo } from 'react';
import { useParams, Navigate } from 'react-router';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { SocialShare } from '../components/common/SocialShare';
import { CompetitionStatusBadge } from '../components/common/CompetitionStatusBadge';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { getCompetitionBySlug, getActiveCompetitions, getClosedCompetitions } from '../data/competitions';
import { LeaderboardAd, StickyMobileFooter } from '../components/ads';

import { CompetitionKeyDetails } from '../components/competition/CompetitionKeyDetails';
import { CompetitionCountdown } from '../components/competition/CompetitionCountdown';
import { CompetitionWinner } from '../components/competition/CompetitionWinner';
import { CompetitionHowToEnter } from '../components/competition/CompetitionHowToEnter';
import { CompetitionEntryForm } from '../components/competition/CompetitionEntryForm';
import { CompetitionSponsor } from '../components/competition/CompetitionSponsor';
import { CompetitionRules } from '../components/competition/CompetitionRules';
import { CompetitionFAQ } from '../components/competition/CompetitionFAQ';
import { CompetitionSidebar } from '../components/competition/CompetitionSidebar';
import { CompetitionRelated } from '../components/competition/CompetitionRelated';

/* ── rooi rose Magazine Single Competition Page ──────────────────────────────
 * Editorial design: Full-bleed hero, magazine article layout
 * Typography: Playfair Display SC headings
 * Layout: Hero image + countdown + entry form + sidebar
 * ────────────────────────────────────────────────────────────── */

export const CompetitionSinglePage = () => {
  const { slug } = useParams<{ slug: string }>();

  const competition = slug ? getCompetitionBySlug(slug) : undefined;

  if (!competition) {
    return <Navigate to="/wen" replace />;
  }

  const isActive = competition.status === 'active';
  const activeCompetitions = getActiveCompetitions();
  const closedCompetitions = getClosedCompetitions().slice(0, 4);

  // Related competitions: other active ones excluding current
  const relatedCompetitions = useMemo(
    () => activeCompetitions.filter((c) => c.slug !== slug).slice(0, 3),
    [activeCompetitions, slug]
  );

  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <SEO
        title={competition.metaTitle}
        description={competition.metaDescription}
        keywords={competition.metaKeywords}
      />

      {/* Leaderboard Ad */}
      <LeaderboardAd section="kompetisies" />

      {/* Full-bleed Hero Image */}
      <div className="relative w-full h-[50vh] lg:h-[70vh] overflow-hidden">
        <ImageWithFallback
          src={competition.imageUrl}
          alt={competition.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Hero Content - Centered */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 pb-12 lg:pb-16">
            <CompetitionStatusBadge status={competition.status} size="lg" className="mb-4" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 has-brand-serif-font-family uppercase tracking-wider max-w-4xl" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
              {competition.title}
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-3xl">
              {competition.description}
            </p>
          </div>
        </div>
      </div>

      <PageContainer
        breadcrumbs={[
          { label: 'Wen', href: '/wen' },
          { label: competition.title },
        ]}
      >
        {/* Content + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 py-12">
          {/* Main Content */}
          <div className="flex-1 min-w-0 space-y-10">
            <CompetitionKeyDetails competition={competition} />
            
            {isActive && <CompetitionCountdown closingDate={competition.closingDate} />}
            
            <CompetitionWinner competition={competition} />
            
            {isActive && <CompetitionHowToEnter />}
            
            {isActive && <CompetitionEntryForm />}
            
            <CompetitionSponsor competition={competition} />
            
            <CompetitionRules competition={competition} />
            
            <CompetitionFAQ competition={competition} />
            
            {/* Social Share */}
            <div className="pt-8 border-t border-gray-200 dark:border-border">
              <SocialShare title={competition.title} description={competition.description} />
            </div>
          </div>

          {/* Sidebar */}
          <CompetitionSidebar
            isActive={isActive}
            slug={slug || ''}
            activeCompetitions={activeCompetitions}
            closedCompetitions={closedCompetitions}
          />
        </div>
      </PageContainer>

      {/* Related Competitions Strip */}
      <div className="bg-gray-50 dark:bg-card border-t border-gray-200 dark:border-border py-16">
        <CompetitionRelated relatedCompetitions={relatedCompetitions} />
      </div>

      <StickyMobileFooter section="kompetisies" />
    </div>
  );
};