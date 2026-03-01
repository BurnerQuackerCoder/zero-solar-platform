import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
        
        {/* Trust Badge */}
        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8 font-medium tracking-wide">
          <ShieldCheck className="mr-2 h-4 w-4" />
          <span>100% Zero-CapEx Infrastructure Model</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-foreground">
          Powering Mumbai&apos;s High-Rises <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
            With Zero Capital.
          </span>
        </h1>
        
        {/* Value Proposition */}
        <p className="max-w-[800px] mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          We provide the funding and the management. You provide the roof. 
          Enjoy a guaranteed 40% reduction in society electricity bills for 25 years with zero financial risk.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" className="w-full sm:w-auto h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 text-base">
            Calculate Society Savings
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Link href="#calculator" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white text-base">
              Explore Our Model
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Subtle background glow effect for the institutional dark theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </section>
  );
};