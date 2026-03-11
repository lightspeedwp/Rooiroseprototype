import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, ArrowRight, ChevronRight } from 'lucide-react';
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
      return <Facebook size={size} />;
    case 'Instagram':
      return <Instagram size={size} />;
    case 'Linkedin':
      return <Linkedin size={size} />;
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
    <footer className="font-inter">
      {/* ─── Newsletter CTA Band ─── */}
      <div
        className="bg-brand-red dark:bg-primary relative overflow-hidden"
        style={{ paddingLeft: 'clamp(1rem, 4vw, 2rem)', paddingRight: 'clamp(1rem, 4vw, 2rem)' }}
      >
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)`,
          }} />
        </div>
        <div className="alignwide relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 md:py-6">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <p
                  className="font-normal font-heading leading-tight"
                  style={{
                    fontVariationSettings: "var(--fvs-h3)",
                    lineHeight: 'var(--lh-h3)',
                    letterSpacing: 'var(--ls-h3)',
                    fontSize: 'var(--text-h3)',
                  }}
                >
                  {FOOTER_CONTENT.newsletter.title}
                </p>
                <p className="text-white/75 text-sm">
                  {FOOTER_CONTENT.newsletter.description}
                </p>
              </div>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex w-full md:w-auto gap-0"
            >
              <input
                type="email"
                placeholder={FOOTER_CONTENT.newsletter.placeholder}
                className="flex-1 md:w-72 px-4 py-3 bg-white/15 border border-white/25 border-r-0 rounded-l-lg text-white text-sm placeholder:text-white/50 focus:outline-none focus:bg-white/20 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-brand-navy dark:bg-brand-navy hover:bg-brand-navy-light dark:hover:bg-brand-navy-light text-white font-bold text-sm rounded-r-lg transition-colors whitespace-nowrap flex items-center gap-2"
              >
                {FOOTER_CONTENT.newsletter.buttonText}
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ─── Main Footer Body ─── */}
      <div
        className="bg-brand-navy dark:bg-brand-navy text-white"
        style={{ paddingLeft: 'clamp(1rem, 4vw, 2rem)', paddingRight: 'clamp(1rem, 4vw, 2rem)' }}
      >
        <div className="alignwide relative z-10">
          {/* Top section: Brand + Link Columns */}
          <div className="pt-14 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">

              {/* Brand column */}
              <div className="lg:col-span-4">
                <Link to="/" className="inline-block mb-5">
                  <Logo variant="white" className="h-9 md:h-11 w-auto" />
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                  {renderWithBrandItalics(FOOTER_CONTENT.brand.description)}
                </p>

                {/* Social links */}
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-colors duration-200"
                      title={social.label}
                    >
                      <SocialIcon icon={social.icon} size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Link columns */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
                  {FOOTER_LINK_COLUMNS.map((column) => (
                    <div key={column.title}>
                      <h3 className="text-xs font-normal uppercase tracking-[0.15em] text-brand-red mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                        {renderWithBrandItalics(column.title)}
                      </h3>
                      <ul className="space-y-2.5">
                        {column.links.map((link) => (
                          <li key={link.href + link.label}>
                            <Link
                              to={link.href}
                              className="text-gray-400 text-sm hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                            >
                              <ChevronRight size={12} className="text-gray-600 group-hover:text-brand-red transition-colors opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0" />
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

          {/* ─── Contact Strip ─── */}
          <div className="border-t border-white/8 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                {FOOTER_CONTENT.contact.title}
              </span>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-400">
                <span className="flex items-start gap-2">
                  <MapPin size={14} className="text-brand-red shrink-0 mt-0.5" />
                  <span className="text-xs">{FOOTER_CONTENT.contact.address}</span>
                </span>
                <a href={`mailto:${FOOTER_CONTENT.contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={14} className="text-brand-red shrink-0" />
                  <span className="text-xs">{FOOTER_CONTENT.contact.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* ─── Accreditations ─── */}
          <div className="border-t border-white/8 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                {FOOTER_CONTENT.accreditations.title}
              </span>
              <div className="flex flex-wrap items-center gap-8">
                {FOOTER_CONTENT.accreditations.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="opacity-50 hover:opacity-100 transition-opacity"
                    title={item.name}
                  >
                    <img src={item.image} alt={item.name} className="h-9 w-auto object-contain brightness-0 invert" style={{ maxHeight: '36px', maxWidth: '120px' }} loading="lazy" decoding="async" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Bottom Bar ─── */}
          <div className="border-t border-white/8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-500 text-center md:text-left">
                {renderWithBrandItalics(FOOTER_NAVIGATION.copyright)}
                <span className="mx-2 text-gray-700">|</span>
                <span className="text-gray-500">
                  {FOOTER_CONTENT.bottom.publicationInfo}
                </span>
              </p>
              <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-gray-500">
                {FOOTER_LEGAL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="hover:text-white transition-colors"
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