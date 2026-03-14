import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
// Motion removed — chevron rotation + accordion height replaced with CSS (PERF-042)
import {
  X, Home, ArrowRight, ChevronDown,
  Layers, Map, Database, Globe, Palette,
  Wrench, Mail, LayoutGrid, Settings, FileStack, Rocket, FileImage,
  LayoutTemplate, Paintbrush, LayoutDashboard, Puzzle, FolderOpen, Sparkles, FileJson,
  SlidersHorizontal, Blocks, ShoppingCart, FormInput,
} from 'lucide-react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { Newspaper } from '../../components/icons/NewspaperIcon';

interface NavItem {
  path: string;
  labelAf: string;
  labelEn: string;
  icon: React.FC<{ size?: number; className?: string }>;
  color: string;
  exact?: boolean;
}

interface SectionDef {
  id: string;
  titleAf: string;
  titleEn: string;
  sectionPath: string;
  icon: React.FC<{ size?: number; className?: string }>;
  iconColor: string;
  items: NavItem[];
}

const PROTOTYPE_TOOLS: NavItem[] = [
  { path: '/ontwikkelaar/ontwerpstelsel', labelAf: 'Ontwerpstelsel', labelEn: 'Design System', icon: Palette, color: 'text-purple-400' },
  { path: '/ontwikkelaar/komponente', labelAf: 'Komponente', labelEn: 'Components', icon: Layers, color: 'text-blue-400' },
  { path: '/ontwikkelaar/roetes', labelAf: 'Roetekaart', labelEn: 'Route Map', icon: Map, color: 'text-green-400' },
  { path: '/ontwikkelaar/data', labelAf: 'Datastruktuur', labelEn: 'Data Browser', icon: Database, color: 'text-amber-400' },
  { path: '/ontwikkelaar/ikone', labelAf: 'Ikoonblaaier', labelEn: 'Icon Browser', icon: Sparkles, color: 'text-yellow-400' },
];

const WP_MIGRATION_TOOLS: NavItem[] = [
  { path: '/ontwikkelaar/wordpress', labelAf: 'WordPress Migrasie', labelEn: 'WordPress Migration', icon: Globe, color: 'text-indigo-400' },
  { path: '/ontwikkelaar/temaJson', labelAf: 'Theme.json Blaaier', labelEn: 'Theme.json Viewer', icon: FileJson, color: 'text-emerald-400' },
  { path: '/ontwikkelaar/voorinstellings', labelAf: 'Voorinstellings', labelEn: 'Presets Browser', icon: SlidersHorizontal, color: 'text-amber-400' },
  { path: '/ontwikkelaar/ollie', labelAf: 'Ollie Tema', labelEn: 'Ollie Theme', icon: Blocks, color: 'text-blue-400' },
  { path: '/ontwikkelaar/patrone', labelAf: 'Patroonblaaier', labelEn: 'Pattern Browser', icon: LayoutTemplate, color: 'text-fuchsia-400' },
  { path: '/ontwikkelaar/afdeling-style', labelAf: 'Afdeling-style', labelEn: 'Section Styles', icon: LayoutGrid, color: 'text-violet-400' },
  { path: '/ontwikkelaar/blok-styl', labelAf: 'Blok-stylblaaier', labelEn: 'Block Styles', icon: Paintbrush, color: 'text-pink-400' },
  { path: '/ontwikkelaar/blokke', labelAf: 'Blokblaaier', labelEn: 'Blocks Browser', icon: Blocks, color: 'text-cyan-400' },
  { path: '/ontwikkelaar/sjablone', labelAf: 'Template-blaaier', labelEn: 'Templates', icon: LayoutDashboard, color: 'text-indigo-400' },
  { path: '/ontwikkelaar/sjablone-onderdeel', labelAf: 'Template-deelblaaier', labelEn: 'Template Parts', icon: Puzzle, color: 'text-cyan-400' },
  { path: '/ontwikkelaar/inc-map', labelAf: 'Inc-lêerblaaier', labelEn: 'Inc/ Files', icon: FolderOpen, color: 'text-orange-400' },
  { path: '/ontwikkelaar/e-editions-handel', labelAf: 'E-Uitgawes Handel', labelEn: 'E-Editions Commerce', icon: ShoppingCart, color: 'text-emerald-400' },
];

