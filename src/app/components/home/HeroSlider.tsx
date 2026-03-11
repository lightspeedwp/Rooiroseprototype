import React, { useState, useEffect, useCallback, memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TOP_STORIES, LATEST_NEWS } from '../../data/articles';
import { HOME_CONTENT } from '../../data/home';
import { Link } from 'react-router';
import { generateArticleSlug } from '../../utils/slugify';
import { HeroSlideCard } from '../common/HeroSlideCard';

/**
 * HeroSlider - Featured articles slider for the homepage.
 * Auto-advances every 6 seconds with manual prev/next controls.
 * Includes a Nuusflitse (news flashes) sidebar on desktop.
 */
export const HeroSlider = () => {
  const slides = TOP_STORIES.slice(0, 5);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, [slides.length]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const slide = slides[current];

  return (
    <div className="alignwide">
        {/* ─── Mobile Nuusflitse (< lg) — compact list above slider ─── */}
        <NuusflitseMobile />

        <div className="flex flex-col lg:flex-row lg:h-[440px] gap-0">
          {/* Slider — fills remaining space */}
          <div
            className="flex-1 min-w-0 relative overflow-hidden rounded-lg lg:rounded-r-none shadow-sm dark:shadow-[var(--shadow-dark-200)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Slide */}
            <HeroSlideCard
              key={slide.id}
              id={slide.id}
              title={slide.title}
              excerpt={slide.excerpt}
              category={slide.category}
              image={slide.imageUrl}
              date={slide.date}
              author={slide.author}
              fillHeight
            >
              {/* Navigation Arrows */}
              <button
                onClick={(e) => { e.preventDefault(); prev(); }}
                className="absolute left-3 bottom-3 w-10 h-10 rounded-md bg-black/50 text-white/80 flex items-center justify-center hover:bg-black/70 hover:text-white transition-colors backdrop-blur-sm z-10 p-2"
                aria-label="Vorige"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={(e) => { e.preventDefault(); next(); }}
                className="absolute right-3 bottom-3 w-10 h-10 rounded-md bg-black/50 text-white/80 flex items-center justify-center hover:bg-black/70 hover:text-white transition-colors backdrop-blur-sm z-10 p-2"
                aria-label="Volgende"
              >
                <ChevronRight size={22} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-[width,background-color] ${
                      i === current ? 'w-6 bg-brand-red' : 'w-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Skuif ${i + 1}`}
                  />
                ))}
              </div>
            </HeroSlideCard>
          </div>

          {/* ─── Nuusflitse Sidebar (desktop only) ─── */}
          <NuusflitseSidebar />
        </div>
    </div>
  );
};

/** Memoized sidebar — does not depend on slide index, avoids re-render on slide change */
const NuusflitseSidebar = memo(() => (
  <aside className="hidden lg:flex flex-col w-[300px] shrink-0 bg-white dark:bg-card rounded-r-2xl border border-l-0 border-gray-200 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)]">
    {/* Header */}
    <div className="flex items-center gap-3 px-6 pt-6 pb-4">
      <div className="w-1.5 self-stretch bg-brand-red rounded-full" />
      <h3 className="font-normal text-brand-navy dark:text-foreground font-heading">
        {HOME_CONTENT.hero.sidebarTitle}
      </h3>
    </div>

    {/* News items — fill available space */}
    <div className="flex-1 flex flex-col divide-y divide-gray-100 dark:divide-border px-6 overflow-hidden">
      {LATEST_NEWS.slice(0, 4).map((news) => (
        <Link
          key={news.id}
          to={`/artikel/${generateArticleSlug(news.id, news.title)}`}
          className="group py-4 first:pt-3 last:pb-3 block"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-brand-red text-xs font-bold uppercase tracking-wide">
              {news.category}
            </span>
            <span className="text-gray-300 dark:text-gray-600 text-xs">&bull;</span>
            <span className="text-gray-400 dark:text-gray-500 text-xs">{news.time}</span>
          </div>
          <h3 className="font-normal text-brand-navy dark:text-foreground leading-snug group-hover:text-brand-red transition-colors font-heading is-style-card-compact">
            {news.title}
          </h3>
        </Link>
      ))}
    </div>

    {/* Footer button */}
    <div className="px-6 pb-6 pt-3">
      <Link
        to="/nuus"
        className="flex items-center justify-center w-full py-2.5 text-sm font-bold text-brand-navy dark:text-foreground border border-gray-300 dark:border-border rounded-lg hover:bg-brand-navy dark:hover:bg-muted hover:text-white hover:border-brand-navy dark:hover:border-border transition-colors"
      >
        {HOME_CONTENT.hero.loadMoreButton}
      </Link>
    </div>
  </aside>
));

NuusflitseSidebar.displayName = 'NuusflitseSidebar';

/** Mobile-only compact Nuusflitse — stacked headline list with red accent */
const NuusflitseMobile = memo(() => (
  <div className="lg:hidden bg-gray-50 dark:bg-card border border-gray-200 dark:border-border border-b-0 rounded-t-lg px-4 py-3">
    {/* Header */}
    <div className="flex items-center gap-2 mb-2">
      <div className="w-1 h-6 bg-brand-red rounded-full shrink-0" />
      <h3
        className="font-normal text-brand-navy dark:text-foreground font-heading text-xl"
        style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}
      >
        {HOME_CONTENT.hero.sidebarTitle}
      </h3>
      <div className="flex-1" />
      <Link
        to="/nuus"
        className="text-xs font-bold text-brand-red hover:text-brand-navy dark:hover:text-foreground transition-colors whitespace-nowrap"
      >
        Meer &rarr;
      </Link>
    </div>

    {/* Headline list */}
    <div className="flex flex-col">
      {LATEST_NEWS.slice(0, 4).map((news) => (
        <Link
          key={news.id}
          to={`/artikel/${generateArticleSlug(news.id, news.title)}`}
          className="group py-2 first:pt-0 last:pb-0"
        >
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-brand-red text-[10px] font-bold uppercase tracking-wide">
              {news.category}
            </span>
            <span className="text-gray-300 dark:text-gray-600 text-[10px]">&bull;</span>
            <span className="text-gray-400 dark:text-gray-500 text-[10px]">{news.time}</span>
          </div>
          <h3 className="font-normal text-brand-navy dark:text-foreground leading-snug group-hover:text-brand-red transition-colors font-heading text-sm line-clamp-1">
            {news.title}
          </h3>
        </Link>
      ))}
    </div>
  </div>
));

NuusflitseMobile.displayName = 'NuusflitseMobile';