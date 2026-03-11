import React from 'react';
import { Link } from 'react-router';
import { FileText } from 'lucide-react';
import { MediumRectangleAd, SidebarAds } from '../ads';

export const CompetitionsSidebarInfo = () => {
  return (
    <aside className="w-full lg:w-[300px] shrink-0 space-y-6">
      {/* T&C link */}
      <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] p-5">
        <div className="flex items-center gap-2 mb-3">
          <FileText size={18} className="text-custom-primary dark:text-primary" />
          <h3 className="font-normal text-brand-navy dark:text-foreground text-sm font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Kompetisie-inligting</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-xs mb-4 leading-relaxed">
          Alle kompetisies is onderhewig aan ons standaard kompetisie terme en voorwaardes.
          Lees dit asseblief voordat jy inskryf.
        </p>
        <Link
          to="/kompetisie-terme-en-voorwaardes"
          className="flex items-center justify-center gap-2 w-full text-center py-2.5 bg-brand-navy text-white rounded font-bold text-sm hover:bg-brand-navy-dark transition-colors"
        >
          <FileText size={14} />
          Terme en voorwaardes
        </Link>
      </div>

      {/* Ad slot */}
      <MediumRectangleAd slotName="competitions-sidebar-1" section="kompetisies" position="sidebar-top" />

      {/* How it works */}
      <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] p-5">
        <h3 className="font-normal text-brand-navy dark:text-foreground text-sm mb-3 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Hoe werk dit?</h3>
        <ol className="space-y-3">
          {[
            { step: '1', text: "Kies 'n aktiewe kompetisie" },
            { step: '2', text: 'Vul die inskrywingsvorm in' },
            { step: '3', text: 'Beantwoord die maklike vraag' },
            { step: '4', text: 'Wag vir die trekking!' },
          ].map((item) => (
            <li key={item.step} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-custom-primary text-white flex items-center justify-center text-xs font-bold shrink-0">
                {item.step}
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-300 leading-snug">{item.text}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Ad slots */}
      <SidebarAds section="kompetisies" variant="standard" />
    </aside>
  );
};
