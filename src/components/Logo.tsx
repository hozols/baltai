
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-md bg-cosmic-accent relative overflow-hidden group">
        <div className="h-4 w-4 rounded-sm bg-cosmic-darker absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:scale-75"></div>
        {/* Task completion lines */}
        <div className="h-0.5 w-3 bg-cosmic-darker absolute top-[30%] left-[55%] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
        <div className="h-0.5 w-3 bg-cosmic-darker absolute top-[70%] left-[55%] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
      </div>
      <span className="text-white font-medium text-xl tracking-tighter">Cosmos Tasks</span>
    </div>
  );
};

export default Logo;
