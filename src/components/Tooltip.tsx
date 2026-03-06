import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TooltipProps {
  term: string;
  definition: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ term, definition, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span 
      className="relative inline"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <span className="tooltip-trigger">{children}</span>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-4 bg-navy-800 border border-white/10 rounded-sm shadow-2xl text-[11px] leading-relaxed pointer-events-none"
          >
            <div className="font-serif italic text-pastel-blue mb-2 text-sm">{term}</div>
            <div className="text-cream-muted font-light">{definition}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};
