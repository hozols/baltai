import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const PricingTiers = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const tiers = [
    {
      title: t('pricing.starter.title'),
      price: t('pricing.starter.price'),
      period: t('pricing.starter.period'),
      description: t('pricing.starter.description'),
      popular: false,
      features: [
        'AI Čatbots',
        'Dokumentu apstrāde',
        'Pamata automatizācija',
        'E-pasta atbalsts',
        'Mēneša atskaites'
      ]
    },
    {
      title: t('pricing.professional.title'),
      price: t('pricing.professional.price'),
      period: t('pricing.professional.period'),
      description: t('pricing.professional.description'),
      popular: true,
      features: [
        'Visi Sākuma plāna pakalpojumi',
        'AI Darbinieki',
        'Pilna procesu automatizācija',
        'Datu intelekts un analītika',
        'Prioritārs atbalsts',
        'Pielāgoti risinājumi',
        'Nedēļas atskaites'
      ]
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            {t('pricing.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('pricing.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <Card 
              key={index}
              className={`relative p-6 border transition-all duration-300 cosmic-gradient bg-card h-full flex flex-col ${
                tier.popular 
                  ? 'border-primary/40 ring-2 ring-primary/20 scale-105' 
                  : 'border-border hover:border-primary/30'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {t('pricing.popular')}
                  </span>
                </div>
              )}
              
              <CardHeader className="p-0 mb-6 text-center">
                <CardTitle className="text-2xl font-medium tracking-tighter text-foreground mb-2">
                  {tier.title}
                </CardTitle>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-foreground">{tier.price}</div>
                  <div className="text-muted-foreground text-sm">/ {tier.period}</div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {tier.description}
                </p>
              </CardHeader>
              
              <CardContent className="p-0 flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                  onClick={() => navigate('/contact')}
                >
                  {t('pricing.contact')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;