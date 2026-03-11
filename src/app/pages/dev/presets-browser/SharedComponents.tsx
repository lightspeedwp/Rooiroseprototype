import React from 'react';
import { Copy, Check } from 'lucide-react';
import { Link } from 'react-router';

// ─── Copy Button ─────────────────────────────────────────────────────────────

interface CopyButtonProps {
  text: string;
  id: string;
  copied: string | null;
  copy: (text: string, id: string) => void;
  label?: string;
}

export function CopyButton({ text, id, copied, copy, label }: CopyButtonProps) {
  const isCopied = copied === id;
  return (
    <button
      onClick={() => copy(text, id)}
      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/40 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
      title={`Copy ${label || text}`}
    >
      {isCopied ? <Check size={10} className="text-green-500" /> : <Copy size={10} />}
      {label && <span>{isCopied ? 'Copied' : label}</span>}
    </button>
  );
}

// ─── Usage Badges ────────────────────────────────────────────────────────────

interface UsageBadgesProps {
  styles: string[];
}

export function UsageBadges({ styles }: UsageBadgesProps) {
  if (styles.length === 0) {
    return <span className="text-[10px] text-gray-400 dark:text-white/20 italic">No block styles</span>;
  }
  return (
    <div className="flex flex-wrap gap-1">
      {styles.map(s => (
        <Link
          key={s}
          to="/ontwikkelaar/blok-styl"
          className="inline-flex px-1.5 py-0.5 rounded text-[10px] bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-300 hover:bg-pink-100 dark:hover:bg-pink-500/20 transition-colors"
        >
          {s}
        </Link>
      ))}
    </div>
  );
}
