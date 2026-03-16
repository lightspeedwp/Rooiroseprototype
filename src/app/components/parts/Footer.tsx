import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { Logo } from '../common/Logo';
import { 
  SOCIAL_LINKS, 
  FOOTER_LINK_COLUMNS, 
  FOOTER_LEGAL_LINKS, 
  FOOTER_NAVIGATION,
  FOOTER_CONTENT
} from '../../data/navigation';
import { renderWithBrandItalics } from '../../utils/brandItalics';

const SocialIcon = ({ icon, size = 18 }: { icon: string; size?: number }) => {
  switch (icon) {
    case 'XSocial':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'TikTok':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.79a8.24 8.24 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.2z" />
        </svg>
      );
    case 'Facebook':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z" />
        </svg>
      );
    case 'Instagram':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      );
    case 'Linkedin':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case 'Youtube':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
};

export const Footer = () => {
  const navigate = useNavigate();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/nuusbrief-inteken');
  };

  return (
    <footer className="has-brand-sans-font-family">
      {/* ─── Newsletter CTA Band ─── */}
      <div
        className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-border"
        style={{ paddingLeft: 'clamp(1rem, 4vw, 2rem)', paddingRight: 'clamp(1rem, 4vw, 2rem)' }}
      >
        <div className="alignwide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-10 md:py-8">
            <div className="flex items-center gap-4 text-gray-900 dark:text-white">
              <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0">
                <Mail size={22} className="text-white" />
              </div>
              <div>
                <p
                  className="font-normal has-brand-serif-font-family leading-tight text-gray-900 dark:text-white"
                  style={{
                    fontVariationSettings: "var(--fvs-h4)",
                    lineHeight: 'var(--lh-h4)',
                    letterSpacing: 'var(--ls-h4)',
                    fontSize: 'var(--text-h4)',
                  }}
                >
                  Kry ons gratis nuusbrief
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Ontvang die jongste stories elke week
                </p>
              </div>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              role="search"
              className="flex w-full md:w-auto gap-2"
            >
              <input
                type="email"
                placeholder="Jou e-posadres"
                aria-label="E-posadres vir nuusbrief"
                className="flex-1 md:w-72 px-4 py-3 bg-white dark:bg-background border border-gray-300 dark:border-border rounded-lg text-gray-900 dark:text-white text-sm placeholder:text-gray-400 focus-brand transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-sm rounded-lg transition-colors whitespace-nowrap flex items-center gap-2"
              >
                Inteken
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ─── Main Footer Body ─── */}
      <div
        className="bg-white dark:bg-background border-t border-gray-200 dark:border-border"
        style={{ paddingLeft: 'clamp(1rem, 4vw, 2rem)', paddingRight: 'clamp(1rem, 4vw, 2rem)' }}
      >
        <div className="alignwide">
          {/* Top section: Brand + Link Columns */}
          <div className="py-12 border-b border-gray-200 dark:border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">

              {/* Brand column */}
              <div className="lg:col-span-4">
                <Link to="/" className="inline-block mb-6">
                  <Logo variant="default" className="h-9 md:h-10 w-auto" />
                </Link>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                  {renderWithBrandItalics(FOOTER_CONTENT.brand.description)}
                </p>

                {/* Social links */}
                <div className="flex gap-2">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-red hover:text-white dark:hover:bg-brand-red dark:hover:text-white transition-[background-color,color] duration-200"
                      title={social.label}
                    >
                      <SocialIcon icon={social.icon} size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Link columns */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
                  {FOOTER_LINK_COLUMNS.map((column) => (
                    <div key={column.title}>
                      <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-red mb-4 has-brand-serif-font-family" style={{ fontVariationSettings: "var(--fvs-h6)", letterSpacing: 'var(--ls-h6)' }}>
                        {renderWithBrandItalics(column.title)}
                      </h3>
                      <ul className="space-y-2">
                        {column.links.map((link) => (
                          <li key={link.href + link.label}>
                            <Link
                              to={link.href}
                              className="text-gray-600 dark:text-gray-400 text-sm hover:text-brand-red dark:hover:text-brand-red transition-colors"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ─── Contact Info ─── */}
          <div className="py-6 border-b border-gray-200 dark:border-border">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                <p className="font-medium text-gray-900 dark:text-white">Kontak</p>
                <p className="text-xs leading-relaxed max-w-lg">{FOOTER_CONTENT.contact.address}</p>
                <a href={`mailto:${FOOTER_CONTENT.contact.email}`} className="text-brand-red hover:underline">
                  {FOOTER_CONTENT.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* ─── Bottom Bar ─── */}
          <div className="py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-500 dark:text-gray-500 text-center md:text-left">
                {renderWithBrandItalics(FOOTER_NAVIGATION.copyright)}
                <span className="mx-2 text-gray-300 dark:text-gray-700">|</span>
                <span className="text-gray-500 dark:text-gray-500">
                  {FOOTER_CONTENT.bottom.publicationInfo}
                </span>
              </p>
              <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-gray-500 dark:text-gray-500">
                {FOOTER_LEGAL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="hover:text-brand-red dark:hover:text-brand-red transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};