import React from 'react';
import { useRouteSEO } from '../../hooks/useRouteSEO';

// Route-level SEO provider — applies centralized meta tags per route
export const RouteSEOProvider = () => {
  useRouteSEO();
  return null;
};
