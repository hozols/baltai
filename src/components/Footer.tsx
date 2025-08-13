import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10">
          <div className="sm:col-span-2 space-y-4 sm:space-y-6">
            <div className="hover-scale transition-transform duration-200">
              <Logo />
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xs sm:max-w-sm leading-relaxed">
              Moderna AI automatizācija uzņēmumiem, kas novērtē efektivitāti, precizitāti un rezultātus.
            </p>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center text-muted-foreground text-xs sm:text-sm">
          <div className="text-center sm:text-left mb-4 sm:mb-0">© 2025 AI Automatizācija. Visas tiesības aizsargātas.</div>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-foreground transition-all duration-300 hover-scale hover:text-primary">Privātums</a>
            <a href="#" className="hover:text-foreground transition-all duration-300 hover-scale hover:text-primary">Noteikumi</a>
            <a href="#" className="hover:text-foreground transition-all duration-300 hover-scale hover:text-primary">Sīkdatnes</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;