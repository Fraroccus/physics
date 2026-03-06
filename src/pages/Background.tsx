import React from 'react';
import { motion } from 'motion/react';
import { Tooltip } from '../components/Tooltip';
import { YoungsDiagram } from '../components/Diagrams';

const Background: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-20">
        <h2 className="section-title">Background</h2>
        
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-xl italic text-cream">Young's Double Slit Experiment</h3>
              <p className="font-light leading-relaxed">
                The foundation of wave optics. In 1801, Thomas Young demonstrated that light passing through two slits creates 
                an <Tooltip term="Interference Pattern" definition="The pattern of light and dark fringes resulting from the superposition of waves.">interference pattern</Tooltip>. 
                This proved light's wave-like nature.
              </p>
            </div>
            <YoungsDiagram />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.2em] text-pastel-blue">Interference vs Diffraction</h3>
            <p className="font-light text-sm leading-relaxed">
              While <Tooltip term="Interference" definition="The combination of two or more electromagnetic waveforms to form a resultant wave.">Interference</Tooltip> 
              is the meeting of two waves, <Tooltip term="Diffraction" definition="The bending of waves around obstacles and the spreading out of waves as they pass through small openings.">Diffraction</Tooltip> 
              is the spreading of a single wave. In traditional experiments, diffraction blurs the interference fringes over distance.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.2em] text-pastel-blue">1st vs 2nd Order Interference</h3>
            <p className="font-light text-sm leading-relaxed">
              First-order interference involves the overlap of electric fields. <Tooltip term="Second-Order Interference" definition="Interference observed in the correlation of intensities between two points in space.">Second-order interference</Tooltip> 
              (intensity interference) occurs when we correlate the brightness of two separate beams, revealing patterns invisible to a single detector.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-xl italic text-cream">Time-Reversed Experiments</h3>
          <p className="font-light leading-relaxed">
            Time-reversal symmetry allows us to model complex optical paths as if the light were traveling backwards. 
            By applying this to Young's experiment, we can create an "effective" source at the detector, 
            making the resulting pattern <Tooltip term="Diffractionless" definition="A beam that does not spread out as it propagates, maintaining its spatial profile.">diffractionless</Tooltip>.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default Background;
