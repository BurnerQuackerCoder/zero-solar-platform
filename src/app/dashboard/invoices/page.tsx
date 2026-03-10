import React from "react";
import Link from "next/link";
import { FileText, Download, Eye, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function InvoicesHub() {
  // Dummy data representing the last 3 months
  const invoices = [
    { id: "MAR-2026", date: "01 Mar 2026", amount: "₹45,210", status: "Pending", current: true },
    { id: "FEB-2026", date: "01 Feb 2026", amount: "₹42,800", status: "Paid", current: false },
    { id: "JAN-2026", date: "01 Jan 2026", amount: "₹41,150", status: "Paid", current: false },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Billing & Invoices</h2>
        <p className="text-slate-400">Manage your monthly PPA invoices and payment history.</p>
      </div>

      {/* Current Outstanding Bill Section */}
      <Card className="bg-slate-900/60 border-primary/20 shadow-lg shadow-primary/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center gap-2">
                Current Invoice <AlertCircle className="h-5 w-5 text-amber-500" />
              </CardTitle>
              <CardDescription className="text-slate-400 mt-1">Generated for March 2026</CardDescription>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-white">₹45,210</p>
              <p className="text-sm text-slate-400">Due by 15 Mar 2026</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Link href="/dashboard/invoices/MAR-2026">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Eye className="mr-2 h-4 w-4" /> View Full Invoice
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Previous 3 Months History */}
      <Card className="bg-slate-900/40 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white text-lg">Recent Bills (Last 3 Months)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-slate-800 overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-900/80 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="px-4 py-3 font-medium">Invoice ID</th>
                  <th className="px-4 py-3 font-medium">Billing Period</th>
                  <th className="px-4 py-3 font-medium">Amount</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-4 font-medium text-white">{inv.id}</td>
                    <td className="px-4 py-4">{inv.date}</td>
                    <td className="px-4 py-4">{inv.amount}</td>
                    <td className="px-4 py-4">
                      {inv.status === "Paid" ? (
                        <span className="flex items-center gap-1 text-emerald-500 text-xs font-medium px-2 py-1 bg-emerald-500/10 rounded-full w-fit">
                          <CheckCircle2 className="h-3 w-3" /> Paid
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-amber-500 text-xs font-medium px-2 py-1 bg-amber-500/10 rounded-full w-fit">
                          <AlertCircle className="h-3 w-3" /> Pending
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/dashboard/invoices/${inv.id}`}>
                          <Button variant="ghost" size="sm" className="h-8 px-2 text-slate-400 hover:text-white hover:bg-slate-800">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
             <Button variant="link" className="text-slate-500 hover:text-primary text-xs">
                Request Older Invoices (Archive)
             </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}