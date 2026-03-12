import React, { useState, memo, useCallback, useEffect, useMemo } from 'react';
import { Search, User, X, ShoppingCart, Menu, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { Logo } from '../common/Logo';
import { MobileMenu } from './MobileMenu';
import { HEADER_TOP_BAR_LINKS, HEADER_CATEGORY_BAR_LINKS, SOCIAL_LINKS } from '../../data/navigation';
import { HEADER_UI } from '../../data/header';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/button';
import { ThemeToggle } from '../common/ThemeToggle';
import headerTexture from 'figma:asset/59f5f21fc3ab664ddea62e2cde218d15718c0a5b.png';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "../ui/sheet";
import { useDebounce } from '../../hooks/useDebounce';
import type { CategoryArticle } from '../../data/categoryArticles';

export const Header = memo(() => {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { count, items, removeItem, total } = useCart();

  // Debounced search for live suggestions
  const debouncedSearch = useDebounce(searchQuery, 250);

  // FM-008: Lazy-load search data only when search is opened
  const [searchData, setSearchData] = useState<CategoryArticle[] | null>(null);
  useEffect(() => {
    if (searchOpen && !searchData) {
      import('../../data/categoryArticles').then(m => setSearchData(m.getAllArticles()));
    }
  }, [searchOpen, searchData]);

  const searchSuggestions = useMemo(() => {
    if (!searchData || !debouncedSearch.trim() || debouncedSearch.length < 2) return [];
    const q = debouncedSearch.toLowerCase();
    return searchData
      .filter(a => a.title.toLowerCase().includes(q) || a.category.toLowerCase().includes(q))
      .slice(0, 5);
  }, [debouncedSearch, searchData]);

  const handleSearchToggle = useCallback(() => {
    setSearchOpen((prev) => !prev);
    if (searchOpen) {
      setSearchQuery('');
    }
  }, [searchOpen]);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/soek?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setSearchOpen(false);
    }
  }, [searchQuery, navigate]);

  const handleSuggestionClick = useCallback((title: string) => {
    navigate(`/soek?q=${encodeURIComponent(title)}`);
    setSearchQuery('');
    setSearchOpen(false);
  }, [navigate]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "Escape" && searchOpen) {
        setSearchOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [searchOpen]);

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Facebook': return <Facebook size={16} />;
      case 'Instagram': return <Instagram size={16} />;
      case 'Linkedin': return <Linkedin size={16} />;
      case 'XSocial': return (
        <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
      case 'TikTok': return (
        <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.79a8.24 8.24 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.2z" />
        </svg>
      );
      default: return null;
    }
  };

  return (
    <header className="flex flex-col sticky top-0 z-50 shadow-sm">
      {/* Top Bar - Black */}
      <div className="bg-black dark:bg-background text-white hidden lg:block">
        <div className="w-full max-w-[1440px] mx-auto h-10 flex justify-center items-center gap-6 text-xs md:text-sm" style={{ paddingLeft: 'clamp(1rem, 4vw, 2rem)', paddingRight: 'clamp(1rem, 4vw, 2rem)' }}>
          {/* Top Left Navigation */}
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
             {HEADER_TOP_BAR_LINKS.map((item) => (
                <Link 
                  key={item.label}
                  to={item.href}
                  className="font-medium hover:text-gray-300 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
             ))}
          </div>

          {/* Top Right Socials */}
          <div className="flex items-center gap-4 pl-4 border-l border-gray-700 ml-4 md:ml-0 flex-shrink-0">
             {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-red transition-colors"
                  title={social.label}
                >
                  {social.icon === 'XSocial' ? (
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                     </svg>
                  ) : social.icon === 'TikTok' ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.79a8.24 8.24 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.2z" />
                      </svg>
                  ) : (
                    getSocialIcon(social.icon)
                  )}
                </a>
             ))}
          </div>
        </div>
      </div>

      {/* Main Header Area - Logo & Functional Icons */}
      <div className="relative overflow-hidden bg-white dark:bg-brand-navy text-brand-navy dark:text-white border-b border-gray-200 dark:border-gray-800">
        <div className="w-full max-w-[1440px] mx-auto relative" style={{ paddingLeft: 'clamp(1rem, 4vw, 2rem)', paddingRight: 'clamp(1rem, 4vw, 2rem)' }}>
          <div className="flex justify-between items-center h-[80px] lg:h-[124px] relative z-10">
            
            {/* Logo - left-aligned on mobile, absolutely centered on desktop */}
            <div className={`flex items-center flex-shrink-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 transition-opacity duration-200 ${searchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <Link to="/" className="flex items-center">
                <Logo className="h-8 sm:h-10 lg:h-[64px] w-auto max-w-[180px] sm:max-w-[200px] lg:max-w-none" variant="white" />
              </Link>
            </div>

            {/* Search Overlay (Takes center stage when open) */}
            {searchOpen && (
               <div className="flex absolute left-0 right-0 top-0 bottom-0 items-center justify-center z-10 px-3 sm:px-6 lg:px-20">
                 <div className="w-full max-w-2xl relative">
                   <form 
                    onSubmit={handleSearch}
                    className="relative"
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={HEADER_UI.search.placeholder}
                      autoFocus
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-white/10 dark:backdrop-blur-sm border border-gray-300 dark:border-white/20 text-brand-navy dark:text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-lg"
                    />
                    <button 
                      type="button"
                      onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-navy dark:hover:text-white"
                    >
                      <X size={20} />
                    </button>
                  </form>

                  {/* Live Search Suggestions */}
                  {searchSuggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-card rounded-lg shadow-xl dark:shadow-[var(--shadow-dark-500)] overflow-hidden z-50 border border-gray-200 dark:border-border">
                      {searchSuggestions.map((article) => (
                        <button
                          key={article.id}
                          type="button"
                          onClick={() => handleSuggestionClick(article.title)}
                          className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-muted transition-colors border-b border-gray-100 dark:border-border last:border-b-0"
                        >
                          <Search size={14} className="text-gray-400 shrink-0" />
                          <div className="min-w-0">
                            <p className="text-sm text-brand-navy dark:text-foreground truncate">{article.title}</p>
                            <span className="text-xs text-brand-red font-bold uppercase">{article.category}</span>
                          </div>
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => { navigate(`/soek?q=${encodeURIComponent(searchQuery.trim())}`); setSearchQuery(''); setSearchOpen(false); }}
                        className="w-full text-center px-4 py-2.5 text-sm text-brand-red font-bold hover:bg-gray-50 dark:hover:bg-muted transition-colors"
                      >
                        {HEADER_UI.search.seeAllResults}
                      </button>
                    </div>
                  )}
                 </div>
               </div>
            )}

            {/* Right Side: Utility Icons + Mobile Menu */}
            <div className="flex items-center gap-1 lg:gap-3 ml-auto">
              {/* Theme toggle - desktop only, mobile uses MobileMenu */}
              <ThemeToggle variant="icon" className="hidden lg:flex text-brand-navy dark:text-white hover:text-yellow-600 dark:hover:text-yellow-300" />

              {/* Search toggle */}
              {!searchOpen && (
                <button 
                  className="flex p-2 text-brand-navy dark:text-white hover:text-brand-red dark:hover:text-red-400 items-center gap-1 transition-colors" 
                  onClick={handleSearchToggle}
                  title="Soek"
                  aria-label="Soek"
                >
                  <Search size={22} />
                </button>
              )}

              {/* Cart - visible on all sizes */}
              <Sheet>
                <SheetTrigger className="p-2 text-brand-navy dark:text-white hover:text-brand-red dark:hover:text-red-400 flex items-center gap-1 transition-colors relative" title="Mandjie" aria-label="Mandjie">
                  <ShoppingCart size={22} />
                  {count > 0 && (
                    <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                      {count}
                    </span>
                  )}
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>{HEADER_UI.cart.title}</SheetTitle>
                    <SheetDescription>
                      {HEADER_UI.cart.description}
                    </SheetDescription>
                  </SheetHeader>
                  
                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                      <ShoppingCart size={48} className="mb-4 opacity-20" />
                      <p>{HEADER_UI.cart.emptyTitle}</p>
                      <Button 
                        variant="link" 
                        className="text-brand-red"
                        onClick={() => navigate('/e-uitgawes')}
                      >
                        {HEADER_UI.cart.browseButton}
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full">
                      <div className="flex-1 overflow-y-auto p-6 space-y-4">
                        {items.map((item) => (
                          <div key={item.productId} className="flex gap-4 border-b border-gray-100 dark:border-border pb-4">
                            {item.image && (
                              <img src={item.image} alt={item.title} className="w-16 h-20 object-cover rounded bg-gray-100 dark:bg-muted" loading="lazy" decoding="async" />
                            )}
                            <div className="flex-1">
                              <h4 className="font-normal text-sm text-brand-navy dark:text-foreground has-brand-serif-font-family" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>{item.title}</h4>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                                {item.type === 'subscription' ? HEADER_UI.cart.itemLabelSubscription : HEADER_UI.cart.itemLabelSingle}
                              </p>
                              <div className="flex justify-between items-center">
                                <span className="font-bold text-brand-red">R {item.price.toFixed(2)}</span>
                                <button 
                                  onClick={() => removeItem(item.productId)}
                                  className="text-xs text-gray-400 hover:text-red-500"
                                >
                                  {HEADER_UI.cart.removeButton}
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="p-6 border-t border-gray-200 dark:border-border mt-auto">
                        <div className="flex justify-between items-center mb-4 text-lg font-bold">
                          <span>{HEADER_UI.cart.totalLabel}</span>
                          <span>R {total.toFixed(2)}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                          <Button 
                            variant="outline" 
                            className="w-full border-brand-red text-brand-red hover:bg-red-50 dark:hover:bg-red-950/30 font-bold py-6"
                            onClick={() => navigate('/mandjie')}
                          >
                            {HEADER_UI.cart.viewCartButton}
                          </Button>
                          <Button className="w-full bg-brand-red hover:bg-brand-red-hover font-bold py-6" onClick={() => navigate('/betaal')}>
                            {HEADER_UI.cart.checkoutButton}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </SheetContent>
              </Sheet>

              <Link 
                to="/my-rekening" 
                className="flex p-2 text-brand-navy dark:text-white hover:text-brand-red dark:hover:text-red-400 items-center gap-1 transition-colors"
                title="My rekening"
                aria-label="My rekening"
              >
                <User size={22} />
              </Link>

              <Link to="/inteken/aflewering" className="hidden lg:block bg-brand-red text-white px-7 py-2.5 rounded text-sm font-bold hover:bg-brand-red-hover transition-colors ml-2 whitespace-nowrap tracking-wide">
                {HEADER_UI.deliveryButton}
              </Link>

              {/* Mobile menu trigger - far right on mobile */}
              <div className="lg:hidden">
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Bar - Desktop Only (Mobile uses MobileMenu) */}
      <div className="hidden lg:block border-b border-gray-200 dark:border-border bg-white dark:bg-background">
        <div className="w-full max-w-[1440px] mx-auto" style={{ paddingLeft: 'clamp(1rem, 4vw, 2rem)', paddingRight: 'clamp(1rem, 4vw, 2rem)' }}>
           <nav className="flex items-center justify-center gap-8 h-12">
             {HEADER_CATEGORY_BAR_LINKS.map((item) => (
                <Link 
                  key={item.label} 
                  to={item.href} 
                  className="text-brand-navy dark:text-foreground hover:text-brand-red font-bold text-sm uppercase tracking-wide transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
           </nav>
        </div>
      </div>
    </header>
  );
});