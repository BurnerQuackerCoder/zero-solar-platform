import { KPIGrid } from "@/components/dashboard/KPIGrid";
import { GenerationChart } from "@/components/dashboard/GenerationChart";
import { supabase } from "@/lib/supabase";

export const revalidate = 0; // Ensures the dashboard never caches stale data

export default async function DashboardPage() {
  // 1. Fetch the data securely from Supabase
  // We are pulling data for our dummy society ID and ordering it chronologically
  const { data: rawData, error } = await supabase
    .from("daily_generation")
    .select("record_date, solar_units, grid_units")
    .eq("society_id", "11111111-1111-1111-1111-111111111111")
    .order("record_date", { ascending: true });

  if (error) {
    console.error("Database Error:", error.message);
  }

  // 2. Format the raw database data to match the Chart's expectations
  // PostgreSQL returns "2026-03-01". We want to format it to "01 Mar".
  const formattedChartData = rawData?.map((row) => {
    const dateObj = new Date(row.record_date);
    const displayDate = dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    });

    return {
      date: displayDate,
      solar: row.solar_units,
      grid: row.grid_units,
    };
  }) || [];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">System Overview</h2>
        <p className="text-slate-400">Real-time performance and financial metrics for your solar asset.</p>
      </div>
      
      <KPIGrid />

      {/* 3. Pass the formatted live data directly into the chart */}
      <GenerationChart data={formattedChartData} />
    </div>
  );
}