import React from 'react';
import { motion } from 'motion/react';
import { Tooltip } from '../components/Tooltip';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { YoungsDiagram } from '../components/Diagrams';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-24"
      >
        <h1 className="text-5xl md:text-7xl font-light text-cream mb-8 leading-tight italic">
          The Time-Reversed <br />
          <span className="text-pastel-blue">Young's Experiment</span>
        </h1>
        <p className="text-lg font-light text-cream-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          This research demonstrates a deterministic, diffractionless second-order interference effect. 
          By reimagining the classic double-slit experiment through the lens of time-reversal symmetry, 
          scientists have unlocked new ways to control light propagation and correlation.
        </p>
        
        <div className="mb-20">
          <YoungsDiagram />
          <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-cream-muted/40">
            Figure 1: Traditional Wave Interference Visualization
          </p>
        </div>

        <div className="flex justify-center">
          <Link to="/abstract" className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-pastel-blue hover:text-cream transition-all">
            Begin the Journey <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
