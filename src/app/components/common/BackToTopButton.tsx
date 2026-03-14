import React, { useEffect, useState, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '../ui/utils';

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Observe footer to hide button when it would overlap
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const shouldShow = isVisible && !footerVisible;

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-4 md:bottom-8 md:right-8",
        "p-2.5 md:p-3 rounded-full",
        "bg-brand-navy/50 dark:bg-muted-foreground/40 text-white",
        "backdrop-blur-sm",
        "shadow-md",
        "z-40",
        "transition-[opacity,transform,background-color] duration-300",
        "hover:bg-brand-navy/90 dark:hover:bg-muted-foreground/70",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:focus-visible:ring-ring focus-visible:ring-offset-2",
        shouldShow
          ? "opacity-60 hover:opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Terug na bo"
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
};