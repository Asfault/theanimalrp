
import React from 'react';
import { Bell, MapPin, Camera, Smartphone } from 'lucide-react';

export const AppPreview: React.FC = () => {
  return (
    <section id="app" className="py-24 px-6 bg-slate-950 text-white overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-900/20 blur-[120px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-800/10 blur-[120px] -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
        <div className="flex-1 order-2 lg:order-1">
          <div className="relative inline-block mb-6">
            <span className="bg-cyan-500/20 text-cyan-400 px-4 py-1.5 rounded-full text-[10px] uppercase font-black tracking-widest border border-cyan-500/30">
              Coming Soon
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Real-time rescue <br />
            <span className="text-cyan-500 serif italic font-normal">in your pocket.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
            The TARP Mobile App will be the first location-based crisis management tool for animals. Connect with your neighborhood to bring lost pets home faster.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-500 border border-white/10">
                <Bell size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 mb-1 tracking-wide">Hyper-Local Alerts</h4>
                <p className="text-sm text-slate-500 font-light">Instant notifications for lost pets or rescue emergencies within your immediate vicinity.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-500 border border-white/10">
                <Camera size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 mb-1 tracking-wide">Visual Verification</h4>
                <p className="text-sm text-slate-500 font-light">Upload and share images instantly to confirm sightings and help families reunite with their pets.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-500 border border-white/10">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 mb-1 tracking-wide">Proximity Tagging</h4>
                <p className="text-sm text-slate-500 font-light">Smart location data ensures that only relevant users are notified, preventing alert fatigue.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 order-1 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Phone Mockup */}
            <div className="relative z-20 border-[8px] border-slate-900 rounded-[3rem] shadow-2xl overflow-hidden aspect-[9/18.5] bg-slate-900">
              <div className="h-full w-full bg-slate-50 flex flex-col">
                <div className="h-6 bg-slate-800 w-1/3 mx-auto mt-2 rounded-full"></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                    <div className="w-20 h-4 bg-slate-200 rounded-full"></div>
                  </div>
                  <div className="w-full h-48 bg-slate-200 rounded-2xl mb-4 flex items-center justify-center">
                    <img 
                        src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400" 
                        alt="App mockup pet"
                        className="w-full h-full object-cover rounded-2xl opacity-90"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="w-full h-4 bg-cyan-900/10 rounded-full"></div>
                    <div className="w-4/5 h-4 bg-cyan-900/10 rounded-full"></div>
                    <div className="w-full h-24 bg-white border border-cyan-100 rounded-xl p-3 shadow-sm flex items-center gap-3">
                        <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white">
                            <MapPin size={16} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Alert: Pet Spotted</p>
                            <p className="text-[8px] text-slate-500">200m away • Just now</p>
                        </div>
                    </div>
                  </div>
                  <div className="mt-auto flex justify-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">
                      <Smartphone size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating UI Elements */}
            <div className="absolute -right-12 top-1/4 z-30 bg-white p-4 rounded-2xl shadow-2xl border border-stone-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <p className="text-xs font-bold text-slate-900 uppercase tracking-tighter">Live Broadcast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
