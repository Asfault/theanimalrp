import React from 'react';
import { ShieldCheck, Cpu, Users, HeartHandshake } from 'lucide-react';
import { Logo } from './Logo';

const Card = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="bg-white p-12 rounded-[2.5rem] border border-stone-100 hover:border-cyan-100 hover:shadow-[0_30px_60px_-15px_rgba(6,182,212,0.1)] transition-all duration-500 group">
    <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-slate-800 mb-8 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 group-hover:-translate-y-2">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-base font-light">{desc}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="different" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Section: Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Side: Large Logo - Background removed, hover scaling disabled, enlarged */}
          <div className="flex items-center justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-full flex items-center justify-center lg:justify-start">
              <Logo className="h-72 md:h-[28rem] w-full" />
            </div>
          </div>

          {/* Right Side: Text Content - Vertically centered, larger sub-headline */}
          <div className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-2 py-8">
            <div className="max-w-xl lg:ml-auto">
              <span className="text-cyan-600 uppercase tracking-[0.4em] text-2xl font-black mb-6 block">
                The TARP Edge
              </span>
              <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                Technology meets <br className="hidden md:block" /> transparency.
              </h2>
              <p className="text-slate-500 text-xl font-light leading-relaxed">
                While traditional NGOs do vital work, TARP serves as the digital foundation that connects them with local communities through automated integrity checks.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <Card 
            icon={Cpu} 
            title="Smarter Tech" 
            desc="Building real-time alerts and AI-assisted recognition for lost pet recovery in your neighborhood."
          />
          <Card 
            icon={ShieldCheck} 
            title="Verification" 
            desc="A rigorous vetting process to identify and verify the transparency of other animal NGOs globally."
          />
          <Card 
            icon={HeartHandshake} 
            title="Direct Impact" 
            desc="Directing resources specifically to verified, high-impact shelters that need immediate support."
          />
          <Card 
            icon={Users} 
            title="Local Logic" 
            desc="Connecting neighbors through proximity-based notifications to solve local animal crises instantly."
          />
        </div>
      </div>
    </section>
  );
};