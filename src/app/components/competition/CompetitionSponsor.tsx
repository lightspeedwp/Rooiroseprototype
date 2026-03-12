import React from 'react';
import { Handshake } from 'lucide-react';
import { type Competition } from '../../data/competitions';

export const CompetitionSponsor = ({ competition }: { competition: Competition }) => {
  return (
    <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] p-6 mb-6">
      <h3 className="text-lg font-normal text-brand-navy dark:text-foreground mb-4 font-heading flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
        <Handshake size={20} className="text-custom-primary" />
        Aangebied deur
      </h3>
      <div className="flex items-center gap-4 bg-gray-50 dark:bg-background border border-gray-100 dark:border-border rounded-lg p-5">
        <div className="w-16 h-16 bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border flex items-center justify-center shrink-0 shadow-sm dark:shadow-[var(--shadow-dark-100)]">
          <span className="text-lg font-normal text-brand-navy dark:text-foreground font-heading text-center leading-tight" style={{ fontVariationSettings: "var(--fvs-h3)" }}>
            {competition.sponsor.split(' ').map(w => w[0]).join('')}
          </span>
        </div>
        <div>
          <p className="font-bold text-brand-navy dark:text-foreground text-lg">{competition.sponsor}</p>
          <div className="space-y-3">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Hierdie kompetisie word aangebied deur <em>rooi rose</em> in samewerking met {competition.sponsor}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};