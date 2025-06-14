
import React from 'react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Sākuma",
      price: "€299",
      period: "mēnesī",
      description: "Ideāls maziem uzņēmumiem, kas sāk AI automatizācijas ceļu",
      features: [
        "1 AI darbinieks",
        "Pamata čatbots",
        "Līdz 1000 uzdevumiem mēnesī",
        "E-pasta atbalsts",
        "Pamata analītika"
      ],
      buttonText: "Sākt tagad",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Profesionālais",
      price: "€699",
      period: "mēnesī",
      description: "Augošiem uzņēmumiem ar lielāku automatizācijas vajadzību",
      features: [
        "5 AI darbinieki",
        "Uzlaboti čatboti",
        "Līdz 10,000 uzdevumiem mēnesī",
        "Dokumentu apstrāde",
        "Reāllaika analītika",
        "API piekļuve",
        "Prioritārs atbalsts"
      ],
      buttonText: "14 dienu izmēģinājums",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Uzņēmuma",
      price: "Pēc pieprasījuma",
      description: "Lieliem uzņēmumiem ar sarežģītām automatizācijas vajadzībām",
      features: [
        "Neierobežoti AI darbinieki",
        "Pielāgoti risinājumi",
        "Neierobežoti uzdevumi",
        "Dedicated infrastruktūra",
        "Apmācības un ieviešana",
        "Personīgais menedžeris",
        "24/7 premium atbalsts"
      ],
      buttonText: "Sazināties ar mums",
      buttonVariant: "outline",
      popular: false
    }
  ];
  
  return (
    <section id="pricing" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Caurspīdīgas cenas katram posmam
          </h2>
          <p className="text-muted-foreground text-lg">
            Mērogojiet savu AI automatizāciju ar plāniem, kas aug līdzi jūsu biznesam
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border flex flex-col h-full ${
                plan.popular 
                  ? "border-primary/50 cosmic-glow bg-card" 
                  : "border-border cosmic-gradient bg-card"
              } transition-all duration-300 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                  Populārākais
                </div>
              )}
              
              <div className="mb-auto">
                <h3 className="text-2xl font-medium tracking-tighter mb-1 text-foreground">{plan.name}</h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold tracking-tighter text-foreground">{plan.price}</div>
                  {plan.period && <div className="text-sm text-muted-foreground">{plan.period}</div>}
                </div>
                
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className={
                    plan.buttonVariant === "default" 
                      ? "w-full bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "w-full border-border text-foreground hover:bg-muted"
                  }
                  variant={plan.buttonVariant as "default" | "outline"}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center text-muted-foreground">
          Ir jautājumi? <a href="#" className="text-primary hover:underline">Sazinieties ar mūsu komandu</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
