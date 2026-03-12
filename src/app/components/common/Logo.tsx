import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export const Logo = ({ className = "h-12 w-auto", variant = 'default' }: LogoProps) => {
  // Inline SVG for better reliability and dark mode support
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 80" 
      fill="none"
      className={className}
      aria-label="rooi rose"
      role="img"
    >
      <text 
        x="10" 
        y="55" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize="48" 
        fontWeight="700" 
        fill="#e01e12" 
        letterSpacing="-0.02em"
      >
        rooi rose
      </text>
    </svg>
  );
};