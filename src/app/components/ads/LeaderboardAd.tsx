import React from 'react';
import { AdSlot } from './AdSlot';

interface LeaderboardAdProps {
  section: string;
  position?: string;
  className?: string;
}

/**
 * LeaderboardAd Component
 * Header ad: 728×90 on desktop, 320×50 on mobile
 */
export const LeaderboardAd: React.FC<LeaderboardAdProps> = ({ section, position = 'Header', className = '' }) => {
  return (
    <AdSlot
      slotName="DP_Header_Leaderboard"
      size={{
        desktop: [728, 60],
        mobile: [320, 60],
      }}
      section={section}
      position={position}
      className={className}
    />
  );
};

export default LeaderboardAd;