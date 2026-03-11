import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ALL_QUOTES } from './presets';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface QuoteSliderProps {
  className?: string;
}

export const QuoteSlider: React.FC<QuoteSliderProps> = ({ className = '' }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <div className={`w-full relative group/slider overflow-hidden rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)] ${className}`}>
      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-gray-50 dark:hover:bg-muted transition-[box-shadow,background-color,opacity] opacity-0 group-hover/slider:opacity-100 focus:opacity-100"
        aria-label="Vorige"
      >
        <ChevronLeft size={18} className="text-brand-navy dark:text-foreground" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-gray-50 dark:hover:bg-muted transition-[box-shadow,background-color,opacity] opacity-0 group-hover/slider:opacity-100 focus:opacity-100"
        aria-label="Volgende"
      >
        <ChevronRight size={18} className="text-brand-navy dark:text-foreground" />
      </button>

      {/* Embla Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {ALL_QUOTES.map(({ id, Component }) => (
            <div key={id} className="flex-[0_0_100%] min-w-0 min-h-[500px]">
              <Component />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {ALL_QUOTES.map(({ id }, i) => (
          <button
            key={id}
            onClick={() => scrollTo(i)}
            className={`h-2.5 rounded-full transition-[width,background-color] duration-300 ${
              i === selectedIndex
                ? 'w-6 bg-brand-red'
                : 'w-2.5 bg-gray-300 dark:bg-muted'
            }`}
            aria-label={`Skuif ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};