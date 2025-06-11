
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, CircleDot, LayoutDashboard, DollarSign, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';

const Header = () => {
  const [activePage, setActivePage] = useState('features');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    // Apply the theme to the document when it changes
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    }
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
    <header className="w-full py-1.5 px-4 md:px-8 flex items-center justify-between border-b border-border bg-background">
      <Logo />
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/10"
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
        <div className="nav-pill">
          <ToggleGroup type="single" value={activePage} onValueChange={(value) => value && setActivePage(value)}>
            <ToggleGroupItem 
              value="features"
              className={cn(
                "px-4 py-2 rounded-full transition-colors relative",
                activePage === 'features' ? 'text-foreground bg-accent/20' : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
              )}
              onClick={handleNavClick('features')}
            >
              <CircleDot size={16} className="inline-block mr-1.5" /> Features
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="dashboard" 
              className={cn(
                "px-4 py-2 rounded-full transition-colors relative",
                activePage === 'dashboard' ? 'text-foreground bg-accent/20' : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
              )}
              onClick={handleNavClick('dashboard')}
            >
              <LayoutDashboard size={16} className="inline-block mr-1.5" /> Dashboard
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="pricing" 
              className={cn(
                "px-4 py-2 rounded-full transition-colors relative",
                activePage === 'pricing' ? 'text-foreground bg-accent/20' : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
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
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background py-4 px-6 border-b border-border z-50">
          <div className="flex flex-col gap-4">
            <a 
              href="#features" 
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                activePage === 'features' ? 'bg-accent/20 text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
              }`}
              onClick={handleNavClick('features')}
            >
              <CircleDot size={16} className="inline-block mr-1.5" /> Features
            </a>
            <a 
              href="#dashboard" 
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                activePage === 'dashboard' ? 'bg-accent/20 text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
              }`}
              onClick={handleNavClick('dashboard')}
            >
              <LayoutDashboard size={16} className="inline-block mr-1.5" /> Dashboard
            </a>
            <a 
              href="#pricing" 
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                activePage === 'pricing' ? 'bg-accent/20 text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
              }`}
              onClick={handleNavClick('pricing')}
            >
              <DollarSign size={16} className="inline-block mr-1.5" /> Pricing
            </a>
            
            {/* Add theme toggle for mobile */}
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-sm text-muted-foreground">Theme</span>
              <div className="flex items-center gap-2">
                <Moon size={16} className={`${isDarkMode ? 'text-accent' : 'text-muted-foreground'}`} />
                <Switch 
                  checked={!isDarkMode} 
                  onCheckedChange={toggleTheme} 
                  className="data-[state=checked]:bg-accent"
                />
                <Sun size={16} className={`${!isDarkMode ? 'text-accent' : 'text-muted-foreground'}`} />
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="hidden md:flex items-center gap-4">
        {/* Theme toggle for desktop */}
        <div className="flex items-center gap-2 bg-card border border-border rounded-full px-2 py-1">
          <Moon size={18} className={`${isDarkMode ? 'text-accent' : 'text-muted-foreground'}`} />
          <Switch 
            checked={!isDarkMode} 
            onCheckedChange={toggleTheme} 
            className="data-[state=checked]:bg-accent"
          />
          <Sun size={18} className={`${!isDarkMode ? 'text-accent' : 'text-muted-foreground'}`} />
        </div>
        <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-accent/10">Log in</Button>
      </div>
    </header>
  );
};

export default Header;
