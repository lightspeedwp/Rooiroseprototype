/**
 * ThankYouLayout — Shared layout for all "Dankie" / Thank You confirmation pages.
 *
 * Provides: PageContainer + breadcrumbs, navy header with CheckCircle icon,
 * white card wrapper, action buttons, and PageFAQSection.
 * Content (middle section) is passed via `children`.
 *
 * Extracted for DRY (2026-03-05 memory optimization, Task #52).
 * Used by: ThankYouContact, ThankYouNewsletter, ThankYouRegistration,
 *          ThankYouSubmission, ThankYouAdvertising, ThankYouCompetition.
 * 
 * Updated 2026-03-12: Editorial magazine redesign with improved typography and spacing
 */
import React from 'react';
import { Link } from 'react-router';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { PageContainer } from '../common/PageContainer';
import { PageFAQSection } from '../patterns/PageFAQSection';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ActionButton {
  label: string;
  href: string;
}

interface ThankYouLayoutProps {
  /** Breadcrumb trail */
  breadcrumbs: BreadcrumbItem[];
  /** H1 heading text */
  title: React.ReactNode;
  /** Subtitle below heading */
  subtitle: React.ReactNode;
  /** Primary CTA button (red, with arrow icon) */
  primaryAction: ActionButton;
  /** Secondary CTA button (outline style) */
  secondaryAction?: ActionButton;
  /** FAQ items for bottom section */
  faqItems: Array<{ question: string; answer: string }>;
  /** FAQ section description */
  faqDescription: string;
  /** Variable content inside the card (success banner, info boxes, etc.) */
  children: React.ReactNode;
}

export function ThankYouLayout({
  breadcrumbs,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  faqItems,
  faqDescription,
  children,
}: ThankYouLayoutProps) {
  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-20">
      <PageContainer breadcrumbs={breadcrumbs}>
        <div className="alignwide py-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-card rounded-xl shadow-md dark:shadow-[var(--shadow-dark-200)] border border-gray-200 dark:border-border overflow-hidden">
              {/* Header - Editorial Navy Background */}
              <div className="bg-brand-navy dark:bg-brand-navy p-10 lg:p-12 text-center">
                {/* Success Icon Badge */}
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} className="text-green-400" strokeWidth={2} />
                </div>
                
                {/* Title - Editorial Typography */}
                <h1
                  className="text-3xl lg:text-4xl font-normal text-white mb-4 has-brand-serif-font-family uppercase tracking-wider"
                  style={{
                    fontVariationSettings: 'var(--fvs-h1)',
                    lineHeight: 'var(--lh-h1)',
                    letterSpacing: 'var(--ls-h1)',
                  }}
                >
                  {title}
                </h1>
                
                {/* Subtitle */}
                <p className="text-lg text-gray-300 leading-relaxed max-w-lg mx-auto">{subtitle}</p>
              </div>

              {/* Content - Generous Padding */}
              <div className="p-8 md:p-10 lg:p-12 space-y-8">
                {children}

                {/* Action Buttons - Editorial Spacing */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-6 py-3 text-base">
                    <Link to={primaryAction.href}>
                      {primaryAction.label}
                      <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </Button>
                  {secondaryAction && (
                    <Button asChild variant="outline" className="px-6 py-3 text-base font-medium border-2">
                      <Link to={secondaryAction.href}>{secondaryAction.label}</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
      <PageFAQSection items={faqItems} description={faqDescription} />
    </div>
  );
}