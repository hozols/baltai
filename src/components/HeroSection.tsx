import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Loader, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
  const { ref: heroRef, isVisible: isHeroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: showcaseRef, isVisible: isShowcaseVisible } = useScrollAnimation({ threshold: 0.2 });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Cosmic particle effect (background dots) */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px] animate-pulse-glow"></div>
      </div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce-subtle"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-bounce-subtle animate-delay-200"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce-subtle animate-delay-400"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-primary/30 rounded-full animate-bounce-subtle animate-delay-600"></div>
      </div>
      
      <div className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary hover-glow animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <Sparkles className="h-3 w-3 text-primary animate-pulse-glow" />
            {t('hero.badge')}
            <Loader className="h-3 w-3 animate-spin text-primary" />
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground animate-fade-in-up animate-delay-200">
          AI automatizācija <span className="text-primary animate-shimmer bg-gradient-to-r from-primary via-primary to-primary bg-clip-text">{t('hero.title.highlight')}</span> uzņēmumiem
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance animate-fade-in-up animate-delay-400">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center animate-fade-in-up animate-delay-600">
          <Button 
            variant="default" 
            className="btn-magnetic hover-glow bg-primary text-primary-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px] group"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
          >
            <Zap className="h-4 w-4 mr-2 group-hover:animate-pulse" />
            {t('hero.cta.demo')}
          </Button>
        </div>
        
        <div className="pt-6 text-sm text-muted-foreground animate-fade-in-up animate-delay-800">{t("hero.trial")}</div>
      </div>
      
      {/* Service Showcase integrated in hero section with glassmorphic effect */}
      <div ref={showcaseRef} className={`w-full max-w-7xl mt-12 z-10 scroll-fade-in ${isShowcaseVisible ? 'animate-in' : ''}`}>
        <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg hover-lift">
          {/* Showcase Header */}
          <div className="bg-card backdrop-blur-md w-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-md bg-primary/20 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-primary"></div>
                </div>
                <span className="text-foreground font-medium">{t('hero.showcase.title')}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-muted-foreground">6 {t('hero.showcase.services')}</span>
                </div>
                
                <div className="h-8 px-3 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center text-primary text-sm font-medium cursor-pointer">
                  {t('hero.showcase.view_all')}
                </div>
              </div>
            </div>
            
            {/* Service Showcase Content */}
            <div className="flex h-[600px] overflow-hidden">
              {/* Service Categories Sidebar */}
              <div className="w-64 border-r border-border p-4 space-y-4 hidden md:block bg-card">
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground uppercase">Pakalpojumi</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary border border-primary/20">
                      <div className="h-3 w-3 rounded-sm bg-primary"></div>
                      <span>{t('hero.showcase.nav.workers')}</span>
                      <div className="ml-auto h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-medium">3</div>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50 cursor-pointer">
                      <div className="h-3 w-3 rounded-sm bg-primary/60"></div>
                      <span>{t('hero.showcase.nav.chatbots')}</span>
                      <div className="ml-auto h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground font-medium">2</div>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50 cursor-pointer">
                      <div className="h-3 w-3 rounded-sm bg-green-500/60"></div>
                      <span>{t('hero.showcase.nav.automation')}</span>
                      <div className="ml-auto h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground font-medium">1</div>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50 cursor-pointer">
                      <div className="h-3 w-3 rounded-sm bg-purple-500/60"></div>
                      <span>{t('hero.showcase.nav.analytics')}</span>
                      <div className="ml-auto h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground font-medium">2</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4">
                  <div className="text-xs text-muted-foreground uppercase">Kategorijas</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50 cursor-pointer">
                      <div className="h-3 w-3 rounded-full bg-orange-500/60"></div>
                      <span>{t('hero.showcase.categories.automation')}</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50 cursor-pointer">
                      <div className="h-3 w-3 rounded-full bg-cyan-500/60"></div>
                      <span>{t('hero.showcase.categories.intelligence')}</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50 cursor-pointer">
                      <div className="h-3 w-3 rounded-full bg-pink-500/60"></div>
                      <span>{t('hero.showcase.categories.support')}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content - Service Showcase */}
              <div className="flex-1 p-4 bg-background overflow-hidden">
                {/* Services Header */}
                <div className="flex items-center justify-between mb-6 min-w-0">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <h3 className="font-medium text-foreground">{t('services.workers.title')}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">Aktīvs</span>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="h-8 px-3 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-primary/90 transition-colors">
                      {t('hero.showcase.explore')}
                    </div>
                  </div>
                </div>
                
                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
                  {/* AI Workers Service */}
                  <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-pointer hover-lift hover-glow group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-8 w-8 rounded-md bg-primary/20 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-sm bg-primary"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{t('services.workers.title')}</h4>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{t('services.workers.subtitle')}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-xs text-muted-foreground">Aktīvs</span>
                      </div>
                      <span className="text-xs text-primary font-medium">→</span>
                    </div>
                  </div>
                  
                  {/* AI Chatbots Service */}
                  <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-8 w-8 rounded-md bg-primary/20 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-sm bg-primary"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{t('services.chatbots.title')}</h4>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{t('services.chatbots.subtitle')}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-xs text-muted-foreground">Aktīvs</span>
                      </div>
                      <span className="text-xs text-primary font-medium">→</span>
                    </div>
                  </div>
                  
                  {/* Process Automation Service */}
                  <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-8 w-8 rounded-md bg-green-500/20 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-sm bg-green-500"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{t('services.automation.title')}</h4>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{t('services.automation.subtitle')}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        <span className="text-xs text-muted-foreground">Izstrādē</span>
                      </div>
                      <span className="text-xs text-green-500 font-medium">→</span>
                    </div>
                  </div>
                  
                  {/* Document Processing Service */}
                  <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-8 w-8 rounded-md bg-purple-500/20 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-sm bg-purple-500"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{t('services.documents.title')}</h4>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{t('services.documents.subtitle')}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-xs text-muted-foreground">Aktīvs</span>
                      </div>
                      <span className="text-xs text-purple-500 font-medium">→</span>
                    </div>
                  </div>
                  
                  {/* Data Intelligence Service */}
                  <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-8 w-8 rounded-md bg-cyan-500/20 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-sm bg-cyan-500"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{t('services.intelligence.title')}</h4>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{t('services.intelligence.subtitle')}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-xs text-muted-foreground">Aktīvs</span>
                      </div>
                      <span className="text-xs text-cyan-500 font-medium">→</span>
                    </div>
                  </div>
                  
                  {/* Custom Solutions Service */}
                  <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-8 w-8 rounded-md bg-orange-500/20 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-sm bg-orange-500"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{t('services.custom.title')}</h4>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{t('services.custom.subtitle')}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-xs text-muted-foreground">Pieejams</span>
                      </div>
                      <span className="text-xs text-orange-500 font-medium">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;