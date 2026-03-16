/**
 * Navigation Types for rooi rose Magazine
 * Mega Menu Data Architecture
 * 
 * @see /prompts/redesign/00-ORCHESTRATOR.md
 * @version 1.0.0
 * @date 2026-03-15
 */

// ═══════════════════════════════════════════════
// Core Navigation Types
// ═══════════════════════════════════════════════

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  badge?: string; // e.g., "New", "Popular", "Hot"
  icon?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  megaMenu?: MegaMenuConfig;
}

// ═══════════════════════════════════════════════
// Mega Menu Configuration
// ═══════════════════════════════════════════════

export type MegaMenuLayout = 'editorial' | 'utility' | 'simple';

export interface MegaMenuConfig {
  layout: MegaMenuLayout;
  subcategories?: SubcategoryGroup[];
  featured?: FeaturedContent;
  trending?: TrendingItem[];
  cta?: CallToAction;
}

// ═══════════════════════════════════════════════
// Subcategory Structure
// ═══════════════════════════════════════════════

export interface SubcategoryGroup {
  title?: string; // Optional group title (e.g., "Awards", "Kompetisies")
  links: NavLink[];
  columns?: 1 | 2; // Column layout for subcategories
}

// ═══════════════════════════════════════════════
// Featured Content
// ═══════════════════════════════════════════════

export interface FeaturedContent {
  title: string;
  href: string;
  excerpt: string;
  imageUrl: string;
  categoryLabel: string;
  author?: string;
  date?: string;
  readTime?: string;
}

// ═══════════════════════════════════════════════
// Trending Content
// ═══════════════════════════════════════════════

export interface TrendingItem {
  title: string;
  href: string;
  categoryLabel?: string;
  timestamp?: string;
  badge?: string; // e.g., "Hot", "New"
}

// ═══════════════════════════════════════════════
// Call to Action
// ═══════════════════════════════════════════════

export interface CallToAction {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
}

// ═══════════════════════════════════════════════
// Breadcrumbs
// ═══════════════════════════════════════════════

export interface Breadcrumb {
  label: string;
  href?: string;
  current?: boolean;
}

export interface BreadcrumbConfig {
  items: Breadcrumb[];
  separator?: 'arrow' | 'slash' | 'chevron';
}

// ═══════════════════════════════════════════════
// Navigation State
// ═══════════════════════════════════════════════

export interface NavigationState {
  activeMenu: string | null;
  mobileMenuOpen: boolean;
  searchOpen: boolean;
}

export interface MenuTrigger {
  id: string;
  type: 'hover' | 'click' | 'focus';
  closeDelay?: number; // milliseconds
}

// ═══════════════════════════════════════════════
// Footer Navigation
// ═══════════════════════════════════════════════

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface FooterNavigation {
  columns: FooterColumn[];
  social: NavLink[];
  legal: NavLink[];
  copyright: string;
}

// ═══════════════════════════════════════════════
// Content Selectors (for dynamic content)
// ═══════════════════════════════════════════════

export interface ContentSelector {
  getFeaturedContent: (categoryId: string) => FeaturedContent | null;
  getTrendingContent: (categoryId: string, limit?: number) => TrendingItem[];
}
