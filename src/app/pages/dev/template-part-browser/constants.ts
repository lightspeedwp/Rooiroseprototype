import { PanelTop, PanelBottom, PanelRight, Tag, ShoppingCart, Layers } from 'lucide-react';
import type { TemplatePartEntry } from '../../../data/templatePartBrowserData';

export const AREA_COLORS: Record<TemplatePartEntry['area'], string> = {
  header: 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300',
  footer: 'bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-300',
  sidebar: 'bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-300',
  'post-meta': 'bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300',
  woocommerce: 'bg-rose-100 dark:bg-rose-500/20 text-rose-600 dark:text-rose-300',
  uncategorized: 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/50',
};

export const AREA_ICONS: Record<TemplatePartEntry['area'], typeof PanelTop> = {
  header: PanelTop,
  footer: PanelBottom,
  sidebar: PanelRight,
  'post-meta': Tag,
  woocommerce: ShoppingCart,
  uncategorized: Layers,
};

export const PRIORITY_COLORS: Record<string, string> = {
  P0: 'bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-300',
  P1: 'bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-300',
  P2: 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300',
};
