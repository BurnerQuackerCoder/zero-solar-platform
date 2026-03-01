"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// 1. Define the exact shape of the data the chart expects
interface ChartData {
  date: string;
  solar: number;
  grid: number;
}

interface GenerationChartProps {
  data: ChartData[];
}

// 2. Accept the real data as a Prop instead of hardcoding it
export const GenerationChart = ({ data }: GenerationChartProps) => {
  return (
    <Card className="bg-slate-900/40 border-slate-800 col-span-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white">7-Day Energy Profile</CardTitle>
        <CardDescription className="text-slate-400">
          Live daily breakdown of Zero Solar generation vs Adani Grid imports (in kWh units).
        </CardDescription>
      </CardHeader>
      <CardContent>
       <div className="w-full mt-4">
        <ResponsiveContainer width="100%" height={400} minWidth={0} minHeight={0}>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorSolar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorGrid" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
              </defs>
              
              <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
              <XAxis 
                dataKey="date" 
                stroke="#64748B" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                dy={10}
              />
              <YAxis 
                stroke="#64748B" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                dx={-10}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0F172A', 
                  borderColor: '#1E293B',
                  borderRadius: '8px',
                  color: '#F8FAFC'
                }}
                itemStyle={{ color: '#E2E8F0' }}
              />
              <Legend verticalAlign="top" height={36} iconType="circle" />
              
              <Area 
                type="monotone" 
                dataKey="grid" 
                name="Adani Grid (Units)" 
                stroke="#3B82F6" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorGrid)" 
              />
              <Area 
                type="monotone" 
                dataKey="solar" 
                name="Zero Solar (Units)" 
                stroke="#10B981" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorSolar)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};