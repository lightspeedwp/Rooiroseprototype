import * as React from 'react';

/**
 * Component that cleans Figma inspector props from its children.
 * Use this wrapper when you need to pass elements to components that use asChild pattern.
 * 
 * @example
 * <SheetTrigger asChild>
 *   <FigmaClean>
 *     <button>Click me</button>
 *   </FigmaClean>
 * </SheetTrigger>
 */
export function FigmaClean({ children }: { children: React.ReactElement }) {
  if (!React.isValidElement(children)) {
    return children;
  }

  // Clone the element and filter out Figma inspector props
  const cleanProps: Record<string, any> = {};
  
  for (const key in children.props) {
    if (!key.startsWith('_fg')) {
      cleanProps[key] = children.props[key];
    }
  }

  return React.cloneElement(children, cleanProps);
}
