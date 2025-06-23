import OTTHeroSection from "@/components/Home/OTTHeroSection";
import OTTProblemSection from "@/components/Home/OTTProblemSection";
import OTTValuePropsSection from "@/components/Home/OTTValuePropsSection";
import OTTCTASection from "@/components/Home/OTTCTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <OTTHeroSection />
      <OTTProblemSection />
      <OTTValuePropsSection />
      <OTTCTASection />
    </div>
  );
}
