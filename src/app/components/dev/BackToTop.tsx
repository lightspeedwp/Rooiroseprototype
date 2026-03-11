import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
// Motion removed — simple fade/scale replaced with CSS transition (PERF-042)

/**
 * BackToTop — Floating button that scrolls the page back to the top.
 *
 * Appears after scrolling down 400px. Rendered by DevLayout so it's
 * available on every dev tool page.
 */
export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-brand-red text-white shadow-lg hover:bg-brand-red/90 flex items-center justify-center cursor-pointer transition-[opacity,transform] duration-200 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
};
