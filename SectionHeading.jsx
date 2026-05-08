import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhoWeHelpSection from './components/WhoWeHelpSection';
import PricingSection from './components/PricingSection';
import ProcessSection from './components/ProcessSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="site">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhoWeHelpSection />
      <PricingSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
