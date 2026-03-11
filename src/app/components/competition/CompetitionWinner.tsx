import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { type Competition } from '../../data/competitions';

export const CompetitionWinner = ({ competition }: { competition: Competition }) => {
  if (competition.status !== 'winner-announced' || !competition.winner) return null;

  return (
    <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/40 rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)] p-6 mb-6">
      <div className="flex items-start gap-4">
        <CheckCircle2 size={28} className="text-green-600 dark:text-green-400 shrink-0" />
        <div>
          <h3 className="text-lg font-normal text-green-800 dark:text-green-300 mb-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Wenner aangekondig!</h3>
          <p className="text-green-700 dark:text-green-400">
            Baie geluk aan <strong>{competition.winner.name}</strong> van <strong>{competition.winner.location}</strong>!
          </p>
          <p className="text-green-600 dark:text-green-500 text-sm mt-1">Aangekondig op {competition.winnerAnnouncementDate}</p>
        </div>
      </div>
    </div>
  );
};
