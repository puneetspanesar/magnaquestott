import HeroSection from "@/components/Home/HeroSection";
import StatsSection from "@/components/Home/StatsSection";
import SolutionOfferings from "@/components/Home/SolutionOfferings";
import FeaturesSection from "@/components/Home/FeaturesSection";
import ValuePropsSection from "@/components/Home/ValuePropsSection";
import ImplementationSection from "@/components/Home/ImplementationSection";
import IndustryVerticals from "@/components/Home/IndustryVerticals";
import SuccessStories from "@/components/Home/SuccessStories";
import GlobalPresence from "@/components/Home/GlobalPresence";
import CustomerLogos from "@/components/Home/CustomerLogos";
import ContactSection from "@/components/Home/ContactSection";
import NewsletterSection from "@/components/Home/NewsletterSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <IndustryVerticals />
      <SolutionOfferings />
      <FeaturesSection />
      <ValuePropsSection />
      <CustomerLogos />
      <SuccessStories />
      <GlobalPresence />
      <ImplementationSection />
      <ContactSection />
      <NewsletterSection />
    </div>
  );
}
