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
          <div className="max-w-xl mx-auto">
            <div className="bg-white dark:bg-card rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border overflow-hidden">
              {/* Header */}
              <div className="bg-brand-navy dark:bg-background p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={40} className="text-green-400" />
                </div>
                <h1
                  className="text-3xl font-normal text-white font-heading mb-2"
                  style={{
                    fontVariationSettings: 'var(--fvs-h1)',
                    lineHeight: 'var(--lh-h1)',
                    letterSpacing: 'var(--ls-h1)',
                  }}
                >
                  {title}
                </h1>
                <p className="text-gray-300">{subtitle}</p>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                {children}

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold">
                    <Link to={primaryAction.href}>
                      {primaryAction.label}
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                  {secondaryAction && (
                    <Button asChild variant="outline">
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