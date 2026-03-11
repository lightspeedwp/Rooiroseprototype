import React from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HOME_CONTENT } from '../../data/home';

export const SidebarEEditionPromo = () => {
  return (
    <div className="flex flex-col p-6 rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)] bg-white dark:bg-card border border-gray-200 dark:border-border">
      {/* Newspaper Cover Image - Portrait */}
      <div className="w-full h-80 overflow-hidden bg-gray-100 dark:bg-card rounded-md mb-4">
        <ImageWithFallback
          src={HOME_CONTENT.sidebar.eEdition.image}
          alt="E-uitgawe voorblad"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="bg-brand-navy dark:bg-brand-navy px-4 py-4 rounded-md">
        <h2 className="text-white mb-1">
          {HOME_CONTENT.sidebar.eEdition.title}
        </h2>
        <p className="text-gray-300 text-xs mb-3">{HOME_CONTENT.sidebar.eEdition.subtitle}</p>
        
        <Link to="/e-uitgawes" className="block w-full bg-brand-red text-white hover:bg-brand-red-hover py-2 rounded text-center font-bold transition-colors text-sm">
          {HOME_CONTENT.sidebar.eEdition.button}
        </Link>
      </div>
    </div>
  );
};
