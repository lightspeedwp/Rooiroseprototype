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

/* ── rooi rose Magazine Single Multimedia Page ──────────────────────────────
 * Editorial design: Video/Photo/Podcast detail view
 * Typography: Playfair Display SC headings, Karla body
 * Layout: Full-bleed hero + max-width content + sidebar
 * ────────────────────────────────────────────────────────────── */

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
    <div className="w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
      <ImageWithFallback
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      {item.category === 'Video' && item.duration && (
        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1.5 py-0.5 rounded font-mono">
          {item.duration}
        </div>
      )}
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-sm font-bold text-brand-navy dark:text-foreground group-hover:text-brand-red transition-colors line-clamp-2 leading-snug">
        {item.title}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.time}</p>
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
    <div className="bg-white dark:bg-background min-h-screen">
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
        noPadding
      >
        {/* Hero Media Player */}
        <div className="relative bg-black">
          <div className="aspect-video relative max-w-7xl mx-auto">
            <ImageWithFallback
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            {/* Play overlay for video/podcast */}
            {(item.category === 'Video' || item.category === 'Podcast') && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center">
                <div className="w-24 h-24 bg-brand-red rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-300">
                  {item.category === 'Video' ? (
                    <Play size={40} className="text-white ml-1" fill="white" />
                  ) : (
                    <Headphones size={36} className="text-white" />
                  )}
                </div>
              </div>
            )}
            {/* Photo count overlay */}
            {item.category === 'Fotogalery' && item.photoCount && (
              <div className="absolute bottom-6 right-6 bg-black/80 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm">
                <Camera size={16} />
                <span className="font-bold">{item.photoCount} foto's</span>
              </div>
            )}
            {/* Duration badge */}
            {item.duration && (
              <div className="absolute bottom-6 left-6 bg-black/80 text-white text-base px-4 py-2 rounded-lg font-mono backdrop-blur-sm">
                {item.duration}
              </div>
            )}
          </div>
        </div>

        {/* Content Container */}
        <div className="alignwide py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <article className="flex-1 min-w-0 max-w-4xl">
              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                  <CategoryIcon category={item.category} size={14} />
                  {categoryLabels[item.category] || item.category}
                </span>
                {item.episode && (
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-bold">{item.episode}</span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mb-6 leading-tight" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                {item.title}
              </h1>

              {/* Meta Row */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b-2 border-gray-200 dark:border-border">
                <span className="flex items-center gap-2">
                  <User size={16} className="text-brand-red" />
                  <Link
                    to={`/skrywer/${encodeURIComponent(item.author)}`}
                    className="hover:text-brand-red transition-colors font-medium"
                  >
                    {item.author}
                  </Link>
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-brand-red" />
                  {item.published}
                </span>
                {item.views !== undefined && (
                  <span className="flex items-center gap-2">
                    <Eye size={16} className="text-brand-red" />
                    <span className="font-medium">{item.views.toLocaleString()} kyke</span>
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 mb-8">
                {item.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-base leading-relaxed">{renderWithBrandItalics(paragraph)}</p>
                ))}
              </div>

              {/* Tags */}
              {item.tags.length > 0 && (
                <div className="mb-8 pb-8 border-b border-gray-200 dark:border-border">
                  <div className="flex items-start gap-3 flex-wrap">
                    <Tag size={18} className="text-gray-400 mt-1" />
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Link
                          key={tag}
                          to={`/onderwerp/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-xs bg-gray-100 dark:bg-muted text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full hover:bg-brand-red hover:text-white dark:hover:bg-brand-red dark:hover:text-white transition-colors font-medium"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Share / Back */}
              <div className="flex items-start justify-between flex-wrap gap-6 mb-8">
                <Link
                  to="/multimedia"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-red dark:hover:text-brand-red flex items-center gap-2 transition-colors font-medium"
                >
                  <ArrowLeft size={16} />
                  Terug na Multimedia
                </Link>
                <SocialShare title={item.title} description={item.description.slice(0, 160)} />
              </div>

              {/* In-feed Ad */}
              <InFeedAd section="multimedia" />
            </article>

            {/* Sidebar */}
            <aside className="w-full lg:w-[320px] shrink-0 space-y-6">
              {/* Related in Same Category */}
              {related.length > 0 && (
                <div className="bg-gray-50 dark:bg-card rounded-xl border border-gray-200 dark:border-border p-6">
                  <h3 className="text-xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mb-6 flex items-center gap-2 pb-3 border-b-2 border-brand-red" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                    <CategoryIcon category={item.category} size={18} />
                    Meer {categoryLabels[item.category] || item.category}
                  </h3>
                  <div className="space-y-5">
                    {related.map((r) => (
                      <RelatedCard key={r.id} item={r} />
                    ))}
                  </div>
                </div>
              )}

              {/* Sidebar Ads */}
              <SidebarAds section="multimedia" />

              {/* Other Multimedia */}
              {otherItems.length > 0 && (
                <div className="bg-gray-50 dark:bg-card rounded-xl border border-gray-200 dark:border-border p-6">
                  <h3 className="text-xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mb-6 pb-3 border-b-2 border-brand-red" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                    Ander Multimedia
                  </h3>
                  <div className="space-y-5">
                    {otherItems.map((r) => (
                      <RelatedCard key={r.id} item={r} />
                    ))}
                  </div>
                  <Link
                    to="/multimedia"
                    className="block text-center text-sm text-brand-red font-bold mt-6 pt-5 border-t border-gray-200 dark:border-border hover:underline"
                  >
                    Alle multimedia
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </div>

        {/* In-feed ad for mobile */}
        <InFeedAd section="multimedia" />
      </PageContainer>

      <StickyMobileFooter section="multimedia" />
    </div>
  );
};

export default SingleMultimediaPage;