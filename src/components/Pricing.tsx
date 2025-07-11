
import React from 'react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const services = [
    {
      title: "AI Čatboti",
      price: "€300",
      period: "sākot no",
      description: "Inteliģenti sarunu aģenti 24/7 klientu atbalstam un pārdošanai",
      features: [
        "Daudzvalodu atbalsts",
        "Integrācija ar esoša\u0161ajām sistēmām",
        "Reāllaika mācīšanās",
        "Analītika un pārskati",
        "Pielāgojams dizains"
      ],
      icon: "💬",
      highlight: false,
      buttonText: "Sākt ar čatbotu"
    },
    {
      title: "AI Aģenti",
      price: "€500",
      period: "sākot no",
      description: "Automatizēti AI darbinieki specifiskām darba plūsmām",
      features: [
        "Procesu automatizācija",
        "Dokumentu apstrāde",
        "Datu analīze",
        "Uzdevumu plānošana",
        "API integrācijas"
      ],
      icon: "🤖",
      highlight: true,
      buttonText: "Izveidot aģentu"
    },
    {
      title: "Pielāgoti Risinājumi",
      price: "Pēc pieprasījuma",
      period: "",
      description: "Pilnīgi pielāgoti AI risinājumi sarežģītām vajadzībām",
      features: [
        "Pilna sistēmas integrācija",
        "Apmācības un ieviešana",
        "Dedicated atbalsts",
        "Skalējamas arhitektūras",
        "Personīgais menedžeris"
      ],
      icon: "⚡",
      highlight: false,
      buttonText: "Apspriest projektu"
    }
  ];
  
  return (
    <section id="pricing" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            AI risinājumi katram budžetam
          </h2>
          <p className="text-muted-foreground text-lg">
            Sāciet savu AI ceļojumu ar cenām, kas pieejamas katram uzņēmumam
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`p-8 rounded-xl border flex flex-col h-full ${
                service.highlight 
                  ? "border-primary/50 cosmic-glow bg-card" 
                  : "border-border cosmic-gradient bg-card"
              } transition-all duration-300 relative hover:border-primary/30 hover:shadow-lg`}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                  Populārākais
                </div>
              )}
              
              <div className="mb-auto">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-medium tracking-tighter mb-3 text-foreground">{service.title}</h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold tracking-tighter text-foreground">{service.price}</div>
                  {service.period && <div className="text-sm text-muted-foreground">{service.period}</div>}
                </div>
                
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm text-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  {service.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center text-muted-foreground">
          Vēlaties redzēt darbībā? <a href="#contact" className="text-primary hover:underline">Rezervējiet bezmaksas konsultāciju</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
