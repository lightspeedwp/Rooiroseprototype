import React from 'react';

/**
 * Local Newspaper icon — identical to lucide-react's Newspaper.
 *
 * Created because the Figma Make bundler fails to resolve the named
 * `Newspaper` export from `lucide-react`, producing a fatal
 * `ReferenceError: Newspaper is not defined` at module-evaluation time
 * and a white screen.  Using a local SVG component avoids the issue
 * entirely while keeping the exact same visual output.
 */
export const NewspaperIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGAttributes<SVGSVGElement> & { size?: number | string; className?: string }
>(({ size = 24, className = '', ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 18h-5" />
    <path d="M18 14h-8" />
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
    <rect width="8" height="4" x="10" y="6" rx="1" />
  </svg>
));

NewspaperIcon.displayName = 'Newspaper';

// Also export as "Newspaper" alias so data files
// that store `icon: Newspaper` (the component reference) keep working.
export { NewspaperIcon as Newspaper };
export default NewspaperIcon;