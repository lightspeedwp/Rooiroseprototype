/**
 * Mega Menu Panel Component
 * Handles 3 layout types: editorial, utility, and simple
 * 
 * @see /prompts/redesign/00-ORCHESTRATOR.md
 * @version 1.1.0
 * @date 2026-03-15
 */

import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router';
import type { MegaMenuConfig, NavItem } from '../../../types/navigation';
import { FeaturedCard } from './FeaturedCard';
import { TrendingList } from './TrendingList';
import { SubcategoryLinks } from './SubcategoryLinks';
import { Button } from '../../ui/button';
import { ChevronRight } from 'lucide-react';

interface MegaMenuPanelProps {
  navItem: NavItem;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const MegaMenuPanel: React.FC<MegaMenuPanelProps> = ({ 
  navItem, 
  isOpen, 
  onClose,
  className = '' 
}) => {
  const { megaMenu } = navItem;
  const panelRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<'left' | 'center' | 'right'>('center');

  // No mega menu configured - don't render panel
  if (!megaMenu) return null;

  const { layout, subcategories, featured, trending, cta } = megaMenu;

  // Smart positioning: prevent overflow and align towards screen center
  useEffect(() => {
    const handlePosition = () => {
      if (!panelRef.current) return;
      
      const panel = panelRef.current;
      const panelRect = panel.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const maxWidth = 1440; // Match container max-width
      const containerPadding = Math.max(16, viewportWidth * 0.04, 32); // Match clamp(1rem, 4vw, 2rem)
      const contentWidth = Math.min(viewportWidth, maxWidth);
      const leftEdge = (viewportWidth - contentWidth) / 2 + containerPadding;
      const rightEdge = viewportWidth - leftEdge;

      // Check if panel would overflow on the right
      if (panelRect.right > rightEdge) {
        setPosition('right');
      }
      // Check if panel would overflow on the left
      else if (panelRect.left < leftEdge) {
        setPosition('left');
      }
      // Otherwise, keep centered
      else {
        setPosition('center');
      }
    };

    // Run positioning check when hovering
    const timeout = setTimeout(handlePosition, 50);
    return () => clearTimeout(timeout);
  }, []);

  // Determine positioning classes
  const getPositionClass = () => {
    switch (position) {
      case 'left':
        return 'left-0'; // Align to left edge of parent
      case 'right':
        return 'right-0'; // Align to right edge of parent
      case 'center':
      default:
        return 'left-1/2 -translate-x-1/2'; // Center under parent
    }
  };

  // ═════════════��═════════════════════════════════
  // EDITORIAL LAYOUT (3-zone: subcategories + featured + trending)
  // ═══════════════════════════════════════════════
  if (layout === 'editorial') {
    const hasContent = subcategories && subcategories.length > 0;
    const hasFeatured = !!featured;
    const hasTrending = trending && trending.length > 0;

    return (
      <div
        className={`absolute top-full ${getPositionClass()} pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ${className}`}
        role="dialog"
        aria-label={`${navItem.label} menu`}
        ref={panelRef}
      >
        <div className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg shadow-xl dark:shadow-[var(--shadow-dark-500)] overflow-hidden min-w-[720px] max-w-[900px]">
          <div className="grid grid-cols-12 gap-6 p-6">
            
            {/* LEFT: Subcategory Links (7 columns) */}
            {hasContent && (
              <div className="col-span-7 border-r border-gray-200 dark:border-border pr-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-red mb-4 has-brand-serif-font-family" style={{ fontVariationSettings: 'var(--fvs-h6)', letterSpacing: 'var(--ls-h6)' }}>
                  {navItem.label}
                </h3>
                <SubcategoryLinks groups={subcategories} />
              </div>
            )}

            {/* RIGHT: Featured + Trending (5 columns) */}
            {(hasFeatured || hasTrending) && (
              <div className="col-span-5 space-y-6">
                {/* Featured Content Card */}
                {hasFeatured && (
                  <FeaturedCard content={featured} />
                )}

                {/* Trending List */}
                {hasTrending && (
                  <TrendingList items={trending} title="Gewild" />
                )}
              </div>
            )}
          </div>

          {/* Footer CTA */}
          {cta && (
            <div className="border-t border-gray-200 dark:border-border px-6 py-4 bg-gray-50 dark:bg-muted/30">
              <Link
                to={cta.href}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:underline"
              >
                {cta.label}
                <ChevronRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════
  // UTILITY LAYOUT (2-zone: groups + featured/trending on right)
  // Used for: Rooiwarm wenners, Wen, Shop
  // ═══════════════════════════════════════════════
  if (layout === 'utility') {
    const hasContent = subcategories && subcategories.length > 0;
    const hasFeatured = !!featured;
    const hasTrending = trending && trending.length > 0;

    return (
      <div
        className={`absolute top-full ${getPositionClass()} pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ${className}`}
        role="dialog"
        aria-label={`${navItem.label} menu`}
        ref={panelRef}
      >
        <div className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg shadow-xl dark:shadow-[var(--shadow-dark-500)] overflow-hidden min-w-[640px] max-w-[800px]">
          <div className="grid grid-cols-12 gap-6 p-6">
            
            {/* LEFT: Grouped Links (6-7 columns) */}
            {hasContent && (
              <div className={`${(hasFeatured || hasTrending) ? 'col-span-6' : 'col-span-12'} ${(hasFeatured || hasTrending) ? 'border-r border-gray-200 dark:border-border pr-6' : ''}`}>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-red mb-4 has-brand-serif-font-family" style={{ fontVariationSettings: 'var(--fvs-h6)', letterSpacing: 'var(--ls-h6)' }}>
                  {navItem.label}
                </h3>
                <SubcategoryLinks groups={subcategories} />
              </div>
            )}

            {/* RIGHT: Featured + Trending (5-6 columns) */}
            {(hasFeatured || hasTrending) && (
              <div className="col-span-6 space-y-6">
                {/* Featured Content Card */}
                {hasFeatured && (
                  <FeaturedCard content={featured} />
                )}

                {/* Trending List */}
                {hasTrending && (
                  <TrendingList items={trending} title="Gewild" />
                )}
              </div>
            )}
          </div>

          {/* Footer CTA */}
          {cta && (
            <div className="border-t border-gray-200 dark:border-border px-6 py-4 bg-gray-50 dark:bg-muted/30">
              <Link
                to={cta.href}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:underline"
              >
                {cta.label}
                <ChevronRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════
  // SIMPLE LAYOUT (No mega menu - just a link)
  // Used for: Kontak
  // ═══════════════════════════════════════════════
  // Simple layout doesn't render a panel at all
  return null;
};