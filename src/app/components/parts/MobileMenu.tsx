import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { X, Search, ShoppingCart, User, Menu, ChevronRight } from 'lucide-react';
// Motion library removed — replaced with CSS animations in /src/styles/index.css (PERF-042)
import { CATEGORY_NAVIGATION, MOBILE_SECONDARY_LINKS, SOCIAL_LINKS } from '../../data/navigation';
import { useCart } from '../../context/CartContext';
import { Logo } from '../common/Logo';
import { ThemeToggle } from '../common/ThemeToggle';

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
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z" />
        </svg>
      );
    case 'Instagram':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      );
    case 'Linkedin':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    default:
      return null;
  }
};

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { count } = useCart();

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

  return (
    <>
      {/* Hamburger Trigger - Positioned after My Account icon in Header */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden p-2.5 text-brand-navy dark:text-white hover:text-brand-red dark:hover:text-red-400 transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
        aria-label="Open kieslys"
        title="Kieslys"
      >
        <Menu size={24} />
      </button>

      {/* Full-screen overlay */}
      {open && (
        <div
          className={`fixed inset-0 z-[9999] flex flex-col bg-white dark:bg-background ${closing ? 'mobile-menu-exit' : 'mobile-menu-enter'}`}
        >
          {/* Header: Logo + Utilities */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-border">
            <button onClick={() => handleNavigation('/')} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:focus-visible:ring-ring focus-visible:ring-offset-2 rounded">
              <Logo variant="default" className="h-8 w-auto" />
            </button>

            <div className="flex items-center gap-1">
              {/* Cart */}
              <button
                onClick={() => handleNavigation('/mandjie')}
                className="relative p-2.5 text-gray-600 dark:text-gray-400 hover:text-brand-red dark:hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
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
                className="p-2.5 text-gray-600 dark:text-gray-400 hover:text-brand-red dark:hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                aria-label="My rekening"
              >
                <User size={22} />
              </button>

              {/* Theme Toggle */}
              <ThemeToggle variant="icon" className="text-gray-600 dark:text-gray-400 hover:text-brand-red dark:hover:text-brand-red" />

              {/* Close */}
              <button
                onClick={handleClose}
                className="p-2.5 text-gray-600 dark:text-gray-400 hover:text-brand-red dark:hover:text-brand-red transition-colors ml-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                aria-label="Sluit kieslys"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto overscroll-contain">
            <div className="max-w-2xl mx-auto px-5 py-8">

              {/* Search */}
              <div className="mb-10">
                <form onSubmit={handleSearch} role="search" className="relative">
                  <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Soek artikels..."
                    aria-label="Soek artikels"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-border rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400 focus-brand transition-[border-color,background-color] text-base"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:focus-visible:ring-ring rounded p-1"
                    >
                      <X size={18} />
                    </button>
                  )}
                </form>
              </div>

              {/* Categories — Clean text list */}
              <div className="mb-10">
                <h2 className="text-xs uppercase tracking-[0.15em] text-brand-red font-bold mb-5 has-brand-serif-font-family" style={{ fontVariationSettings: 'var(--fvs-h6)', letterSpacing: 'var(--ls-h6)' }}>
                  Kategorieë
                </h2>
                <nav className="space-y-1">
                  {CATEGORY_NAVIGATION.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <button
                        key={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors group
                          ${active
                            ? 'bg-brand-red text-white'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-brand-red dark:hover:text-brand-red active:bg-gray-100 dark:active:bg-gray-800'
                          }`}
                      >
                        <span className="text-base font-medium has-brand-sans-font-family">{item.label}</span>
                        <ChevronRight size={18} className={`transition-transform ${active ? 'text-white' : 'text-gray-300 dark:text-gray-600 group-hover:text-brand-red dark:group-hover:text-brand-red group-hover:translate-x-0.5'}`} />
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 dark:border-border my-8" />

              {/* Secondary Links */}
              <div className="mb-10">
                <h2 className="text-xs uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500 font-bold mb-5 has-brand-serif-font-family" style={{ fontVariationSettings: 'var(--fvs-h6)', letterSpacing: 'var(--ls-h6)' }}>
                  <em>rooi rose</em>
                </h2>
                <nav className="space-y-1">
                  {MOBILE_SECONDARY_LINKS.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <button
                        key={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-colors group text-left
                          ${active
                            ? 'text-brand-red bg-brand-red/5'
                            : 'text-gray-600 dark:text-gray-400 hover:text-brand-red dark:hover:text-brand-red hover:bg-gray-50 dark:hover:bg-gray-900'
                          }`}
                      >
                        <span className="text-sm has-brand-sans-font-family">{item.label}</span>
                        <ChevronRight size={16} className={`transition-[color,transform] ${active ? 'text-brand-red' : 'text-gray-300 dark:text-gray-600 group-hover:text-brand-red dark:group-hover:text-brand-red group-hover:translate-x-0.5'}`} />
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 dark:border-border my-8" />

              {/* Social Links */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500 font-bold mb-4 has-brand-serif-font-family" style={{ fontVariationSettings: 'var(--fvs-h6)', letterSpacing: 'var(--ls-h6)' }}>
                  Volg Ons
                </h2>
                <div className="flex items-center gap-2">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-brand-red hover:text-white dark:hover:bg-brand-red dark:hover:text-white transition-[background-color,color]"
                      title={social.label}
                    >
                      <SocialIcon icon={social.icon} size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-border text-center">
                <p className="text-xs text-gray-400 dark:text-gray-600">
                  <em>rooi rose</em> © {new Date().getFullYear()}. Alle regte voorbehou.
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};