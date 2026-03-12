import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';

/**
 * App — root component for *rooi rose*.
 *
 * Uses React Router v7 Data Mode (RouterProvider).
 * All route definitions live in /src/app/routes.tsx.
 * Providers (Cart, Theme, DevLanguage) and the ErrorBoundary
 * are rendered inside RootLayout (the router's top-level Route element).
 * @version 2026-03-03 — Refactored to RouterProvider for performance and stability
 */
function App() {
  return <RouterProvider router={router} />;
}

export default App;