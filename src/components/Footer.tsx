import React from 'react';
import Logo from './Logo';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
const Footer = () => {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return <footer ref={footerRef} className={`w-full py-16 px-6 md:px-12 border-t border-border bg-card scroll-fade-in ${footerVisible ? 'animate-in' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <div className="hover-scale transition-transform duration-200">
              <Logo />
            </div>
            <p className="text-muted-foreground max-w-xs">
              Moderna AI automatizācija uzņēmumiem, kas novērtē efektivitāti, precizitāti un rezultātus.
            </p>
          </div>
          
          
          
          
          
          
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div>© 2025 AI Automatizācija. Visas tiesības aizsargātas.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-all duration-300 hover-scale hover:text-primary">Privātums</a>
            <a href="#" className="hover:text-foreground transition-all duration-300 hover-scale hover:text-primary">Noteikumi</a>
            <a href="#" className="hover:text-foreground transition-all duration-300 hover-scale hover:text-primary">Sīkdatnes</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;