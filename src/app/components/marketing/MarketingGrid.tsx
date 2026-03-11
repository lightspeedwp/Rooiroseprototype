import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { PostMegaphone as PostMegaphoneComponent } from './socials/PostMegaphone';
import { PostCostOfLiving as PostCostOfLivingComponent } from './socials/PostCostOfLiving';
import { PostFirstReader as PostFirstReaderComponent } from './socials/PostFirstReader';
import { PostInYourHands as PostInYourHandsComponent } from './socials/PostInYourHands';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SOCIAL_CARDS = [
  { id: 'megaphone', Component: PostMegaphoneComponent },
  { id: 'cost-of-living', Component: PostCostOfLivingComponent },
  { id: 'first-reader', Component: PostFirstReaderComponent },
  { id: 'in-your-hands', Component: PostInYourHandsComponent },
];

export const MarketingGrid = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(max-width: 767px)': { slidesToScroll: 1 },
      },
    },
    [Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

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
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full relative group/slider overflow-hidden rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)]">
      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-gray-50 dark:hover:bg-muted transition-[opacity,box-shadow,background-color] opacity-0 group-hover/slider:opacity-100 focus:opacity-100"
        aria-label="Vorige"
      >
        <ChevronLeft size={18} className="text-brand-navy dark:text-foreground" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-gray-50 dark:hover:bg-muted transition-[opacity,box-shadow,background-color] opacity-0 group-hover/slider:opacity-100 focus:opacity-100"
        aria-label="Volgende"
      >
        <ChevronRight size={18} className="text-brand-navy dark:text-foreground" />
      </button>

      {/* Embla Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {SOCIAL_CARDS.map(({ id, Component }) => (
            <div
              key={id}
              className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 px-3"
            >
              <div className="transform transition duration-500 hover:scale-[1.02] h-full">
                <Component />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
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