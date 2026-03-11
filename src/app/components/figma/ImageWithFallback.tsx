import React, { useState } from 'react';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

/**
 * ImageWithFallback - Enhanced image component with error handling and lazy loading
 * 
 * PERF-018: Added lazy loading support for performance optimization
 * 
 * Features:
 * - Error fallback (shows placeholder on load error)
 * - Lazy loading support (loading="lazy" by default)
 * - Priority loading (fetchpriority for critical images)
 * - Async decoding (non-blocking decode)
 * 
 * Usage:
 * // Above-the-fold (hero images)
 * <ImageWithFallback 
 *   src={image} 
 *   alt="Hero"
 *   loading="eager"
 *   fetchpriority="high"
 * />
 * 
 * // Below-the-fold (lazy loaded by default)
 * <ImageWithFallback 
 *   src={image} 
 *   alt="Article thumbnail"
 * />
 */

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const { 
    src, 
    alt, 
    style, 
    className, 
    loading = 'lazy',        // Default to lazy loading (PERF-018)
    fetchpriority,           // Optional priority hint
    decoding = 'async',      // Non-blocking decode by default
    ...rest 
  } = props;

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img 
          src={ERROR_IMG_SRC} 
          alt="Error loading image" 
          {...rest} 
          data-original-url={src} 
        />
      </div>
    </div>
  ) : (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      style={style} 
      loading={loading}
      fetchpriority={fetchpriority}
      decoding={decoding}
      {...rest} 
      onError={handleError} 
    />
  );
}
