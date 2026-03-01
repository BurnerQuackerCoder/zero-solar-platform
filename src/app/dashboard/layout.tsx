import React from "react";
import Link from "next/link";
import { SunMedium, LayoutDashboard, FileText, Settings, LogOut } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-950">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900/50 hidden md:block">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <SunMedium className="h-6 w-6 text-primary mr-2" />
          <span className="text-lg font-bold text-white tracking-tight">
            ZERO<span className="text-primary">SOLAR</span>
          </span>
        </div>
        
        <nav className="p-4 space-y-2">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 mt-4 px-2">
            Client Portal
          </div>
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-md transition-colors">
            <LayoutDashboard className="h-4 w-4" />
            <span className="font-medium text-sm">Overview</span>
          </Link>
          <Link href="/dashboard/invoices/MAR-2026" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-md transition-colors">
            <FileText className="h-4 w-4" />
            <span className="font-medium text-sm">Monthly Invoices</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-md transition-colors">
            <Settings className="h-4 w-4" />
            <span className="font-medium text-sm">System Settings</span>
          </Link>
        </nav>

        <div className="absolute bottom-0 w-64 p-4 border-t border-slate-800">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white transition-colors">
            <LogOut className="h-4 w-4" />
            <span className="font-medium text-sm">Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Dashboard Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 flex items-center justify-between px-8 border-b border-slate-800 bg-background/95 backdrop-blur">
          <h1 className="text-lg font-semibold text-white">Vikhroli Heights CHS - Tower A</h1>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">System Online</span>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}