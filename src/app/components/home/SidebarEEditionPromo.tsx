import React from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HOME_CONTENT } from '../../data/home';

export const SidebarEEditionPromo = () => {
  return (
    <div className="flex flex-col p-8 relative">
      {/* Editorial Title with Decorative Accent */}
      <div className="mb-6 pt-2">
        <h3 className="has-brand-serif-font-family font-normal text-brand-red uppercase mb-1 tracking-wider text-sm">
          Nuutste Uitgawe
        </h3>
        <div className="w-12 h-px bg-brand-red mt-2"></div>
      </div>

      {/* Magazine Cover - Enhanced with Shadow */}
      <div className="w-full h-80 overflow-hidden bg-gray-100 dark:bg-card rounded-md mb-6 shadow-lg group">
        <ImageWithFallback
          src={HOME_CONTENT.sidebar.eEdition.image}
          alt="E-uitgawe voorblad"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Editorial Content Area */}
      <div className="space-y-4">
        {/* Title - Editorial Typography */}
        <h2 className="has-brand-serif-font-family text-xl font-normal text-brand-navy dark:text-foreground leading-tight">
          {HOME_CONTENT.sidebar.eEdition.title}
        </h2>
        
        {/* Subtitle - Refined Typography */}
        <p className="has-brand-sans-font-family text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {HOME_CONTENT.sidebar.eEdition.subtitle}
        </p>
        
        {/* Premium CTA Button - Editorial Style */}
        <Link 
          to="/e-uitgawes" 
          className="block w-full bg-brand-red text-white hover:bg-brand-navy py-3.5 px-8 rounded text-center font-semibold transition-all duration-300 text-sm uppercase tracking-wider shadow-sm hover:shadow-md relative overflow-hidden group"
        >
          <span className="relative z-10">{HOME_CONTENT.sidebar.eEdition.button}</span>
          <span className="absolute inset-0 bg-brand-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
      </div>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-20 mt-8"></div>
    </div>
  );
};
