
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Header = () => {
  const [activePage, setActivePage] = useState('features');
  
  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full py-3 px-6 md:px-12 flex items-center justify-between border-b border-cosmic-light/20">
      <Logo />
      
      <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
        <div className="rounded-full px-1.5 py-1.5 backdrop-blur-md bg-cosmic-darker/90 border border-white/5">
          <div className="flex items-center">
            <a 
              href="#features" 
              className={`px-4 py-1.5 text-sm rounded-full transition-colors relative ${
                activePage === 'features' ? 'text-white' : 'text-cosmic-muted hover:text-white'
              }`}
              onClick={handleNavClick('features')}
            >
              Features
              {activePage === 'features' && (
                <span className="absolute inset-0 bg-cosmic-light/10 rounded-full z-[-1]"></span>
              )}
            </a>
            <a 
              href="#dashboard" 
              className={`px-4 py-1.5 text-sm rounded-full transition-colors relative ${
                activePage === 'dashboard' ? 'text-white' : 'text-cosmic-muted hover:text-white'
              }`}
              onClick={handleNavClick('dashboard')}
            >
              Dashboard
              {activePage === 'dashboard' && (
                <span className="absolute inset-0 bg-cosmic-light/10 rounded-full z-[-1]"></span>
              )}
            </a>
            <a 
              href="#pricing" 
              className={`px-4 py-1.5 text-sm rounded-full transition-colors relative ${
                activePage === 'pricing' ? 'text-white' : 'text-cosmic-muted hover:text-white'
              }`}
              onClick={handleNavClick('pricing')}
            >
              Pricing
              {activePage === 'pricing' && (
                <span className="absolute inset-0 bg-cosmic-light/10 rounded-full z-[-1]"></span>
              )}
            </a>
          </div>
        </div>
      </nav>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-cosmic-muted hover:text-white hover:bg-cosmic-light/10">Log in</Button>
        <Button className="bg-cosmic-accent text-cosmic-darker hover:bg-cosmic-accent/90">Start for free</Button>
      </div>
    </header>
  );
};

export default Header;
