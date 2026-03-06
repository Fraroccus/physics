import React from 'react';
import { motion } from 'motion/react';
import { Tooltip } from '../components/Tooltip';

const Results: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
        <h2 className="section-title">Results</h2>
        
        <div className="space-y-12">
          <section className="space-y-6">
            <h3 className="text-xl italic text-cream">Observed Interference Pattern</h3>
            <p className="font-light leading-relaxed">
              The researchers observed a stable second-order interference pattern. Unlike traditional patterns that blur, 
              this pattern remained sharp. The <Tooltip term="Fringe Visibility" definition="The contrast between the bright and dark areas of an interference pattern.">Fringe Visibility</Tooltip> 
              was remarkably high, confirming the deterministic nature of the effect.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-24 bg-gradient-to-r from-navy-900 via-pastel-blue/20 to-navy-900 rounded-sm flex items-center justify-center text-[10px] uppercase tracking-widest text-cream-muted/40">
                Pattern at 1m
              </div>
              <div className="h-24 bg-gradient-to-r from-navy-900 via-pastel-blue/20 to-navy-900 rounded-sm flex items-center justify-center text-[10px] uppercase tracking-widest text-cream-muted/40">
                Pattern at 5m
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-[0.2em] text-pastel-blue">Comparison with Traditional Experiment</h3>
              <p className="font-light text-sm leading-relaxed">
                In a traditional Young's experiment, the pattern size increases with distance due to <Tooltip term="Angular Spread" definition="The widening of a beam as it travels through space.">Angular Spread</Tooltip>. 
                In this time-reversed setup, the pattern size is <strong>independent</strong> of the distance between the slits and the detector.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-[0.2em] text-pastel-blue">Control of Pattern Size</h3>
              <p className="font-light text-sm leading-relaxed">
                The size of the interference pattern is determined solely by the geometry of the source and the slits, 
                not by the propagation distance. This allows for <Tooltip term="Deterministic Control" definition="The ability to precisely set the outcome of a physical process based on initial parameters.">Deterministic Control</Tooltip> 
                of the interference fringes.
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Results;
