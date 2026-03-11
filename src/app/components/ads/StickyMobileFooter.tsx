import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { AdSlot } from './AdSlot';

interface StickyMobileFooterProps {
  section: string;
}

/**
 * StickyMobileFooter Component
 * 320×50 sticky ad at bottom of mobile screen
 * Appears after 3 seconds, can be dismissed
 */
export const StickyMobileFooter: React.FC<StickyMobileFooterProps> = ({ section }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show after 3 seconds on mobile
    const timer = setTimeout(() => {
      if (window.innerWidth < 768) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white dark:bg-card shadow-lg border-t border-gray-200 dark:border-border">
      <div className="relative flex items-center justify-center">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-1 right-1 p-1 bg-white dark:bg-muted rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-input transition-colors z-50"
          aria-label="Sluit advertensie"
        >
          <X size={16} className="text-gray-600 dark:text-gray-400" />
        </button>

        {/* Ad slot */}
        <AdSlot
          slotName="DP_Sticky_Mobile_Footer"
          size={{
            desktop: [320, 50],
            mobile: [320, 50],
          }}
          section={section}
          position="Sticky_Mobile"
          hideOnDesktop={true}
        />
      </div>
    </div>
  );
};

export default StickyMobileFooter;