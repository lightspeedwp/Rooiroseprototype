import React from 'react';
import { SkyscraperAd } from './SkyscraperAd';

interface TakeoverRailsProps {
  section: string;
  enabled?: boolean;
}

/**
 * TakeoverRails Component
 * Optional homepage takeover with left and right 160×600 rails
 * Only visible on desktop 1440px+ screens
 */
export const TakeoverRails: React.FC<TakeoverRailsProps> = ({
  section,
  enabled = false,
}) => {
  if (!enabled) return null;

  return (
    <>
      {/* Left Rail */}
      <div className="hidden xl:block fixed left-4 top-24 z-10">
        <SkyscraperAd
          slotName="DP_Takeover_LHS"
          section={section}
          position="Takeover_Left"
          variant="160x600"
        />
      </div>

      {/* Right Rail */}
      <div className="hidden xl:block fixed right-4 top-24 z-10">
        <SkyscraperAd
          slotName="DP_Takeover_RHS"
          section={section}
          position="Takeover_Right"
          variant="160x600"
        />
      </div>
    </>
  );
};

export default TakeoverRails;