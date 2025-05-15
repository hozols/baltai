
import React from 'react';

const BackgroundEffects = () => {
  return (
    <>
      {/* Base cosmic grid */}
      <div className="fixed inset-0 cosmic-grid opacity-20"></div>
      
      {/* Background glow effects */}
      <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[800px] h-[800px] rounded-full">
        <div className="w-full h-full opacity-10 bg-cosmic-accent blur-[200px]"></div>
      </div>
      
      <div className="fixed bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[800px] h-[800px] rounded-full">
        <div className="w-full h-full opacity-5 bg-purple-500 blur-[180px]"></div>
      </div>
      
      <div className="fixed top-1/3 right-1/4 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-5 bg-blue-500 blur-[150px]"></div>
      </div>
      
      {/* Star particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `pulse-slow ${Math.random() * 4 + 3}s infinite`
            }}
          ></div>
        ))}
      </div>
      
      {/* Subtle noise texture overlay */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px'
        }}
      ></div>
    </>
  );
};

export default BackgroundEffects;
