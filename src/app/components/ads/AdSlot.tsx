import React, { useMemo } from 'react';
import { ADS } from '../../data/ads';

/**
 * AdSlot Component
 * Reusable ad placeholder for *rooi rose*
 * Shows mock ads in development, will be replaced with GAM tags in production
 */

export interface AdSlotProps {
  slotName: string;           // e.g., "DP_Header_Leaderboard"
  size: {
    desktop: [number, number]; // [width, height]
    mobile?: [number, number];
  };
  section: string;            // e.g., "nuus", "sport"
  position: string;           // e.g., "Sidebar_Top"
  articleId?: string;         // For article pages
  premium?: boolean;          // For paywall sections
  className?: string;
  hideOnMobile?: boolean;     // Hide on mobile devices
  hideOnDesktop?: boolean;    // Hide on desktop devices
}

export const AdSlot: React.FC<AdSlotProps> = ({
  slotName,
  size,
  section,
  position,
  articleId,
  premium = false,
  className = '',
  hideOnMobile = false,
  hideOnDesktop = false,
}) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const currentSize = isMobile && size.mobile ? size.mobile : size.desktop;
  const [width, height] = currentSize;

  // Determine ad type based on size
  const adType = useMemo(() => {
    if (width >= 728 && height >= 60) return 'leaderboard';
    if (width === 300 && height === 250) return 'mpu';
    if (width === 300 && height === 600) return 'halfpage';
    if (width >= 300 && height <= 100) return 'banner';
    return null;
  }, [width, height]);

  // Find a matching ad from mock data
  const mockAd = useMemo(() => {
    if (!adType) return null;
    const matchingAds = ADS.filter(ad => ad.size === adType);
    if (matchingAds.length === 0) return null;
    // Simple random selection seeded by slotName to be consistent during render
    const index = slotName.length % matchingAds.length;
    return matchingAds[index];
  }, [adType, slotName]);

  // Generate GAM key-value pairs (for debug overlay if needed)
  const keyValues = {
    Site: 'DiePapier',
    Section: section,
    Position: position,
    ...(articleId && { ArticleID: articleId }),
    ...(premium && { Premium: 'true' }),
  };

  const keyValueString = Object.entries(keyValues)
    .map(([key, value]) => `${key}=${value}`)
    .join(', ');

  // Hide classes based on device
  const responsiveClasses = [
    hideOnMobile && 'hidden md:flex',
    hideOnDesktop && 'md:hidden',
  ].filter(Boolean).join(' ');

  return (
    <div
      className={`ad-slot relative flex items-center justify-center bg-gray-100 dark:bg-card overflow-hidden ${responsiveClasses} ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      data-ad-slot={slotName}
      data-ad-section={section}
      data-ad-position={position}
    >
      {mockAd ? (
        <a href={mockAd.link} className="block w-full h-full relative group">
           <img 
             src={mockAd.imageUrl} 
             alt={mockAd.alt}
             className="w-full h-full object-cover"
             loading="lazy"
             decoding="async"
           />
           <div className="absolute top-0 right-0 bg-white/80 dark:bg-black/60 px-1 text-[10px] text-gray-500 dark:text-gray-400 border-bl rounded-bl">
             Advertensie
           </div>
           {/* Hover overlay with debug info */}
           <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs text-center pointer-events-none m-[0px] p-[24px]">
             <div>
               <div className="font-bold mb-1">{slotName}</div>
               <div>{width}×{height}</div>
               <div className="text-[10px] mt-1 text-gray-300">{keyValueString}</div>
             </div>
           </div>
        </a>
      ) : (
        <div className="text-center p-2 border-2 border-dashed border-gray-300 dark:border-input w-full h-full flex flex-col justify-center items-center">
          <div className="font-bold text-sm text-gray-700 dark:text-gray-300 mb-1">{slotName}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">{width}×{height}</div>
          <div className="text-[10px] text-gray-500 dark:text-gray-500 leading-tight max-w-[280px]">
            {keyValueString}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdSlot;