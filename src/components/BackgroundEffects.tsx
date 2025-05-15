
import React from 'react';

const BackgroundEffects = () => {
  return (
    <>
      {/* Cosmic Grid */}
      <div className="cosmic-grid fixed inset-0 w-full h-full opacity-20 pointer-events-none" />
      
      {/* Glow Effects */}
      <div className="fixed top-1/3 left-1/4 w-96 h-96 bg-cosmic-accent/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Noise Texture - Applied via CSS for better performance */}
      <div className="fixed inset-0 w-full h-full bg-noise opacity-5 pointer-events-none" />
    </>
  );
};

export default BackgroundEffects;
