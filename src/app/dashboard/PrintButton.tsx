"use client";

import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export const PrintButton = () => {
  return (
    <Button 
      variant="outline" 
      onClick={() => window.print()} 
      className="border-slate-300 hover:bg-slate-100"
    >
      <Printer className="mr-2 h-4 w-4" /> Print / Save PDF
    </Button>
  );
};