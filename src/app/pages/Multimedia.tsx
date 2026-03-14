import React, { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Play, Camera, Headphones, Clock, Eye, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { MULTIMEDIA_FAQS } from '../data/pageFaqs';
import { VIDEO_CONTENT, PHOTO_GALLERIES, PODCASTS } from '../data/multimedia';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { LeaderboardAd, SidebarAds, InFeedAd, StickyMobileFooter } from '../components/ads';
import { renderWithBrandItalics } from '../utils/brandItalics';

/* ── rooi rose Magazine Multimedia Page ──────────────────────────────
 * Editorial design: Editorial header, tab navigation, media grid
 * Typography: Playfair Display SC headings
 * Layout: Centered header + tab filters + 2-3 column grid
 * ────────────────────────────────────────────────────────────── */

type TabId = 'video' | 'foto' | 'podcast';

const ITEMS_PER_PAGE = 6;

const TABS: { id: TabId; label: string; icon: React.ReactNode; count: number }[] = [
  { id: 'video', label: "Video's", icon: <Play size={18} />, count: VIDEO_CONTENT.length },
  { id: 'foto', label: 'Fotogalerye', icon: <Camera size={18} />, count: PHOTO_GALLERIES.length },
  { id: 'podcast', label: 'Podcasts', icon: <Headphones size={18} />, count: PODCASTS.length },
];

/** Reusable pagination controls */
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}) => {
  if (totalPages <= 1) return null;
  return (
    <nav className="flex items-center justify-center gap-2 mt-10 pb-20" aria-label="Paginasie">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg hover:bg-gray-50 dark:hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft size={16} /> Vorige
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
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
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg hover:bg-gray-50 dark:hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Volgende <ChevronRight size={16} />
      </button>
    </nav>
  );
};

