import { Navbar } from "@/components/layout/Navbar";
import { HeroStitch } from "@/components/sections/HeroStitch";
import { FeaturesStitch } from "@/components/sections/FeaturesStitch";
import { ServicesStitch } from "@/components/sections/ServicesStitch";
import { PortfolioStitch } from "@/components/sections/PortfolioStitch";
import { AboutStitch } from "@/components/sections/AboutStitch";
import { MethodologyStitch } from "@/components/sections/MethodologyStitch";
import { TransformationStitch } from "@/components/sections/TransformationStitch";
import { ContactNew } from "@/components/sections/ContactNew";
import { FooterNew } from "@/components/sections/FooterNew";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <HeroStitch />
      <FeaturesStitch />
      <AboutStitch />
      <ServicesStitch />
      <MethodologyStitch />
      <TransformationStitch />
      <PortfolioStitch />
      <ContactNew />
      <FooterNew />
    </main>
  );
}
