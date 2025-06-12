
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, MessageSquare, Zap, FileText, BarChart3, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "AI Darbinieki",
      subtitle: "Gatavi izmantošanai AI darbinieki, kas nevainojami integrējas jūsu komandā",
      description: "Pielāgoti apmācīti AI darbinieki, kas var veikt specifiskus uzdevumus un darba plūsmas, ar iebūvētām zināšanām un pielāgojamām prasmēm. Sākot no €350.",
      price: "Sākot no €350"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "AI Čatboti",
      subtitle: "Inteliģenti sarunu aģenti 24/7 klientu atbalstam",
      description: "Moderni čatboti, kas darbojas ar jaunāko AI tehnoloģiju, nodrošinot tūlītēju atbalstu un uzlabojot klientu apmierinātību. Sākot no €300.",
      price: "Sākot no €300"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Procesu Automatizācija",
      subtitle: "Optimizējiet darbības ar inteliģento automatizāciju",
      description: "Pilnīgi automatizācijas risinājumi, kas optimizē darba plūsmas, samazina izmaksas un uzlabo efektivitāti. Sākot no €300.",
      price: "Sākot no €300"
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Dokumentu Apstrāde",
      subtitle: "Automatizēta dokumentu ģenerēšana un analīze",
      description: "Inteliģentas sistēmas dokumentu veidošanai, apstrādei un analīzei, samazinot manuālo darbu un kļūdas.",
      price: "Pēc pieprasījuma"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Datu Intelekts",
      subtitle: "Pārvērtiet savus datus rīcībspējīgos ieskatos",
      description: "Moderna datu analītika un AI veidoti ieskati labāku biznesa lēmumu pieņemšanai un iespēju identificēšanai.",
      price: "Pēc pieprasījuma"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Pielāgoti AI Risinājumi",
      subtitle: "Individuāli AI risinājumi unikāliem izaicinājumiem",
      description: "Īpaši izstrādāti AI risinājumi, kas veidoti atbilstoši jūsu biznesa vajadzībām un nozares prasībām.",
      price: "Pēc pieprasījuma"
    }
  ];

  return (
    <section id="services" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Mūsu AI Pakalpojumi
          </h2>
          <p className="text-muted-foreground text-lg">
            Visaptveroši AI risinājumi, kas transformē jūsu biznesa procesus un uzlabo efektivitāti
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 border border-border hover:border-primary/30 transition-all duration-300 cosmic-gradient bg-card h-full flex flex-col"
            >
              <CardHeader className="p-0 mb-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {service.icon}
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
                
                <div className="space-y-4">
                  <div className="text-lg font-semibold text-foreground">
                    {service.price}
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Uzzināt vairāk
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-medium tracking-tighter text-foreground">
              Gatavi sākt?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sazinieties ar mums, lai apspriestu, kā AI var transformēt jūsu biznesu un palīdzēt sasniegt jaunos mērķus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                Sazinaties ar mums
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:bg-muted px-8">
                Bezmaksas konsultācija
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
