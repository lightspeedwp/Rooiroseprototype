import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TOP_STORIES } from '../../data/articles';
import { HeroSlideCard } from '../common/HeroSlideCard';

/**
 * HeroSlider - Featured articles slider for the homepage.
 * Auto-advances every 6 seconds with manual prev/next controls.
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
    <div className="alignfull">
        <div className="relative h-[500px] lg:h-[600px]">
          {/* Slider — full width */}
          <div
            className="w-full h-full relative overflow-hidden"
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
                className="absolute left-3 bottom-3 w-10 h-10 rounded-md bg-black/50 text-white/80 flex items-center justify-center hover:bg-black/70 hover:text-white transition-colors backdrop-blur-sm z-10 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
                aria-label="Vorige"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={(e) => { e.preventDefault(); next(); }}
                className="absolute right-3 bottom-3 w-10 h-10 rounded-md bg-black/50 text-white/80 flex items-center justify-center hover:bg-black/70 hover:text-white transition-colors backdrop-blur-sm z-10 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
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
                    className={`h-1.5 rounded-full transition-[width,background-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 ${
                      i === current ? 'w-6 bg-brand-red' : 'w-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Skuif ${i + 1}`}
                  />
                ))}
              </div>
            </HeroSlideCard>
          </div>
        </div>
    </div>
  );
};