
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Layers, Grid3x3, ListCheck, BookOpen, Star, LayoutDashboard } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Task Automation",
      description: "Automate repetitive tasks and workflows to save time and reduce human error.",
      expandedDescription: "Set up custom automation rules based on triggers and actions. Schedule recurring tasks, automate status updates, and create conditional workflows that respond to specific events. Reduce manual data entry and focus on what matters most.",
      icon: (
        <Layers size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Team Collaboration",
      description: "Real-time collaboration with teammates for seamless project management.",
      expandedDescription: "Work together in real-time with team members across the globe. Comment on tasks, share files, and track changes with version history. Get notifications for mentions and task assignments, ensuring everyone stays in the loop.",
      icon: (
        <Grid3x3 size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Analytics Dashboard",
      description: "Gain insights into team performance and project progress with visual analytics.",
      expandedDescription: "Visualize team productivity with customizable charts and graphs. Track key metrics like task completion rates, project velocity, and team member performance. Export reports for stakeholders and identify bottlenecks before they impact deadlines.",
      icon: (
        <LayoutDashboard size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Custom Workflows",
      description: "Create and customize workflows that fit your team's unique processes.",
      expandedDescription: "Design workflows that match exactly how your team works. Create custom status columns, set up approval processes, and build multi-stage workflows with dependencies. Adapt the system to your needs, not the other way around.",
      icon: (
        <ListCheck size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Integrated Calendar",
      description: "Manage deadlines and schedules with our powerful calendar integration.",
      expandedDescription: "Sync tasks with your favorite calendar apps including Google Calendar and Outlook. View deadlines, milestones, and team member availability all in one place. Schedule meetings based on task dependencies and team capacity.",
      icon: (
        <Star size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Mobile Access",
      description: "Access your tasks and projects on the go with our responsive mobile app.",
      expandedDescription: "Stay productive even when you're away from your desk with our native mobile apps for iOS and Android. Create tasks, track time, and communicate with your team from anywhere. Offline mode ensures you can work even without an internet connection.",
      icon: (
        <BookOpen size={24} className="text-cosmic-accent" />
      )
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
            Everything your team needs
          </h2>
          <p className="text-cosmic-muted text-lg">
            Powerful features to streamline your workflow and boost productivity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Collapsible
              key={index}
              open={openFeature === index}
              onOpenChange={() => toggleFeature(index)}
              className={`rounded-xl border ${openFeature === index ? 'border-cosmic-light/40' : 'border-cosmic-light/20'} cosmic-gradient transition-all duration-300`}
            >
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-cosmic-muted transition-transform duration-200 ${
                      openFeature === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                <p className="text-cosmic-muted">{feature.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-cosmic-light/10">
                  <p className="text-cosmic-muted">{feature.expandedDescription}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-cosmic-accent hover:text-cosmic-accent/80 text-sm font-medium">
                      Learn more →
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
