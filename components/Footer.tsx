
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Centered description text on a single line, logo removed */}
        <div className="flex justify-center mb-12 overflow-hidden">
          <p className="text-slate-500 leading-relaxed text-center whitespace-nowrap">
            A serious project dedicated to animal welfare, powered by community integrity and forward-thinking technology.
          </p>
        </div>
        
        {/* Middle Section: Social links centered - Updated to only include Instagram and LinkedIn */}
        <div className="flex justify-center gap-12 mb-16">
          {['Instagram', 'LinkedIn'].map(social => (
            <a 
              key={social} 
              href="#" 
              className="text-xs uppercase tracking-widest font-bold text-slate-400 hover:text-slate-900 transition-colors"
            >
              {social}
            </a>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-10 border-t border-stone-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 uppercase tracking-widest font-medium">
          <p>© 2026 THE ANIMAL RESCUE PROJECT. ALL RIGHTS RESERVED.</p>
          <p>This is just the beginning.</p>
        </div>
      </div>
    </footer>
  );
};
