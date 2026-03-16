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
    <div className="p-8 relative">
      {/* Editorial Title with Decorative Accent */}
      <div className="mb-6 pt-2">
        <h3 className="has-brand-serif-font-family font-normal text-brand-red uppercase mb-1 tracking-wider text-sm flex items-center gap-2">
          <Trophy size={14} className="text-brand-red" />
          Kompetisie
        </h3>
        <div className="w-12 h-px bg-brand-red mt-2"></div>
      </div>

      {/* Competition Card - Premium Design */}
      <Link 
        to={`/kompetisies/${competition.slug}`}
        className="group block mb-6"
      >
        {/* Featured Image with Elegant Overlay */}
        <div className="relative h-48 overflow-hidden rounded-md mb-4 shadow-lg">
          <ImageWithFallback
            src={competition.imageUrl}
            alt={competition.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Badge - Editorial Style */}
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-brand-red text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wide shadow-md">
            <Trophy size={10} />
            {HOME_CONTENT.sidebar.competitions.badge}
          </span>
        </div>

        {/* Competition Info - Magazine Typography */}
        <div className="space-y-3">
          <h4 className="has-brand-serif-font-family text-lg font-normal text-brand-navy dark:text-foreground leading-tight group-hover:text-brand-red transition-colors duration-300">
            {competition.title}
          </h4>
          
          {/* Closing Date - Refined */}
          <p className="has-brand-sans-font-family text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1.5">
            <Clock size={12} className="shrink-0 text-brand-red" />
            <span>{HOME_CONTENT.sidebar.competitions.closingPrefix} {competition.closingDate}</span>
          </p>
          
          {/* Premium CTA Button */}
          <span className="block w-full text-center py-3 px-6 bg-brand-red text-white rounded text-xs font-bold uppercase tracking-wider group-hover:bg-brand-navy transition-all duration-300 shadow-sm group-hover:shadow-md">
            {HOME_CONTENT.sidebar.competitions.button}
          </span>
        </div>
      </Link>

      {/* View All Link - Editorial Style */}
      <Link
        to="/kompetisies"
        className="block text-center has-brand-sans-font-family text-sm font-semibold text-brand-red hover:text-brand-navy transition-colors duration-300 uppercase tracking-wider"
      >
        {HOME_CONTENT.sidebar.competitions.viewAll} →
      </Link>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-20"></div>
    </div>
  );
};
