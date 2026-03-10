"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, LayoutDashboard, FileText } from "lucide-react";
import { LogoutButton } from "./LogoutButton";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the mobile menu is open
  if (typeof window !== "undefined") {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }

  return (
    <div className="md:hidden flex items-center">
      <button 
        onClick={() => setIsOpen(true)} 
        className="text-slate-400 hover:text-white focus:outline-none"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Full Screen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col pt-20 px-8 animate-in fade-in duration-200">
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-6 right-6 text-slate-400 hover:text-white"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-8">
            Client Navigation
          </div>
          
          <nav className="flex flex-col gap-8 text-lg font-medium">
            <Link 
              href="/dashboard" 
              onClick={() => setIsOpen(false)} 
              className="flex items-center gap-4 text-slate-300 hover:text-white hover:text-primary transition-colors"
            >
              <LayoutDashboard className="h-6 w-6 text-primary" />
              Overview
            </Link>
            
            <Link 
              href="/dashboard/invoices" 
              onClick={() => setIsOpen(false)} 
              className="flex items-center gap-4 text-slate-300 hover:text-white hover:text-primary transition-colors"
            >
              <FileText className="h-6 w-6 text-primary" />
              Monthly Invoices
            </Link>
          </nav>

          <div className="mt-auto mb-12 border-t border-slate-800 pt-8">
            <LogoutButton />
          </div>
        </div>
      )}
    </div>
  );
};