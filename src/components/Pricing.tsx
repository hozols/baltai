
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Calculator, Zap, Clock, Users, TrendingUp, MessageSquare, Bot, FileText, BarChart3, Lightbulb, Code, Globe, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  
  // Project calculator state
  const [projectType, setProjectType] = useState('ai-automation');
  const [complexity, setComplexity] = useState([3]);
  const [timeline, setTimeline] = useState([4]);
  const [integrations, setIntegrations] = useState<string[]>([]);
  const [customFeatures, setCustomFeatures] = useState<string[]>([]);
  const [teamSize, setTeamSize] = useState([5]);
  
  // Service types with base pricing
  const serviceTypes = {
    'ai-automation': {
      name: 'AI Automatizācija',
      icon: <Bot className="h-6 w-6" />,
      basePrice: 800,
      description: 'Automatizēti AI darbinieki un procesi'
    },
    'chatbots': {
      name: 'AI Čatboti',
      icon: <MessageSquare className="h-6 w-6" />,
      basePrice: 500,
      description: 'Inteliģenti sarunu aģenti'
    },
    'web-development': {
      name: 'Web Izstrāde',
      icon: <Code className="h-6 w-6" />,
      basePrice: 1200,
      description: 'Mājaslapas un web aplikācijas'
    },
    'custom-solution': {
      name: 'Pielāgots Risinājums',
      icon: <Lightbulb className="h-6 w-6" />,
      basePrice: 1500,
      description: 'Unikāli AI risinājumi'
    }
  };
  
  // Calculate project cost based on selections
  const calculateCost = () => {
    let baseCost = serviceTypes[projectType as keyof typeof serviceTypes].basePrice;
    
    // Complexity multiplier (1-5 scale)
    const complexityMultiplier = 1 + (complexity[0] - 1) * 0.3;
    
    // Timeline multiplier (1-8 weeks)
    const timelineMultiplier = 1 + (timeline[0] - 1) * 0.1;
    
    // Integrations cost
    const integrationCost = integrations.length * 150;
    
    // Custom features cost
    const featureCost = customFeatures.length * 200;
    
    // Team size impact
    const teamMultiplier = 1 + (teamSize[0] - 1) * 0.05;
    
    const totalCost = Math.round(
      (baseCost * complexityMultiplier * timelineMultiplier * teamMultiplier) + 
      integrationCost + featureCost
    );
    
    return totalCost;
  };
  
  const estimatedCost = calculateCost();
  
  // Available integrations and features
  const availableIntegrations = [
    'Google Workspace', 'Slack', 'Zapier', 'Airtable', 'Notion', 
    'Salesforce', 'HubSpot', 'Shopify', 'WordPress', 'Custom API'
  ];
  
  const availableFeatures = [
    'Daudzvalodu atbalsts', 'Reāllaika analītika', 'Mācīšanās no datiem',
    'Mērogojama arhitektūra', 'Mobilā aplikācija', 'API dokumentācija',
    'Apmācības materiāli', '24/7 atbalsts', 'Backup sistēma', 'SSL drošība'
  ];

  return (
    <section id="pricing" className="w-full py-20 pb-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calculator className="h-4 w-4" />
            Projektu Kalkulators
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Cenas atkarībā no projekta
          </h2>
          <p className="text-muted-foreground text-lg">
            Aprēķiniet savas idejas izmaksas, izmantojot mūsu interaktīvo kalkulatoru
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Project Calculator */}
          <div className="xl:col-span-2">
            <Card className="p-4 sm:p-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Calculator className="h-5 w-5 text-primary" />
                  Projektu Konfigurācija
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-0">
                {/* Project Type Selection */}
                <div className="space-y-3">
                  <Label>Projekta veids</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(serviceTypes).map(([key, service]) => (
                      <div
                        key={key}
                        className={`p-3 sm:p-4 border rounded-lg cursor-pointer transition-all ${
                          projectType === key
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/30'
                        }`}
                        onClick={() => setProjectType(key)}
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="text-primary flex-shrink-0">{service.icon}</div>
                          <div className="min-w-0 flex-1">
                            <div className="font-medium text-sm sm:text-base truncate">{service.name}</div>
                            <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{service.description}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Complexity Slider */}
                <div className="space-y-2 sm:space-y-3">
                  <Label className="text-sm sm:text-base">Projekta sarežģītība: {complexity[0]}/5</Label>
                  <Slider
                    value={complexity}
                    onValueChange={setComplexity}
                    max={5}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Vienkāršs</span>
                    <span>Sarežģīts</span>
                  </div>
                </div>

                {/* Timeline Slider */}
                <div className="space-y-2 sm:space-y-3">
                  <Label className="text-sm sm:text-base">Laika ietvars: {timeline[0]} nedēļas</Label>
                  <Slider
                    value={timeline}
                    onValueChange={setTimeline}
                    max={8}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 nedēļa</span>
                    <span>8 nedēļas</span>
                  </div>
                </div>

                {/* Team Size Slider */}
                <div className="space-y-2 sm:space-y-3">
                  <Label className="text-sm sm:text-base">Komandas lielums: {teamSize[0]} cilvēki</Label>
                  <Slider
                    value={teamSize}
                    onValueChange={setTeamSize}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Integrations */}
                <div className="space-y-3">
                  <Label className="text-sm sm:text-base">Integrācijas</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableIntegrations.map((integration) => (
                      <div key={integration} className="flex items-center space-x-2">
                        <Checkbox
                          id={integration}
                          checked={integrations.includes(integration)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setIntegrations([...integrations, integration]);
                            } else {
                              setIntegrations(integrations.filter(i => i !== integration));
                            }
                          }}
                        />
                        <Label htmlFor={integration} className="text-xs sm:text-sm leading-tight">{integration}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Custom Features */}
                <div className="space-y-3">
                  <Label className="text-sm sm:text-base">Papildu funkcijas</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableFeatures.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox
                          id={feature}
                          checked={customFeatures.includes(feature)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setCustomFeatures([...customFeatures, feature]);
                            } else {
                              setCustomFeatures(customFeatures.filter(f => f !== feature));
                            }
                          }}
                        />
                        <Label htmlFor={feature} className="text-xs sm:text-sm leading-tight">{feature}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cost Estimate */}
          <div className="xl:col-span-1">
            <Card className="p-4 sm:p-6 h-fit xl:sticky xl:top-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Zap className="h-5 w-5 text-primary" />
                  Izmaksu Aprēķins
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-0">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary">€{estimatedCost.toLocaleString()}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">aptuvenās projekta izmaksas</div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Bāzes cena:</span>
                    <span>€{serviceTypes[projectType as keyof typeof serviceTypes].basePrice}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Sarežģītība:</span>
                    <span>+{Math.round((complexity[0] - 1) * 30)}%</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Laika ietvars:</span>
                    <span>+{Math.round((timeline[0] - 1) * 10)}%</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Integrācijas:</span>
                    <span>€{integrations.length * 150}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Funkcijas:</span>
                    <span>€{customFeatures.length * 200}</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => navigate('/contact')}
                  >
                    <span className="mr-2">Pieteikties konsultācijai</span>
                    <Zap className="h-4 w-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    *Cenas ir orientējošas un var mainīties atkarībā no projekta specifikas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-medium tracking-tighter text-foreground">
            Kāpēc izvēlēties mūs?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium">Ātri un efektīvi</h4>
              <p className="text-sm text-muted-foreground">Projekti tiek izpildīti laikā un budžetā</p>
            </div>
            <div className="text-center space-y-3">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium">Pieredzējusi komanda</h4>
              <p className="text-sm text-muted-foreground">5+ gadu pieredze AI un web izstrādē</p>
            </div>
            <div className="text-center space-y-3">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium">Rezultātu orientēts</h4>
              <p className="text-sm text-muted-foreground">Fokusējamies uz biznesa vērtību</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
