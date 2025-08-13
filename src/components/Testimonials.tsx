
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Pasūtījām datu analīzes risinājumu publiskajiem iepirkumiem saules paneļu nozarē, un šis risinājums mums ļoti palīdzēja tāmejot dažādus objektus un prognozējot konkurentu cenu piedāvājumus.",
      author: "Dāvids Krastiņš",
      position: "Direktors, BN Darbi",
      avatar: "/bndarbi.png"
    },
    {
      quote: "Working with Maris from automatizacijas.lv was a pleasure. He's not only a knowledgable professional, but more importantly great to communicate with, so I felt part of the project and knew what was happening at each stage. Enjoyed the creativity of coming up with solutions and drive to make them work. Top automtion specialist I can wholeheartedly recommend",
      author: "Filip Łysikowski",
      position: "signingclients.com",
      avatar: "/filip.png"
    },
    {
      quote: "Dokumentu apstrāde, kas agrāk aizņēma stundas, tagad tiek pabeigti ievērojami ātrāk.",
      author: "Juris Ozols",
      position: "Vadītājs, Dalton Nekustamie Īpašumi",
      avatar: "bg-primary/40"
    }
  ];
  
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-card relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-foreground leading-tight">
            Uzticas uzņēmumi visā Latvijā
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Redziet, kā mūsu AI risinājumi transformē biznesa procesus uzņēmumiem
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-4 sm:p-6 rounded-lg sm:rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-border/60 transition-all duration-300"
            >
              <div className="mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary inline-block mr-1 text-lg sm:text-xl">★</span>
                ))}
              </div>
              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-foreground/90 italic leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3 sm:gap-4">
                {testimonial.avatar.startsWith('/') ? (
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="h-10 sm:h-12 w-10 sm:w-12 rounded-full object-cover bg-muted"
                  />
                ) : (
                  <div className={`h-10 sm:h-12 w-10 sm:w-12 rounded-full ${testimonial.avatar} bg-muted`}></div>
                )}
                <div>
                  <h4 className="text-sm sm:text-base font-medium text-foreground leading-tight">{testimonial.author}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-tight">{testimonial.position}</p>
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
