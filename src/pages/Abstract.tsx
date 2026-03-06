import React from 'react';
import { motion } from 'motion/react';
import { Tooltip } from '../components/Tooltip';
import { Quote } from 'lucide-react';

const Abstract: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-12"
      >
        <h2 className="section-title">Abstract</h2>
        
        <div className="space-y-8 font-light leading-relaxed">
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.2em] text-pastel-blue">Research Question</h3>
            <p className="text-cream italic">
              Can we observe a second-order interference effect that is both deterministic and immune to the spreading effects of diffraction?
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.2em] text-pastel-blue">The Key Idea</h3>
            <p>
              The study introduces a <Tooltip term="Time-Reversed" definition="A symmetry in physics where the laws of motion are the same whether time runs forward or backward.">time-reversed</Tooltip> 
              configuration of the classic Young's experiment. By treating the detection process as a source in reverse, 
              the researchers utilize intensity correlations to reconstruct interference patterns.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.2em] text-pastel-blue">The Concept</h3>
            <p>
              In a <Tooltip term="Time-Reversed Young's Experiment" definition="An experimental setup where the roles of source and detector are swapped mathematically to exploit correlation properties.">Time-Reversed Young's Experiment</Tooltip>, 
              the traditional roles of source and detector are swapped. Instead of light traveling from a source through slits to a screen, 
              the experiment measures how two separate detectors "see" a correlated source.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.2em] text-pastel-blue">Main Discovery</h3>
            <p className="text-cream text-lg">
              The researchers successfully observed a <strong>diffractionless</strong> second-order interference pattern. 
              This pattern maintains its size and shape regardless of the distance, proving a deterministic link 
              between the correlated light fields.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Abstract;
