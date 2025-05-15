
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
        width="120"
        height="150"
        viewBox="0 0 120 150"
        fill="none"
        className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <path
          d="M30,10 C50,40 60,70 55,110 C53,125 60,135 90,140"
          stroke="#CBFF4D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="220"
          strokeDashoffset={isVisible ? "0" : "220"}
          className="transition-all duration-1500 ease-out"
          fill="none"
        />
        <path
          d="M75,130 L90,140 L95,120"
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
