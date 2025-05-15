
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
        width="160"
        height="200"
        viewBox="0 0 160 200"
        fill="none"
        className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Updated path to start from header "task" text and go down to the UI */}
        <path
          d="M20,20 C30,60 40,100 60,140 C80,180 110,180 140,180"
          stroke="#CBFF4D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="320"
          strokeDashoffset={isVisible ? "0" : "320"}
          className="transition-all duration-1500 ease-out"
          fill="none"
        />
        <path
          d="M125,175 L140,180 L135,160"
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
