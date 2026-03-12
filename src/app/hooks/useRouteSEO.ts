import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { ROUTE_SEO, type RouteSeoData } from '../data/routeSeoConfig';
import { injectStructuredData, cleanupStructuredData } from '../utils/structuredData';

/**
 * useRouteSEO Hook
 * Automatically applies route-level SEO meta tags based on the current pathname.
 * Uses the centralized ROUTE_SEO config. Individual page <SEO> components
 * will override these defaults when they render.
 *
 * Also injects Schema.org structured data (JSON-LD) on every route change:
 * - WebSite schema (global, with SearchAction for sitelinks search box)
 * - NewsMediaOrganization schema (publisher identity)
 * - BreadcrumbList schema (auto-generated from the route path hierarchy)
 *
 * Place this in the Layout wrapper so every route gets baseline meta tags + structured data.
 */
export function useRouteSEO() {
  const { pathname } = useLocation();

  // ── Structured Data (JSON-LD) ──────────────────────────────────
  // Injected for ALL routes, even those without a ROUTE_SEO entry,
  // because BreadcrumbList is auto-generated from the path segments.
  useEffect(() => {
    injectStructuredData(pathname);
    return () => cleanupStructuredData();
  }, [pathname]);

  // ── Meta Tags ──────────────────────────────────────────────────
  useEffect(() => {
    // Look up SEO config for this route
    const seoData: RouteSeoData | undefined = ROUTE_SEO[pathname];

    if (!seoData) return; // Let per-page <SEO> handle it

    const baseUrl = 'https://diepapier.co.za';
    const fullTitle = seoData.title.includes('rooi rose')
      ? seoData.title
      : `${seoData.title} | rooi rose`;
    const canonicalUrl = `${baseUrl}${pathname}`;

    // Set document title (will be overridden if page has its own <SEO>)
    document.title = fullTitle;

    // Helper to set meta tags
    const setMeta = (attr: string, name: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', seoData.description);
    setMeta('name', 'keywords', seoData.keywords);

    // Open Graph
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', seoData.description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', seoData.type || 'website');
    setMeta('property', 'og:site_name', 'rooi rose');
    setMeta('property', 'og:locale', 'af_ZA');

    // Twitter
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', seoData.description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [pathname]);
}