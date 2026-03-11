import React from 'react';
import { Link } from 'react-router';
import { FileText, Star, CheckCircle2, Trophy, Gift } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { CompetitionStatusBadge } from '../common/CompetitionStatusBadge';
import { type Competition } from '../../data/competitions';
import { SidebarAds, MediumRectangleAd } from '../ads';

/** Small competition list card for sidebar */
const SidebarCompetitionItem = ({ comp, isCurrent }: { comp: Competition; isCurrent: boolean }) => {
  return (
    <Link
      to={`/kompetisies/${comp.slug}`}
      className={`block rounded-lg border p-3 transition-[border-color,background-color] shadow-sm dark:shadow-[var(--shadow-dark-100)] ${
        isCurrent
          ? 'border-custom-primary bg-red-50/40 dark:bg-red-950/20'
          : 'border-gray-100 dark:border-border hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md'
      }`}
    >
      <div className="flex gap-3">
        <div className="w-16 h-16 rounded overflow-hidden shrink-0">
          <ImageWithFallback
            src={comp.imageUrl}
            alt={comp.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className={`text-xs font-normal leading-snug line-clamp-2 mb-1 font-heading ${
            isCurrent ? 'text-custom-primary' : 'text-brand-navy dark:text-foreground'
          }`} style={{ fontVariationSettings: "var(--fvs-h4)", letterSpacing: 'var(--ls-h4)' }}>
            {comp.title}
          </h4>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
            <Gift size={10} className="text-custom-primary" />
            <span className="font-bold">{comp.prizeValue}</span>
            <span>&middot;</span>
            <CompetitionStatusBadge status={comp.status} size="sm" className="!text-[10px] !px-1.5 !py-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
};

interface CompetitionSidebarProps {
  isActive: boolean;
  slug: string;
  activeCompetitions: Competition[];
  closedCompetitions: Competition[];
}

export const CompetitionSidebar = ({ isActive, slug, activeCompetitions, closedCompetitions }: CompetitionSidebarProps) => {
  return (
    <aside className="w-full lg:w-[300px] shrink-0 space-y-6">
      {/* CTA button for active — scroll to form */}
      {isActive && (
        <a
          href="#inskrywing"
          className="flex items-center justify-center gap-2 w-full py-3 bg-custom-primary text-white rounded-lg shadow-sm font-bold text-sm hover:bg-custom-primary-2 transition-colors"
        >
          <Trophy size={16} />
          Skryf nou in
        </a>
      )}

      {/* T&C link */}
      <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] p-5">
        <div className="flex items-center gap-2 mb-3">
          <FileText size={18} className="text-custom-primary" />
          <h3 className="font-normal text-brand-navy dark:text-foreground text-sm font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", letterSpacing: 'var(--ls-h3)' }}>Kompetisie-inligting</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-xs mb-4 leading-relaxed">
          Alle kompetisies is onderhewig aan ons standaard kompetisie terme en voorwaardes.
        </p>
        <Link
          to="/kompetisie-terme-en-voorwaardes"
          className="flex items-center justify-center gap-2 w-full text-center py-2.5 bg-brand-navy text-white rounded font-bold text-sm hover:bg-brand-navy-dark transition-colors"
        >
          <FileText size={14} />
          Terme en voorwaardes
        </Link>
      </div>

      {/* Active Competitions */}
      {activeCompetitions.length > 0 && (
        <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] p-5">
          <h3 className="text-sm font-normal text-brand-navy dark:text-foreground mb-3 pb-2 border-b border-custom-primary inline-block font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", letterSpacing: 'var(--ls-h3)' }}>
            <span className="flex items-center gap-1.5">
              <Star size={14} className="text-custom-primary" />
              Aktiewe kompetisies
            </span>
          </h3>
          <div className="space-y-2.5">
            {activeCompetitions.slice(0, 5).map((comp) => (
              <SidebarCompetitionItem
                key={comp.id}
                comp={comp}
                isCurrent={comp.slug === slug}
              />
            ))}
          </div>
        </div>
      )}

      {/* Ad slot */}
      <MediumRectangleAd slotName="competition-single-sidebar-1" section="kompetisies" position="sidebar-top" />

      {/* Previous Competitions */}
      {closedCompetitions.length > 0 && (
        <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] p-5">
          <h3 className="text-sm font-normal text-brand-navy dark:text-foreground mb-3 pb-2 border-b border-gray-200 dark:border-border inline-block font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", letterSpacing: 'var(--ls-h3)' }}>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-gray-400" />
              Vorige kompetisies
            </span>
          </h3>
          <div className="space-y-2.5">
            {closedCompetitions.map((comp) => (
              <SidebarCompetitionItem
                key={comp.id}
                comp={comp}
                isCurrent={comp.slug === slug}
              />
            ))}
          </div>
          <Link
            to="/kompetisies"
            className="block text-center text-sm font-bold text-custom-primary hover:underline mt-3 pt-3 border-t border-gray-100 dark:border-border"
          >
            Sien alle kompetisies
          </Link>
        </div>
      )}

      {/* Additional ads */}
      <SidebarAds section="kompetisies" variant="standard" />
    </aside>
  );
};
