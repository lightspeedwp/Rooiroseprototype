import React from 'react';
import { MediumRectangleAd } from './MediumRectangleAd';
import { AdContainer } from './AdContainer';

interface InFeedAdProps {
  section: string;
  premium?: boolean;
  className?: string;
}

/**
 * InFeedAd Component
 * Mobile in-feed 300×250 ad (appears after content blocks)
 */
export const InFeedAd: React.FC<InFeedAdProps> = ({
  section,
  premium,
  className = '',
}) => {
  return (
    <div className={`lg:hidden my-6 ${className}`}>
      <AdContainer label="Advertensie">
        <MediumRectangleAd
          slotName="DP_InFeed_MR"
          section={section}
          position="InFeed"
          premium={premium}
        />
      </AdContainer>
    </div>
  );
};

export default InFeedAd;
