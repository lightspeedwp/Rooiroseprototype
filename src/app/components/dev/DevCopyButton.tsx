/**
 * DevCopyButton — Reusable copy-to-clipboard button for dev tool pages.
 *
 * Provides: Copy icon → Check icon transition + optional toast feedback.
 * Extracted as DRY pattern (2026-03-05 memory optimization).
 * Used by: PatternBrowser, BlockStyleBrowser, PresetsBrowser, IconBrowser, etc.
 */
import React, { useState, useCallback } from 'react';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

interface DevCopyButtonProps {
  /** The text to copy to clipboard */
  text: string;
  /** Optional toast message on success (set to false to disable toast) */
  toastMessage?: string | false;
  /** Button size — icon dimensions */
  size?: 'sm' | 'md';
  /** Additional className */
  className?: string;
  /** Optional aria-label */
  label?: string;
}

export function DevCopyButton({
  text,
  toastMessage = 'Copied!',
  size = 'sm',
  className = '',
  label = 'Copy to clipboard',
}: DevCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (toastMessage !== false) {
        toast.success(toastMessage);
      }
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy');
    }
  }, [text, toastMessage]);

  const iconSize = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';

  return (
    <button
      onClick={handleCopy}
      className={`p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors ${className}`}
      aria-label={label}
      title={label}
    >
      {copied ? (
        <Check className={`${iconSize} text-green-500`} />
      ) : (
        <Copy className={iconSize} />
      )}
    </button>
  );
}
