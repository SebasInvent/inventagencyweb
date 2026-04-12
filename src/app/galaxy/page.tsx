"use client";

import { GalaxyHeroSection } from "@/components/ui/GalaxyHeroSection";
import { FeaturesStitch } from "@/components/sections/FeaturesStitch";
import { ServicesStitch } from "@/components/sections/ServicesStitch";
import { TransformationStitch } from "@/components/sections/TransformationStitch";
import { PortfolioStitch } from "@/components/sections/PortfolioStitch";
import { MethodologyStitch } from "@/components/sections/MethodologyStitch";
import { AboutStitch } from "@/components/sections/AboutStitch";
import { ContactNew } from "@/components/sections/ContactNew";
import { FooterNew } from "@/components/sections/FooterNew";

export default function GalaxyPage() {
  return (
    <main className="bg-black relative min-h-screen w-full overflow-x-hidden">
      <GalaxyHeroSection />

      {/* Divider */}
      <div className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[1px] bg-white/10" />
        </div>
      </div>

      <div className="bg-background">
        <FeaturesStitch />
        <ServicesStitch />
        <MethodologyStitch />
        <TransformationStitch />
        <PortfolioStitch />
        <AboutStitch />
        <ContactNew />
        <FooterNew />
      </div>
    </main>
  );
}
