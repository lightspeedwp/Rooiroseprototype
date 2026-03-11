import React from 'react';
import { renderWithBrandItalics } from '../../utils/brandItalics';

interface ContentHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  align?: 'center' | 'left';
  height?: 'small' | 'medium' | 'large';
}

export const ContentHero = ({ 
  title, 
  subtitle, 
  image, 
  align = 'center',
  height = 'medium' 
}: ContentHeroProps) => {
  
  const heightClasses = {
    small: 'py-12 md:py-16',
    medium: 'py-20 md:py-32',
    large: 'py-32 md:py-48',
  };

  const alignClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
  };

  return (
    <div className={`relative bg-[--brand-navy-light] text-white ${heightClasses[height]} overflow-hidden`}>
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt={title} className="w-full h-full object-cover" loading="eager" fetchpriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 to-black/15"></div>
        </div>
      )}
      
      <div className={`alignwide relative z-10 flex flex-col ${alignClasses[align]}`}>
        <h1
          className="text-4xl md:text-6xl font-normal font-heading mb-6 max-w-4xl drop-shadow-md"
          style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}
        >
          {renderWithBrandItalics(title)}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl drop-shadow leading-relaxed">
            {renderWithBrandItalics(subtitle)}
          </p>
        )}
      </div>
    </div>
  );
};