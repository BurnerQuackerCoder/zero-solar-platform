import { supabase } from "@/lib/supabase";
import { SunMedium } from "lucide-react";
import { PrintButton } from "@/app/dashboard/PrintButton";

// Next.js 16 requires params to be treated as a Promise
export default async function InvoicePage({ params }: { params: Promise<{ id: string }> }) {
  // 1. Unwrapping the params properly
  const { id } = await params;
  const societyId = "11111111-1111-1111-1111-111111111111"; 
  
  // 2. Fetch Data from Supabase
  const { data: units } = await supabase
    .from("daily_generation")
    .select("solar_units")
    .eq("society_id", societyId);

  const { data: society } = await supabase
    .from("societies")
    .select("*")
    .eq("id", societyId)
    .single();

  // 3. Financial Logic
  const totalUnits = units?.reduce((acc, curr) => acc + curr.solar_units, 0) || 0;
  const ppaRate = society?.ppa_rate || 9.0;
  const amountDue = totalUnits * ppaRate;
  const totalSavings = (totalUnits * 15.73) - amountDue;

  return (
    <div className="bg-white min-h-screen p-8 text-slate-900">
      {/* Action Bar - Now using our modular Client Component */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <h1 className="text-slate-500 font-medium">Invoice Preview</h1>
        <PrintButton />
      </div>

      <div className="max-w-4xl mx-auto border border-slate-200 p-12 shadow-sm bg-white rounded-sm">
        <div className="flex justify-between items-start mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <SunMedium className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                ZERO<span className="text-emerald-600">SOLAR</span>
              </span>
            </div>
            <p className="text-sm text-slate-500">Zero Solar Assets Pvt Ltd.</p>
            <p className="text-sm text-slate-500">Vikhroli East, Mumbai</p>
          </div>
          <div className="text-right">
            <h2 className="text-4xl font-light text-slate-400 uppercase tracking-widest">Invoice</h2>
            <p className="text-sm font-semibold mt-2">#ZS-{id}-001</p>
            <p className="text-sm text-slate-500">Date: {new Date().toLocaleDateString('en-IN')}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-12 pb-12 border-b border-slate-100">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Bill To:</p>
            <p className="font-bold text-lg">{society?.name}</p>
            <p className="text-slate-500 text-sm">Common Area Account</p>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Status:</p>
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-tighter">Verified Generation</p>
          </div>
        </div>

        <table className="w-full mb-12">
          <thead>
            <tr className="border-b-2 border-slate-900 text-left">
              <th className="py-4 font-bold text-sm uppercase">Description</th>
              <th className="py-4 font-bold text-sm uppercase text-right">Units (kWh)</th>
              <th className="py-4 font-bold text-sm uppercase text-right">Rate (₹)</th>
              <th className="py-4 font-bold text-sm uppercase text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100">
              <td className="py-6">
                <p className="font-bold text-slate-800">Solar Energy Generation</p>
                <p className="text-xs text-slate-500 italic">Billing Reference: {id}</p>
              </td>
              <td className="py-6 text-right font-medium">{totalUnits.toLocaleString()}</td>
              <td className="py-6 text-right font-medium">₹{ppaRate.toFixed(2)}</td>
              <td className="py-6 text-right font-bold text-lg">₹{amountDue.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-end">
          <div className="w-64 space-y-3 pt-6 border-t-2 border-slate-900">
            <div className="flex justify-between text-xl font-black">
              <span>TOTAL DUE:</span>
              <span>₹{amountDue.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* The "Trust" Section */}
        <div className="mt-20 p-6 bg-emerald-50 rounded-lg border border-emerald-100 flex justify-between items-center">
          <div>
            <p className="text-emerald-800 font-bold text-sm">Society Savings Summary</p>
            <p className="text-2xl font-black text-emerald-700">₹{totalSavings.toLocaleString()}</p>
          </div>
          <div className="text-right text-xs text-emerald-600 font-medium">
             Calculated vs Grid Tariff of ₹15.73
          </div>
        </div>
      </div>
    </div>
  );
}