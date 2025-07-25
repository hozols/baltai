import React from 'react';
import Header from '@/components/Header';
import PortfolioShowcase from '@/components/PortfolioCarousel';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const PortfolioPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main>
          <PortfolioShowcase />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default PortfolioPage;