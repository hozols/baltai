
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-md bg-cosmic-accent flex items-center justify-center">
        <div className="h-4 w-4 rounded-sm bg-cosmic-dark"></div>
      </div>
      <span className="text-white font-medium text-xl tracking-tighter">ULOO</span>
    </div>
  );
};

export default Logo;
