import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { type Competition } from '../../data/competitions';

export const CompetitionRules = ({ competition }: { competition: Competition }) => {
  return (
    <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] p-6 mb-6">
      <h3 className="text-lg font-normal text-brand-navy dark:text-foreground mb-3 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Kompetisiereëls</h3>
      <ul className="space-y-2">
        {competition.rules.map((rule, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="w-5 h-5 rounded-full bg-gray-100 dark:bg-muted text-gray-500 dark:text-gray-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
              {i + 1}
            </span>
            {rule}
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-border">
        <Link
          to="/kompetisie-terme-en-voorwaardes"
          className="text-custom-primary text-sm font-bold hover:underline inline-flex items-center gap-1"
        >
          Lees volledige terme en voorwaardes
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};
