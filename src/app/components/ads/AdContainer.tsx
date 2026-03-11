import React from 'react';

interface AdContainerProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
}

/**
 * AdContainer Component
 * Wrapper for ad slots with consistent spacing and optional label
 */
export const AdContainer: React.FC<AdContainerProps> = ({
  children,
  label,
  className = '',
}) => {
  return (
    <div className={`ad-container w-full ${className}`}>
      {label && (
        <div className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 text-center">
          {label}
        </div>
      )}
      <div className="flex justify-center">
        {children}
      </div>
    </div>
  );
};

export default AdContainer;