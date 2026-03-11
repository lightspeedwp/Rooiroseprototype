import React from 'react';
import { AdSlot } from './AdSlot';

interface SkyscraperAdProps {
  slotName: string;
  section: string;
  position: 'Takeover_Left' | 'Takeover_Right';
  className?: string;
  variant?: '120x600' | '160x600';
}

/**
 * SkyscraperAd Component
 * Supports 120×600 for standard skyscraper
 * Supports 160×600 for wide skyscraper/takeover rails
 * Only visible on desktop screens 1440px+
 */
export const SkyscraperAd: React.FC<SkyscraperAdProps> = ({
  slotName,
  section,
  position,
  className = '',
  variant = '120x600',
}) => {
  const adSize: [number, number] = variant === '160x600' ? [160, 600] : [120, 600];
  
  return (
    <div className="hidden xl:flex justify-center">
      <AdSlot
        slotName={slotName}
        size={{
          desktop: adSize,
        }}
        section={section}
        position={position}
        className={className}
        hideOnMobile={true}
      />
    </div>
  );
};

export default SkyscraperAd;