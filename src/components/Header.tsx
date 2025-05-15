
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, Search, Bell } from 'lucide-react';

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <header className="w-full py-6 px-6 md:px-12 flex items-center justify-between border-b border-cosmic-light/10 backdrop-blur-md bg-cosmic-darker/70 sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <Logo />
        
        <nav className="hidden md:flex items-center gap-10 text-sm">
          <a href="#features" className="text-cosmic-muted hover:text-white transition-colors">Features</a>
          <a href="#dashboard" className="text-cosmic-muted hover:text-white transition-colors">Dashboard</a>
          <a href="#pricing" className="text-cosmic-muted hover:text-white transition-colors">Pricing</a>
        </nav>
      </div>
      
      <div className="flex items-center gap-4">
        {isSearchActive ? (
          <div className="relative hidden md:flex items-center">
            <input 
              type="text" 
              placeholder="Search tasks..."
              className="bg-cosmic-light/10 border border-cosmic-light/20 text-white placeholder:text-cosmic-muted rounded-md pl-9 pr-4 py-2 w-48 focus:outline-none focus:ring-1 focus:ring-cosmic-accent/50"
              autoFocus
              onBlur={() => setIsSearchActive(false)}
            />
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cosmic-muted" />
          </div>
        ) : (
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden md:flex text-cosmic-muted hover:text-white hover:bg-cosmic-light/10"
            onClick={() => setIsSearchActive(true)}
          >
            <Search className="w-4 h-4" />
          </Button>
        )}
        
        <Button 
          variant="ghost" 
          size="icon"
          className="hidden md:flex text-cosmic-muted hover:text-white hover:bg-cosmic-light/10 relative"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-cosmic-accent rounded-full"></span>
        </Button>
        
        <Button 
          variant="ghost" 
          className="md:hidden text-cosmic-muted hover:text-white hover:bg-cosmic-light/10"
        >
          <Menu className="w-5 h-5" />
        </Button>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-cosmic-muted hover:text-white hover:bg-cosmic-light/10">Log in</Button>
          <Button className="bg-cosmic-accent text-cosmic-darker hover:bg-cosmic-accent/90">Start for free</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
