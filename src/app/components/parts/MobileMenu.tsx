import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router';
import {
  Search,
  X,
  ShoppingCart,
  User,
  ChevronRight,
  // Newspaper — removed; using local icon to avoid bundler ReferenceError
  Trophy,
  Briefcase,
  Heart,
  MessageSquare,
  BookOpen,
  Calendar,
  GraduationCap,
  Info,
  Phone,
  CircleHelp,
  Mail,
  FileText,
  Shield,
  Menu,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Home,
  Play,
  Archive,
  Send,
  Truck,
} from 'lucide-react';
// Motion library removed — replaced with CSS animations in /src/styles/index.css (PERF-042)
import { SOCIAL_LINKS, MOBILE_CATEGORY_LINKS, MOBILE_SECONDARY_LINKS } from '../../data/navigation';
import { useCart } from '../../context/CartContext';
import { Logo } from '../common/Logo';
import { Newspaper } from '../icons/NewspaperIcon';
import { ThemeToggle } from '../common/ThemeToggle';

// Icon map factories — evaluated lazily inside the component (not at module scope)
// to avoid ReferenceErrors if the bundler reorders module evaluation.
function buildCategoryIcons(): Record<string, React.ReactNode> {
  return {
    '/': <Home size={20} />,
    '/nuus': <Newspaper size={20} />,
    '/sport': <Trophy size={20} />,
    '/skole': <GraduationCap size={20} />,
    '/sake': <Briefcase size={20} />,
    '/leefstyl': <Heart size={20} />,
    '/dink': <MessageSquare size={20} />,
    '/gebeure': <Calendar size={20} />,
    '/multimedia': <Play size={20} />,
    '/doodsberrigte': <Heart size={20} />,
    '/e-uitgawes': <BookOpen size={20} />,
    '/kompetisies': <Trophy size={20} />,
    '/nuusbrief-argief': <Archive size={20} />,
  };
}

function buildSecondaryIcons(): Record<string, React.ReactNode> {
  return {
    '/oor-ons': <Info size={18} />,
    '/oor-ons/redaksie': <User size={18} />,
    '/adverteer': <Briefcase size={18} />,
    '/kontak': <Phone size={18} />,
    '/vrae': <CircleHelp size={18} />,
    '/stuur-in': <Send size={18} />,
    '/nuusbrief-inteken': <Mail size={18} />,
    '/beleid': <Shield size={18} />,
    '/inhoudsopgawe': <FileText size={18} />,
  };
}

