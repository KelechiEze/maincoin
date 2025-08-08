import SmartMineHeader from ".././components/SmartMineHeader";
import HeroSection from ".././components/HeroSection";
import ImageCarousel from ".././components/ImageCarousel";
import SupportedCurrencies from "../components/SupportedCurrencies";
import PricingSection from "../components/PricingSection";
import SiteFooter from "../components/SiteFooter";



const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SmartMineHeader />
      <main>
        <HeroSection />
        <ImageCarousel />
        <SupportedCurrencies />
        <PricingSection />
        <SiteFooter />
      </main>
    </div>
  );
};

export default Index;