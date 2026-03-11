import React from 'react';
import { MediumRectangleAd } from './MediumRectangleAd';
import { HalfPageAd } from './HalfPageAd';
import { AdContainer } from './AdContainer';

interface SidebarAdsProps {
  section: string;
  articleId?: string;
  premium?: boolean;
  variant?: 'home' | 'article' | 'category' | 'standard';
}

/**
 * SidebarAds Component
 * Standard sidebar ad layout with top and bottom slots
 */
export const SidebarAds: React.FC<SidebarAdsProps> = ({
  section,
  articleId,
  premium,
  variant = 'standard',
}) => {
  const getSlotNames = () => {
    switch (variant) {
      case 'home':
        return {
          top: 'DP_Sidebar_Top',
          bottom: 'DP_Sidebar_Bottom',
        };
      case 'article':
        return {
          top: 'DP_Article_Sidebar_Top',
          bottom: 'DP_Article_Sidebar_Bottom',
        };
      case 'category':
        return {
          top: 'DP_Sidebar_Top',
          bottom: 'DP_Sidebar_Bottom',
        };
      default:
        return {
          top: 'DP_Sidebar_Standard',
          bottom: 'DP_Sidebar_Standard',
        };
    }
  };

  const slotNames = getSlotNames();

  return (
    <div className="hidden lg:flex lg:flex-col gap-6 w-[300px] ml-auto">
      {/* Top Ad - 300x250 */}
      <AdContainer label="Advertensie">
        <MediumRectangleAd
          slotName={slotNames.top}
          section={section}
          position={variant === 'article' ? 'Article_Sidebar_Top' : 'Sidebar_Top'}
          articleId={articleId}
          premium={premium}
        />
      </AdContainer>

      {/* Bottom Ad - 300x600 (fallback 300x250) */}
      <AdContainer label="Advertensie">
        <HalfPageAd
          slotName={slotNames.bottom}
          section={section}
          position={variant === 'article' ? 'Article_Sidebar_Bottom' : 'Sidebar_Bottom'}
          articleId={articleId}
          premium={premium}
        />
      </AdContainer>
    </div>
  );
};

export default SidebarAds;