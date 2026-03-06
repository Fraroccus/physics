import React from 'react';
import { motion } from 'motion/react';

export const YoungsDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto aspect-video glass-card p-8 flex flex-col items-center justify-center overflow-hidden">
      <h4 className="text-xs font-light mb-6 text-pastel-blue uppercase tracking-[0.3em]">Wave Interference Dynamics</h4>
      <svg viewBox="0 0 800 400" className="w-full h-full opacity-80">
        <defs>
          <clipPath id="slit-clip">
            <rect x="300" y="0" width="500" height="400" />
          </clipPath>
        </defs>

        {/* Source */}
        <circle cx="50" cy="200" r="3" fill="#a5c9e1" />
        
        {/* Waves from source */}
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.circle
            key={`s-${i}`}
            cx="50"
            cy="200"
            r={i * 50}
            fill="none"
            stroke="#a5c9e1"
            strokeWidth="0.5"
            strokeOpacity="0.4"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0], r: 300 }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.8, ease: "linear" }}
          />
        ))}

        {/* Double Slit Barrier */}
        <line x1="300" y1="0" x2="300" y2="185" stroke="#fdfcf0" strokeWidth="2" strokeOpacity="0.3" />
        <line x1="300" y1="215" x2="300" y2="400" stroke="#fdfcf0" strokeWidth="2" strokeOpacity="0.3" />
        <line x1="300" y1="195" x2="300" y2="205" stroke="#fdfcf0" strokeWidth="2" strokeOpacity="0.3" />
        
        {/* Diffracted Waves from Slits */}
        <g clipPath="url(#slit-clip)">
          {[190, 210].map((y, slitIdx) => (
            [1, 2, 3, 4, 5, 6].map((i) => (
              <motion.circle
                key={`slit-${slitIdx}-${i}`}
                cx="300"
                cy={y}
                r={i * 40}
                fill="none"
                stroke="#a5c9e1"
                strokeWidth="0.8"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0], r: 600 }}
                transition={{ duration: 6, repeat: Infinity, delay: i * 0.9 + 2, ease: "linear" }}
              />
            ))
          ))}
        </g>

        {/* Detection Screen */}
        <line x1="750" y1="0" x2="750" y2="400" stroke="#fdfcf0" strokeWidth="1" strokeOpacity="0.1" />
        
        {/* Interference Fringes on Screen */}
        <g transform="translate(755, 0)">
          {Array.from({ length: 40 }).map((_, i) => {
            const intensity = Math.pow(Math.cos((i - 20) * 0.4), 2);
            return (
              <rect
                key={i}
                x="0"
                y={i * 10}
                width="6"
                height="8"
                fill="#a5c9e1"
                opacity={intensity * 0.8}
              />
            );
          })}
        </g>

        {/* Labels */}
        <text x="50" y="220" fill="#a5c9e1" fontSize="8" textAnchor="middle" opacity="0.5">Source</text>
        <text x="300" y="20" fill="#fdfcf0" fontSize="8" textAnchor="middle" opacity="0.5">Slits</text>
        <text x="750" y="20" fill="#fdfcf0" fontSize="8" textAnchor="end" opacity="0.5">Screen</text>
      </svg>
    </div>
  );
};

export const TimeReversedDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto aspect-video glass-card p-8 flex flex-col items-center justify-center overflow-hidden">
      <h4 className="text-xs font-light mb-6 text-pastel-blue uppercase tracking-[0.3em]">Time-Reversed Correlation</h4>
      <svg viewBox="0 0 800 400" className="w-full h-full opacity-80">
        {/* Correlated Source */}
        <rect x="40" y="180" width="20" height="40" fill="none" stroke="#a5c9e1" strokeWidth="1" />
        
        {/* Two Paths */}
        <motion.path 
          d="M 60 190 L 300 100" 
          stroke="#a5c9e1" 
          strokeWidth="0.5" 
          strokeDasharray="4,4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M 60 210 L 300 300" 
          stroke="#a5c9e1" 
          strokeWidth="0.5" 
          strokeDasharray="4,4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Slits */}
        <line x1="300" y1="70" x2="300" y2="130" stroke="#fdfcf0" strokeWidth="1" strokeOpacity="0.2" />
        
        {/* Detectors */}
        <rect x="500" y="85" width="15" height="30" fill="none" stroke="#fdfcf0" strokeWidth="1" strokeOpacity="0.3" />
        <rect x="500" y="285" width="15" height="30" fill="#a5c9e1" stroke="#a5c9e1" strokeWidth="1" opacity="0.4" />

        {/* Coincidence */}
        <rect x="650" y="185" width="60" height="30" fill="none" stroke="#a5c9e1" strokeWidth="0.5" />
        <text x="680" y="203" textAnchor="middle" fill="#a5c9e1" fontSize="8" letterSpacing="2">SYNC</text>
        
        {/* Resulting Pattern */}
        <g transform="translate(750, 100)">
           {Array.from({ length: 20 }).map((_, i) => (
            <rect
              key={i}
              x="0"
              y={i * 10}
              width="8"
              height="8"
              fill="#a5c9e1"
              opacity={Math.abs(Math.cos(i * 0.8)) * 0.5}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
