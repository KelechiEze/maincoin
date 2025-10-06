import SmartMineHeader from ".././components/SmartMineHeader";
import HeroSection from ".././components/HeroSection";
import ImageCarousel from ".././components/ImageCarousel";
import LoanServiceComponent from ".././components/LoanServiceComponent";
import SupportedCurrencies from "../components/SupportedCurrencies";
import Testimonials from "../components/Testimonials";
import PricingSection from "../components/PricingSection";
import SiteFooter from "../components/SiteFooter";



const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SmartMineHeader />
      <main>
        <HeroSection />
        <Testimonials />
        <ImageCarousel />
        <LoanServiceComponent />
        <SupportedCurrencies />
        <PricingSection />
        <SiteFooter />
      </main>
    </div>
  );
};

export default Index;