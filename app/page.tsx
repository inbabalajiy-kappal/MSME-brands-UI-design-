import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import businessCard from "@/components/BusinessCard";
import PieChartSection from "@/components/PieChartSection";
import BrandScroller from "@/components/BrandScroller";
import TrademarkSection from "@/components/TrademarkSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F1F3F6] overflow-hidden">

      {/* Background Only */}
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url('/india-map.png')",
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <BrandScroller />
      <PieChartSection />
        <TrademarkSection />
      </div>

    </main>
  );
}