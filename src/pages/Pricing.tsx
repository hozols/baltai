import React from 'react';
import Header from '@/components/Header';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const PricingPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main>
          <Pricing />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default PricingPage;