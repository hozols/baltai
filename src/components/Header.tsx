
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, DollarSign, Sun, Moon, Globe, MessageCircle, Home, Briefcase, GraduationCap, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/contexts/LanguageContext';

const NAV_SECTIONS = [
  { id: '/', icon: Home, labelKey: 'nav.home', path: '/' },
  { id: 'services', icon: LayoutDashboard, labelKey: 'nav.solutions', path: '/services' },
  { id: 'portfolio', icon: Briefcase, labelKey: 'nav.portfolio', path: '/portfolio' },
  { id: 'training', icon: GraduationCap, labelKey: 'nav.training', path: '/training' },
  { id: 'pricing', icon: DollarSign, labelKey: 'nav.pricing', path: '/pricing' },
  { id: 'contact', icon: MessageCircle, labelKey: 'nav.contact', path: '/contact' },
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // Default to dark mode
  });
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const activePage = location.pathname;

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
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
        
        <button 
          className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground transition-colors" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg transition-all duration-300 flex gap-1">
            {NAV_SECTIONS.map(({ id, icon: Icon, labelKey, path }) => (
              <Link
                key={id}
                to={path}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-300 relative group",
                  activePage === path
                    ? 'text-accent-foreground bg-accent'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                <Icon size={16} className="inline-block mr-1.5 group-hover:animate-pulse" /> 
                {t(labelKey)}
              </Link>
            ))}
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4">
              {NAV_SECTIONS.map(({ id, icon: Icon, labelKey, path }) => (
                <Link
                  key={id}
                  to={path}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md transition-all duration-300 flex items-center",
                    activePage === path 
                      ? 'bg-accent text-accent-foreground' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                  onClick={handleMobileNavClick}
                >
                  <Icon size={16} className="mr-2" /> 
                  {t(labelKey)}
                </Link>
              ))}
              
              <div className="flex items-center justify-between px-3 py-2 border-t border-border pt-4">
                <span className="text-sm text-muted-foreground">{t('nav.theme')}</span>
                <div className="flex items-center gap-2">
                  <Moon size={16} className={cn(isDarkMode ? 'text-primary' : 'text-muted-foreground')} />
                  <Switch checked={!isDarkMode} onCheckedChange={toggleTheme} className="data-[state=checked]:bg-primary" />
                  <Sun size={16} className={cn(!isDarkMode ? 'text-primary' : 'text-muted-foreground')} />
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
        )}
        
        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full px-3 py-2 bg-background/80 border border-border">
            <Moon size={18} className={cn(isDarkMode ? 'text-primary' : 'text-muted-foreground')} />
            <Switch checked={!isDarkMode} onCheckedChange={toggleTheme} className="data-[state=checked]:bg-primary" />
            <Sun size={18} className={cn(!isDarkMode ? 'text-primary' : 'text-muted-foreground')} />
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
