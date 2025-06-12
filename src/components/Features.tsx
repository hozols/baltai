
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Bot, MessageSquare, Zap, FileText, BarChart3, Lightbulb } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "AI Darbinieki",
      description: "Automatizēti AI darbinieki, kas strādā 24/7 un veic uzdevumus bez cilvēka iejaukšanās.",
      expandedDescription: "Izveidojiet pielāgotus AI darbiniekus, kas spēj veikt sarežģītus uzdevumus. No klientu apkalpošanas līdz datu analīzei - mūsu AI darbinieki ir apmācīti strādāt ar jūsu specifiskajām vajadzībām un procesiem.",
      icon: <Bot size={24} className="text-primary" />
    },
    {
      title: "Inteliģenti Čatboti",
      description: "Uzlabojiet klientu apkalpošanu ar AI čatbotiem, kas saprot kontekstu un nodrošina precīzas atbildes.",
      expandedDescription: "Mūsu čatboti izmanto jaunākās dabiskās valodas apstrādes tehnoloģijas, lai nodrošinātu personalizētu un kontekstuālu komunikāciju ar jūsu klientiem. Integrējas ar jūsu esošajām sistēmām un mācās no katras sarunas.",
      icon: <MessageSquare size={24} className="text-primary" />
    },
    {
      title: "Procesu Automatizācija",
      description: "Automatizējiet atkārtojošos uzdevumus un optimizējiet darba plūsmas ar AI tehnoloģijām.",
      expandedDescription: "Identificējiet un automatizējiet biznesa procesus, kas aizņem daudz laika. Mūsu AI risinājumi var apstrādāt dokumentus, izveidot atskaites, pārvaldīt e-pasta sarakstus un daudz ko citu bez cilvēka iejaukšanās.",
      icon: <Zap size={24} className="text-primary" />
    },
    {
      title: "Dokumentu Apstrāde",
      description: "Automatizēta dokumentu ģenerēšana, analīze un klasifikācija ar AI tehnoloģijām.",
      expandedDescription: "Apstrādājiet tūkstošiem dokumentu sekundēs. Mūsu AI spēj lasīt, analizēt, klasificēt un ģenerēt dokumentus dažādos formātos, ietaupot simtiem darba stundu.",
      icon: <FileText size={24} className="text-primary" />
    },
    {
      title: "Datu Intelekts",
      description: "Pārvērtiet savus datus rīcībspējīgos ieskatos ar AI analītiku un prognozēšanu.",
      expandedDescription: "Atklājiet slēptās tendences savos datos. Mūsu AI analītikas rīki nodrošina dziļus ieskatus, prognozes un rekomendācijas, kas palīdz pieņemt labākus biznesa lēmumus.",
      icon: <BarChart3 size={24} className="text-primary" />
    },
    {
      title: "Pielāgoti Risinājumi",
      description: "Individuāli AI risinājumi, kas radīti specifiskām jūsu biznesa vajadzībām.",
      expandedDescription: "Katrs bizness ir unikāls. Mēs izveidojam pielāgotus AI risinājumus, kas pilnībā atbilst jūsu specifiskajām prasībām un integrējas ar esošajām sistēmām.",
      icon: <Lightbulb size={24} className="text-primary" />
    }
  ];
  
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  
  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Viss, kas nepieciešams jūsu biznesam
          </h2>
          <p className="text-muted-foreground text-lg">
            Visaptveroši AI risinājumi, kas optimizē jūsu biznesa procesus un veicina izaugsmi
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Collapsible
              key={index}
              open={openFeature === index}
              onOpenChange={() => toggleFeature(index)}
              className={`rounded-xl border ${openFeature === index ? 'border-primary/40' : 'border-border'} cosmic-gradient transition-all duration-300`}
            >
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                      openFeature === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-border/10">
                  <p className="text-muted-foreground">{feature.expandedDescription}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">
                      Uzzināt vairāk →
                    </button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
