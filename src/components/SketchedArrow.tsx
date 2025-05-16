
import React, { useEffect, useState } from 'react';

interface SketchedArrowProps {
  className?: string;
}

const SketchedArrow: React.FC<SketchedArrowProps> = ({ className }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Start animation after a short delay
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`absolute z-20 pointer-events-none ${className}`}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 800 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M200,100 C300,120 350,130 380,220 C410,310 480,330 550,340 C620,350 650,390 620,450 C590,510 520,520 460,490"
          stroke="rgba(203, 255, 77, 0.8)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1400"
          strokeDashoffset={isAnimating ? "0" : "1400"}
          fill="none"
          style={{
            transition: "stroke-dashoffset 2s ease-in-out",
            filter: "drop-shadow(0 0 6px rgba(203, 255, 77, 0.6))"
          }}
        />
        
        {/* Arrow head */}
        <path
          d="M460,490 L440,460 L430,500 L470,490 Z"
          fill="rgba(203, 255, 77, 0.8)"
          opacity={isAnimating ? "1" : "0"}
          style={{
            transition: "opacity 0.5s ease-in-out 2s",
            filter: "drop-shadow(0 0 4px rgba(203, 255, 77, 0.6))"
          }}
        />
      </svg>
    </div>
  );
};

export default SketchedArrow;
