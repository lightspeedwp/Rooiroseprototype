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

export const CompetitionSinglePage = () => {
  const { slug } = useParams<{ slug: string }>();

  const competition = slug ? getCompetitionBySlug(slug) : undefined;

  if (!competition) {
    return <Navigate to="/kompetisies" replace />;
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
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-0">
      <SEO
        title={competition.metaTitle}
        description={competition.metaDescription}
        keywords={competition.metaKeywords}
      />

      {/* Leaderboard Ad */}
      <LeaderboardAd section="kompetisies" />

      <PageContainer
        breadcrumbs={[
          { label: 'Kompetisies', href: '/kompetisies' },
          { label: competition.title },
        ]}
      >
        {/* Hero Image */}
        <div className="relative rounded-xl overflow-hidden mb-8 aspect-[16/7]">
          <ImageWithFallback
            src={competition.imageUrl}
            alt={competition.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <CompetitionStatusBadge status={competition.status} size="lg" className="mb-3" />
            <h1 className="text-3xl md:text-4xl font-normal text-white font-heading leading-tight" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
              {competition.title}
            </h1>
          </div>
        </div>

        {/* Content + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <CompetitionKeyDetails competition={competition} />
            
            {isActive && <CompetitionCountdown closingDate={competition.closingDate} />}
            
            <CompetitionWinner competition={competition} />
            
            {isActive && <CompetitionHowToEnter />}
            
            {isActive && <CompetitionEntryForm />}
            
            <CompetitionSponsor competition={competition} />
            
            <CompetitionRules competition={competition} />
            
            <CompetitionFAQ competition={competition} />
            
            {/* Social Share */}
            <SocialShare title={competition.title} description={competition.description} />
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

      {/* Meer Kompetisies strip */}
      <CompetitionRelated relatedCompetitions={relatedCompetitions} />

      <StickyMobileFooter section="kompetisies" />
    </div>
  );
};
