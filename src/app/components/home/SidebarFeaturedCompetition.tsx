import React from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Trophy, Clock } from 'lucide-react';
import { HOME_CONTENT } from '../../data/home';
import { getActiveCompetitions } from '../../data/competitions';

export const SidebarFeaturedCompetition = () => {
  const competition = getActiveCompetitions()[0];
  if (!competition) return null;

  return (
    <>
      <Link 
        to={`/kompetisies/${competition.slug}`}
        className="group block p-6 rounded-lg bg-white dark:bg-card border border-gray-200 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] hover:shadow-md transition-shadow"
      >
        <div className="relative h-36 overflow-hidden rounded-md mb-4">
          <ImageWithFallback
            src={competition.imageUrl}
            alt={competition.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute top-2 left-2 inline-flex items-center gap-1 bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
            <Trophy size={10} />
            {HOME_CONTENT.sidebar.competitions.badge}
          </span>
        </div>
        <div>
          <h4 className="is-style-card-compact text-brand-navy dark:text-foreground mb-1.5 group-hover:text-brand-red transition-colors">
            {competition.title}
          </h4>
          <p className="text-[11px] text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-4">
            <Clock size={11} className="shrink-0" />
            {HOME_CONTENT.sidebar.competitions.closingPrefix} {competition.closingDate}
          </p>
          <span className="block w-full text-center py-2 bg-brand-red text-white rounded text-xs font-bold group-hover:bg-brand-red-hover transition-colors">
            {HOME_CONTENT.sidebar.competitions.button}
          </span>
        </div>
      </Link>
      <Link
        to="/kompetisies"
        className="block text-center text-brand-red text-sm font-bold hover:underline -mt-2"
      >
        {HOME_CONTENT.sidebar.competitions.viewAll} →
      </Link>
    </>
  );
};
