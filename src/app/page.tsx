import { HeroSection } from "@/components/home/HeroSection";
import { SavingsCalculator } from "@/components/home/SavingsCalculator";
import { Roadmap } from "@/components/home/Roadmap";
import { Partners } from "@/components/home/Partners";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <SavingsCalculator />
      <Roadmap />
      <Partners />
      {/* Future sections (Value Prop, Calculator, Roadmap) will be added here cleanly */}
    </div>
  );
}