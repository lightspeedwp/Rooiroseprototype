import React from 'react';
import { Gift, Star, Handshake, CalendarDays, Clock, Trophy } from 'lucide-react';
import { type Competition } from '../../data/competitions';

export const CompetitionKeyDetails = ({ competition }: { competition: Competition }) => {
  return (
    <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] p-6 mb-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div className="flex items-start gap-3">
          <Gift size={20} className="text-custom-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase">Prys</p>
            <p className="text-sm font-bold text-brand-navy dark:text-foreground">{competition.prize}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Star size={20} className="text-custom-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase">Waarde</p>
            <p className="text-sm font-bold text-brand-navy dark:text-foreground">{competition.prizeValue}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Handshake size={20} className="text-custom-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase">Borg</p>
            <p className="text-sm font-bold text-brand-navy dark:text-foreground">{competition.sponsor}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CalendarDays size={20} className="text-custom-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase">Oopmaakdatum</p>
            <p className="text-sm font-bold text-brand-navy dark:text-foreground">{competition.openDate}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock size={20} className="text-custom-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase">Sluitingsdatum</p>
            <p className="text-sm font-bold text-brand-navy dark:text-foreground">{competition.closingDate}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Trophy size={20} className="text-custom-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase">Wenner-aankondiging</p>
            <p className="text-sm font-bold text-brand-navy dark:text-foreground">{competition.winnerAnnouncementDate}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
        {competition.longDescription}
      </div>
    </div>
  );
};
