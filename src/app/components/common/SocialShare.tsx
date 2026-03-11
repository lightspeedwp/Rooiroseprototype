import React from 'react';
import { Facebook, Linkedin, Mail, Link2, Share2 } from 'lucide-react';
import { toast } from 'sonner';
import { copyToClipboard } from '../../utils/clipboard';

interface SocialShareProps {
  url?: string;
  title: string;
  description?: string;
  variant?: 'horizontal' | 'vertical';
  className?: string;
}

/**
 * Social sharing buttons for articles, events, obituaries, multimedia, and e-editions.
 * Generates share links for Facebook, X/Twitter, LinkedIn, Email, and copy-to-clipboard.
 */
export const SocialShare = ({
  url,
  title,
  description,
  variant = 'horizontal',
  className = '',
}: SocialShareProps) => {
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || '');

  const shareLinks = [
    {
      label: 'Facebook',
      icon: <Facebook size={18} />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'hover:bg-[#1877F2] hover:text-white',
    },
    {
      label: 'X',
      icon: (
        <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'hover:bg-black hover:text-white',
    },
    {
      label: 'LinkedIn',
      icon: <Linkedin size={18} />,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
      color: 'hover:bg-[#0A66C2] hover:text-white',
    },
    {
      label: 'WhatsApp',
      icon: (
        <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: 'hover:bg-[#25D366] hover:text-white',
    },
    {
      label: 'E-pos',
      icon: <Mail size={18} />,
      href: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      color: 'hover:bg-gray-700 hover:text-white',
    },
  ];

  const handleCopyLink = () => {
    copyToClipboard(shareUrl).then(() => {
      toast.success('Skakel gekopieer!');
    }).catch(() => {
      toast.error('Kon nie skakel kopieer nie');
    });
  };

  const isVertical = variant === 'vertical';

  return (
    <div className={`${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <Share2 size={16} className="text-gray-400 dark:text-gray-500" />
        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Deel hierdie artikel</span>
      </div>
      <div className={`flex ${isVertical ? 'flex-col' : 'flex-row flex-wrap'} gap-2`}>
        {shareLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 dark:border-border text-gray-500 dark:text-gray-400 transition-colors ${link.color}`}
            title={`Deel op ${link.label}`}
            aria-label={`Deel op ${link.label}`}
          >
            {link.icon}
          </a>
        ))}
        <button
          onClick={handleCopyLink}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 dark:border-border text-gray-500 dark:text-gray-400 hover:bg-brand-navy dark:hover:bg-muted hover:text-white transition-colors"
          title="Kopieer skakel"
          aria-label="Kopieer skakel"
        >
          <Link2 size={18} />
        </button>
      </div>
    </div>
  );
};