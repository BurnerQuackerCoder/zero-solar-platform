import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, IndianRupee, Leaf, Activity } from "lucide-react";

// Mock Data: We will replace this with Supabase live data later.
const metrics = [
  {
    title: "Solar Generation (MTD)",
    value: "1,840 Units",
    subtitle: "Month-to-Date",
    trend: "+12% vs last month",
    icon: Zap,
    color: "text-amber-400"
  },
  {
    title: "Grid Import (Adani)",
    value: "2,210 Units",
    subtitle: "Blended requirement",
    trend: "-40% vs pre-solar",
    icon: Activity,
    color: "text-blue-400"
  },
  {
    title: "Financial Savings",
    value: "₹12,380",
    subtitle: "Saved this month",
    trend: "₹9 PPA vs ₹15.73 Grid",
    icon: IndianRupee,
    color: "text-emerald-400"
  },
  {
    title: "Carbon Offset",
    value: "1.4 Tons",
    subtitle: "CO2 emissions prevented",
    trend: "Equivalent to 62 trees planted",
    icon: Leaf,
    color: "text-emerald-500"
  }
];

export const KPIGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index} className="bg-slate-900/40 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">
                {metric.title}
              </CardTitle>
              <Icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <p className="text-xs text-slate-500 mb-2">{metric.subtitle}</p>
              <div className="inline-flex items-center rounded bg-slate-800/50 px-2 py-0.5 text-[10px] font-medium text-slate-300">
                {metric.trend}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};