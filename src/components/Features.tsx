
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Task Automation",
      description: "Automate repetitive tasks and workflows to save time and reduce human error.",
      expandedDescription: "Set up custom automation rules based on triggers and actions. Schedule recurring tasks, automate status updates, and create conditional workflows that respond to specific events. Reduce manual data entry and focus on what matters most.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.5355 9.46447L17.5355 6.46447" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.5355 14.5355L17.5355 17.5355" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.46447 14.5355L6.46447 17.5355" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.46447 9.46447L6.46447 6.46447" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Team Collaboration",
      description: "Real-time collaboration with teammates for seamless project management.",
      expandedDescription: "Work together in real-time with team members across the globe. Comment on tasks, share files, and track changes with version history. Get notifications for mentions and task assignments, ensuring everyone stays in the loop.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 20H7C5.89543 20 5 19.1046 5 18V9C5 7.89543 5.89543 7 7 7H17C18.1046 7 19 7.89543 19 9V18C19 19.1046 18.1046 20 17 20Z" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 4H8C6.89543 4 6 4.89543 6 6H18C18 4.89543 17.1046 4 16 4Z" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12L11 14L15 10" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Analytics Dashboard",
      description: "Gain insights into team performance and project progress with visual analytics.",
      expandedDescription: "Visualize team productivity with customizable charts and graphs. Track key metrics like task completion rates, project velocity, and team member performance. Export reports for stakeholders and identify bottlenecks before they impact deadlines.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20V10" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 20V4" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 20V16" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Custom Workflows",
      description: "Create and customize workflows that fit your team's unique processes.",
      expandedDescription: "Design workflows that match exactly how your team works. Create custom status columns, set up approval processes, and build multi-stage workflows with dependencies. Adapt the system to your needs, not the other way around.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 7L7 17" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 17H7V7" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Integrated Calendar",
      description: "Manage deadlines and schedules with our powerful calendar integration.",
      expandedDescription: "Sync tasks with your favorite calendar apps including Google Calendar and Outlook. View deadlines, milestones, and team member availability all in one place. Schedule meetings based on task dependencies and team capacity.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 2V6" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 2V6" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 10H21" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Mobile Access",
      description: "Access your tasks and projects on the go with our responsive mobile app.",
      expandedDescription: "Stay productive even when you're away from your desk with our native mobile apps for iOS and Android. Create tasks, track time, and communicate with your team from anywhere. Offline mode ensures you can work even without an internet connection.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18H12.01" stroke="#CBFF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];
  
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  
  return (
    <section id="features" className="w-full py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
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
                  <div className="h-12 w-12 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
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