const REFERENCE_TOOLS: NavItem[] = [
  { path: '/ontwikkelaar/riglyne', labelAf: 'Riglyne', labelEn: 'Guidelines', icon: Newspaper, color: 'text-emerald-400' },
  { path: '/ontwikkelaar/inhoud', labelAf: 'Inhoud', labelEn: 'Content Browser', icon: FileStack, color: 'text-cyan-400' },
  { path: '/ontwikkelaar/beelde', labelAf: 'Beeldbateblaaier', labelEn: 'Image Assets', icon: FileImage, color: 'text-sky-400' },
];

const OPERATIONS_TOOLS: NavItem[] = [
  { path: '/ontwikkelaar/lansering', labelAf: 'Lansering Kontrolelys', labelEn: 'Launch Checklist', icon: Rocket, color: 'text-orange-400' },
  { path: '/ontwikkelaar/e-pos-voorskou', labelAf: 'E-pos Voorskou', labelEn: 'Email Previews', icon: Mail, color: 'text-rose-400' },
  { path: '/ontwikkelaar/stelselkonfig', labelAf: 'Stelselkonfigurasie', labelEn: 'System Config', icon: Settings, color: 'text-purple-400' },
  { path: '/ontwikkelaar/form-builder-preview', labelAf: 'Vormpatroon-galery', labelEn: 'Form Pattern Gallery', icon: FormInput, color: 'text-teal-400' },
];

const SECTIONS: SectionDef[] = [
  {
    id: 'prototype',
    titleAf: 'Prototipe Gereedskap',
    titleEn: 'Prototype Tools',
    sectionPath: '/ontwikkelaar/prototipe',
    icon: Palette,
    iconColor: 'text-purple-400',
    items: PROTOTYPE_TOOLS,
  },
  {
    id: 'wordpress',
    titleAf: 'WordPress Migrasie',
    titleEn: 'WordPress Migration',
    sectionPath: '/ontwikkelaar/wordpress',
    icon: Globe,
    iconColor: 'text-indigo-400',
    items: WP_MIGRATION_TOOLS,
  },
  {
    id: 'reference',
    titleAf: 'Verwysings',
    titleEn: 'Reference',
    sectionPath: '/ontwikkelaar/verwysings',
    icon: FileStack,
    iconColor: 'text-emerald-400',
    items: REFERENCE_TOOLS,
  },
  {
    id: 'operations',
    titleAf: 'Bedrywighede & Lansering',
    titleEn: 'Operations & Launch',
    sectionPath: '/ontwikkelaar/bedrywighede',
    icon: Rocket,
    iconColor: 'text-orange-400',
    items: OPERATIONS_TOOLS,
  },
];

interface DevFullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function isActive(itemPath: string, pathname: string): boolean {
  return pathname === itemPath || pathname.startsWith(itemPath + '/');
}

/** Check if any tool in a section is currently active */
function sectionHasActive(items: NavItem[], pathname: string): boolean {
  return items.some((item) => isActive(item.path, pathname));
}

/**
 * DevFullScreenMenu — Immersive full-screen navigation overlay.
 *
 * Opens on burger click. Shows all dev tools organized in 4 logical groups:
 * - Prototype Tools (5)
 * - WordPress Migration (11)
 * - Reference (3)
 * - Operations & Launch (3)
 *
 * Desktop (≥768px): 2-column layout with all sections expanded by default.
 * Mobile (<768px): Accordion-style collapsible sections, 44px touch targets.
 * Smooth expand/collapse animation via Motion.
 */
