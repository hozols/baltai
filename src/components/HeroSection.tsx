
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import SpendAnalyticsDashboard from './SpendAnalyticsDashboard';
import { Loader } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden">
      {/* Cosmic particle effect (background dots) */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      
      <div 
        className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted/20 text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            Real-time expense tracking
            <Loader className="h-3 w-3 animate-spin text-primary" />
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance">
          Smart spend analytics for <span className="text-primary">modern</span> finance teams
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Transform your financial data into actionable insights. Monitor expenses, track budgets, and optimize spending with our intelligent analytics platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base h-12 px-8">
            Start free trial
          </Button>
          <Button variant="outline" className="border-border text-foreground hover:bg-accent text-base h-12 px-8">
            Schedule demo
          </Button>
        </div>
        
        <div className="pt-6 text-sm text-muted-foreground">
          No setup fees • 30-day free trial • Cancel anytime
        </div>
      </div>
      
      {/* Spend Analytics Dashboard UI */}
      <div 
        className={`w-full max-w-7xl mt-12 z-10 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card/70 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
          {/* Dashboard Header */}
          <div className="bg-card/80 backdrop-blur-md w-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-md bg-primary/20 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-primary"></div>
                </div>
                <span className="text-foreground font-medium">Q4 2024 Financial Overview</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-primary/30 border-2 border-card"></div>
                  <div className="h-8 w-8 rounded-full bg-primary/20 border-2 border-card"></div>
                  <div className="h-8 w-8 rounded-full bg-primary/40 border-2 border-card"></div>
                  <div className="h-8 w-8 rounded-full bg-accent/20 border-2 border-card flex items-center justify-center text-xs text-primary">+5</div>
                </div>
                
                <div className="h-8 px-3 rounded-md bg-muted flex items-center justify-center text-foreground text-sm">
                  Export
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="flex h-[600px] overflow-hidden">
              {/* Sidebar */}
              <div className="w-64 border-r border-border p-4 space-y-4 hidden md:block">
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground uppercase">Analytics</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-accent text-foreground">
                      <div className="h-3 w-3 rounded-sm bg-primary"></div>
                      <span>Overview</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                      <span>Expenses</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                      <span>Budgets</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                      <span>Reports</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4">
                  <div className="text-xs text-muted-foreground uppercase">Categories</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-full bg-red-400/80"></div>
                      <span>Travel</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-full bg-blue-400/80"></div>
                      <span>Software</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-full bg-green-400/80"></div>
                      <span>Marketing</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-4">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">Spend Analytics</h3>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">Live</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M12 9L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 9L17 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 17L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="h-8 px-3 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                      New Report
                    </div>
                  </div>
                </div>
                
                {/* Spend Analytics Dashboard */}
                <SpendAnalyticsDashboard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
