import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { SunMedium } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* WRAPPED LOGO IN LINK */}
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <SunMedium className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight text-white">
            ZERO<span className="text-primary">SOLAR</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="#model" className="hover:text-primary transition-colors">Our Model</Link>
          <Link href="#technology" className="hover:text-primary transition-colors">Technology</Link>
          <Link href="#roadmap" className="hover:text-primary transition-colors">Roadmap</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-slate-300 hover:text-white">
              Client Portal
            </Button>
          </Link>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Proposal
          </Button>
        </div>
      </div>
    </nav>
  );
};