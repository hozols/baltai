
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import TaskBoard from './TaskBoard';
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
      
      {/* Moving lines background - wrapped in a container with z-index */}
      <div className="moving-lines-container">
        <div className="moving-line line-1"></div>
        <div className="moving-line line-2"></div>
        <div className="moving-line line-3"></div>
        <div className="moving-line line-4"></div>
        <div className="moving-line line-5"></div>
        <div className="moving-line line-6"></div>
        <div className="moving-line line-7"></div>
        <div className="moving-line line-8"></div>
      </div>
      
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-cosmic-accent blur-[120px]"></div>
      </div>
      
      <div 
        className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-cosmic-light/20 text-cosmic-accent">
            <span className="flex h-2 w-2 rounded-full bg-cosmic-accent"></span>
            Launching new team features
            <Loader className="h-3 w-3 animate-spin text-cosmic-accent" />
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance">
          Task management for <span className="text-cosmic-accent">high-performing</span> teams
        </h1>
        
        <p className="text-lg md:text-xl text-cosmic-muted max-w-2xl mx-auto text-balance">
          Streamline your workflow with our intuitive task management platform. Designed for modern teams who value clarity, focus, and results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button className="bg-cosmic-accent text-cosmic-darker hover:bg-cosmic-darker hover:text-cosmic-accent text-base h-12 px-8">
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
      
      {/* Task Manager UI integrated in hero section with glassmorphic effect */}
      <div 
        className={`w-full max-w-7xl mt-12 z-10 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="cosmic-glow relative rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm bg-cosmic-darker/70 shadow-[0_0_15px_rgba(203,255,77,0.15)]">
          {/* Dashboard Header */}
          <div className="bg-cosmic-darker/80 backdrop-blur-md w-full">
            <div className="flex items-center justify-between p-4 border-b border-cosmic-light/10">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-md bg-cosmic-light/20 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-cosmic-accent"></div>
                </div>
                <span className="text-white font-medium">Marketing Campaign Q2</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-cosmic-light/30 border-2 border-cosmic-darker"></div>
                  <div className="h-8 w-8 rounded-full bg-cosmic-light/20 border-2 border-cosmic-darker"></div>
                  <div className="h-8 w-8 rounded-full bg-cosmic-light/40 border-2 border-cosmic-darker"></div>
                  <div className="h-8 w-8 rounded-full bg-cosmic-accent/20 border-2 border-cosmic-darker flex items-center justify-center text-xs text-cosmic-accent">+3</div>
                </div>
                
                <div className="h-8 px-3 rounded-md bg-cosmic-light/10 flex items-center justify-center text-white text-sm">
                  Share
                </div>
              </div>
            </div>
            
            {/* Dashboard Content - Increasing the height from 500px to 600px */}
            <div className="flex h-[600px] overflow-hidden">
              {/* Sidebar */}
              <div className="w-64 border-r border-cosmic-light/10 p-4 space-y-4 hidden md:block">
                <div className="space-y-2">
                  <div className="text-xs text-cosmic-muted uppercase">Navigation</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-cosmic-light/10 text-white">
                      <div className="h-3 w-3 rounded-sm bg-cosmic-accent"></div>
                      <span>Board</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5">
                      <div className="h-3 w-3 rounded-sm bg-cosmic-muted/30"></div>
                      <span>Timeline</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5">
                      <div className="h-3 w-3 rounded-sm bg-cosmic-muted/30"></div>
                      <span>Calendar</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5">
                      <div className="h-3 w-3 rounded-sm bg-cosmic-muted/30"></div>
                      <span>Files</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4">
                  <div className="text-xs text-cosmic-muted uppercase">Teams</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5">
                      <div className="h-3 w-3 rounded-full bg-cosmic-accent/80"></div>
                      <span>Marketing</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5">
                      <div className="h-3 w-3 rounded-full bg-purple-400/80"></div>
                      <span>Design</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5">
                      <div className="h-3 w-3 rounded-full bg-blue-400/80"></div>
                      <span>Development</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-4">
                {/* Board Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">Tasks</h3>
                    <span className="text-xs bg-cosmic-light/20 px-2 py-1 rounded-full text-cosmic-muted">23</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-md bg-cosmic-light/10 flex items-center justify-center text-cosmic-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M12 9L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="h-8 w-8 rounded-md bg-cosmic-light/10 flex items-center justify-center text-cosmic-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 9L17 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 17L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="h-8 px-3 rounded-md bg-cosmic-accent text-cosmic-darker flex items-center justify-center text-sm font-medium">
                      New Task
                    </div>
                  </div>
                </div>
                
                {/* Kanban Board - replaced static implementation with TaskBoard component */}
                <TaskBoard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
