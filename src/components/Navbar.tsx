import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/abstract', label: 'Abstract' },
    { to: '/background', label: 'Background' },
    { to: '/method', label: 'Method' },
    { to: '/results', label: 'Results' },
    { to: '/conclusion', label: 'Conclusion' },
    { to: '/paper', label: 'Paper' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-navy-950/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="font-serif text-xl italic tracking-tight text-cream">
              Optics<span className="text-pastel-blue">Research</span>
            </span>
          </div>
          <div className="flex space-x-2 md:space-x-8 overflow-x-auto no-scrollbar py-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => 
                  `text-[10px] uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap ${
                    isActive 
                      ? 'text-pastel-blue font-medium' 
                      : 'text-cream-muted/60 hover:text-cream'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
