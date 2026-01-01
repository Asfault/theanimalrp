
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with Logo-consistent Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=85&w=2400" 
          alt="Emotional close up of two dogs"
          className="w-full h-full object-cover grayscale-[20%] brightness-[0.85]"
        />
        {/* Color-matched gradients */}
        <div className="absolute inset-0 bg-slate-950/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-stone-50"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6 pt-32 md:pt-40">
        <h1 className="text-6xl md:text-9xl text-white font-bold leading-[0.85] mb-12 tracking-tight">
          <span className="drop-shadow-md">Every Animal</span> <br />
          <span className="serif italic font-normal text-cyan-400 tracking-tight block mt-4 drop-shadow-sm">Deserves a Chance.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg">
          TARP is harmonizing rescue networks with modern technology. We are building the infrastructure for a future where no pet is ever truly lost.
        </p>
      </div>
    </section>
  );
};
