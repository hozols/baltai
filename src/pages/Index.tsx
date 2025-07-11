
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <Services />
          <Testimonials />
          <Features />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
