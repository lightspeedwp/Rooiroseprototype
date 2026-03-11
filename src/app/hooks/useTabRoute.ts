/**
 * useTabRoute — Syncs tab selection with URL path segments.
 *
 * Multi-tab dev tool pages use this hook to read the active tab from the URL
 * and navigate between tabs via pushState instead of local state.
 *
 * Usage:
 *   const { activeTab, setActiveTab } = useTabRoute(TAB_SLUG_MAP, 'colors');
 *
 * Where TAB_SLUG_MAP maps tabId → URL slug:
 *   { colors: 'kleure', typography: 'tipografie', ... }
 *
 * The hook reads the last segment of the current URL path and reverse-maps
 * it to a tab ID. If no segment matches, it falls back to defaultTab.
 *
 * setActiveTab(tabId) navigates to `basePath/slug` using replaceState
 * (no history entry per tab switch).
 */
import { useLocation, useNavigate } from 'react-router';
import { useCallback, useMemo } from 'react';

export interface TabSlugMap {
  [tabId: string]: string; // tabId → URL slug (Afrikaans)
}

export function useTabRoute<T extends string>(
  basePath: string,
  slugMap: TabSlugMap,
  defaultTab: T
): {
  activeTab: T;
  setActiveTab: (tab: T) => void;
} {
  const location = useLocation();
  const navigate = useNavigate();

  // Build reverse map: slug → tabId
  const reverseMap = useMemo(() => {
    const map: Record<string, T> = {};
    for (const [tabId, slug] of Object.entries(slugMap)) {
      map[slug] = tabId as T;
    }
    return map;
  }, [slugMap]);

  // Determine active tab from URL
  const activeTab = useMemo(() => {
    const pathAfterBase = location.pathname
      .replace(/\/$/, '') // strip trailing slash
      .substring(basePath.length)
      .replace(/^\//, ''); // strip leading slash

    if (!pathAfterBase) return defaultTab;

    // Check if the remaining path matches a slug
    const matched = reverseMap[pathAfterBase];
    return matched ?? defaultTab;
  }, [location.pathname, basePath, reverseMap, defaultTab]);

  const setActiveTab = useCallback(
    (tab: T) => {
      const slug = slugMap[tab];
      if (!slug) return;

      // Default tab goes to base path (no slug in URL)
      const targetPath = tab === defaultTab ? basePath : `${basePath}/${slug}`;

      // Only navigate if path actually changed
      if (location.pathname !== targetPath) {
        navigate(targetPath, { replace: true });
      }
    },
    [slugMap, basePath, defaultTab, navigate, location.pathname]
  );

  return { activeTab, setActiveTab };
}
