import React from 'react';
import { Link } from 'react-router';
import { Trophy, Clock, Gift, CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { CompetitionStatusBadge } from '../common/CompetitionStatusBadge';
import { type Competition } from '../../data/competitions';

export const CompetitionCard = ({ competition }: { competition: Competition }) => {
  const isActive = competition.status === 'active';
  const hasWinner = competition.status === 'winner-announced';

  return (
    <Link
      to={`/kompetisies/${competition.slug}`}
      className="group bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <ImageWithFallback
          src={competition.imageUrl}
          alt={competition.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <CompetitionStatusBadge status={competition.status} size="sm" />
        </div>
        <div className="absolute bottom-3 right-3 bg-white/90 dark:bg-background/90 backdrop-blur-sm text-brand-navy dark:text-foreground text-sm font-bold px-3 py-1 rounded flex items-center gap-1.5">
          <Gift size={14} className="text-custom-primary dark:text-primary" />
          {competition.prizeValue}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2 text-xs text-gray-500 dark:text-gray-400">
          <span className="bg-gray-100 dark:bg-muted px-2 py-0.5 rounded font-medium">{competition.category}</span>
          <span>&middot;</span>
          <span className="flex items-center gap-1">
            <Trophy size={12} />
            {competition.sponsor}
          </span>
        </div>
        <h3 className="text-lg font-normal text-brand-navy dark:text-foreground mb-2 group-hover:text-custom-primary dark:group-hover:text-primary transition-colors font-heading line-clamp-2" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
          {competition.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
          {competition.description}
        </p>

        {hasWinner && competition.winner && (
          <div className="flex items-center gap-2 bg-green-50 dark:bg-green-950/30 px-3 py-2 rounded text-sm mb-3">
            <CheckCircle2 size={16} className="text-green-600 dark:text-green-400" />
            <span className="text-green-700 dark:text-green-400 font-medium">Wenner: {competition.winner.name} ({competition.winner.location})</span>
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-border text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            Sluit: {competition.closingDate}
          </span>
          <span className="text-custom-primary dark:text-primary font-bold group-hover:underline flex items-center gap-1">
            {isActive ? 'Skryf in' : 'Lees meer'}
            <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
};
