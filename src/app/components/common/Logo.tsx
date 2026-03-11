import React from 'react';
import rooiRoseLogo from 'figma:asset/6a6c42bb919ce382172aa054e9cc58de25b3ac26.png';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export const Logo = ({ className = "h-12 w-auto", variant = 'default' }: LogoProps) => {
  // rooi rose uses the same logo for both light and dark modes
  return (
    <img 
      src={rooiRoseLogo}
      alt="rooi rose"
      className={className}
      loading="eager"
      decoding="sync"
    />
  );
};