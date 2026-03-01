"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Calculator, AlertCircle, TrendingUp } from "lucide-react";

// 1. CONFIGURATION OBJECT (Easy to change without touching UI logic)
const CONFIG = {
  currentGridTariff: 15.73,     // Adani/Tata effective rate
  estimatedSolarCoverage: 0.60, // Roof covers 60% of total load
  gridInflationRate: 0.03,      // 3% Annual Grid Price Hike (Conservative)
  ppaInitialTariff: 9.50,       // Your PPA Rate
  ppaLockedYears: 25,           // Years before PPA price increases
  ppaEscalationRate: 0.00,      // 2% hike after locked period (If you choose to use it)
  ppaTermYears: 25,             // Contract Length
};

export const SavingsCalculator = () => {
  const [monthlyBill, setMonthlyBill] = useState<number>(100000);

  // Custom Formatter for Lakhs and Crores
  const formatIndianCurrency = (num: number) => {
    if (num >= 10000000) {
      return `₹${(num / 10000000).toFixed(2)} Crores`;
    } else if (num >= 100000) {
      return `₹${(num / 100000).toFixed(2)} Lakhs`;
    } else {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(num);
    }
  };

  // 2. THE MATH ENGINE (Calculates Year-over-Year Inflation)
  const projection = useMemo(() => {
    let cumulativeSavings = 0;
    let currentGridPrice = CONFIG.currentGridTariff;
    let currentPpaPrice = CONFIG.ppaInitialTariff;
    
    // Base units consumed per year
    const monthlyUnits = monthlyBill / CONFIG.currentGridTariff;
    const annualSolarUnits = (monthlyUnits * CONFIG.estimatedSolarCoverage) * 12;
    
    let year1Savings = 0;

    for (let year = 1; year <= CONFIG.ppaTermYears; year++) {
      // Calculate savings for this specific year
      const yearSavings = annualSolarUnits * (currentGridPrice - currentPpaPrice);
      cumulativeSavings += yearSavings;

      if (year === 1) year1Savings = yearSavings;

      // Apply inflation for the next year
      currentGridPrice *= (1 + CONFIG.gridInflationRate);
      
      // Apply PPA escalation only after the locked period
      if (year >= CONFIG.ppaLockedYears) {
        currentPpaPrice *= (1 + CONFIG.ppaEscalationRate);
      }
    }

    return {
      year1Savings,
      lifetimeSavings: cumulativeSavings,
    };
  }, [monthlyBill]); // Only recalculates when the user moves the slider

  return (
    <section id="calculator" className="py-20 bg-slate-900/50 border-y border-white/5">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Calculate Your Society&apos;s Savings
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Drag the slider to match your society&apos;s current monthly electricity bill. 
            Projections include a highly conservative {CONFIG.gridInflationRate * 100}% annual grid inflation.
          </p>
        </div>

        <Card className="bg-background/60 border-slate-800 backdrop-blur-sm shadow-2xl">
          <CardHeader className="border-b border-slate-800 bg-slate-900/50 pb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">25-Year Financial Projection</CardTitle>
                  <CardDescription className="text-slate-400">
                    Locked at ₹{CONFIG.ppaInitialTariff} for {CONFIG.ppaLockedYears} years.
                  </CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="pt-8 grid md:grid-cols-2 gap-12">
            {/* Left Column: Input */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <Label className="text-base text-slate-300">Average Monthly Bill</Label>
                  <span className="text-3xl font-bold text-primary">
                    {formatIndianCurrency(monthlyBill)}
                  </span>
                </div>
                <Slider
                  value={[monthlyBill]}
                  min={20000}
                  max={1000000}
                  step={10000}
                  onValueChange={(val) => setMonthlyBill(val[0])}
                  className="py-4 cursor-grab"
                />
                <div className="flex justify-between text-xs text-slate-500 font-medium">
                  <span>₹20k</span>
                  <span>₹10 Lakhs+</span>
                </div>
              </div>
              
              <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800 text-sm text-slate-400 flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-500 shrink-0" />
                <p>
                  Assuming your roof space can support offsetting {CONFIG.estimatedSolarCoverage * 100}% of your total common area load.
                </p>
              </div>
            </div>

            {/* Right Column: Output */}
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-6">
              <div>
                <p className="text-sm font-medium text-slate-400 mb-1">Year 1 Guaranteed Savings</p>
                <p className="text-3xl font-bold text-white">
                  {formatIndianCurrency(projection.year1Savings)}
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-800">
                <p className="text-sm font-medium text-slate-400 mb-1 flex items-center">
                  25-Year Cumulative Savings
                  <TrendingUp className="h-4 w-4 ml-2 text-primary" />
                </p>
                <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 tracking-tight">
                  {formatIndianCurrency(projection.lifetimeSavings)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};