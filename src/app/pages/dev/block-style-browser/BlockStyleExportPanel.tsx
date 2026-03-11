import React from 'react';
import { Archive, FolderDown } from 'lucide-react';
import JSZip from 'jszip';
import type { BlockStyleEntry, BlockStyleCategory } from '../../../data/blockStylesData';

// ─── BSF-012, BSF-013, BSF-014: Export Functions ─────────────────────────────

/** Download a single JSON file (BSF-014) */
function downloadJson(data: unknown, filename: string) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

/** Export multiple block styles as ZIP (BSF-012, BSF-013) */
async function exportBlockStylesAsZip(styles: BlockStyleEntry[], zipName: string) {
  const zip = new JSZip();
  
  // Group by directory structure (preserve WordPress theme structure)
  for (const style of styles) {
    const path = style.wpFilePath;
    zip.file(path, JSON.stringify(style.wpThemeJson, null, 2));
  }

  // Generate ZIP
  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = zipName;
  a.click();
  URL.revokeObjectURL(url);
}

// ─── Component ───────────────────────────────────────────────────────────────

interface BlockStyleExportPanelProps {
  allBlockStyles: BlockStyleEntry[];
  filtered: BlockStyleEntry[];
  activeCategory: BlockStyleCategory | 'all';
  activeBlockType: string | 'all';
  isAf: boolean;
}

export const BlockStyleExportPanel: React.FC<BlockStyleExportPanelProps> = ({
  allBlockStyles,
  filtered,
  activeCategory,
  activeBlockType,
  isAf,
}) => {
  return (
    <div className="mb-5 flex flex-wrap gap-2">
      <button
        onClick={() => exportBlockStylesAsZip(allBlockStyles, 'die-papier-block-styles-all.zip')}
        className="px-4 py-2.5 rounded-lg bg-brand-red hover:bg-brand-red/90 text-white text-sm inline-flex items-center gap-2 transition-colors"
      >
        <Archive size={14} />
        {isAf ? 'Voer Alle Style Uit (ZIP)' : 'Export All Styles (ZIP)'}
        <span className="text-xs opacity-75">({allBlockStyles.length})</span>
      </button>
      {filtered.length > 0 && filtered.length < allBlockStyles.length && (
        <button
          onClick={() => {
            const categoryLabel = activeCategory !== 'all'
              ? activeCategory
              : activeBlockType !== 'all'
              ? activeBlockType.replace('core/', '').replace('/', '-')
              : 'filtered';
            exportBlockStylesAsZip(filtered, `die-papier-block-styles-${categoryLabel}.zip`);
          }}
          className="px-4 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-500/90 text-white text-sm inline-flex items-center gap-2 transition-colors"
        >
          <FolderDown size={14} />
          {isAf ? 'Voer Gefiltreerde Style Uit (ZIP)' : 'Export Filtered Styles (ZIP)'}
          <span className="text-xs opacity-75">({filtered.length})</span>
        </button>
      )}
    </div>
  );
};

// Export the downloadJson function for individual file downloads
export { downloadJson };
