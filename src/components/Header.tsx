
import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="w-full py-6 px-6 md:px-12 flex items-center justify-between border-b border-cosmic-light/20">
      <Logo />
      
      <nav className="hidden md:flex items-center gap-10 text-sm">
        <a href="#features" className="text-cosmic-muted hover:text-white transition-colors">Features</a>
        <a href="#dashboard" className="text-cosmic-muted hover:text-white transition-colors">Dashboard</a>
        <a href="#pricing" className="text-cosmic-muted hover:text-white transition-colors">Pricing</a>
      </nav>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-cosmic-muted hover:text-white hover:bg-cosmic-light/10">Log in</Button>
        <Button className="bg-cosmic-accent text-cosmic-darker hover:bg-cosmic-accent/90">Start for free</Button>
      </div>
    </header>
  );
};

export default Header;
