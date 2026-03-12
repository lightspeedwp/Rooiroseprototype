import React from 'react';
import { useParams, Navigate, Link } from 'react-router';
import { Play, Camera, Headphones, User, Clock, Eye, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { getMultimediaBySlug, getMultimediaByCategory, MULTIMEDIA_ITEMS, type MultimediaItem } from '../data/multimedia';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toast } from 'sonner';
import { copyToClipboard } from '../utils/clipboard';
import { LeaderboardAd, SidebarAds, InFeedAd, StickyMobileFooter } from '../components/ads';
import { SocialShare } from '../components/common/SocialShare';
import { renderWithBrandItalics } from '../utils/brandItalics';
import { SEO } from '../components/common/SEO';
import { PageContainer } from '../components/common/PageContainer';

const categoryLabels: Record<string, string> = {
  Video: "Video's",
  Fotogalery: 'Fotogalerye',
  Podcast: 'Podcasts',
};

const CategoryIcon = ({ category, size = 18 }: { category: string; size?: number }) => {
  switch (category) {
    case 'Video':
      return <Play size={size} />;
    case 'Fotogalery':
      return <Camera size={size} />;
    case 'Podcast':
      return <Headphones size={size} />;
    default:
      return <Play size={size} />;
  }
};

const RelatedCard = ({ item }: { item: MultimediaItem }) => (
  <Link
    to={`/multimedia/${item.slug}`}
    className="flex items-start gap-3 group"
  >
    <div className="w-20 h-14 rounded overflow-hidden flex-shrink-0 relative">
      <ImageWithFallback
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-full object-cover"
      />
      {item.category === 'Video' && item.duration && (
        <div className="absolute bottom-0.5 right-0.5 bg-black/75 text-white text-[9px] px-1 rounded font-mono">
          {item.duration}
        </div>
      )}
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-sm font-bold text-brand-navy dark:text-foreground group-hover:text-primary transition-colors line-clamp-2">
        {item.title}
      </p>
      <p className="text-xs text-gray-400 mt-1">{item.time}</p>
    </div>
  </Link>
);

export const SingleMultimediaPage = () => {
  const { slug } = useParams();
  const item = slug ? getMultimediaBySlug(slug) : undefined;

  if (!item) {
    return <Navigate to="/multimedia" replace />;
  }

  const related = getMultimediaByCategory(item.category)
    .filter((m) => m.id !== item.id)
    .slice(0, 4);
  const otherItems = MULTIMEDIA_ITEMS.filter(
    (m) => m.category !== item.category && m.id !== item.id
  ).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: item.title, url: window.location.href });
    } else {
      copyToClipboard(window.location.href);
      toast.success('Skakel gekopieer');
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen font-inter">
      <SEO
        title={`${item.title} | Multimedia | rooi rose`}
        description={item.description.slice(0, 160)}
        keywords={item.tags.join(', ')}
      />

      {/* Leaderboard Ad */}
      <LeaderboardAd section="multimedia" />

      <PageContainer
        breadcrumbs={[
          { label: 'Multimedia', href: '/multimedia' },
          { label: categoryLabels[item.category] || item.category, href: '/multimedia' },
          { label: item.title },
        ]}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <article className="flex-1 min-w-0">
            {/* Hero Image / Player Placeholder */}
            <div className="relative rounded-lg overflow-hidden mb-6">
              <div className="aspect-video relative">
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Play overlay for video/podcast */}
                {(item.category === 'Video' || item.category === 'Podcast') && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                      {item.category === 'Video' ? (
                        <Play size={36} className="text-white ml-1" fill="white" />
                      ) : (
                        <Headphones size={32} className="text-white" />
                      )}
                    </div>
                  </div>
                )}
                {/* Photo count overlay */}
                {item.category === 'Fotogalery' && item.photoCount && (
                  <div className="absolute bottom-4 right-4 bg-black/75 text-white text-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Camera size={14} />
                    {item.photoCount} foto's
                  </div>
                )}
                {/* Duration badge */}
                {item.duration && (
                  <div className="absolute bottom-4 left-4 bg-black/75 text-white text-sm px-3 py-1.5 rounded font-mono">
                    {item.duration}
                  </div>
                )}
              </div>
            </div>

            {/* Title & Meta */}
            <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm p-8 mb-8">
              {/* Category badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  <CategoryIcon category={item.category} size={12} />
                  {categoryLabels[item.category] || item.category}
                </span>
                {item.episode && (
                  <span className="text-xs text-gray-400 font-bold">{item.episode}</span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                {item.title}
              </h1>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100 dark:border-border">
                <span className="flex items-center gap-1.5">
                  <User size={14} className="text-gray-400" />
                  <Link
                    to={`/skrywer/${encodeURIComponent(item.author)}`}
                    className="hover:text-primary transition-colors"
                  >
                    {item.author}
                  </Link>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-gray-400" />
                  {item.published}
                </span>
                {item.views !== undefined && (
                  <span className="flex items-center gap-1.5">
                    <Eye size={14} className="text-gray-400" />
                    {item.views.toLocaleString()} kyke
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="prose max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                {item.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{renderWithBrandItalics(paragraph)}</p>
                ))}
              </div>

              {/* Tags */}
              {item.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-border">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag size={14} className="text-gray-400" />
                    {item.tags.map((tag) => (
                      <Link
                        key={tag}
                        to={`/onderwerp/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-xs bg-gray-100 dark:bg-muted text-gray-600 dark:text-gray-400 px-3 py-1.5 rounded-full hover:bg-brand-navy dark:hover:bg-foreground hover:text-white dark:hover:text-background transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Share / Back */}
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-border flex items-start justify-between flex-wrap gap-4">
                <Link
                  to="/multimedia"
                  className="text-sm text-gray-500 hover:text-primary flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft size={14} />
                  Terug na Multimedia
                </Link>
                <SocialShare title={item.title} description={item.description.slice(0, 160)} />
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-[300px] shrink-0 space-y-6">
            {/* Related in Same Category */}
            {related.length > 0 && (
              <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm p-6">
                <h3 className="font-normal text-brand-navy dark:text-foreground font-heading mb-4 flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                  <CategoryIcon category={item.category} size={16} />
                  Meer {categoryLabels[item.category] || item.category}
                </h3>
                <div className="space-y-4">
                  {related.map((r) => (
                    <RelatedCard key={r.id} item={r} />
                  ))}
                </div>
              </div>
            )}

            {/* Other Multimedia */}
            {otherItems.length > 0 && (
              <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm p-6">
                <h3 className="font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                  Ander Multimedia
                </h3>
                <div className="space-y-4">
                  {otherItems.map((r) => (
                    <RelatedCard key={r.id} item={r} />
                  ))}
                </div>
                <Link
                  to="/multimedia"
                  className="block text-center text-sm text-primary font-bold mt-4 hover:underline"
                >
                  Alle multimedia
                </Link>
              </div>
            )}

            {/* Sidebar Ads */}
            <SidebarAds section="multimedia" variant="standard" />
          </aside>
        </div>

        {/* In-feed ad for mobile */}
        <InFeedAd section="multimedia" />
      </PageContainer>

      <StickyMobileFooter section="multimedia" />
    </div>
  );
};

export default SingleMultimediaPage;