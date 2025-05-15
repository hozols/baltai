
import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="w-full py-6 px-6 md:px-12 flex items-center justify-between border-b border-cosmic-light/20">
      <Logo />
      
      <nav className="hidden md:flex items-center">
        <div className="cosmic-glass rounded-full px-1.5 py-1.5 backdrop-blur-md bg-white/5 border border-white/10">
          <div className="flex items-center">
            <a href="#features" className="px-4 py-1.5 text-sm rounded-full hover:bg-cosmic-light/10 transition-colors text-cosmic-muted hover:text-white">Features</a>
            <a href="#dashboard" className="px-4 py-1.5 text-sm rounded-full hover:bg-cosmic-light/10 transition-colors text-cosmic-muted hover:text-white">Dashboard</a>
            <a href="#pricing" className="px-4 py-1.5 text-sm rounded-full hover:bg-cosmic-light/10 transition-colors text-cosmic-muted hover:text-white">Pricing</a>
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
