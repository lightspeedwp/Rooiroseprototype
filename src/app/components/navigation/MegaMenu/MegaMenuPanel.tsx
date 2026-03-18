/**
 * Mega Menu Panel Component
 * Handles 3 layout types: editorial, utility, and simple
 * 
 * Features:
 * - Smart positioning: Opens towards viewport center based on parent location
 * - Left third of screen: Panel aligns to left edge (extends right)
 * - Right third of screen: Panel aligns to right edge (extends left)
 * - Center third: Panel centers under parent
 * 
 * @see /prompts/redesign/00-ORCHESTRATOR.md
 * @version 1.2.0
 * @date 2026-03-16
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
  const parentRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<'left' | 'center' | 'right'>('center');

  // No mega menu configured - don't render panel
  if (!megaMenu) return null;

  const { layout, subcategories, featured, trending, cta } = megaMenu;

  // Smart positioning: open towards screen center based on parent position
  useEffect(() => {
    const handlePosition = () => {
      if (!panelRef.current) return;
      
      const panel = panelRef.current;
      const parent = panel.parentElement; // The nav item wrapper
      if (!parent) return;
      
      const parentRect = parent.getBoundingClientRect();
      const panelWidth = panel.offsetWidth;
      const viewportWidth = window.innerWidth;
      const viewportCenter = viewportWidth / 2;
      const parentCenter = parentRect.left + (parentRect.width / 2);
      
      // Calculate where panel would be positioned with each alignment
      const panelLeftIfCentered = parentCenter - (panelWidth / 2);
      const panelRightIfCentered = parentCenter + (panelWidth / 2);
      const panelRightIfLeft = parentRect.left + panelWidth;
      const panelLeftIfRight = parentRect.right - panelWidth;
      
      const margin = 20; // Minimum distance from viewport edge
      
      // Strategy: Open towards the center of the viewport
      // If parent is on LEFT third of screen → align LEFT (panel extends right towards center)
      // If parent is on RIGHT third of screen → align RIGHT (panel extends left towards center)  
      // If parent is in CENTER third → center the panel
      
      const leftThird = viewportWidth / 3;
      const rightThird = (viewportWidth / 3) * 2;
      
      // Parent is in LEFT third - align to left edge of parent
      if (parentCenter < leftThird) {
        // Verify it fits on screen
        if (panelRightIfLeft <= viewportWidth - margin) {
          setPosition('left');
        } else {
          setPosition('center'); // Fallback
        }
      }
      // Parent is in RIGHT third - align to right edge of parent
      else if (parentCenter > rightThird) {
        // Verify it fits on screen
        if (panelLeftIfRight >= margin) {
          setPosition('right');
        } else {
          setPosition('center'); // Fallback
        }
      }
      // Parent is in CENTER third - center the panel
      else {
        // Verify centering fits on screen
        if (panelLeftIfCentered >= margin && panelRightIfCentered <= viewportWidth - margin) {
          setPosition('center');
        } else if (panelLeftIfCentered < margin) {
          setPosition('left'); // Too far left, align left instead
        } else {
          setPosition('right'); // Too far right, align right instead
        }
      }
    };

    // Run positioning check when component mounts and on hover
    handlePosition();
    window.addEventListener('resize', handlePosition);
    
    return () => {
      window.removeEventListener('resize', handlePosition);
    };
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

  // ══════════════════════════════════════════════
  // EDITORIAL LAYOUT (3-zone: subcategories + featured + trending)
  // ═══════════════════════════════════════════════
  if (layout === 'editorial') {
    const hasContent = subcategories && subcategories.length > 0;
    const hasFeatured = !!featured;
    const hasTrending = trending && trending.length > 0;

    return (
      <div
        className={`mega-menu mega-menu--editorial absolute top-full ${getPositionClass()} pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ${className}`}
        role="dialog"
        aria-label={`${navItem.label} menu`}
        ref={panelRef}
      >
        <div className="mega-menu__panel bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg shadow-xl dark:shadow-[var(--shadow-dark-500)] overflow-hidden min-w-[720px] max-w-[900px]">
          <div className="mega-menu__content grid grid-cols-12 gap-6 p-6">
            
            {/* LEFT: Subcategory Links (7 columns) */}
            {hasContent && (
              <div className="mega-menu__section mega-menu__section--subcategories col-span-7 border-r border-gray-200 dark:border-border pr-6">
                <h3 className="mega-menu__section-title text-xs font-bold uppercase tracking-[0.15em] text-brand-red mb-4 has-brand-serif-font-family" style={{ fontVariationSettings: 'var(--fvs-h6)', letterSpacing: 'var(--ls-h6)' }}>
                  {navItem.label}
                </h3>
                <SubcategoryLinks groups={subcategories} />
              </div>
            )}

            {/* RIGHT: Featured + Trending (5 columns) */}
            {(hasFeatured || hasTrending) && (
              <div className="mega-menu__section mega-menu__section--highlights col-span-5 space-y-6">
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
            <div className="mega-menu__footer border-t border-gray-200 dark:border-border px-6 py-4 bg-gray-50 dark:bg-muted/30">
              <Link
                to={cta.href}
                className="mega-menu__cta inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:underline"
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
        className={`mega-menu mega-menu--utility absolute top-full ${getPositionClass()} pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ${className}`}
        role="dialog"
        aria-label={`${navItem.label} menu`}
        ref={panelRef}
      >
        <div className="mega-menu__panel bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg shadow-xl dark:shadow-[var(--shadow-dark-500)] overflow-hidden min-w-[640px] max-w-[800px]">
          <div className="mega-menu__content grid grid-cols-12 gap-6 p-6">
            
            {/* LEFT: Grouped Links (6-7 columns) */}
            {hasContent && (
              <div className={`mega-menu__section mega-menu__section--subcategories ${(hasFeatured || hasTrending) ? 'col-span-6' : 'col-span-12'} ${(hasFeatured || hasTrending) ? 'border-r border-gray-200 dark:border-border pr-6' : ''}`}>
                <h3 className="mega-menu__section-title text-xs font-bold uppercase tracking-[0.15em] text-brand-red mb-4 has-brand-serif-font-family" style={{ fontVariationSettings: 'var(--fvs-h6)', letterSpacing: 'var(--ls-h6)' }}>
                  {navItem.label}
                </h3>
                <SubcategoryLinks groups={subcategories} />
              </div>
            )}

            {/* RIGHT: Featured + Trending (5-6 columns) */}
            {(hasFeatured || hasTrending) && (
              <div className="mega-menu__section mega-menu__section--highlights col-span-6 space-y-6">
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
            <div className="mega-menu__footer border-t border-gray-200 dark:border-border px-6 py-4 bg-gray-50 dark:bg-muted/30">
              <Link
                to={cta.href}
                className="mega-menu__cta inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:underline"
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