export const MultimediaPage = () => {
  const [activeTab, setActiveTab] = useState<TabId>('video');
  const [videoPage, setVideoPage] = useState(1);
  const [fotoPage, setFotoPage] = useState(1);
  const [podcastPage, setPodcastPage] = useState(1);

  // Reset pages when switching tabs
  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
  };

  const paginatedVideos = useMemo(
    () => VIDEO_CONTENT.slice((videoPage - 1) * ITEMS_PER_PAGE, videoPage * ITEMS_PER_PAGE),
    [videoPage]
  );
  const paginatedPhotos = useMemo(
    () => PHOTO_GALLERIES.slice((fotoPage - 1) * ITEMS_PER_PAGE, fotoPage * ITEMS_PER_PAGE),
    [fotoPage]
  );
  const paginatedPodcasts = useMemo(
    () => PODCASTS.slice((podcastPage - 1) * ITEMS_PER_PAGE, podcastPage * ITEMS_PER_PAGE),
    [podcastPage]
  );

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen font-inter">
      <SEO
        title="Multimedia - rooi rose"
        description="Kyk video-verslae, blaai deur fotogalerye en luister na podcasts van rooi rose."
        keywords="video, multimedia, podcasts, fotogalerye, galleries, die papier, photos"
      />

      {/* Leaderboard Ad */}
      <LeaderboardAd section="multimedia" />

      <PageContainer breadcrumbs={[{ label: 'Multimedia' }]}>
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
            Multimedia
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl">
            Kyk, luister en ervaar die nuus. Video-verslae, fotogalerye en podcasts van <em>rooi rose</em> se redaksie.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex gap-2 mb-10 border-b border-gray-200 dark:border-border overflow-x-auto no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-bold whitespace-nowrap transition-colors border-b-2 -mb-px ${
                activeTab === tab.id
                  ? 'border-primary dark:border-primary text-primary dark:text-primary'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-brand-navy dark:hover:text-foreground hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              {tab.icon}
              {tab.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeTab === tab.id ? 'bg-red-50 dark:bg-primary/10 text-primary dark:text-primary' : 'bg-gray-100 dark:bg-muted text-gray-400 dark:text-gray-500'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Video Tab */}
            {activeTab === 'video' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {paginatedVideos.map((video) => (
                    <Link
                      key={video.id}
                      to={`/multimedia/${video.slug}`}
                      className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border overflow-hidden shadow-sm dark:shadow-[var(--shadow-dark-200)] hover:shadow-lg transition-shadow group"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <ImageWithFallback
                          src={video.imageUrl}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                            <Play size={28} className="text-white ml-1" fill="white" />
                          </div>
                        </div>
                        <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-2 py-1 rounded font-mono">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-5">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2 block">
                          {video.category}
                        </span>
                        <h3 className="font-normal text-brand-navy dark:text-foreground mb-3 line-clamp-2 group-hover:text-primary dark:group-hover:text-primary transition-colors font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                          {renderWithBrandItalics(video.title)}
                        </h3>
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Eye size={12} />
                            {(video.views ?? 0).toLocaleString()} kyke
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {video.time}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Pagination
                  currentPage={videoPage}
                  totalPages={Math.ceil(VIDEO_CONTENT.length / ITEMS_PER_PAGE)}
                  onPageChange={setVideoPage}
                />
              </>
            )}

            {/* Photo Galleries Tab */}
            {activeTab === 'foto' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {paginatedPhotos.map((gallery) => (
                    <Link
                      key={gallery.id}
                      to={`/multimedia/${gallery.slug}`}
                      className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border overflow-hidden shadow-sm dark:shadow-[var(--shadow-dark-200)] hover:shadow-lg transition-shadow group"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <ImageWithFallback
                          src={gallery.imageUrl}
                          alt={gallery.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="inline-flex items-center gap-1.5 bg-white/90 text-brand-navy text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                            <Camera size={14} />
                            {gallery.photoCount} foto's
                          </span>
                          <h3 className="text-white font-normal text-lg font-heading drop-shadow-md" style={{ fontVariationSettings: "var(--fvs-h3)", letterSpacing: 'var(--ls-h3)' }}>
                            {renderWithBrandItalics(gallery.title)}
                          </h3>
                        </div>
                      </div>
                      <div className="p-5 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span className="uppercase tracking-widest font-bold text-primary">{gallery.category}</span>
                          <span>&middot;</span>
                          <span>{gallery.time}</span>
                        </div>
                        <span className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-[gap]">
                          Bekyk <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
                <Pagination
                  currentPage={fotoPage}
                  totalPages={Math.ceil(PHOTO_GALLERIES.length / ITEMS_PER_PAGE)}
                  onPageChange={setFotoPage}
                />
              </>
            )}

            {/* Podcasts Tab */}
            {activeTab === 'podcast' && (
              <>
                <div className="space-y-6">
                  {paginatedPodcasts.map((podcast) => (
                    <Link
                      key={podcast.id}
                      to={`/multimedia/${podcast.slug}`}
                      className="block bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border overflow-hidden shadow-sm dark:shadow-[var(--shadow-dark-200)] hover:shadow-lg transition-shadow group"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="relative w-full md:w-64 aspect-square md:aspect-auto flex-shrink-0 overflow-hidden">
                          <ImageWithFallback
                            src={podcast.imageUrl}
                            alt={podcast.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg">
                              <Headphones size={24} className="text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="p-6 flex flex-col justify-center">
                          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                            {podcast.episode}
                          </span>
                          <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-3 font-heading group-hover:text-primary dark:group-hover:text-primary transition-colors" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                            {renderWithBrandItalics(podcast.title)}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                            {renderWithBrandItalics(podcast.description)}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {podcast.duration}
                            </span>
                            <span>{podcast.time}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Pagination
                  currentPage={podcastPage}
                  totalPages={Math.ceil(PODCASTS.length / ITEMS_PER_PAGE)}
                  onPageChange={setPodcastPage}
                />
              </>
            )}

            {/* In-feed ad for mobile */}
            <InFeedAd section="multimedia" className="mt-6" />
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[300px] shrink-0 space-y-6">
            <SidebarAds section="multimedia" variant="standard" />
          </aside>
        </div>
      </PageContainer>

      {/* Leaderboard Ad above FAQ */}
      <LeaderboardAd section="multimedia" />

      <PageFAQSection items={MULTIMEDIA_FAQS} />

      <StickyMobileFooter section="multimedia" />
    </div>
  );
};

export default MultimediaPage;