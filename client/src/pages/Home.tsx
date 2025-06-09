import HeroSection from "@/components/Home/HeroSection";
import StatsSection from "@/components/Home/StatsSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import ValuePropsSection from "@/components/Home/ValuePropsSection";
import ImplementationSection from "@/components/Home/ImplementationSection";
import IndustrySolutions from "@/components/Home/IndustrySolutions";
import CustomerLogos from "@/components/Home/CustomerLogos";
import ContactSection from "@/components/Home/ContactSection";
import NewsletterSection from "@/components/Home/NewsletterSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ValuePropsSection />
      <ImplementationSection />
      <IndustrySolutions />
      <CustomerLogos />
      <ContactSection />
      <NewsletterSection />
    </div>
  );
}
