
import React, { useEffect, useState } from 'react';

type SketchArrowProps = {
  className?: string;
};

const SketchArrow = ({ className }: SketchArrowProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the animation to let the page render first
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`absolute z-20 pointer-events-none ${className}`}>
      <svg
        width="150"
        height="180"
        viewBox="0 0 150 180"
        fill="none"
        className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Updated path to curve more naturally around elements */}
        <path
          d="M30,20 C40,50 25,80 40,110 C55,140 100,140 120,150"
          stroke="#CBFF4D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="280"
          strokeDashoffset={isVisible ? "0" : "280"}
          className="transition-all duration-1500 ease-out"
          fill="none"
        />
        <path
          d="M105,145 L120,150 L115,130"
          stroke="#CBFF4D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="60"
          strokeDashoffset={isVisible ? "0" : "60"}
          className="transition-all duration-500 ease-out delay-1000"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default SketchArrow;
