
import React from 'react';
import { Heart, Star, Award, ThumbsUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Cosmos Tasks transformed our team's productivity. We're completing projects 30% faster with half the meetings.",
      author: "Sarah Johnson",
      position: "Product Manager at Codewave",
      avatar: "bg-cosmic-light/30"
    },
    {
      quote: "The intuitive interface and powerful automation features have made task management enjoyable rather than a chore.",
      author: "Michael Chen",
      position: "Lead Designer at Artistry",
      avatar: "bg-cosmic-light/20"
    },
    {
      quote: "As a remote team, we needed a solution that kept everyone aligned. This platform delivered beyond our expectations.",
      author: "Leila Rodriguez",
      position: "Operations Director at RemoteForce",
      avatar: "bg-cosmic-light/40"
    }
  ];
  
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-cosmic-darker relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      {/* Decorative lime green art elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left hearts */}
        <Heart className="absolute top-10 left-[5%] text-cosmic-accent opacity-15 w-12 h-12" />
        <Heart className="absolute top-32 left-[10%] text-cosmic-accent opacity-10 w-8 h-8" />
        
        {/* Top right stars */}
        <Star className="absolute top-16 right-[8%] text-cosmic-accent opacity-15 w-16 h-16" />
        <Star className="absolute top-40 right-[15%] text-cosmic-accent opacity-10 w-10 h-10" />
        
        {/* Bottom decorations */}
        <Award className="absolute bottom-10 left-[12%] text-cosmic-accent opacity-15 w-14 h-14" />
        <ThumbsUp className="absolute bottom-24 right-[10%] text-cosmic-accent opacity-15 w-12 h-12" />
        
        {/* Middle decorations */}
        <Star className="absolute top-1/2 left-[5%] text-cosmic-accent opacity-10 w-9 h-9" />
        <Heart className="absolute top-1/3 right-[7%] text-cosmic-accent opacity-10 w-7 h-7" />
      </div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Loved by teams worldwide
          </h2>
          <p className="text-cosmic-muted text-lg">
            See what our customers have to say about their experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-cosmic-light/10 bg-cosmic-dark/80 backdrop-blur-sm hover:border-cosmic-light/20 transition-all duration-300"
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-cosmic-accent inline-block mr-1">★</span>
                ))}
              </div>
              <p className="text-lg mb-8 text-white/90 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full ${testimonial.avatar}`}></div>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-cosmic-muted">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
