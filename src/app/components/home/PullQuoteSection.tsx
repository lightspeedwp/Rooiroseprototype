import React from 'react';
import { Quote } from 'lucide-react';

interface PullQuoteSectionProps {
  quote: string;
  author?: string;
  bgColor?: 'white' | 'grey' | 'blush';
}

/* ── rooi rose Magazine Pull Quote Section ──────────────────────────
 * Editorial feature: Large pull quotes between category sections
 * Typography: Playfair Display SC italic for elegance
 * ────────────────────────────────────────────────────────────────── */

export const PullQuoteSection = React.memo(({ quote, author, bgColor = 'grey' }: PullQuoteSectionProps) => {
  const bgColorMap = {
    white: 'bg-[var(--base)]',
    grey: 'bg-[#e8e5e2] dark:bg-[#2d2d2d]',  // --accent-soft-grey
    blush: 'bg-[#f4e5e0] dark:bg-[#3a2a28]', // --accent-blush
  };

  return (
    <section className={`py-16 md:py-24 ${bgColorMap[bgColor]}`}>
      <div className="max-w-[960px] mx-auto px-6 md:px-10">
        <div className="relative">
          {/* Decorative Quote Mark */}
          <div className="absolute -left-4 -top-4 text-[var(--custom-primary)] opacity-20">
            <Quote size={48} strokeWidth={1.5} />
          </div>
          
          {/* Pull Quote Text */}
          <blockquote className="relative border-l-4 border-[var(--custom-primary)] pl-8 md:pl-12">
            <p 
              className="font-display italic text-[var(--custom-primary)] text-2xl md:text-3xl leading-tight mb-4"
              style={{ 
                fontFamily: 'var(--font-display)', 
                letterSpacing: '0.02em',
                lineHeight: '1.3'
              }}
            >
              "{quote}"
            </p>
            
            {author && (
              <cite 
                className="not-italic font-body text-[var(--muted-foreground)] text-sm uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                — {author}
              </cite>
            )}
          </blockquote>
        </div>
      </div>
    </section>
  );
});

PullQuoteSection.displayName = 'PullQuoteSection';
