import React from 'react';
import { motion } from 'motion/react';
import { Tooltip } from '../components/Tooltip';

const Conclusion: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
        <h2 className="section-title">Conclusion</h2>
        
        <div className="space-y-12 font-light leading-relaxed">
          <section className="space-y-6">
            <h3 className="text-xl italic text-cream">Summary of Findings</h3>
            <p>
              The research successfully demonstrated that a <Tooltip term="Deterministic" definition="A process that is non-random and predictable.">deterministic</Tooltip> second-order 
              interference effect can be achieved through time-reversal symmetry. This effect is uniquely <strong>diffractionless</strong>, 
              meaning the interference fringes do not spread as they propagate.
            </p>
          </section>

          <section className="space-y-6">
            <h3 className="text-xl italic text-cream">Scientific Significance</h3>
            <p>
              This work challenges traditional views on the limits of light propagation. It shows that <Tooltip term="Correlation Optics" definition="A branch of optics that deals with the statistical properties of light fields.">Correlation Optics</Tooltip> 
              can be used to bypass the diffraction limit, offering a new tool for high-precision measurement and fundamental physics research.
            </p>
          </section>

          <section className="space-y-6">
            <h3 className="text-xl italic text-cream">Possible Applications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h4 className="text-sm uppercase tracking-[0.2em] text-pastel-blue">Remote Sensing</h4>
                <p className="text-sm">Enhanced <Tooltip term="Lidar" definition="Light Detection and Ranging; a method for determining ranges by targeting an object with a laser and measuring the time for the reflected light to return to the receiver.">Lidar</Tooltip> systems that maintain resolution over long distances.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm uppercase tracking-[0.2em] text-pastel-blue">Optical Communication</h4>
                <p className="text-sm">More efficient data transmission through turbulent media using stable intensity correlations.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm uppercase tracking-[0.2em] text-pastel-blue">Microscopy</h4>
                <p className="text-sm">New forms of <Tooltip term="Ghost Imaging" definition="A technique that produces an image of an object by combining information from two light beams.">Ghost Imaging</Tooltip> with improved clarity and depth of field.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm uppercase tracking-[0.2em] text-pastel-blue">Quantum Computing</h4>
                <p className="text-sm">Improved methods for state verification and photon correlation in quantum networks.</p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Conclusion;
