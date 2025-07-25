import React from 'react';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const ServicesPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main>
          <Services />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;