import React from "react";
import Link from "next/link";
import { SunMedium, LayoutDashboard, FileText, Settings, LogOut } from "lucide-react";
import { LogoutButton } from "@/components/dashboard/LogoutButton";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Added print:bg-white to force a white background when printing
    <div className="flex min-h-screen bg-slate-950 print:bg-white">
      
      {/* Added print:hidden to completely hide sidebar on paper */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900/50 hidden md:block relative print:hidden">
        <Link href="/" className="h-16 flex items-center px-6 border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
          <SunMedium className="h-6 w-6 text-primary mr-2" />
          <span className="text-lg font-bold text-white tracking-tight">
            ZERO<span className="text-primary">SOLAR</span>
          </span>
        </Link>
        
        <nav className="p-4 space-y-2">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 mt-4 px-2">
            Client Portal
          </div>
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-md transition-colors">
            <LayoutDashboard className="h-4 w-4" />
            <span className="font-medium text-sm">Overview</span>
          </Link>
          
          {/* UPDATED: Link now goes to the main invoices hub instead of a hardcoded month */}
          <Link href="/dashboard/invoices" className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-md transition-colors">
            <FileText className="h-4 w-4" />
            <span className="font-medium text-sm">Monthly Invoices</span>
          </Link>
        </nav>

        <div className="absolute bottom-0 w-64 p-4 border-t border-slate-800">
          <LogoutButton />
        </div>
      </aside>

      {/* Added print:overflow-visible to prevent print cutoff */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden print:overflow-visible">
        
        {/* Added print:hidden to hide top header on paper */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-slate-800 bg-background/95 backdrop-blur print:hidden">
          <h1 className="text-lg font-semibold text-white">Vikhroli Heights CHS - Tower A</h1>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">System Online</span>
          </div>
        </header>
        
        {/* Added print:p-0 so the invoice takes up the full paper */}
        <div className="flex-1 overflow-auto p-8 print:p-0 print:overflow-visible">
          {children}
        </div>
      </main>
    </div>
  );
}