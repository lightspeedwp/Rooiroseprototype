// v11.13 CRITICAL: Check BEFORE any imports
// This must be the FIRST code that executes

// Check ALL iframe flags
const iframeFlags = [
  (window as any).__REACT_DISABLED__,
  (window as any).__FIGMA_IFRAME_MODE__,
  (window as any).__BLOCK_VITE_SCRIPT__,
  (window as any).__NO_REACT__
];

if (iframeFlags.some(flag => flag === true)) {
  console.log('[Main v11.13] ABORT - Iframe flags detected:', {
    __REACT_DISABLED__: (window as any).__REACT_DISABLED__,
    __FIGMA_IFRAME_MODE__: (window as any).__FIGMA_IFRAME_MODE__,
    __BLOCK_VITE_SCRIPT__: (window as any).__BLOCK_VITE_SCRIPT__,
    __NO_REACT__: (window as any).__NO_REACT__
  });
  throw new Error('[v11.13] React execution blocked - Figma iframe mode');
}

// Direct iframe detection (secondary check)
const isIframe = (() => {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
})();

if (isIframe) {
  console.log('[Main v11.13] ABORT - Direct iframe detection');
  throw new Error('[v11.13] Cannot execute React in iframe');
}

// Safe to import React
console.log('[Main v11.13] Importing React modules...');

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './app/App';

// Final safety check before mounting
const finalCheck = (): boolean => {
  // Check all flags one more time
  if ((window as any).__REACT_DISABLED__ || 
      (window as any).__FIGMA_IFRAME_MODE__ || 
      (window as any).__BLOCK_VITE_SCRIPT__ ||
      (window as any).__NO_REACT__) {
    console.log('[Main v11.13] Final check ABORT - iframe mode still active');
    return false;
  }
  
  // Check iframe status
  try {
    if (window.self !== window.top) {
      console.log('[Main v11.13] Final check ABORT - in iframe');
      return false;
    }
  } catch {
    console.log('[Main v11.13] Final check ABORT - cross-origin iframe');
    return false;
  }
  
  return true;
};

// Only mount if all checks pass
if (finalCheck()) {
  const initializeApp = () => {
    const rootElement = document.getElementById('root');
    
    if (!rootElement) {
      console.error('[Main v11.13] Root element not found');
      return;
    }
    
    console.log('[Main v11.13] Mounting React app...');
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('[Main v11.13] React app mounted successfully');
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
  } else {
    initializeApp();
  }
} else {
  console.log('[Main v11.13] React mount cancelled - iframe mode detected');
}