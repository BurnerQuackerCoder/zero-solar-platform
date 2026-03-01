import React from "react";
import { SunMedium } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <SunMedium className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight text-white">
                ZERO<span className="text-primary">SOLAR</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Mumbai's premier infrastructure management firm, deploying zero-CapEx renewable energy assets for high-rise communities.
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold tracking-wide">Infrastructure</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="#model" className="hover:text-primary transition-colors">The RESCO Model</Link></li>
              <li><Link href="#calculator" className="hover:text-primary transition-colors">Financial Projections</Link></li>
              <li><Link href="#roadmap" className="hover:text-primary transition-colors">Execution Roadmap</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold tracking-wide">Corporate Office</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Vikhroli East</li>
              <li>Mumbai, Maharashtra</li>
              <li className="pt-4">
                <a href="mailto:proposals@zerosolar.in" className="text-primary hover:underline">
                  proposals@zerosolar.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Zero Solar Assets Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};