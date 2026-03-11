import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { type Competition } from '../../data/competitions';

export const CompetitionFAQ = ({ competition }: { competition: Competition }) => {
  if (!competition.faqs || competition.faqs.length === 0) return null;

  return (
    <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] p-6 mb-6">
      <h3 className="text-lg font-normal text-brand-navy dark:text-foreground mb-4 font-heading flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
        <HelpCircle size={20} className="text-custom-primary" />
        Algemene vrae oor hierdie kompetisie
      </h3>
      <Accordion type="single" collapsible className="w-full">
        {competition.faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-100 dark:border-border">
            <AccordionTrigger className="py-4 text-left text-sm text-brand-navy dark:text-foreground hover:text-custom-primary hover:no-underline data-[state=open]:text-custom-primary font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
