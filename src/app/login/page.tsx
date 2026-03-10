"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SunMedium, Lock, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase"; // <-- We import the real database client

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // REAL SUPABASE AUTHENTICATION
    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (authError) {
      setError("Invalid credentials or society account not found.");
      setIsLoading(false);
      return;
    }

    if (data.session) {
      // Success! Teleport them to the dashboard
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-4 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <Link href="/" className="flex items-center gap-2 mb-8 relative z-10 transition-transform hover:scale-105">
        <SunMedium className="h-8 w-8 text-primary" />
        <span className="text-3xl font-bold tracking-tight text-white">
          ZERO<span className="text-primary">SOLAR</span>
        </span>
      </Link>

      <Card className="w-full max-w-md bg-slate-900/60 border-slate-800 backdrop-blur-md shadow-2xl relative z-10">
        <CardHeader className="space-y-1 pb-6">
          <CardTitle className="text-2xl font-bold text-center text-white">Client Portal</CardTitle>
          <CardDescription className="text-center text-slate-400">
            Enter your society credentials to access your asset dashboard.
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-md text-center">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">Society ID (Email)</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="vikhroli@zerosolar.in"
                className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-slate-300">Access PIN</Label>
                <Link href="#" className="text-xs text-primary hover:underline">
                  Forgot PIN?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <Input 
                  id="password" 
                  type="password" 
                  className="pl-10 bg-slate-950 border-slate-800 text-white focus-visible:ring-primary"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col gap-4 pt-2">
            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>
                  Access Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
            
            <p className="text-center text-xs text-slate-500">
              Secure 256-bit encrypted connection. <br/>
              Managed by Zero Solar Assets Pvt Ltd.
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}