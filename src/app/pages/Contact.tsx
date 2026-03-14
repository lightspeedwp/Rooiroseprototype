import React from 'react';
import { useNavigate } from 'react-router';
import { ContentHero } from '../components/patterns/ContentHero';
import { ContactForm } from '../components/patterns/ContactForm';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { CONTACT_FAQS } from '../data/pageFaqs';
import { Mail, MapPin, Clock, Phone } from 'lucide-react';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { MarketingGrid } from '../components/marketing/MarketingGrid';
import { CONTACT_HERO, CONTACT_PAGE_CONTENT, DEPARTMENTS, OFFICE_DETAILS, OFFICE_HOURS } from '../data/contact';
import { HERO_IMAGES } from '../data/heroImages';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

/* ── rooi rose Magazine Contact Page ──────────────────────────────
 * Editorial design: Full-width hero, department cards, editorial form
 * Typography: Playfair Display SC headings
 * Layout: Hero + department cards + form + office details
 * ────────────────────────────────────────────────────────────── */

export const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-background min-h-screen pb-20">
      <SEO
        title="Kontak ons"
        description="Kontak rooi rose - ons adres, e-posadresse en kontakvorm."
        keywords="kontak, adres, e-pos, navrae, rooi rose, tydskrif"
      />
      <PageContainer breadcrumbs={[{ label: 'Kontak ons' }]} noPadding />

      {/* Full-Width Editorial Hero */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <img 
          src={CONTACT_HERO.image}
          alt={CONTACT_HERO.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 has-brand-serif-font-family uppercase tracking-wider" style={{ letterSpacing: '0.15em' }}>
              {CONTACT_HERO.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              {CONTACT_HERO.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Department Contact Cards */}
      <PageContainer>
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family uppercase tracking-wider mb-4" style={{ letterSpacing: '0.15em' }}>
              {CONTACT_PAGE_CONTENT.help_title}
            </h2>
            <div className="w-24 h-1 bg-brand-red mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DEPARTMENTS.map((dept) => (
              <div key={dept.title} className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg p-8 shadow-sm dark:shadow-[var(--shadow-dark-200)] hover:shadow-lg hover:border-brand-red dark:hover:border-brand-red transition-all group">
                <div className="bg-brand-red w-14 h-14 rounded-lg flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform">
                  <dept.icon size={28} />
                </div>
                <h3 className="font-normal text-xl mb-3 text-brand-navy dark:text-foreground has-brand-serif-font-family">{dept.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 min-h-[40px] leading-relaxed">{dept.description}</p>
                <div className="space-y-2">
                  {dept.links.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.href} 
                      className="text-text-link-red dark:text-text-link-red hover:underline text-sm font-medium break-all flex items-center gap-2"
                    >
                      {link.type === 'email' ? <Mail size={14} /> : <Phone size={14} />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>

      {/* Main Contact Section */}
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Contact Form Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family uppercase tracking-wider mb-4" style={{ letterSpacing: '0.15em' }}>
                {CONTACT_PAGE_CONTENT.form_title}
              </h2>
              <div className="w-24 h-1 bg-brand-red mb-6"></div>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {CONTACT_PAGE_CONTENT.form_description}
              </p>
            </div>
            <div className="bg-white dark:bg-card p-8 rounded-lg border border-gray-200 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)]">
              <ContactForm onSuccess={() => navigate('/dankie-vir-kontak')} />
            </div>
          </div>

          {/* Contact Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-brand-navy-light dark:bg-background text-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-normal mb-6 font-serif border-b border-white/20 dark:border-border pb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>Kontakbesonderhede</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-2 rounded-lg shrink-0 mt-1">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-normal text-lg mb-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Kantoor</h4>
                    <p className="text-gray-200">
                      {OFFICE_DETAILS.address.line1}<br />
                      {OFFICE_DETAILS.address.line2}<br />
                      {OFFICE_DETAILS.address.line3}
                    </p>
                    <div className="mt-3 space-y-1 text-sm text-gray-300">
                      {OFFICE_DETAILS.contacts.map((contact, idx) => (
                        <p key={idx}>
                          <span className="font-semibold">{contact.label}:</span><br/>
                          <a href={contact.href} className="text-white hover:text-primary transition-colors break-all">{contact.value}</a>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary p-2 rounded-lg shrink-0 mt-1">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-normal text-lg mb-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>E-pos</h4>
                    <a href="mailto:lesers@diepapier.co.za" className="block text-white hover:text-primary transition-colors break-all">lesers@diepapier.co.za</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-card p-6 rounded-lg border border-gray-200 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)]">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-primary dark:text-primary" size={24} />
                <h3 className="text-xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Kantoorure</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                {OFFICE_HOURS.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.day}</span>
                    <span className={`font-bold ${item.highlight ? 'text-text-link-red dark:text-text-link-red' : ''}`}>
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rosebank Map */}
            <div className="mt-8 rounded-lg overflow-hidden border border-gray-200 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] bg-white dark:bg-card">
              <a
                href="https://maps.google.com/?q=The+Zone+%40+Rosebank,+Baker+Street,+Rosebank,+Johannesburg"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <ImageWithFallback
                  src={HERO_IMAGES.contactMap}
                  alt="Kaart: rooi rose kantoor by The Zone @ Rosebank, Johannesburg"
                  className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="bg-white dark:bg-card px-4 py-3 flex items-center gap-2 text-sm text-text-link-red dark:text-text-link-red font-medium">
                  <MapPin size={14} />
                  <span>Maak oop in Google Maps</span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </PageContainer>

      {/* Social Proof */}
      <section className="bg-gray-50 dark:bg-background border-t border-gray-100 dark:border-border">
        <div className="alignwide py-12 md:py-16">
          <div className="text-center mb-10">
            <h2
              className="text-2xl md:text-3xl font-normal text-brand-navy dark:text-foreground font-heading mb-2"
              style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
            >
              {CONTACT_PAGE_CONTENT.social_proof_title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {CONTACT_PAGE_CONTENT.social_proof_text}
            </p>
          </div>
          <MarketingGrid />
        </div>
      </section>

      {/* FAQ Section */}
      <PageFAQSection
        items={CONTACT_FAQS}
        description="Vrae oor hoe om ons te bereik en nuuswenke in te dien."
        variant="muted"
      />
    </div>
  );
};