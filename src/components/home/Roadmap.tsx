import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Handshake, 
  FileSignature, 
  Ruler, 
  FileText, 
  Landmark, 
  Wrench, 
  Zap 
} from "lucide-react";

// Modularity: We store the steps in an array so you can edit text without breaking UI code.
const ROADMAP_STEPS = [
  {
    id: 1,
    title: "Initial Proposal (The Handshake)",
    description: "We present the 'Zero-Investment' model to the Committee and calculate your guaranteed monthly savings.",
    icon: Handshake,
  },
  {
    id: 2,
    title: "Letter of Intent (LOI)",
    description: "The Society signs a non-binding LOI, giving us the green light to conduct a free technical audit.",
    icon: FileSignature,
  },
  {
    id: 3,
    title: "Precision Technical Survey",
    description: "Our engineers conduct a 3D shadow analysis and structural health check to ensure 100% roof integrity.",
    icon: Ruler,
  },
  {
    id: 4,
    title: "Signing the Agreement (PPA)",
    description: "We sign the 25-Year Power Purchase Agreement, legally locking in your discounted electricity rate.",
    icon: FileText,
  },
  {
    id: 5,
    title: "Government Approvals",
    description: "We handle 100% of the DISCOM paperwork, applying for Net-Metering and safety clearances on your behalf.",
    icon: Landmark,
  },
  {
    id: 6,
    title: "Professional Installation",
    description: "Our Tier-1 EPC partners install the cyclone-rated structures and panels with zero disturbance to residents.",
    icon: Wrench,
  },
  {
    id: 7,
    title: "The Switch & Savings",
    description: "The Bi-Directional Net Meter is installed. We flip the switch, and your next bill shows massive savings.",
    icon: Zap,
  },
];

export const Roadmap = () => {
  return (
    <section id="roadmap" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            The Zero Solar <span className="text-primary">Roadmap</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From our first handshake to your first reduced electricity bill, we manage the entire 7-step process so the Society Committee doesn&apos;t have to lift a finger.
          </p>
        </div>

        {/* The Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-8 space-y-8 pb-8">
          {ROADMAP_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative pl-8 md:pl-12">
                {/* Timeline Dot & Icon */}
                <div className="absolute -left-5 md:-left-6 top-1 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border-4 border-background bg-slate-900 shadow-sm">
                  <Icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                
                {/* Content Card */}
                <Card className="bg-slate-900/40 border-slate-800 hover:border-primary/50 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-bold text-primary tracking-wider uppercase">
                        Step 0{step.id}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Subtle Background Accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
};