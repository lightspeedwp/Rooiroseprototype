import React from 'react';
import { AdSlot } from './AdSlot';

interface MediumRectangleAdProps {
  slotName: string;
  section: string;
  position: string;
  articleId?: string;
  premium?: boolean;
  className?: string;
}

/**
 * MediumRectangleAd Component
 * Standard 300×250 ad slot
 */
export const MediumRectangleAd: React.FC<MediumRectangleAdProps> = ({
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
          desktop: [300, 250],
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

export default MediumRectangleAd;
