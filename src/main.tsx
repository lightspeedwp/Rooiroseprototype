import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './app/App';

// Wait for DOM and iframe to be ready before mounting React
const initializeApp = () => {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('[Main] Root element not found');
    return;
  }
  
  console.log('[Main] Mounting React app...');
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('[Main] React app mounted');
};

// Initialize when DOM is ready (HTML script already handles iframe delay)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}