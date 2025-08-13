
import React from 'react';
import { TrendingUp, DollarSign, Scale, Target, Trophy, Heart, ArrowRight } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      title: t('features.efficiency.title'),
      description: t('features.efficiency.description'),
      expandedDescription: t('features.efficiency.expanded'),
      icon: <TrendingUp size={24} className="text-primary" />
    },
    {
      title: t('features.savings.title'),
      description: t('features.savings.description'),
      expandedDescription: t('features.savings.expanded'),
      icon: <DollarSign size={24} className="text-primary" />
    },
    {
      title: t('features.growth.title'),
      description: t('features.growth.description'),
      expandedDescription: t('features.growth.expanded'),
      icon: <Scale size={24} className="text-primary" />
    },
    {
      title: t('features.accuracy.title'),
      description: t('features.accuracy.description'),
      expandedDescription: t('features.accuracy.expanded'),
      icon: <Target size={24} className="text-primary" />
    },
    {
      title: t('features.competitive.title'),
      description: t('features.competitive.description'),
      expandedDescription: t('features.competitive.expanded'),
      icon: <Trophy size={24} className="text-primary" />
    },
    {
      title: t('features.satisfaction.title'),
      description: t('features.satisfaction.description'),
      expandedDescription: t('features.satisfaction.expanded'),
      icon: <Heart size={24} className="text-primary" />
    }
  ];
  
  
  return (
    <section id="features" className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
        <div className="text-center space-y-2 sm:space-y-3 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter leading-tight">
            {t('features.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t('features.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg sm:rounded-xl border border-border cosmic-gradient transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover-lift hover-glow group"
            >
              <div className="p-4 sm:p-6">
                <div className="h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse-glow">
                  <div className="group-hover:animate-pulse scale-75 sm:scale-90 md:scale-100">{feature.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter mb-2 sm:mb-3 leading-tight">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">{feature.description}</p>
                <div className="pt-2 sm:pt-3 border-t border-border/10">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.expandedDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
