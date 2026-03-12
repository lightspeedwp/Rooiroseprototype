import React from 'react';
import { Breadcrumbs, type BreadcrumbItem } from '../parts/Breadcrumbs';

interface PageContainerProps {
  /** Breadcrumb items (Tuisblad is added automatically by Breadcrumbs). Omit for pages that don't need breadcrumbs (Home, 404). */
  breadcrumbs?: BreadcrumbItem[];
  /** Page content rendered inside the align-wide container. */
  children: React.ReactNode;
  /** Additional classes for the container div (e.g. extra bottom padding). */
  className?: string;
  /** Skip the default `pt-8` top padding after breadcrumbs. Default: false. */
  noPadding?: boolean;
}

/**
 * Standard align-wide page container for *rooi rose*.
 *
 * Provides:
 * - `.alignwide` container (1440px max-width, 16→32px fluid padding)
 * - Optional `<Breadcrumbs>` as first child (no extra top padding above it)
 * - `pt-8` spacing between breadcrumbs and content (overridable via `noPadding`)
 *
 * **Usage:**
 * ```tsx
 * <div className="min-h-screen bg-gray-50">
 *   <PageContainer breadcrumbs={[{ label: 'Oor ons' }]}>
 *     <h1>Page Title</h1>
 *     ...content...
 *   </PageContainer>
 *   <PageFAQSection items={ABOUT_FAQS} />
 * </div>
 * ```
 *
 * The outer wrapper (min-h-screen, background, etc.) stays in the page file
 * so that full-width siblings like `<PageFAQSection>` can sit alongside.
 */
export const PageContainer: React.FC<PageContainerProps> = ({
  breadcrumbs,
  children,
  className = '',
  noPadding = false,
}) => (
  <div className={`alignwide ${className}`.trim()}>
    {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
    <div className={noPadding ? '' : 'pt-8'}>
      {children}
    </div>
  </div>
);