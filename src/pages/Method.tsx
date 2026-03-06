import React from 'react';
import { motion } from 'motion/react';
import { Tooltip } from '../components/Tooltip';
import { TimeReversedDiagram } from '../components/Diagrams';

const Method: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
        <h2 className="section-title">Methodology</h2>
        
        <div className="space-y-12">
          <section className="space-y-6">
            <h3 className="text-xl italic text-cream">Optical Systems</h3>
            <p className="font-light leading-relaxed">
              The setup utilizes a <Tooltip term="Pseudothermal Light Source" definition="A light source that mimics the statistical properties of thermal light, often created using a laser and a rotating ground glass disk.">pseudothermal light source</Tooltip> 
              to generate correlated beams. A beam splitter divides the light into two paths: the "test" arm and the "reference" arm.
            </p>
            <TimeReversedDiagram />
          </section>

          <div className="grid md:grid-cols-2 gap-12">
            <section className="space-y-4">
              <h3 className="text-sm uppercase tracking-[0.2em] text-pastel-blue">Effective Extended Source</h3>
              <p className="font-light text-sm leading-relaxed">
                By placing the double-slit in the test arm and correlating it with the reference arm, 
                the system creates an <Tooltip term="Effective Source" definition="A virtual source created by the correlation of two light fields.">effective extended source</Tooltip>. 
                This virtual source behaves as if it were located at the scanning detector, traveling backwards through the slits.
              </p>
            </section>
            <section className="space-y-4">
              <h3 className="text-sm uppercase tracking-[0.2em] text-pastel-blue">Detection Method</h3>
              <p className="font-light text-sm leading-relaxed">
                The experiment uses a <Tooltip term="Bucket Detector" definition="A detector that collects all incident light without resolving its spatial position.">Bucket Detector</Tooltip> 
                in the slit path and a <Tooltip term="Scanning Detector" definition="A point detector that moves across a plane to measure intensity at various spatial coordinates.">Scanning Detector</Tooltip> 
                in the reference path. The coincidence circuit then multiplies these signals to extract the second-order correlation.
              </p>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Method;
