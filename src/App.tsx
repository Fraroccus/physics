import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import Abstract from './pages/Abstract';
import Background from './pages/Background';
import Method from './pages/Method';
import Results from './pages/Results';
import Conclusion from './pages/Conclusion';
import Paper from './pages/Paper';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="flex-1 px-4 sm:px-6 lg:px-8 py-8"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-navy-950 font-sans selection:bg-blue-500/30">
        <Navbar />
        
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/abstract" element={<Abstract />} />
            <Route path="/background" element={<Background />} />
            <Route path="/method" element={<Method />} />
            <Route path="/results" element={<Results />} />
            <Route path="/conclusion" element={<Conclusion />} />
            <Route path="/paper" element={<Paper />} />
          </Routes>
        </PageWrapper>

        <footer className="py-12 border-t border-white/5 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-[10px]">TR</span>
              </div>
              <span className="text-sm font-bold text-slate-400 tracking-tight">
                Optics Research Explorer
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              A simplified educational summary of modern optical research. 
              Designed for students and science enthusiasts.
            </p>
            <div className="mt-6 text-[10px] text-slate-600 uppercase tracking-widest">
              Journal of Optics Communications • 2025
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
