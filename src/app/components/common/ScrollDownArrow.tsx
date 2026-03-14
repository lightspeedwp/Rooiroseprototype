import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../ui/utils';

interface ScrollDownArrowProps {
  className?: string;
  targetId?: string; // ID to scroll to
}

export const ScrollDownArrow = ({ className, targetId }: ScrollDownArrowProps) => {
  const handleScroll = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className={cn("animate-bounce p-2 text-white/80 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 rounded", className)}
      aria-label="Scroll down"
    >
      <ChevronDown size={32} />
    </button>
  );
};