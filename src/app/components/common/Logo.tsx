import React from 'react';
import rooiRoseLogoSvg from '../../../imports/rooi-rose-logo.svg';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export const Logo = ({ className = "h-12 w-auto", variant = 'default' }: LogoProps) => {
  // SVG logo with built-in dark mode support
  // The SVG contains red text which works on both light and dark backgrounds
  return (
    <img 
      src={rooiRoseLogoSvg}
      alt="rooi rose"
      className={className}
      loading="eager"
      decoding="sync"
    />
  );
};