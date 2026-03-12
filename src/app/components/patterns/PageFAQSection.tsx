import React, { useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { HelpCircle } from 'lucide-react';
import type { PageFAQItem } from '../../data/pageFaqs';
import { renderWithBrandItalics } from '../../utils/brandItalics';
import { injectFAQSchema, cleanupFAQSchema } from '../../utils/structuredData';

interface PageFAQSectionProps {
  title?: string;
  description?: string;
  items: PageFAQItem[];
  /** Optional: 'light' (white bg) or 'muted' (gray bg) */
  variant?: 'light' | 'muted';
  className?: string;
}

/**
 * Reusable FAQ accordion section for static pages.
 * Uses the align-wide container standard internally.
 */
export const PageFAQSection: React.FC<PageFAQSectionProps> = ({
  title = 'Algemene vrae',
  description,
  items,
  variant = 'muted',
  className = '',
}) => {
  // Inject FAQPage JSON-LD structured data for Google rich results
  useEffect(() => {
    if (items && items.length > 0) {
      injectFAQSchema(items);
    }
    return () => cleanupFAQSchema();
  }, [items]);

  if (!items || items.length === 0) return null;

  const bgClass = variant === 'muted' ? 'bg-gray-50 dark:bg-background' : 'bg-white dark:bg-background';

  return (
    <section className={`${bgClass} py-12 md:py-16 ${className}`}>
      <div className="alignwide">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <HelpCircle className="w-6 h-6 text-brand-red shrink-0" />
          <h2
            className="font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family"
            style={{
              fontVariationSettings: "var(--fvs-h2)",
              lineHeight: 'var(--lh-h2)',
              letterSpacing: 'var(--ls-h2)',
              fontSize: 'clamp(var(--text-h2), 2vw + 1rem, var(--text-h1))',
            }}
          >
            {title}
          </h2>
        </div>
        {description && (
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto text-center">
            {renderWithBrandItalics(description)}
          </p>
        )}
        {!description && <div className="mb-8" />}

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b border-gray-200 dark:border-border">
                <AccordionTrigger className="py-5 text-left text-brand-navy dark:text-foreground hover:text-brand-red hover:no-underline data-[state=open]:text-brand-red font-medium">
                  <span dangerouslySetInnerHTML={{ __html: item.question }} />
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span dangerouslySetInnerHTML={{ __html: item.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};