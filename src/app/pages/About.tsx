import { CONTACT_EMAILS, CONTACT_PHONES, createMailtoLink, createTelLink } from '../data/contactInfo';
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  ChevronRight,
  Users,
  Target,
  Shield,
  Award,
} from 'lucide-react';
import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageContainer } from '../components/common/PageContainer';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { MarketingGrid } from '../components/marketing/MarketingGrid';
import { ABOUT_FAQS } from '../data/pageFaqs';
import { 
  QUICK_LINKS, 
  VALUES, 
  MANAGEMENT_TEAM, 
  REGIONAL_MANAGERS,
  ABOUT_HERO,
  ABOUT_INTRO,
  NOVUS_MEDIA,
  NOVUS_HOLDINGS,
  MISSION,
  ETHICS
} from '../data/about';
import { renderWithBrandItalics } from '../utils/brandItalics';
import { Link } from 'react-router';
import { Newspaper } from '../components/icons/NewspaperIcon';

/* ── rooi rose Magazine About Page ──────────────────────────────
 * Editorial design: Full-width hero, magazine sections
 * Typography: Playfair Display SC headings
 * Layout: Hero + sections with centered content
 * ────────────────────────────────────────────────────────────── */

const About = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <SEO
        title="Oor ons - rooi rose"
        description="rooi rose is 'n toonaangewende Afrikaanse leefstyl-tydskrif wat jou inspireer met kos, mode, skoonheid, gesondheid en die beste van Suid-Afrikaanse kultuur."
        keywords="oor ons, rooi rose, afrikaanse tydskrif, leefstyl, novus media"
      />

      {/* ─── Breadcrumbs ──────────────────────────────────── */}
      <PageContainer breadcrumbs={[{ label: 'Oor ons' }]} noPadding />

      {/* ─── Full-Width Editorial Hero ─────────────────────────────────── */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ABOUT_HERO.image}
            alt="rooi rose"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <span className="inline-block bg-brand-red text-white text-xs font-bold px-4 py-2 uppercase tracking-widest rounded-md mb-6 shadow-lg">
              {ABOUT_HERO.label}
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-normal font-heading mb-6 max-w-3xl drop-shadow-md"
              style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}
            >
              {ABOUT_HERO.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow mb-8">
              {renderWithBrandItalics(ABOUT_HERO.subtitle)}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/inteken"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                <Newspaper size={18} />
                Teken in
              </Link>
              <Link
                to="/kontak"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3 rounded-lg transition-colors backdrop-blur-sm border border-white/20"
              >
                <Mail size={18} />
                Kontak ons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Quick Links ──────────────────────────────────── */}
      <section className="bg-white dark:bg-background border-b border-gray-100 dark:border-card">
        <div className="alignwide py-12 md:py-16">
          <h2
            className="text-2xl md:text-3xl font-normal text-brand-navy dark:text-foreground font-heading mb-2"
            style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
          >
            Vinnige skakels
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Vind alles wat jy nodig het — van intekenopsies tot ons span se besonderhede.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group flex items-start gap-4 p-5 rounded-xl border border-gray-200 dark:border-border hover:border-brand-red/30 hover:shadow-md transition-[box-shadow,border-color] bg-white dark:bg-card"
              >
                <div className={`shrink-0 w-11 h-11 rounded-lg flex items-center justify-center ${link.color}`}>
                  <link.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-normal text-brand-navy dark:text-foreground group-hover:text-brand-red transition-colors flex items-center gap-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                    {link.title}
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">{renderWithBrandItalics(link.description)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Social Proof ─────────────────────────────────── */}
      <section className="bg-white dark:bg-background border-b border-gray-100 dark:border-border">
        <div className="alignwide py-12 md:py-16">
          <div className="text-center mb-10">
            <h2
              className="text-2xl md:text-3xl font-normal text-brand-navy dark:text-foreground font-heading mb-2"
              style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
            >
              Wat die mense sê
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {renderWithBrandItalics("rooi rose is meer as net 'n koerant. Dit is 'n platform vir gesprek, debat en ingeligte leserskap.")}
            </p>
          </div>
          <MarketingGrid />
        </div>
      </section>

      {/* ─── Introduction — rooi rose ─────────────────────── */}
      <section className="bg-gray-50 dark:bg-background">
        <div className="alignwide py-12 md:py-16">
          <div className="max-w-3xl">
            <h2
              className="text-2xl md:text-3xl font-normal text-brand-navy dark:text-foreground font-heading mb-6"
              style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
            >
              {ABOUT_INTRO.title}
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {ABOUT_INTRO.paragraphs.map((para, index) => (
                <p key={index}>{renderWithBrandItalics(para)}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Our Story ────────────────────────────────────── */}
      <section className="bg-white dark:bg-background border-b border-gray-100 dark:border-card">
        <div className="alignwide py-12 md:py-16">
          <div className="max-w-3xl">
            <h2
              className="text-2xl md:text-3xl font-normal text-brand-navy dark:text-foreground font-heading mb-6"
              style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
            >
              {NOVUS_MEDIA.title}
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {NOVUS_MEDIA.paragraphs.map((para, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: para.replace('novanews.co.za', '<a href="https://novanews.co.za" target="_blank" rel="noopener noreferrer" class="text-text-link-red dark:text-text-link-red hover:underline font-medium">novanews.co.za</a>').replace('rooi rose', '<em class="not-italic font-medium">rooi rose</em>').replace('Soccer Laduma', '<em class="not-italic font-medium">Soccer Laduma</em>').replace('Kick Off', '<em class="not-italic font-medium">Kick Off</em>') }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Novus Holdings ───────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-background">
        <div className="alignwide py-12 md:py-16">
          <div className="max-w-3xl">
            <h2
              className="text-2xl md:text-3xl font-normal text-brand-navy dark:text-foreground font-heading mb-6"
              style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
            >
              {NOVUS_HOLDINGS.title}
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {NOVUS_HOLDINGS.paragraphs.map((para, index) => (
                <p key={index}>{renderWithBrandItalics(para)}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mission ──────────────────────────────────────── */}
      <section className="bg-brand-navy text-white">
        <div className="alignwide p-[32px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-7 h-7 text-brand-red" />
                <h2
                  className="text-2xl md:text-3xl font-normal font-heading"
                  style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
                >
                  {MISSION.title}
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {MISSION.description}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="font-normal mb-4 text-lg font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Ons doelstellings</h3>
              <ul className="space-y-3 text-gray-300">
                {MISSION.goals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight size={16} className="text-brand-red shrink-0 mt-1" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values ───────────────────────────────────────── */}
      <section className="bg-white dark:bg-background">
        <div className="alignwide py-12 md:py-16">
          <h2
            className="text-2xl md:text-3xl font-normal text-brand-navy dark:text-foreground font-heading mb-8"
            style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
          >
            Ons waardes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 dark:border-border hover:border-brand-red/20 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-red-50 dark:bg-red-950/30 flex items-center justify-center text-brand-red">
                  <v.icon size={20} />
                </div>
                <div>
                  <h3 className="font-normal text-brand-navy dark:text-foreground mb-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>{v.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BEE Credentials ──────────────────────────────── */}
      <section className="bg-brand-navy-light dark:bg-brand-navy text-white">
        <div className="alignwide py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Award className="w-8 h-8 text-brand-red shrink-0" />
            <div>
              <h2
                className="text-xl font-normal font-heading mb-1"
                style={{ fontVariationSettings: "var(--fvs-h2)", letterSpacing: 'var(--ls-h2)' }}
              >
                Ons BEE-geloofsbriewe
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
                Ons is trots op ons BEE-geloofsbriewe en verseker dat ons mediaplatform positief bydra tot
                Suid-Afrika se breër transformasiedoelwitte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Governance ───────────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-background">
        <div className="alignwide py-12 md:py-16">
          <div className="max-w-3xl">
            <h2
              className="text-2xl md:text-3xl font-normal text-brand-navy dark:text-foreground font-heading mb-6"
              style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
            >
              Korporatiewe bestuur
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <h3 className="text-lg font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                Missie, waardes en doelstellings
              </h3>
              <p>
                Ons missie is om onpartydige nuus en inligting te verskaf wat Suid-Afrikaners bemagtig om hul plek in die samelewing en die wêreld vol te staan. Ons weerspieël die diversiteit van die Suid-Afrikaanse samelewing, dien ons lesers, en ondersteun kreatiwiteit binne ons streke.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Leadership Team ─────────────────────────────── */}
      <section className="bg-white dark:bg-background">
        <div className="alignwide py-12 md:py-16">
          <h2
            className="text-2xl md:text-3xl font-normal text-brand-navy dark:text-foreground font-heading mb-8"
            style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
          >
            Ons leiderspan
          </h2>

          <div className="mb-10">
            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-4 pb-2 border-b-2 border-brand-red inline-block font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
              Novus Media-bestuur
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {MANAGEMENT_TEAM.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-card border border-gray-200 dark:border-border p-5 rounded-xl hover:shadow-sm transition-shadow"
                >
                  <h4 className="font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>{member.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-4 pb-2 border-b-2 border-brand-red inline-block font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
              Streeksbestuurders
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {REGIONAL_MANAGERS.map((manager, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-card border border-gray-200 dark:border-border p-5 rounded-xl hover:shadow-sm dark:hover:shadow-[var(--shadow-dark-300)] transition-shadow"
                >
                  <span className="text-xs text-brand-red font-bold uppercase tracking-wider">
                    {manager.division}
                  </span>
                  <h4 className="font-normal text-brand-navy dark:text-foreground mt-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>{manager.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{manager.role}</p>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/oor-ons/redaksie"
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light dark:hover:bg-brand-navy-light text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            <Users size={18} />
            Ontmoet die redaksionele span
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* ─── Code of Ethics ───────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-background">
        <div className="alignwide py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-7 h-7 text-brand-red" />
              <h2
                className="text-2xl md:text-3xl font-normal text-brand-navy dark:text-foreground font-heading"
                style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
              >
                {ETHICS.title}
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {ETHICS.paragraphs.map((para, index) => (
                <p 
                  key={index} 
                  dangerouslySetInnerHTML={{ 
                    __html: para
                      .replace(
                        'mediaombudsman@novusmedia.co.za', 
                        `<a href="${createMailtoLink(CONTACT_EMAILS.ombudsman)}" class="text-text-link-red dark:text-text-link-red hover:underline">${CONTACT_EMAILS.ombudsman}</a>`
                      )
                      .replace(
                        '011 484 3612', 
                        `<a href="${createTelLink('011 484 3612')}" class="text-text-link-red dark:text-text-link-red hover:underline">011 484 3612</a>`
                      )
                  }} 
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="https://www.presscouncil.org.za"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                Persraad-webwerf
                <ChevronRight size={14} />
              </a>
              <Link
                to="/beleid"
                className="inline-flex items-center gap-2 bg-white dark:bg-card border border-gray-300 dark:border-border hover:border-brand-red text-brand-navy dark:text-foreground font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                Ons beleid
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Social Media ─────────────────────────────────── */}
      <section className="bg-white dark:bg-background">
        <div className="alignwide py-12 md:py-16">
          <h2
            className="text-2xl md:text-3xl font-normal text-brand-navy dark:text-foreground font-heading mb-6"
            style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
          >
            Volg ons aanlyn
          </h2>
          <div className="flex gap-3 flex-wrap">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Instagram, label: 'Instagram' },
              { icon: null, label: 'X', isXSocial: true },
              { icon: Youtube, label: 'YouTube' },
              { icon: Linkedin, label: 'LinkedIn' },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light dark:hover:bg-brand-navy-light text-white px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                {'isXSocial' in social && social.isXSocial ? (
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ) : social.icon ? (
                  <social.icon size={16} />
                ) : null}
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ──────────────────────────────────── */}
      <PageFAQSection
        items={ABOUT_FAQS}
        description="Antwoorde op algemene vrae oor rooi rose, ons agtergrond en dienste."
        variant="muted"
      />

      {/* ─── Contact CTA ──────────────────────────────────── */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy text-white">
        <div className="alignwide py-12 md:py-16 text-center">
          <h2
            className="text-3xl font-normal mb-4 font-heading"
            style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
          >
            Dankie dat u <em>rooi rose</em> besoek!
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Indien u enige vrae het of met ons wil skakel, kontak ons gerus.
          </p>
          <Link
            to="/kontak"
            className="inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-hover text-white font-bold px-8 py-4 rounded-lg transition-[background-color,transform] hover:scale-105"
          >
            <Mail size={20} />
            Kontak ons
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;