import { HeroSection } from "@/components/home/HeroSection";
import { SavingsCalculator } from "@/components/home/SavingsCalculator";
import { Roadmap } from "@/components/home/Roadmap";
import { Partners } from "@/components/home/Partners";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16"> {/* pt-16 pushes content below fixed navbar */}
        <HeroSection />
        {/* We will add an id="technology" to the next section so the navbar link works */}
        <div id="technology">
          <SavingsCalculator />
        </div>
        <Roadmap />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}