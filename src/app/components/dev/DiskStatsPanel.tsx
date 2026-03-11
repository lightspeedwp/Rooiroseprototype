/**
 * DiskStatsPanel — Shared disk file analysis panel for all WP code browser dev tools.
 * Shows file stats (line count, block count, function count, etc.) loaded from disk.
 */
import React from 'react';
import {
  HardDrive, FileCode, Layers, Zap, CheckCircle, XCircle, Code, LayoutTemplate, Puzzle
} from 'lucide-react';
import type { DiskFileStats } from '../../data/wpFileLoader';

interface DiskStatsPanelProps {
  stats: DiskFileStats | null;
  loading?: boolean;
  isAf?: boolean;
  /** Optional: inline function count from data file to compare */
  inlineFunctionCount?: number;
  /** Optional: inline hook count from data file to compare */
  inlineHookCount?: number;
  /** Compact mode: single row of badges instead of full panel */
  compact?: boolean;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export const DiskStatsPanel: React.FC<DiskStatsPanelProps> = ({
  stats, loading, isAf, inlineFunctionCount, inlineHookCount, compact
}) => {
  if (compact) {
    return (
      <div className="flex items-center gap-1.5 flex-wrap">
        {loading && <span className="text-[9px] text-gray-400 dark:text-white/20 animate-pulse">Loading...</span>}
        {stats && (
          <>
            <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] ${
              stats.found ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
            }`}>
              <HardDrive size={9} />
              {stats.found ? (isAf ? 'Op skyf' : 'On disk') : (isAf ? 'Nie gevind' : 'Not found')}
            </span>
            {stats.found && (
              <>
                <span className="text-[9px] text-gray-400 dark:text-white/25">
                  {stats.lineCount} {isAf ? 'lyne' : 'lines'}
                </span>
                {stats.blockCount > 0 && (
                  <span className="text-[9px] text-blue-400">
                    {stats.blockCount} {isAf ? 'blokke' : 'blocks'}
                  </span>
                )}
                {stats.functionCount > 0 && (
                  <span className="text-[9px] text-purple-400">
                    {stats.functionCount} fn
                  </span>
                )}
              </>
            )}
          </>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 p-3">
      <div className="flex items-center gap-2 mb-2">
        <HardDrive size={11} className="text-gray-500 dark:text-white/40" />
        <span className="text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-wider">
          {isAf ? 'Skyf Lêer Analise' : 'Disk File Analysis'}
        </span>
        {loading && <span className="text-[9px] text-gray-400 dark:text-white/20 animate-pulse">Loading...</span>}
        {stats && (
          stats.found ? (
            <span className="px-1.5 py-0.5 rounded text-[9px] bg-green-500/10 text-green-400 inline-flex items-center gap-1">
              <CheckCircle size={9} />{isAf ? 'Gevind op skyf' : 'Found on disk'}
            </span>
          ) : (
            <span className="px-1.5 py-0.5 rounded text-[9px] bg-red-500/10 text-red-400 inline-flex items-center gap-1">
              <XCircle size={9} />{isAf ? 'Nie op skyf gevind' : 'Not found on disk'}
            </span>
          )
        )}
      </div>

      {stats?.found && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[11px]">
          {/* Line count */}
          <div className="flex items-center gap-1.5">
            <FileCode size={10} className="text-gray-400 shrink-0" />
            <span className="text-gray-500 dark:text-white/40">{isAf ? 'Lyne' : 'Lines'}:</span>
            <span className="font-mono text-gray-700 dark:text-white/70">{stats.lineCount}</span>
          </div>
          {/* File size */}
          <div className="flex items-center gap-1.5">
            <HardDrive size={10} className="text-gray-400 shrink-0" />
            <span className="text-gray-500 dark:text-white/40">{isAf ? 'Grootte' : 'Size'}:</span>
            <span className="font-mono text-gray-700 dark:text-white/70">{formatBytes(stats.sizeBytes)}</span>
          </div>
          {/* Block count (HTML) */}
          {stats.blockCount > 0 && (
            <div className="flex items-center gap-1.5">
              <Layers size={10} className="text-blue-400 shrink-0" />
              <span className="text-gray-500 dark:text-white/40">{isAf ? 'Blokke' : 'Blocks'}:</span>
              <span className="font-mono text-blue-500">{stats.blockCount}</span>
              <span className="text-[9px] text-gray-400 dark:text-white/20">({stats.blockTypes.length} {isAf ? 'tipes' : 'types'})</span>
            </div>
          )}
          {/* Template parts */}
          {stats.templatePartCount > 0 && (
            <div className="flex items-center gap-1.5">
              <Puzzle size={10} className="text-cyan-400 shrink-0" />
              <span className="text-gray-500 dark:text-white/40">{isAf ? 'Onderdele' : 'Parts'}:</span>
              <span className="font-mono text-cyan-500">{stats.templatePartCount}</span>
            </div>
          )}
          {/* Pattern refs */}
          {stats.patternRefCount > 0 && (
            <div className="flex items-center gap-1.5">
              <LayoutTemplate size={10} className="text-amber-400 shrink-0" />
              <span className="text-gray-500 dark:text-white/40">{isAf ? 'Patrone' : 'Patterns'}:</span>
              <span className="font-mono text-amber-500">{stats.patternRefCount}</span>
            </div>
          )}
          {/* Function count (PHP) */}
          {stats.functionCount > 0 && (
            <div className="flex items-center gap-1.5">
              <Code size={10} className="text-purple-400 shrink-0" />
              <span className="text-gray-500 dark:text-white/40">{isAf ? 'Funksies' : 'Functions'}:</span>
              <span className={`font-mono ${
                inlineFunctionCount !== undefined && stats.functionCount !== inlineFunctionCount
                  ? 'text-amber-400'
                  : 'text-purple-500'
              }`}>
                {stats.functionCount}
              </span>
              {inlineFunctionCount !== undefined && stats.functionCount !== inlineFunctionCount && (
                <span className="text-[9px] text-amber-400">(inline: {inlineFunctionCount})</span>
              )}
            </div>
          )}
          {/* Hook count (PHP) */}
          {stats.hookCount > 0 && (
            <div className="flex items-center gap-1.5">
              <Zap size={10} className="text-amber-400 shrink-0" />
              <span className="text-gray-500 dark:text-white/40">Hooks:</span>
              <span className={`font-mono ${
                inlineHookCount !== undefined && stats.hookCount !== inlineHookCount
                  ? 'text-amber-400'
                  : 'text-amber-500'
              }`}>
                {stats.hookCount}
              </span>
              {inlineHookCount !== undefined && stats.hookCount !== inlineHookCount && (
                <span className="text-[9px] text-amber-400">(inline: {inlineHookCount})</span>
              )}
            </div>
          )}
        </div>
      )}

      {/* Block types list (when blocks found) */}
      {stats?.found && stats.blockTypes.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {stats.blockTypes.map(bt => (
            <span key={bt} className={`px-1.5 py-0.5 rounded text-[9px] font-mono ${
              bt.startsWith('die-papier/') || bt.startsWith('dp/')
                ? 'bg-red-500/10 text-red-400'
                : 'bg-blue-500/10 text-blue-400'
            }`}>
              {bt}
            </span>
          ))}
        </div>
      )}

      {/* Function names list (when functions found and expanded) */}
      {stats?.found && stats.functionNames.length > 0 && stats.functionNames.length <= 12 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {stats.functionNames.map(fn => (
            <span key={fn} className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-purple-500/10 text-purple-400">
              {fn}()
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
