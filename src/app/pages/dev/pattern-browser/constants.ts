import React from 'react';
import {
  Archive, LayoutGrid, Megaphone, PanelBottom, PanelTop, EyeOff,
  Image, Menu, FileText, Component, Database, Layers, PanelRight,
  ShoppingCart, Circle, Clock, CheckCircle2
} from 'lucide-react';
import type { PatternFolder, PatternPriority, PatternStatus, SyncType } from '../../../data/patternBrowserData';

// ─── Folder icon map ────────────────────────────────────────────────────────
export const FOLDER_ICONS: Record<PatternFolder, React.ElementType> = {
  archive: Archive,
  card: LayoutGrid,
  cta: Megaphone,
  footer: PanelBottom,
  header: PanelTop,
  hidden: EyeOff,
  icon: Image,
  navigation: Menu,
  page: FileText,
  parts: Component,
  query: Database,
  section: Layers,
  sidebar: PanelRight,
  woocommerce: ShoppingCart,
};

// ─── Priority / Status / Sync metadata ──────────────────────────────────────

export const PRIORITY_COLORS: Record<PatternPriority, string> = {
  P0: 'bg-red-500/20 text-red-400 border border-red-500/30',
  P1: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  P2: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  P3: 'bg-gray-500/20 text-gray-400 border border-gray-500/30',
};

export const SYNC_COLORS: Record<SyncType, string> = {
  Full: 'bg-green-500/20 text-green-400',
  None: 'bg-gray-500/20 text-gray-400',
  Part: 'bg-cyan-500/20 text-cyan-400',
};

export const STATUS_META: Record<PatternStatus, { labelAf: string; labelEn: string; icon: typeof Circle; color: string; bgColor: string }> = {
  'not-started': { labelAf: 'Nie Begin', labelEn: 'Not Started', icon: Circle, color: 'text-gray-400', bgColor: 'bg-gray-500/10' },
  'in-progress': { labelAf: 'Besig', labelEn: 'In Progress', icon: Clock, color: 'text-amber-400', bgColor: 'bg-amber-500/10' },
  'complete': { labelAf: 'Voltooi', labelEn: 'Complete', icon: CheckCircle2, color: 'text-green-400', bgColor: 'bg-green-500/10' },
};

export const USAGE_STYLES: Record<string, { color: string; bg: string }> = {
  template: { color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
  part: { color: 'text-teal-400', bg: 'bg-teal-500/10' },
  'page-content': { color: 'text-amber-400', bg: 'bg-amber-500/10' },
  inline: { color: 'text-violet-400', bg: 'bg-violet-500/10' },
};
