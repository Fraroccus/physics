import React from 'react';
import { motion } from 'motion/react';

const Paper: React.FC = () => {
  const doi = "10.1016/j.optcom.2025.132612";
  const paperUrl = `https://doi.org/${doi}`;

  return (
    <div className="max-w-4xl mx-auto py-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
        <h2 className="section-title">The Publication</h2>
        
        <div className="glass-card p-12 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-48 h-64 bg-navy-800 border border-white/5 flex flex-col items-center justify-center p-6 text-center shadow-inner">
            <div className="text-[8px] uppercase tracking-[0.3em] text-cream-muted/40 mb-4">Scientific Journal</div>
            <div className="font-serif italic text-cream text-lg leading-tight">Optics Communications</div>
            <div className="mt-auto text-[8px] text-pastel-blue tracking-widest">2025 • VOL 570</div>
          </div>

          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-cream leading-tight">
                Time-reversed Young's experiment: Deterministic, diffractionless second-order interference effect
              </h3>
              <p className="text-pastel-blue font-light text-xs tracking-widest uppercase">DOI: {doi}</p>
            </div>

            <p className="font-light text-sm leading-relaxed text-cream-muted">
              Access the complete research paper to explore the detailed mathematical derivations, 
              full experimental data sets, and comprehensive theoretical analysis of the 
              time-reversal symmetry in second-order interference.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <button 
                onClick={() => window.open(paperUrl, '_blank')}
                className="px-8 py-3 bg-pastel-blue text-navy-950 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-cream transition-all"
              >
                Download PDF
              </button>
              <button 
                onClick={() => window.open(paperUrl, '_blank')}
                className="px-8 py-3 border border-white/10 text-cream text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 transition-all"
              >
                Journal Site
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Paper;
