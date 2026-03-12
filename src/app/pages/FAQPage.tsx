import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { SEO } from '../components/common/SEO';
import { PageContainer } from '../components/common/PageContainer';
import { ContentHero } from '../components/patterns/ContentHero';
import { renderWithBrandItalics } from '../utils/brandItalics';
import { HERO_IMAGES } from '../data/images';
import {
  ABOUT_FAQS,
  CONTACT_FAQS,
  ADVERTISE_FAQS,
  EVENTS_FAQS,
  EEDITIONS_FAQS,
  WEATHER_FAQS,
  TEAM_FAQS,
  SUBSCRIBE_FAQS,
  SUBSCRIBE_DELIVERY_FAQS,
  FOUNDATIONS_FAQS,
  OBITUARIES_FAQS,
  MULTIMEDIA_FAQS,
  NEWSLETTER_FAQS,
  NEWSLETTER_ARCHIVE_FAQS,
  POLICIES_FAQS,
  TRAFFIC_FAQS,
  COMPETITIONS_FAQS,
  SUBMIT_FAQS,
  SUBMIT_STORY_FAQS,
  SUBMIT_LETTER_FAQS,
  SUBMIT_FEEDBACK_FAQS,
  SUBMIT_SHOUTOUT_FAQS,
  SUBMIT_EVENT_FAQS,
  CLASSIFIEDS_FAQS,
  DISPLAY_ADS_FAQS,
  LEAFLETS_FAQS,
  SPONSORED_CONTENT_FAQS,
  SPONSORSHIPS_FAQS,
  SUPPLEMENTS_FAQS,
  PageFAQSection as IPageFAQSection,
  PageFAQItem
} from '../data/pageFaqs';

// Map the imported data to a structure suitable for the FAQ page
interface FAQSection {
  id: string;
  label: string;
  items: PageFAQItem[];
}

interface FAQGroup {
  title: string;
  sections: FAQSection[];
}

const FAQ_GROUPS: FAQGroup[] = [
  {
    title: 'Algemeen',
    sections: [
      { id: 'oor-ons', label: 'Oor Ons', items: ABOUT_FAQS },
      { id: 'kontak', label: 'Kontak', items: CONTACT_FAQS },
      { id: 'span', label: 'Ons Span', items: TEAM_FAQS },
      { id: 'beleid', label: 'Beleid', items: POLICIES_FAQS },
      { id: 'ontwerp', label: 'Ontwerp Grondslag', items: FOUNDATIONS_FAQS },
    ]
  },
  {
    title: 'Inteken',
    sections: [
      { id: 'inteken-opsies', label: 'Intekeningsopsies', items: SUBSCRIBE_FAQS },
      { id: 'aflewering', label: 'Huisaflewering', items: SUBSCRIBE_DELIVERY_FAQS },
    ]
  },
  {
    title: 'Adverteer',
    sections: [
      { id: 'adverteer', label: 'Adverteer', items: ADVERTISE_FAQS },
      { id: 'geklassifiseerd', label: 'Geklassifiseerd', items: CLASSIFIEDS_FAQS },
      { id: 'vertoonadvertensies', label: 'Vertoonadvertensies', items: DISPLAY_ADS_FAQS },
      { id: 'pamflette', label: 'Pamflette', items: LEAFLETS_FAQS },
      { id: 'geborgde-inhoud', label: 'Geborgde inhoud', items: SPONSORED_CONTENT_FAQS },
      { id: 'borgskappe', label: 'Borgskappe', items: SPONSORSHIPS_FAQS },
      { id: 'bylaes', label: 'Bylaes', items: SUPPLEMENTS_FAQS },
    ]
  },
  {
    title: 'Inhoud & Dienste',
    sections: [
      { id: 'e-uitgawes', label: 'E-Uitgawes', items: EEDITIONS_FAQS },
      { id: 'gebeure', label: 'Gebeure', items: EVENTS_FAQS },
      { id: 'kompetisies', label: 'Kompetisies', items: COMPETITIONS_FAQS },
      { id: 'doodsberrigte', label: 'Doodsberrigte', items: OBITUARIES_FAQS },
      { id: 'multimedia', label: 'Multimedia', items: MULTIMEDIA_FAQS },
      { id: 'weer', label: 'Weer', items: WEATHER_FAQS },
      { id: 'verkeer', label: 'Verkeer', items: TRAFFIC_FAQS },
    ]
  },
  {
    title: 'Nuusbriewe',
    sections: [
      { id: 'nuusbrief', label: 'Nuusbrief', items: NEWSLETTER_FAQS },
      { id: 'nuusbrief-argief', label: 'Nuusbrief Argief', items: NEWSLETTER_ARCHIVE_FAQS },
    ]
  },
  {
    title: 'Stuur In',
    sections: [
      { id: 'stuur-in', label: 'Stuur In (Algemeen)', items: SUBMIT_FAQS },
      { id: 'stuur-storie', label: 'Stuur Storie', items: SUBMIT_STORY_FAQS },
      { id: 'stuur-brief', label: 'Stuur Lesersbrief', items: SUBMIT_LETTER_FAQS },
      { id: 'stuur-terugvoer', label: 'Stuur Terugvoer', items: SUBMIT_FEEDBACK_FAQS },
      { id: 'stuur-shoutout', label: 'Stuur Shoutout', items: SUBMIT_SHOUTOUT_FAQS },
      { id: 'stuur-gebeurtenis', label: 'Stuur Gebeurtenis', items: SUBMIT_EVENT_FAQS },
    ]
  }
];

