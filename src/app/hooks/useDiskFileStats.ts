/**
 * useDiskFileStats — React hook for lazy-loading disk file analysis stats.
 * Used by all WP code browser dev tools (TemplateBrowser, TemplatePartBrowser, etc.)
 */
import { useState, useCallback, useRef } from 'react';
import { loadDiskFileStats, type DiskFileStats, type WpFileGlob } from '../data/wpFileLoader';

export type DiskStatsMap = Record<string, DiskFileStats>;

export function useDiskFileStats(glob: WpFileGlob) {
  const [statsMap, setStatsMap] = useState<DiskStatsMap>({});
  const loadingRefs = useRef<Set<string>>(new Set());

  /** Load stats for a file (idempotent — won't re-fetch if already loaded) */
  const loadStats = useCallback(async (filename: string) => {
    // Check if already in state
    if (statsMap[filename] && statsMap[filename].lineCount !== -1) return;
    
    // Check if already loading
    if (loadingRefs.current.has(filename)) return;

    loadingRefs.current.add(filename);

    // Set a loading sentinel in state
    const sentinel: DiskFileStats = {
      found: false, lineCount: -1, blockCount: 0, templatePartCount: 0,
      patternRefCount: 0, blockTypes: [], functionCount: 0, functionNames: [],
      hookCount: 0, sizeBytes: 0,
    };
    
    setStatsMap(prev => ({ ...prev, [filename]: sentinel }));

    try {
      const stats = await loadDiskFileStats(glob, filename);
      setStatsMap(prev => ({ ...prev, [filename]: stats }));
    } catch (err) {
      // Gracefully handle failed dynamic imports (e.g. PHP files in preview env)
      const failedStats: DiskFileStats = {
        found: false, lineCount: 0, blockCount: 0, templatePartCount: 0,
        patternRefCount: 0, blockTypes: [], functionCount: 0, functionNames: [],
        hookCount: 0, sizeBytes: 0,
      };
      setStatsMap(prev => ({ ...prev, [filename]: failedStats }));
    } finally {
      loadingRefs.current.delete(filename);
    }
  }, [glob, statsMap]);

  const getStats = useCallback((filename: string): DiskFileStats | null => {
    const s = statsMap[filename];
    if (!s || s.lineCount === -1) return null; // Not loaded or loading
    return s;
  }, [statsMap]);

  const isLoading = useCallback((filename: string): boolean => {
    const s = statsMap[filename];
    return !!s && s.lineCount === -1;
  }, [statsMap]);

  return { loadStats, getStats, isLoading };
}