
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DashboardPreview from '@/components/DashboardPreview';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import BackgroundEffects from '@/components/BackgroundEffects';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cosmic-dark text-white relative overflow-hidden">
      <BackgroundEffects />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <DashboardPreview />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
