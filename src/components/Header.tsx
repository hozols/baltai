
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, Star, LayoutDashboard, DollarSign, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';

const Header = () => {
  const [activePage, setActivePage] = useState('features');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    // Apply the theme to the document when it changes
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
    document.documentElement.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);
  
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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
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
              <Star size={16} className="inline-block mr-1.5" /> Features
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="dashboard" 
              className={cn(
                "px-4 py-2 rounded-full transition-colors relative",
                activePage === 'dashboard' ? 'text-white bg-white/10' : 'text-cosmic-muted hover:text-white hover:bg-white/5'
              )}
              onClick={handleNavClick('dashboard')}
            >
              <LayoutDashboard size={16} className="inline-block mr-1.5" /> Dashboard
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="pricing" 
              className={cn(
                "px-4 py-2 rounded-full transition-colors relative",
                activePage === 'pricing' ? 'text-white bg-white/10' : 'text-cosmic-muted hover:text-white hover:bg-white/5'
              )}
              onClick={handleNavClick('pricing')}
            >
              <DollarSign size={16} className="inline-block mr-1.5" /> Pricing
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
              <Star size={16} className="inline-block mr-1.5" /> Features
            </a>
            <a 
              href="#dashboard" 
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                activePage === 'dashboard' ? 'bg-white/10 text-white' : 'text-cosmic-muted hover:text-white hover:bg-white/5'
              }`}
              onClick={handleNavClick('dashboard')}
            >
              <LayoutDashboard size={16} className="inline-block mr-1.5" /> Dashboard
            </a>
            <a 
              href="#pricing" 
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                activePage === 'pricing' ? 'bg-white/10 text-white' : 'text-cosmic-muted hover:text-white hover:bg-white/5'
              }`}
              onClick={handleNavClick('pricing')}
            >
              <DollarSign size={16} className="inline-block mr-1.5" /> Pricing
            </a>
            
            {/* Add theme toggle for mobile */}
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-sm text-cosmic-muted">Theme</span>
              <div className="flex items-center gap-2">
                <Moon size={16} className={`${isDarkMode ? 'text-cosmic-accent' : 'text-cosmic-muted'}`} />
                <Switch 
                  checked={!isDarkMode} 
                  onCheckedChange={toggleTheme} 
                  className="data-[state=checked]:bg-cosmic-accent"
                />
                <Sun size={16} className={`${!isDarkMode ? 'text-cosmic-accent' : 'text-cosmic-muted'}`} />
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="hidden md:flex items-center gap-4">
        {/* Theme toggle for desktop */}
        <div className="flex items-center gap-2 bg-cosmic-darker/90 border border-white/5 rounded-full px-2 py-1">
          <Moon size={18} className={`${isDarkMode ? 'text-cosmic-accent' : 'text-cosmic-muted'}`} />
          <Switch 
            checked={!isDarkMode} 
            onCheckedChange={toggleTheme} 
            className="data-[state=checked]:bg-cosmic-accent"
          />
          <Sun size={18} className={`${!isDarkMode ? 'text-cosmic-accent' : 'text-cosmic-muted'}`} />
        </div>
        <Button variant="ghost" className="text-cosmic-muted hover:text-white hover:bg-cosmic-light/10">Log in</Button>
      </div>
    </header>
  );
};

export default Header;
