import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Filter out Figma inspector props to prevent React warnings.
 * Figma Make adds _fg* props for inspector functionality, 
 * which should not be passed to DOM elements.
 */
export function filterFigmaProps<T extends Record<string, any>>(props: T): Omit<T, `_fg${string}`> {
  const filtered: any = {};
  for (const key in props) {
    // Skip any prop that starts with _fg (case-sensitive)
    if (!key.startsWith('_fg')) {
      filtered[key] = props[key];
    }
  }
  return filtered as Omit<T, `_fg${string}`>;
}