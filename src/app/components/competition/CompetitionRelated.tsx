import React from 'react';
import { Link } from 'react-router';
import { Trophy, ArrowRight, Clock, Gift } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { CompetitionStatusBadge } from '../common/CompetitionStatusBadge';
import { type Competition } from '../../data/competitions';

export const CompetitionRelated = ({ relatedCompetitions }: { relatedCompetitions: Competition[] }) => {
  if (relatedCompetitions.length === 0) return null;

  return (
    <section className="bg-white dark:bg-background border-t border-gray-200 dark:border-border py-12">
      <div className="alignwide">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
            <Trophy size={22} className="text-custom-primary" />
            Meer kompetisies
          </h2>
          <Link
            to="/kompetisies"
            className="text-custom-primary font-bold text-sm hover:underline flex items-center gap-1"
          >
            Sien alles <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedCompetitions.map((comp) => (
            <Link
              key={comp.id}
              to={`/kompetisies/${comp.slug}`}
              className="group bg-gray-50 dark:bg-card rounded-xl border border-gray-200 dark:border-border overflow-hidden shadow-sm dark:shadow-[var(--shadow-dark-200)] hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <ImageWithFallback
                  src={comp.imageUrl}
                  alt={comp.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <CompetitionStatusBadge status={comp.status} size="sm" />
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-brand-navy text-sm font-bold px-3 py-1 rounded flex items-center gap-1.5">
                  <Gift size={14} className="text-custom-primary" />
                  {comp.prizeValue}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-normal text-brand-navy dark:text-foreground mb-2 group-hover:text-custom-primary transition-colors font-heading line-clamp-2" style={{ fontVariationSettings: "var(--fvs-h3)", letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                  {comp.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    Sluit: {comp.closingDate}
                  </span>
                  <span className="text-custom-primary font-bold flex items-center gap-1">
                    Skryf in <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
