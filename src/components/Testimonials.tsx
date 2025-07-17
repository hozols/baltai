
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
      quote: "Working with Maris from Sula Labs was a pleasure. He's not only a knowledgable professional, but more importantly great to communicate with, so I felt part of the project and knew what was happening at each stage. Enjoyed the creativity of coming up with solutions and drive to make them work. Top automtion specialist I can wholeheartedly recommend",
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
    <section className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Uzticas uzņēmumi visā Latvijā
          </h2>
          <p className="text-muted-foreground text-lg">
            Redziet, kā mūsu AI risinājumi transformē biznesa procesus uzņēmumiem
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-border/60 transition-all duration-300"
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary inline-block mr-1">★</span>
                ))}
              </div>
              <p className="text-lg mb-8 text-foreground/90 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                {testimonial.avatar.startsWith('/') ? (
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover bg-muted"
                  />
                ) : (
                  <div className={`h-12 w-12 rounded-full ${testimonial.avatar} bg-muted`}></div>
                )}
                <div>
                  <h4 className="font-medium text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
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
