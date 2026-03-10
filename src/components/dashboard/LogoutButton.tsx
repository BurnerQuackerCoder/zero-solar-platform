"use client";

import React from "react";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    // 1. Tell Supabase to destroy the session
    await supabase.auth.signOut();
    // 2. Redirect the user to the home page
    router.push("/");
  };

  return (
    <button 
      onClick={handleLogout}
      className="flex w-full items-center gap-3 px-3 py-2 text-slate-400 hover:text-white transition-colors"
    >
      <LogOut className="h-4 w-4" />
      <span className="font-medium text-sm">Sign Out</span>
    </button>
  );
};