const SocialIcon = ({ icon, size = 20 }: { icon: string; size?: number }) => {
  switch (icon) {
    case 'XSocial':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'TikTok':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.79a8.24 8.24 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.2z" />
        </svg>
      );
    case 'Facebook':
      return <Facebook size={size} />;
    case 'Instagram':
      return <Instagram size={size} />;
    case 'Linkedin':
      return <Linkedin size={size} />;
    default:
      return null;
  }
};

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { count } = useCart();

  // Build icon maps lazily (not at module scope) to avoid bundler evaluation-order issues
  const categoryIcons = useMemo(() => buildCategoryIcons(), []);
  const secondaryIcons = useMemo(() => buildSecondaryIcons(), []);

  // Close with exit animation
  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
      setSearchQuery('');
    }, 200);
  }, []);

  // Close menu on route change
  useEffect(() => {
    if (open) {
      setOpen(false);
      setClosing(false);
      setSearchQuery('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps — intentionally fire only on route change, not when `open` changes
  }, [location.pathname]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Handle Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [open, handleClose]);

  const handleNavigation = useCallback((path: string) => {
    handleClose();
    navigate(path);
  }, [navigate, handleClose]);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      handleNavigation(`/soek?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  }, [searchQuery, handleNavigation]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  // Stagger delay helper for CSS animations
  const staggerDelay = (index: number) => ({
    animationDelay: `${100 + index * 30}ms`,
  });

  // Count stagger items for consistent indexing
  let staggerIdx = 0;

  return (
    <>
      {/* Hamburger Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden p-2 text-white hover:text-brand-red transition-colors relative"
        aria-label="Open kieslys"
      >
        <Menu size={26} />
      </button>

      {/* Full-screen overlay */}
      {open && (
        <div
          className={`fixed inset-0 z-[9999] flex flex-col ${closing ? 'mobile-menu-exit' : 'mobile-menu-enter'}`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-brand-navy dark:bg-background" />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">

            {/* Header: Logo + Close */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <button onClick={() => handleNavigation('/')}>
                <Logo variant="white" className="h-8 w-auto" />
              </button>

              <div className="flex items-center gap-2">
                {/* Cart */}
                <button
                  onClick={() => handleNavigation('/mandjie')}
                  className="relative p-2 text-white/70 hover:text-white transition-colors"
                  aria-label="Mandjie"
                >
                  <ShoppingCart size={22} />
                  {count > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 bg-brand-red text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                      {count}
                    </span>
                  )}
                </button>

                {/* My Account */}
                <button
                  onClick={() => handleNavigation('/my-rekening')}
                  className="p-2 text-white/70 hover:text-white transition-colors"
                  aria-label="My rekening"
                >
                  <User size={22} />
                </button>

                {/* Theme Toggle */}
                <ThemeToggle variant="icon" className="text-white/70 hover:text-yellow-300" />

                {/* Close */}
                <button
                  onClick={handleClose}
                  className="p-2 text-white/70 hover:text-white transition-colors ml-1"
                  aria-label="Sluit kieslys"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              <div className="flex flex-col">

                {/* Search */}
                <div className="dp-stagger-item px-5 pt-5 pb-3" style={staggerDelay(staggerIdx++)}>
                  <form onSubmit={handleSearch} className="relative">
                    <Search size={18} className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${searchFocused ? 'text-brand-red' : 'text-white/30'}`} />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                      placeholder="Soek artikels, nuus..."
                      className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-brand-red/60 focus:bg-white/8 transition-[border-color,background-color] text-[15px]"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </form>
                </div>

                {/* Category Navigation — Primary */}
                <div className="dp-stagger-item px-5 pt-3 pb-1" style={staggerDelay(staggerIdx++)}>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-brand-red font-bold mb-3">
                    Kategorieë
                  </p>
                </div>

                <div className="px-5 grid grid-cols-3 gap-2 pb-4">
                  {MOBILE_CATEGORY_LINKS.map((item) => {
                    const active = isActive(item.href);
                    const delay = staggerDelay(staggerIdx++);
                    return (
                      <button
                        key={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className={`dp-stagger-item flex flex-col items-center gap-1.5 py-3.5 px-2 rounded-xl transition-[background-color,color] text-center
                          ${active
                            ? 'bg-brand-red text-white'
                            : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white active:bg-white/15'
                          }`}
                        style={delay}
                      >
                        <span className={active ? 'text-white' : 'text-white/50'}>
                          {categoryIcons[item.href]}
                        </span>
                        <span className="text-[13px] font-medium leading-tight">{item.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Subscribe CTA */}
                <div className="dp-stagger-item px-5 pb-2" style={staggerDelay(staggerIdx++)}>
                  <button
                    onClick={() => handleNavigation('/inteken/e-uitgawe')}
                    className="w-full flex items-center justify-between bg-brand-red hover:bg-brand-red-hover active:bg-brand-red-hover text-white rounded-xl px-5 py-4 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen size={20} />
                      <div className="text-left">
                        <p className="text-[15px] font-bold leading-tight">Teken in op e-uitgawe</p>
                        <p className="text-[12px] text-white/70 leading-tight mt-0.5">Kry <em>Die Papier</em> digitaal</p>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-[color,transform]" />
                  </button>
                </div>

                {/* Huisaflewering CTA */}
                <div className="dp-stagger-item px-5 pb-4" style={staggerDelay(staggerIdx++)}>
                  <button
                    onClick={() => handleNavigation('/inteken/aflewering')}
                    className="w-full flex items-center justify-between bg-brand-navy hover:bg-brand-navy-light dark:hover:bg-brand-navy-light active:bg-brand-navy-dark text-white rounded-xl px-5 py-4 transition-colors group border border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <Truck size={20} />
                      <div className="text-left">
                        <p className="text-[15px] font-bold leading-tight">Huisaflewering</p>
                        <p className="text-[12px] text-white/70 leading-tight mt-0.5">Gedrukte koerant vanaf R140/m</p>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-[color,transform]" />
                  </button>
                </div>

                {/* Divider */}
                <div className="mx-5 border-t border-white/8" />

                {/* Secondary Navigation */}
                <div className="dp-stagger-item px-5 pt-4 pb-1" style={staggerDelay(staggerIdx++)}>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-bold mb-2">
                    <em>Die Papier</em>
                  </p>
                </div>

                <div className="pb-4">
                  {MOBILE_SECONDARY_LINKS.map((item) => {
                    const active = isActive(item.href);
                    const delay = staggerDelay(staggerIdx++);
                    return (
                      <button
                        key={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className={`dp-stagger-item w-full flex items-center justify-between px-5 py-3 transition-colors group
                          ${active
                            ? 'text-brand-red bg-brand-red/5'
                            : 'text-white/60 hover:text-white hover:bg-white/5 active:bg-white/8'
                          }`}
                        style={delay}
                      >
                        <span className="flex items-center gap-3">
                          <span className={active ? 'text-brand-red' : 'text-white/30 group-hover:text-white/50'}>
                            {secondaryIcons[item.href]}
                          </span>
                          <span className="text-[15px] font-medium">{item.label}</span>
                        </span>
                        <ChevronRight size={16} className={`transition-[color,transform] ${active ? 'text-brand-red' : 'text-white/15 group-hover:text-white/30 group-hover:translate-x-0.5'}`} />
                      </button>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="mx-5 border-t border-white/8" />

                {/* Account quick links */}
                <div className="dp-stagger-item px-5 pt-4 pb-1" style={staggerDelay(staggerIdx++)}>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-bold mb-2">
                    My rekening
                  </p>
                </div>

                <div className="px-5 pb-4 flex gap-2">
                  <button
                    onClick={() => handleNavigation('/my-rekening')}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 active:bg-white/15 text-white/70 hover:text-white rounded-xl transition-[background-color,color] text-[14px] font-medium"
                  >
                    <User size={18} />
                    My rekening
                  </button>
                  <button
                    onClick={() => handleNavigation('/registreer')}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 active:bg-white/15 text-white/70 hover:text-white rounded-xl transition-[background-color,color] text-[14px] font-medium"
                  >
                    <ArrowRight size={18} />
                    Registreer
                  </button>
                </div>

                {/* Divider */}
                <div className="mx-5 border-t border-white/8" />

                {/* Social Links */}
                <div className="dp-stagger-item px-5 pt-4 pb-2" style={staggerDelay(staggerIdx++)}>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-bold mb-3">
                    Volg Ons
                  </p>
                  <div className="flex items-center gap-3">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/50 hover:bg-white/15 hover:text-white active:bg-white/20 transition-[background-color,color]"
                        title={social.label}
                      >
                        <SocialIcon icon={social.icon} size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Copyright */}
                <div className="dp-stagger-item px-5 pt-4 pb-8 text-center" style={staggerDelay(staggerIdx++)}>
                  <p className="text-[11px] text-white/20">
                    <em>Die Papier</em> © {new Date().getFullYear()}. Alle regte voorbehou.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};