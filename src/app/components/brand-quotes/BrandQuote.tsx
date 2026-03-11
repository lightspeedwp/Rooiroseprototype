import React from 'react';
import { BrandLogo } from './BrandLogo';

export type BrandQuoteVariant = 'black' | 'red' | 'white' | 'navy';

interface BrandQuoteProps {
  quote: React.ReactNode;
  subtext: string;
  variant?: BrandQuoteVariant;
  className?: string;
}

export const BrandQuote: React.FC<BrandQuoteProps> = ({ 
  quote, 
  subtext, 
  variant = 'black', 
  className = '' 
}) => {
  const getColors = () => {
    switch (variant) {
      case 'red':
        return {
          bg: 'bg-brand-red',
          text: 'text-black',
          subtext: 'text-black',
          logo: 'var(--base)'
        };
      case 'white':
        return {
          bg: 'bg-brand-warm-gray dark:bg-muted',
          text: 'text-black dark:text-white',
          subtext: 'text-black dark:text-white',
          logo: 'var(--custom-primary)'
        };
      case 'navy':
        return {
          bg: 'bg-brand-navy dark:bg-background',
          text: 'text-white',
          subtext: 'text-white',
          logo: 'var(--custom-primary)'
        };
      case 'black':
      default:
        return {
          bg: 'bg-black',
          text: 'text-white',
          subtext: 'text-white',
          logo: 'var(--custom-primary)'
        };
    }
  };

  const colors = getColors();

  return (
    <div 
      className={`flex flex-col justify-between p-8 md:p-12 w-full h-full min-h-[500px] overflow-hidden ${colors.bg} ${className}`}
    >
      {/* Quote Text */}
      <div 
        className={`${colors.text} leading-[0.9] tracking-tight whitespace-pre-wrap`}
        style={{ 
          fontFamily: 'var(--font-heading)',
          fontVariationSettings: "'wdth' 50, 'GRAD' -50, 'opsz' 144",
          fontWeight: 400,
          fontSize: 'clamp(3.5rem, 9vw, 8.5rem)', 
        }}
      >
        {quote}
      </div>

      {/* Footer Group */}
      <div className="mt-12 md:mt-24">
        <BrandLogo 
          color={colors.logo} 
          className="w-[200px] md:w-[280px] lg:w-[348px] h-auto mb-6" 
        />
        
        <p 
          className={`font-bold text-lg md:text-2xl max-w-2xl leading-tight ${colors.subtext}`}
          style={{
            fontFamily: 'var(--font-heading)',
            fontVariationSettings: "'wdth' 100, 'GRAD' -50",
          }}
        >
          {subtext}
        </p>
      </div>
    </div>
  );
};