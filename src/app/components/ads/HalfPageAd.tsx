import React from 'react';
import { AdSlot } from './AdSlot';

interface HalfPageAdProps {
  slotName: string;
  section: string;
  position: string;
  articleId?: string;
  premium?: boolean;
  className?: string;
}

/**
 * HalfPageAd Component
 * 300×600 on desktop, fallback to 300×250 on smaller screens
 */
export const HalfPageAd: React.FC<HalfPageAdProps> = ({
  slotName,
  section,
  position,
  articleId,
  premium,
  className = '',
}) => {
  return (
    <div className="w-full flex justify-center">
      <AdSlot
        slotName={slotName}
        size={{
          desktop: [300, 600],
          mobile: [300, 250],
        }}
        section={section}
        position={position}
        articleId={articleId}
        premium={premium}
        className={className}
      />
    </div>
  );
};

export default HalfPageAd;
