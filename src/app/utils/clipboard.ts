/**
 * Copy text to the clipboard with a fallback for environments
 * where the Clipboard API is blocked by permissions policy (e.g. iframes).
 */
export async function copyToClipboard(text: string): Promise<void> {
  // Try modern Clipboard API first
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall through to legacy fallback
    }
  }

  // Legacy fallback using a temporary textarea + execCommand
  const textarea = document.createElement('textarea');
  textarea.value = text;
  // Move off-screen to avoid visual flash
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  textarea.style.top = '-9999px';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  try {
    document.execCommand('copy');
  } finally {
    document.body.removeChild(textarea);
  }
}
