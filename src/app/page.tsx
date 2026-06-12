import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import DomainSection from "@/components/DomainSection";
import WhyZane360 from "@/components/WhyZane360";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import MobileTabBar from "@/components/MobileTabBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <DomainSection />
        <WhyZane360 />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTABanner />
        <Footer />
      </main>
      <MobileTabBar />
    </>
  );
}
