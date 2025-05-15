
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative w-full py-20 md:py-32 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden">
      {/* Cosmic particle effect (background dots) */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-cosmic-accent blur-[120px]"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl text-center space-y-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-cosmic-light/20 text-cosmic-accent">
          <span className="flex h-2 w-2 rounded-full bg-cosmic-accent"></span>
          Launching new team features
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance">
          Task management for <span className="text-cosmic-accent">high-performing</span> teams
        </h1>
        
        <p className="text-lg md:text-xl text-cosmic-muted max-w-2xl mx-auto text-balance">
          Streamline your workflow with our intuitive task management platform. Designed for modern teams who value clarity, focus, and results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button className="bg-cosmic-accent text-cosmic-darker hover:bg-cosmic-accent/90 text-base h-12 px-8">
            Start for free
          </Button>
          <Button variant="outline" className="border-cosmic-light/20 text-white hover:bg-cosmic-light/10 text-base h-12 px-8">
            Book a demo
          </Button>
        </div>
        
        <div className="pt-6 text-sm text-cosmic-muted">
          No credit card required • Free 14-day trial
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
