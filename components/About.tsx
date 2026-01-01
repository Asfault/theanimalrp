import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="max-w-xl">
          <span className="text-cyan-600 uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Establishing Trust</span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-10 leading-[1.1]">
            A New Standard for <br />
            <span className="text-cyan-600 serif italic font-normal">Animal Advocacy.</span>
          </h2>
          <div className="space-y-8 text-slate-600 leading-relaxed text-lg font-light">
            <p>
              Founded by <span className="font-semibold text-slate-900">Dhermesh Manghnani</span>, The Animal Rescue Project (TARP) was born from a simple realization: the current animal welfare system is fragmented. While thousands of individuals work tirelessly, they often lack the tools to synchronize their efforts.
            </p>
            <p>
              We are not just another shelter. We are building the unified infrastructure for rescue. From direct physical intervention to financial auditing of existing NGOs, we ensure that every resource is utilized to its full potential.
            </p>
            <p>
              Our mission is threefold: to rescue directly, to verify industry integrity, and to empower the community with real-time tracking technology.
            </p>
          </div>
        </div>
        
        <div className="relative group">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 group-hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=1200" 
              alt="Emotional connection between human and dog"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
          {/* Accent Box updated with Founder's Name */}
          <div className="absolute -bottom-10 -left-10 bg-slate-900 text-white p-10 rounded-3xl shadow-2xl max-w-sm hidden md:block border-l-4 border-cyan-500">
            <p className="text-lg font-light italic mb-4 leading-relaxed">"Compassion is the root of change, but transparency is the engine that drives it."</p>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-cyan-400">— Dhermesh Manghnani, Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
};