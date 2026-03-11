import type { TemplateCategory } from '../../../data/templateBrowserData';

export const PRIORITY_COLORS: Record<string, string> = {
  P0: 'bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-300',
  P1: 'bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-300',
  P2: 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300',
  P3: 'bg-gray-100 dark:bg-gray-500/20 text-gray-600 dark:text-gray-300',
};

export const CAT_COLORS: Record<TemplateCategory, string> = {
  standard: 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300',
  archive: 'bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300',
  single: 'bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-300',
  page: 'bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-300',
  taxonomy: 'bg-teal-100 dark:bg-teal-500/20 text-teal-600 dark:text-teal-300',
  special: 'bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-300',
};
