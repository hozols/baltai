
import React from 'react';
import { TrendingUp, DollarSign, Scale, Target, Trophy, Heart } from "lucide-react";
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
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            {t('features.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('features.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-border cosmic-gradient transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
            >
              <div className="p-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <div className="pt-3 border-t border-border/10">
                  <p className="text-muted-foreground text-sm mb-4">{feature.expandedDescription}</p>
                  <div className="flex justify-end">
                    <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                      {t('features.learn_more')}
                    </button>
                  </div>
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
