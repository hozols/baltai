
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, MessageSquare, Zap, FileText, BarChart3, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const Services = () => {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, visibleItems } = useStaggeredAnimation(6, 150);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  
  const services = [
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: t('services.workers.title'),
      subtitle: t('services.workers.subtitle'),
      description: t('services.workers.description'),
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: t('services.chatbots.title'),
      subtitle: t('services.chatbots.subtitle'),
      description: t('services.chatbots.description'),
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: t('services.automation.title'),
      subtitle: t('services.automation.subtitle'),
      description: t('services.automation.description'),
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: t('services.documents.title'),
      subtitle: t('services.documents.subtitle'),
      description: t('services.documents.description'),
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: t('services.intelligence.title'),
      subtitle: t('services.intelligence.subtitle'),
      description: t('services.intelligence.description'),
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: t('services.custom.title'),
      subtitle: t('services.custom.subtitle'),
      description: t('services.custom.description'),
    }
  ];

  return (
    <section id="services" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div ref={titleRef} className={`text-center space-y-4 max-w-3xl mx-auto scroll-fade-in ${titleVisible ? 'animate-in' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('services.description')}
          </p>
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`p-6 border border-border hover:border-primary/30 transition-all duration-500 cosmic-gradient bg-card h-full flex flex-col hover-lift hover-glow group scroll-fade-in ${visibleItems.has(index) ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="p-0 mb-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <div className="group-hover:animate-pulse">{service.icon}</div>
                </div>
                <CardTitle className="text-xl font-medium tracking-tighter text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground font-medium">
                  {service.subtitle}
                </p>
              </CardHeader>
              
              <CardContent className="p-0 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1">
                  {service.description}
                </p>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
