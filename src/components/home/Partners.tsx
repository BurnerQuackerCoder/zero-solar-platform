import React from "react";
import { Cpu, Sun, ShieldAlert } from "lucide-react";

export const Partners = () => {
  return (
    <section className="py-20 border-t border-white/5 bg-background">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-12">
          Powered by Tier-1 Global Technology
        </p>
        
        {/* Logo Grid (Typography Placeholders with proper color-shift hover) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 items-center justify-center">
          
          {/* Waaree */}
          <div className="group flex flex-col items-center justify-center space-y-2 cursor-pointer">
            <Sun className="h-8 w-8 text-slate-600 group-hover:text-amber-400 transition-colors duration-300" />
            <span className="text-xl font-black tracking-tighter text-slate-500 group-hover:text-white transition-colors duration-300">WAAREE</span>
            <span className="text-[10px] text-slate-600 group-hover:text-amber-400/70 tracking-widest uppercase transition-colors duration-300">Modules</span>
          </div>

          {/* Adani Solar */}
          <div className="group flex flex-col items-center justify-center space-y-2 cursor-pointer">
            <Sun className="h-8 w-8 text-slate-600 group-hover:text-amber-400 transition-colors duration-300" />
            <span className="text-xl font-black tracking-tighter text-slate-500 group-hover:text-white transition-colors duration-300">ADANI SOLAR</span>
            <span className="text-[10px] text-slate-600 group-hover:text-amber-400/70 tracking-widest uppercase transition-colors duration-300">Modules</span>
          </div>

          {/* Sungrow */}
          <div className="group flex flex-col items-center justify-center space-y-2 cursor-pointer col-span-2 md:col-span-1">
            <Cpu className="h-8 w-8 text-slate-600 group-hover:text-primary transition-colors duration-300" />
            <span className="text-xl font-black tracking-tighter text-slate-500 group-hover:text-white transition-colors duration-300">SUNGROW</span>
            <span className="text-[10px] text-slate-600 group-hover:text-primary/70 tracking-widest uppercase transition-colors duration-300">Inverters</span>
          </div>
          
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto border border-amber-500/20 bg-amber-500/5 rounded-lg p-4 flex items-start gap-3 text-left">
          <ShieldAlert className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-400">
            <strong className="text-slate-300">Safety Guarantee:</strong> All mounting structures are hot-dip galvanized (HDG) steel, chemically anchored, and independently certified to withstand 150 km/h cyclone winds.
          </p>
        </div>
      </div>
    </section>
  );
};