export const DevFullScreenMenu: React.FC<DevFullScreenMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const { pathname } = useLocation();
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';
  const overlayRef = useRef<HTMLDivElement>(null);

  // Track which sections are expanded — on mobile, default to only the active section open
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile breakpoint
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Reset expanded state when menu opens
  useEffect(() => {
    if (isOpen) {
      if (isMobile) {
        // On mobile, only expand the section containing the active route
        const activeSection = SECTIONS.find((s) => sectionHasActive(s.items, pathname));
        setExpandedSections(activeSection ? new Set([activeSection.id]) : new Set());
      } else {
        // On desktop, all sections expanded
        setExpandedSections(new Set(SECTIONS.map((s) => s.id)));
      }
    }
  }, [isOpen, isMobile, pathname]);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Touch swipe-to-close (swipe down from top)
  useEffect(() => {
    if (!isOpen || !overlayRef.current) return;
    let startY = 0;
    let startX = 0;
    const el = overlayRef.current;

    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const deltaY = e.changedTouches[0].clientY - startY;
      const deltaX = Math.abs(e.changedTouches[0].clientX - startX);
      // Swipe down > 100px with minimal horizontal movement
      if (deltaY > 100 && deltaX < 50 && el.scrollTop <= 0) {
        onClose();
      }
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-white dark:bg-[#080D16] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={t('menu.navLabel')}
    >
      {/* Menu header */}
      <div className="sticky top-0 z-10 border-b border-gray-200 dark:border-white/10 bg-white/95 dark:bg-[#080D16]/95 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 h-14 flex items-center justify-between">
          <Link
            to="/ontwikkelaar"
            onClick={onClose}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-7 h-7 rounded-lg bg-brand-red flex items-center justify-center">
              <Wrench size={14} className="text-white" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-900 dark:text-white">
              Dev Tools
            </span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={t('menu.close')}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Menu body */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-8 sm:py-10">
        {/* Dev Hub card */}
        <Link
          to="/ontwikkelaar"
          onClick={onClose}
          className={`flex items-center gap-4 px-5 py-4 rounded-xl border transition-all mb-8 sm:mb-10 ${
            pathname === '/ontwikkelaar'
              ? 'bg-brand-red/10 dark:bg-brand-red/15 border-brand-red/30'
              : 'bg-gray-50 dark:bg-white/[0.03] border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5'
          }`}
        >
          <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center">
            <Wrench size={18} className="text-white" />
          </div>
          <div>
            <span className="text-sm text-gray-900 dark:text-white">
              {t('menu.devPortal')}
            </span>
            <p className="text-[11px] text-gray-500 dark:text-white/40">
              {t('menu.devPortalDesc')}
            </p>
          </div>
          <ArrowRight size={14} className="ml-auto text-gray-400 dark:text-white/20" />
        </Link>

        {/* Navigation groups — 2-column grid on desktop, stacked accordion on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-8">
          {SECTIONS.map((section) => {
            const SectionIcon = section.icon;
            const isExpanded = expandedSections.has(section.id);
            const hasActive = sectionHasActive(section.items, pathname);
            const sectionTitle = isAf ? section.titleAf : section.titleEn;

            return (
              <div key={section.id} className="mb-2 md:mb-0">
                {/* Section header — clickable to expand/collapse on mobile */}
                <div className="flex items-center gap-2 mb-1 md:mb-3">
                  {/* Expand/collapse toggle (mobile) or section link (desktop) */}
                  <button
                    onClick={() => {
                      if (isMobile) {
                        toggleSection(section.id);
                      }
                    }}
                    className="md:hidden flex items-center gap-2.5 w-full min-h-[44px] px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                    aria-expanded={isExpanded}
                    aria-controls={`section-${section.id}`}
                  >
                    <SectionIcon
                      size={16}
                      className={hasActive ? section.iconColor : 'text-gray-400 dark:text-white/30'}
                    />
                    <span className={`text-[11px] font-bold uppercase tracking-[0.15em] flex-1 text-left ${
                      hasActive
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-400 dark:text-white/25'
                    }`}>
                      {sectionTitle}
                    </span>
                    <span className="text-[10px] text-gray-400 dark:text-white/20 mr-1">
                      {section.items.length}
                    </span>
                    <div
                      className={`transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    >
                      <ChevronDown size={14} className="text-gray-400 dark:text-white/25" />
                    </div>
                  </button>

                  {/* Desktop header — always visible, links to section landing */}
                  <div className="hidden md:flex items-center gap-2 w-full">
                    <Link
                      to={section.sectionPath}
                      onClick={onClose}
                      className="group inline-flex items-center gap-2 mb-0"
                    >
                      <SectionIcon
                        size={13}
                        className={hasActive ? section.iconColor : 'text-gray-400 dark:text-white/30 group-hover:text-brand-red transition-colors'}
                      />
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/25 group-hover:text-brand-red transition-colors">
                        {sectionTitle}
                      </h3>
                      <ArrowRight size={10} className="text-gray-300 dark:text-white/20 group-hover:text-brand-red transition-colors" />
                    </Link>
                    <span className="text-[9px] text-gray-300 dark:text-white/15 ml-auto">
                      {section.items.length} {t('common.tools')}
                    </span>
                  </div>
                </div>

                {/* Tool items — animated expand/collapse on mobile, always visible on desktop */}
                <div id={`section-${section.id}`}>
                  {/* Desktop: always show */}
                  <div className="hidden md:block space-y-0.5">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      const active = isActive(item.path, pathname);
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={onClose}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                            active
                              ? 'bg-brand-red/10 dark:bg-brand-red/15 text-gray-900 dark:text-white'
                              : 'text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                          }`}
                        >
                          <Icon
                            size={16}
                            className={active ? item.color : 'text-gray-400 dark:text-white/30'}
                          />
                          <span className="text-sm">
                            {locale === 'af' ? item.labelAf : item.labelEn}
                          </span>
                          {active && (
                            <ArrowRight size={12} className="ml-auto text-brand-red" />
                          )}
                        </Link>
                      );
                    })}
                  </div>

                  {/* Mobile: animated accordion */}
                  <div
                    className={`md:hidden overflow-hidden transition-all duration-250 ease-in-out ${
                      isExpanded ? 'max-h-[500px]' : 'max-h-0'
                    }`}
                  >
                    <div className="space-y-0.5 pb-3 pl-2">
                      {section.items.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.path, pathname);
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={onClose}
                            className={`flex items-center gap-3 px-3 min-h-[44px] py-2.5 rounded-lg transition-all ${
                              active
                                ? 'bg-brand-red/10 dark:bg-brand-red/15 text-gray-900 dark:text-white'
                                : 'text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                            }`}
                          >
                            <Icon
                              size={16}
                              className={active ? item.color : 'text-gray-400 dark:text-white/30'}
                            />
                            <span className="text-sm">
                              {locale === 'af' ? item.labelAf : item.labelEn}
                            </span>
                            {active && (
                              <ArrowRight size={12} className="ml-auto text-brand-red" />
                            )}
                          </Link>
                        );
                      })}

                      {/* Section landing page link on mobile */}
                      <Link
                        to={section.sectionPath}
                        onClick={onClose}
                        className="flex items-center gap-3 px-3 min-h-[44px] py-2.5 rounded-lg text-gray-400 dark:text-white/30 hover:text-brand-red dark:hover:text-brand-red hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                      >
                        <ArrowRight size={14} />
                        <span className="text-xs">
                          {isAf ? `Alle ${sectionTitle.toLowerCase()}` : `All ${sectionTitle.toLowerCase()}`}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer section */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-gray-200 dark:border-white/10">
          <Link
            to="/"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors min-h-[44px]"
          >
            <Home size={14} />
            <span>{t('common.backToSiteShort')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};