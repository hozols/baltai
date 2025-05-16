
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const Header = () => {
  const [activePage, setActivePage] = useState('features');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full py-1.5 px-4 md:px-8 flex items-center justify-between border-b border-cosmic-light/20">
      <Logo />
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden p-2 rounded-md text-cosmic-muted hover:text-white hover:bg-cosmic-light/10"
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
        <div className="rounded-full px-1 py-1 backdrop-blur-md bg-cosmic-darker/90 border border-white/5">
          <ToggleGroup type="single" value={activePage} onValueChange={(value) => value && setActivePage(value)}>
            <ToggleGroupItem 
              value="features"
              className={cn(
                "px-4 py-2 rounded-full transition-colors relative",
                activePage === 'features' ? 'text-white bg-white/10' : 'text-cosmic-muted hover:text-white hover:bg-white/5'
              )}
              onClick={handleNavClick('features')}
            >
              Features
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="dashboard" 
              className={cn(
                "px-4 py-2 rounded-full transition-colors relative",
                activePage === 'dashboard' ? 'text-white bg-white/10' : 'text-cosmic-muted hover:text-white hover:bg-white/5'
              )}
              onClick={handleNavClick('dashboard')}
            >
              Dashboard
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="pricing" 
              className={cn(
                "px-4 py-2 rounded-full transition-colors relative",
                activePage === 'pricing' ? 'text-white bg-white/10' : 'text-cosmic-muted hover:text-white hover:bg-white/5'
              )}
              onClick={handleNavClick('pricing')}
            >
              Pricing
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </nav>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-cosmic-darker py-4 px-6 border-b border-cosmic-light/20 z-50">
          <div className="flex flex-col gap-4">
            <a 
              href="#features" 
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                activePage === 'features' ? 'bg-white/10 text-white' : 'text-cosmic-muted hover:text-white hover:bg-white/5'
              }`}
              onClick={handleNavClick('features')}
            >
              Features
            </a>
            <a 
              href="#dashboard" 
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                activePage === 'dashboard' ? 'bg-white/10 text-white' : 'text-cosmic-muted hover:text-white hover:bg-white/5'
              }`}
              onClick={handleNavClick('dashboard')}
            >
              Dashboard
            </a>
            <a 
              href="#pricing" 
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                activePage === 'pricing' ? 'bg-white/10 text-white' : 'text-cosmic-muted hover:text-white hover:bg-white/5'
              }`}
              onClick={handleNavClick('pricing')}
            >
              Pricing
            </a>
          </div>
        </div>
      )}
      
      <div className="hidden md:flex items-center gap-2">
        <Button variant="ghost" className="text-cosmic-muted hover:text-white hover:bg-cosmic-light/10">Log in</Button>
        <Button className="bg-cosmic-accent text-cosmic-darker hover:bg-cosmic-darker hover:text-cosmic-accent hover:border hover:border-cosmic-accent">Start for free</Button>
      </div>
    </header>
  );
};

export default Header;
