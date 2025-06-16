
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Bot, MessageSquare, Zap, FileText, BarChart3, Lightbulb } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  const { t } = useLanguage();
  
  const features = [
    {
      title: t('features.workers.title'),
      description: t('features.workers.description'),
      expandedDescription: t('features.workers.expanded'),
      icon: <Bot size={24} className="text-primary" />
    },
    {
      title: t('features.chatbots.title'),
      description: t('features.chatbots.description'),
      expandedDescription: t('features.chatbots.expanded'),
      icon: <MessageSquare size={24} className="text-primary" />
    },
    {
      title: t('features.automation.title'),
      description: t('features.automation.description'),
      expandedDescription: t('features.automation.expanded'),
      icon: <Zap size={24} className="text-primary" />
    },
    {
      title: t('features.documents.title'),
      description: t('features.documents.description'),
      expandedDescription: t('features.documents.expanded'),
      icon: <FileText size={24} className="text-primary" />
    },
    {
      title: t('features.intelligence.title'),
      description: t('features.intelligence.description'),
      expandedDescription: t('features.intelligence.expanded'),
      icon: <BarChart3 size={24} className="text-primary" />
    },
    {
      title: t('features.custom.title'),
      description: t('features.custom.description'),
      expandedDescription: t('features.custom.expanded'),
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
            {t('features.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('features.description')}
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
                      {t('features.learn_more')}
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
