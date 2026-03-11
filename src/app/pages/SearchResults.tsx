import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router';
import { Search, X, Filter, ChevronDown, SlidersHorizontal, Loader2 } from 'lucide-react';
import { CATEGORY_ARTICLES } from '../data/categoryArticles';
import { PageContainer } from '../components/common/PageContainer';
import { ArticleLink } from '../components/common/ArticleLink';
import { SEO } from '../components/common/SEO';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { LeaderboardAd, SidebarAds, StickyMobileFooter, InFeedAd } from '../components/ads';
import { useDebounce } from '../hooks/useDebounce';
import { SEARCH_UI } from '../data/search';
import { ARTICLE_CATEGORIES } from '../data/taxonomies';

interface SearchResult {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
  readTime: string;
}

const FILTER_CATEGORIES = ['Alles', ...ARTICLE_CATEGORIES.map(c => c.name), 'Kompetisies'];

/**
 * SearchResultsPage Component
 * Displays search results for articles across all categories with category filtering.
 */
export const SearchResultsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const categoryParam = searchParams.get('kategorie') || 'Alles';
  const [searchQuery, setSearchQuery] = useState(query);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(20);

  // Debounce the search input for live filtering (300ms)
  const debouncedQuery = useDebounce(searchQuery, 300);
  const isTyping = searchQuery !== debouncedQuery;

  // Combine all articles
  const allArticles = useMemo<SearchResult[]>(() => {
    const articles: SearchResult[] = [];
    Object.values(CATEGORY_ARTICLES).forEach(categoryArticles => {
      // Cast to any to satisfy SearchResult if needed, or ensure CATEGORY_ARTICLES matches
      articles.push(...categoryArticles as unknown as SearchResult[]);
    });
    return articles;
  }, []);

  // Use debounced query for live filtering — prefer user input over URL param
  const activeQuery = searchQuery.length > 0 ? debouncedQuery : query;

  // Search + filter logic
  const results = useMemo(() => {
    let filtered = allArticles;

    // Category filter
    if (selectedCategory && selectedCategory !== 'Alles') {
      filtered = filtered.filter(a => a.category === selectedCategory);
    }

    // Text search — use activeQuery for live results
    if (activeQuery.trim()) {
      const searchLower = activeQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchLower) ||
        article.excerpt.toLowerCase().includes(searchLower) ||
        article.category.toLowerCase().includes(searchLower) ||
        article.author.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [activeQuery, selectedCategory, allArticles]);

  // Reset visible count when search/filters change
  useEffect(() => { setVisibleCount(20); }, [activeQuery, selectedCategory]);

  // Count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { Alles: 0 };
    let totalMatched = 0;
    FILTER_CATEGORIES.slice(1).forEach(cat => {
      let catArticles = allArticles.filter(a => a.category === cat);
      if (activeQuery.trim()) {
        const searchLower = activeQuery.toLowerCase();
        catArticles = catArticles.filter(a =>
          a.title.toLowerCase().includes(searchLower) ||
          a.excerpt.toLowerCase().includes(searchLower) ||
          a.author.toLowerCase().includes(searchLower)
        );
      }
      counts[cat] = catArticles.length;
      totalMatched += catArticles.length;
    });
    counts['Alles'] = totalMatched;
    return counts;
  }, [activeQuery, allArticles]);

  // Sync URL params when debounced query settles
  useEffect(() => {
    if (debouncedQuery !== query) {
      const params: Record<string, string> = {};
      if (debouncedQuery.trim()) params.q = debouncedQuery.trim();
      if (selectedCategory !== 'Alles') params.kategorie = selectedCategory;
      setSearchParams(params, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps — only fire when debounced value settles; category/query synced via other handlers
  }, [debouncedQuery]);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const params: Record<string, string> = {};
    if (searchQuery.trim()) params.q = searchQuery.trim();
    if (selectedCategory !== 'Alles') params.kategorie = selectedCategory;
    setSearchParams(params);
  }, [searchQuery, selectedCategory, setSearchParams]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    const params: Record<string, string> = {};
    if (query) params.q = query;
    if (cat !== 'Alles') params.kategorie = cat;
    setSearchParams(params);
    setMobileFilterOpen(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSelectedCategory('Alles');
    setSearchParams({});
  };

  // Sync from URL params
  useEffect(() => {
    setSearchQuery(query);
    setSelectedCategory(categoryParam);
  }, [query, categoryParam]);

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen">
      <SEO
        title={query ? `Soekresultate vir "${query}"` : SEARCH_UI.title}
        description={query ? `Soek resultate vir "${query}" op Die Papier. ${results.length} artikels gevind.` : 'Soek deur al Die Papier se nuus, sport, sake, en meer.'}
        keywords={`soek, ${query}, nuus, afrikaans, die papier`}
      />

      {/* Header Leaderboard Ad */}
      <LeaderboardAd section="search" />

      <PageContainer breadcrumbs={[{ label: 'Soek' }]}>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Search Header */}
            <div className="mb-6">
              <h1
                className="text-4xl md:text-5xl font-normal text-brand-navy dark:text-foreground font-heading mb-4"
                style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}
              >
                {SEARCH_UI.title}
              </h1>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={SEARCH_UI.placeholder}
                    className="w-full px-6 py-4 pr-24 border-2 border-gray-300 dark:border-border rounded-lg focus:outline-none focus:border-primary dark:focus:border-primary transition-colors text-lg bg-white dark:bg-card dark:text-foreground dark:placeholder:text-gray-500"
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="absolute right-16 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      aria-label={SEARCH_UI.clear}
                    >
                      <X size={20} />
                    </button>
                  )}
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-md hover:bg-brand-red-hover transition-colors"
                    aria-label={SEARCH_UI.searchButton}
                  >
                    <Search size={20} />
                  </button>
                </div>
              </form>
            </div>

            {/* Category Filters - Desktop */}
            <div className="hidden md:flex items-center gap-2 mb-6 flex-wrap">
              <SlidersHorizontal size={14} className="text-gray-400 mr-1" />
              {FILTER_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors ${
                    selectedCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-muted text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-muted'
                  }`}
                >
                  {cat}
                  <span className="ml-1 text-xs opacity-70">({categoryCounts[cat] || 0})</span>
                </button>
              ))}
            </div>

            {/* Category Filters - Mobile */}
            <div className="md:hidden mb-6">
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="w-full flex items-center justify-between bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg px-4 py-3 text-sm font-bold text-brand-navy dark:text-foreground"
              >
                <span className="flex items-center gap-2">
                  <Filter size={16} />
                  {SEARCH_UI.filter}: {selectedCategory}
                </span>
                <ChevronDown size={16} className={`transition-transform ${mobileFilterOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileFilterOpen && (
                <div className="mt-2 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg shadow-lg dark:shadow-[var(--shadow-dark-300)] overflow-hidden">
                  {FILTER_CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 dark:border-border last:border-b-0 flex items-center justify-between ${
                        selectedCategory === cat
                          ? 'bg-primary/5 dark:bg-primary/10 text-primary font-bold'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-muted'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">{categoryCounts[cat] || 0}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Info */}
            {(activeQuery || isTyping) && (
              <div className="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-400">
                {isTyping ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-primary" />
                    {SEARCH_UI.loading}
                  </span>
                ) : results.length > 0 ? (
                  <p>
                    <span className="font-bold">{results.length}</span> {SEARCH_UI.results.found(results.length, activeQuery).split(results.length.toString())[1]}
                    {selectedCategory !== 'Alles' && (
                      <span className="font-bold">{SEARCH_UI.results.inCategory(selectedCategory)}</span>
                    )}
                  </p>
                ) : (
                  <p>
                    {SEARCH_UI.results.none(activeQuery)}
                    {selectedCategory !== 'Alles' && (
                      <span className="font-bold">{SEARCH_UI.results.inCategory(selectedCategory)}</span>
                    )}
                  </p>
                )}
              </div>
            )}

            {/* Search Results */}
            {results.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {results.slice(0, 4).map((article) => (
                    <ArticleLink
                      key={article.id}
                      id={article.id}
                      title={article.title}
                      className="block group bg-white dark:bg-card border border-gray-100 dark:border-border rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)] overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-gray-200 dark:bg-muted">
                        <ImageWithFallback
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 uppercase rounded-sm">
                          {article.category}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                          {article.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-border">
                          <div className="flex items-center gap-3">
                            <span>{article.author}</span>
                            <span>&bull;</span>
                            <span>{article.date}</span>
                          </div>
                          <span className="font-medium">{article.readTime} lees</span>
                        </div>
                      </div>
                    </ArticleLink>
                  ))}
                </div>

                {/* Mobile In-Feed Ad */}
                <InFeedAd section="search" />

                {results.length > 4 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {results.slice(4, visibleCount).map((article) => (
                      <ArticleLink
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        className="block group bg-white dark:bg-card border border-gray-100 dark:border-border rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)] overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-gray-200 dark:bg-muted">
                          <ImageWithFallback
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 uppercase rounded-sm">
                            {article.category}
                          </span>
                        </div>
                        <div className="p-5">
                          <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                            {article.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-border">
                            <div className="flex items-center gap-3">
                              <span>{article.author}</span>
                              <span>&bull;</span>
                              <span>{article.date}</span>
                            </div>
                            <span className="font-medium">{article.readTime} lees</span>
                          </div>
                        </div>
                      </ArticleLink>
                    ))}
                  </div>
                )}
                {visibleCount < results.length && (
                  <button
                    onClick={() => setVisibleCount(prev => prev + 20)}
                    className="w-full py-3 mt-6 bg-gray-100 dark:bg-muted border border-gray-200 dark:border-border rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-card transition-colors"
                  >
                    Wys meer ({results.length - visibleCount} oor)
                  </button>
                )}
              </>
            ) : activeQuery ? (
              <div className="text-center py-16 bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border">
                <div className="max-w-md mx-auto">
                  <Search size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                  <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>{SEARCH_UI.results.empty.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {SEARCH_UI.results.tryOther}
                  </p>

                  {/* Category Links */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Nuus', 'Sport', 'Skole', 'Sake', 'Leefstyl', 'Dink'].map(cat => (
                      <Link
                        key={cat}
                        to={`/${cat.toLowerCase()}`}
                        className="px-4 py-2 bg-gray-100 dark:bg-muted text-brand-navy dark:text-foreground rounded-lg hover:bg-primary hover:text-white transition-colors text-sm font-medium"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border">
                <Search size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>{SEARCH_UI.results.start.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {SEARCH_UI.results.start.description}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[300px] shrink-0">
            <SidebarAds
              section="search"
              variant="standard"
            />
          </aside>
        </div>
      </PageContainer>

      {/* Sticky Mobile Footer Ad */}
      <StickyMobileFooter section="search" />
    </div>
  );
};

export default SearchResultsPage;