import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FleetPreview } from "@/components/sections/FleetPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedExperience } from "@/components/sections/FeaturedExperience";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <FleetPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <FeaturedExperience />
      <CTASection />
    </>
  );
}
