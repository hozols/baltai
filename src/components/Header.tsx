
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, CircleDot, LayoutDashboard, DollarSign, Sun, Moon, Globe, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [activePage, setActivePage] = useState('features');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
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
    setMobileMenuOpen(false);

    // Scroll to section
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'lv' ? 'en' : 'lv');
  };

  return (
    <div className="sticky top-0 z-50 pt-8 px-4">
      <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8 flex items-center justify-between">
        <div className="p-3">
          <Logo />
        </div>
        
        <button className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg hover-glow transition-all duration-300">
            <ToggleGroup type="single" value={activePage} onValueChange={value => value && setActivePage(value)}>
              <ToggleGroupItem 
                value="features" 
                className={cn("px-4 py-2 rounded-full transition-all duration-300 relative hover-scale group", activePage === 'features' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted')} 
                onClick={handleNavClick('features')}
              >
                <CircleDot size={16} className="inline-block mr-1.5 group-hover:animate-pulse" /> {t('nav.features')}
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="services" 
                className={cn("px-4 py-2 rounded-full transition-all duration-300 relative hover-scale group", activePage === 'services' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted')} 
                onClick={handleNavClick('services')}
              >
                <LayoutDashboard size={16} className="inline-block mr-1.5 group-hover:animate-pulse" /> {t('nav.solutions')}
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="pricing" 
                className={cn("px-4 py-2 rounded-full transition-all duration-300 relative hover-scale group", activePage === 'pricing' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted')} 
                onClick={handleNavClick('pricing')}
              >
                <DollarSign size={16} className="inline-block mr-1.5 group-hover:animate-pulse" /> {t('nav.pricing')}
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="contact" 
                className={cn("px-4 py-2 rounded-full transition-all duration-300 relative hover-scale group", activePage === 'contact' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted')} 
                onClick={handleNavClick('contact')}
              >
                <MessageCircle size={16} className="inline-block mr-1.5 group-hover:animate-pulse" /> {t('nav.contact')}
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </nav>
        
        <div className={`md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50 transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0 animate-slide-down' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
            <div className="flex flex-col gap-4">
              <a 
                href="#features" 
                className={`px-3 py-2 text-sm rounded-md transition-all duration-300 hover-lift animate-fade-in-left animate-delay-100 ${activePage === 'features' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`} 
                onClick={handleNavClick('features')}
              >
                <CircleDot size={16} className="inline-block mr-1.5 animate-pulse" /> {t('nav.features')}
              </a>
              <a 
                href="#services" 
                className={`px-3 py-2 text-sm rounded-md transition-all duration-300 hover-lift animate-fade-in-left animate-delay-200 ${activePage === 'services' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`} 
                onClick={handleNavClick('services')}
              >
                <LayoutDashboard size={16} className="inline-block mr-1.5 animate-pulse" /> {t('nav.solutions')}
              </a>
              <a 
                href="#pricing" 
                className={`px-3 py-2 text-sm rounded-md transition-all duration-300 hover-lift animate-fade-in-left animate-delay-300 ${activePage === 'pricing' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`} 
                onClick={handleNavClick('pricing')}
              >
                <DollarSign size={16} className="inline-block mr-1.5 animate-pulse" /> {t('nav.pricing')}
              </a>
              <a 
                href="#contact" 
                className={`px-3 py-2 text-sm rounded-md transition-all duration-300 hover-lift animate-fade-in-left animate-delay-400 ${activePage === 'contact' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`} 
                onClick={handleNavClick('contact')}
              >
                <MessageCircle size={16} className="inline-block mr-1.5 animate-pulse" /> {t('nav.contact')}
              </a>
              
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-muted-foreground">{t('nav.theme')}</span>
                <div className="flex items-center gap-2">
                  <Moon size={16} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                  <Switch checked={!isDarkMode} onCheckedChange={toggleTheme} className="data-[state=checked]:bg-primary" />
                  <Sun size={16} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
              </div>
              
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-muted-foreground">Language</span>
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-muted transition-colors"
                >
                  <Globe size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">{language.toUpperCase()}</span>
                </button>
              </div>
            </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full px-3 py-2">
            <Moon size={18} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
            <Switch checked={!isDarkMode} onCheckedChange={toggleTheme} className="data-[state=checked]:bg-primary" />
            <Sun size={18} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Globe size={18} className="text-primary" />
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
