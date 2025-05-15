
import React from 'react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 team members",
        "Basic task management",
        "5 boards",
        "1GB storage",
        "Basic integrations"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Pro",
      price: "$12",
      period: "per user/month",
      description: "Ideal for growing teams and businesses",
      features: [
        "Unlimited team members",
        "Advanced task management",
        "Unlimited boards",
        "10GB storage",
        "Advanced integrations",
        "Analytics & reporting",
        "Priority support"
      ],
      buttonText: "Start 14-day trial",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited everything",
        "Custom workflows",
        "Advanced security",
        "API access",
        "White-labeling",
        "Dedicated account manager",
        "24/7 premium support"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false
    }
  ];
  
  return (
    <section id="pricing" className="w-full py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Simple, transparent pricing
          </h2>
          <p className="text-cosmic-muted text-lg">
            Choose the plan that fits your team's needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border ${
                plan.popular 
                  ? "border-cosmic-accent/50 cosmic-glow" 
                  : "border-cosmic-light/20 cosmic-gradient"
              } transition-all duration-300 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cosmic-accent text-cosmic-darker text-sm rounded-full font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-medium tracking-tighter mb-1">{plan.name}</h3>
              
              <div className="mb-4">
                <div className="text-3xl font-bold tracking-tighter">{plan.price}</div>
                {plan.period && <div className="text-sm text-cosmic-muted">{plan.period}</div>}
              </div>
              
              <p className="text-cosmic-muted mb-6">{plan.description}</p>
              
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-cosmic-accent/20 flex items-center justify-center text-cosmic-accent">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className={
                  plan.buttonVariant === "default" 
                    ? "w-full bg-cosmic-accent text-cosmic-darker hover:bg-cosmic-accent/90" 
                    : "w-full border-cosmic-light/20 text-white hover:bg-cosmic-light/10"
                }
                variant={plan.buttonVariant as "default" | "outline"}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center text-cosmic-muted">
          Have questions? <a href="#" className="text-cosmic-accent hover:underline">Contact our sales team</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