// Flattened list for the main content loop
const ALL_SECTIONS = FAQ_GROUPS.flatMap(group => group.sections);

export const FAQPage = () => {
  const [activeSection, setActiveSection] = useState(ALL_SECTIONS[0].id);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      // Offset for sticky header
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen">
      <SEO
        title="Algemene vrae - rooi rose"
        description="Vind antwoorde op algemene vrae oor rooi rose, intekeninge, aflewering, advertering en meer."
        keywords="faq, algemene vrae, help, ondersteuning, die papier"
      />

      <PageContainer breadcrumbs={[{ label: 'Algemene vrae' }]} noPadding />

      <ContentHero 
        title="Algemene vrae"
        subtitle="Hier vind jy antwoorde op die mees algemene vrae oor rooi rose – 'n nuwe Afrikaanse koerant wat op 6 Maart 2026 op die rakke én aanlyn verskyn."
        image={HERO_IMAGES.faq}
      />

      {/* Mobile Category Navigation (Horizontal Scroll) */}
      <div className="bg-white dark:bg-background border-b border-gray-200 dark:border-border sticky top-0 z-10 lg:hidden">
        <div className="w-full px-4 overflow-x-auto scrollbar-hide">
          <nav className="flex gap-4 py-4 min-w-max">
            {ALL_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-bold whitespace-nowrap transition-colors ${
                  activeSection === section.id
                    ? 'text-primary dark:text-primary'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {renderWithBrandItalics(section.label)}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="alignwide py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

          {/* Sticky Sidebar — Table of Contents */}
          <div className="lg:w-64 flex-shrink-0 hidden lg:block">
            {/* Sticky container constrained to viewport height minus header offset */}
            <div className="sticky top-32 max-h-[calc(100vh-10rem)] flex flex-col">
              <h3 className="font-normal text-brand-navy dark:text-foreground mb-4 text-sm uppercase tracking-wider shrink-0 bg-gray-50 dark:bg-background py-2 z-10 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                Inhoudsopgawe
              </h3>
              
              <nav className="flex flex-col space-y-6 overflow-y-auto pr-2 custom-scrollbar pb-10">
                {FAQ_GROUPS.map((group) => (
                  <div key={group.title}>
                    <h4 className="font-normal text-xs text-gray-400 uppercase mb-2 px-3 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                      {group.title}
                    </h4>
                    <div className="flex flex-col space-y-1">
                      {group.sections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(section.id);
                          }}
                          className={`text-sm font-medium border-l-2 py-1 pl-3 transition-colors duration-200 block ${
                            activeSection === section.id
                              ? 'border-primary dark:border-primary text-primary dark:text-primary bg-white dark:bg-card rounded-r-md shadow-sm'
                              : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:border-primary/30 hover:bg-gray-50 dark:hover:bg-card/50 rounded-r-md'
                          }`}
                        >
                          {renderWithBrandItalics(section.label)}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            {FAQ_GROUPS.map((group) => (
              <div key={group.title} className="mb-12">
                <h3 className="text-sm font-normal text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-200 dark:border-border pb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                  {group.title}
                </h3>
                
                {group.sections.map((section) => (
                  <div key={section.id} id={section.id} className="mb-10 scroll-mt-32">
                    <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
                      {renderWithBrandItalics(section.label)}
                    </h2>
                    
                    <Accordion type="single" collapsible className="w-full bg-white dark:bg-card rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)] border border-gray-200 dark:border-border">
                      {section.items.map((item) => (
                        <AccordionItem key={item.id} value={item.id}>
                          <AccordionTrigger className="px-6 py-4 text-left hover:text-primary dark:hover:text-primary hover:no-underline data-[state=open]:text-primary dark:data-[state=open]:text-primary font-medium">
                            <span dangerouslySetInnerHTML={{ __html: item.question.replace('rooi rose', '<em>rooi rose</em>') }} />
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                            <div dangerouslySetInnerHTML={{ __html: item.answer.replace('rooi rose', '<em>rooi rose</em>') }} />
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};