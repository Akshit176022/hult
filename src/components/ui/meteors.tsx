import React, { useEffect, useRef } from "react";

// Custom hook to detect dark mode
const useDarkMode = () => {
  const [isDark, setIsDark] = React.useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setIsDark(mediaQuery.matches);
    
    // Set initial value
    setIsDark(mediaQuery.matches);
    
    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isDark;
};

// Enhanced meteors with shooting star effect
export const Meteors = () => {
  const isDark = useDarkMode();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      if (isDark) {
        containerRef.current.classList.remove('light-mode');
      } else {
        containerRef.current.classList.add('light-mode');
      }
    }
  }, [isDark]);
  const meteorConfigs = [
    { left: "10vw", delay: 0, duration: 3, angle: 25 },
    { left: "20vw", delay: 0.5, duration: 3.5, angle: 10 },
    { left: "30vw", delay: 1, duration: 4, angle: -20 },
    { left: "40vw", delay: 1.5, duration: 3.2, angle: -35 },
    { left: "50vw", delay: 2, duration: 3.8, angle: -28 },
    { left: "60vw", delay: 2.5, duration: 3.3, angle: -22 },
    { left: "70vw", delay: 1.2, duration: 3.6, angle: -32 },
    { left: "80vw", delay: 0.8, duration: 3.4, angle: -26 },
    { left: "90vw", delay: 1.7, duration: 3.7, angle: -24 },
    { left: "15vw", delay: 2.2, duration: 3.1, angle: -29 },
    { left: "35vw", delay: 1.9, duration: 3.9, angle: -27 },
    { left: "75vw", delay: 0.3, duration: 2.8, angle: -31 },
  ];

  return (
    <div className="meteors-bg" ref={containerRef}>
      {meteorConfigs.map((config, i) => (
        <div key={i} className={`meteor-wrapper meteor-${i}`}>
          <div className="meteor-head" data-dark={isDark ? 'true' : 'false'} />
        </div>
      ))}
      <style>{`
        .meteors-bg {
          pointer-events: none;
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }
        
        .meteor-wrapper {
          position: absolute;
          top: -150px;
          transform-origin: center;
        }
        
        /* Bright glowing head of the shooting star (at the front) */
        .meteor-head {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          z-index: 2;
          transition: all 0.5s ease;
        }

        /* Dark mode styles */
        .meteors-bg:not(.light-mode) .meteor-head {
          background: #ffffff;
          box-shadow: 
            0 0 6px #ffffff,
            0 0 12px #ff66cc,
            0 0 18px #ff66cc,
            0 0 24px rgba(255, 102, 204, 0.5);
        }

        /* Light mode styles */
        .meteors-bg.light-mode .meteor-head {
          background: #000000 !important;
          box-shadow: 
            0 0 8px #000000,
            0 0 16px rgba(0, 0, 0, 0.8),
            0 0 24px rgba(0, 0, 0, 0.6) !important;
        }

        /* Pulsing animation for better visibility in light mode */
        @keyframes pulse {
          0% { transform: translateX(-50%) scale(1); opacity: 0.9; }
          50% { transform: translateX(-50%) scale(1.3); opacity: 0.7; }
          100% { transform: translateX(-50%) scale(1); opacity: 0.9; }
        }

        .meteors-bg.light-mode .meteor-head {
          animation: pulse 2s infinite;
        }
        
        
        /* Individual meteor positioning and animation */
        .meteor-0 { 
          left: 10vw; 
          animation: shooting-star-0 3s linear infinite;
          animation-delay: 0s;
        }
        .meteor-1 { 
          left: 5vw; 
          animation: shooting-star-1 3.5s linear infinite;
          animation-delay: 0.5s;
        }
        .meteor-2 { 
          left: 30vw; 
          animation: shooting-star-2 4s linear infinite;
          animation-delay: 1s;
        }
        .meteor-3 { 
          left: 40vw; 
          animation: shooting-star-3 3.2s linear infinite;
          animation-delay: 1.5s;
        }
        .meteor-4 { 
          left: 50vw; 
          animation: shooting-star-4 3.8s linear infinite;
          animation-delay: 2s;
        }
        .meteor-5 { 
          left: 60vw; 
          animation: shooting-star-5 3.3s linear infinite;
          animation-delay: 2.5s;
        }
        .meteor-6 { 
          left: 70vw; 
          animation: shooting-star-6 3.6s linear infinite;
          animation-delay: 1.2s;
        }
        .meteor-7 { 
          left: 80vw; 
          animation: shooting-star-7 3.4s linear infinite;
          animation-delay: 0.8s;
        }
        .meteor-8 { 
          left: 90vw; 
          animation: shooting-star-8 3.7s linear infinite;
          animation-delay: 1.7s;
        }
        .meteor-9 { 
          left: 15vw; 
          animation: shooting-star-9 3.1s linear infinite;
          animation-delay: 2.2s;
        }
        .meteor-10 { 
          left: 10vw; 
          animation: shooting-star-10 3.9s linear infinite;
          animation-delay: 1.9s;
        }
        .meteor-11 { 
          left: 95vw; 
          animation: shooting-star-11 2.8s linear infinite;
          animation-delay: 0.3s;
        }
        
        /* Shooting star animations with diagonal movement */
        @keyframes shooting-star-0 {
          0% { 
            top: -150px; 
            left: 10vw;
            opacity: 0;
            transform: rotate(-25deg);
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            top: 120vh; 
            left: calc(10vw + 200px);
            opacity: 0;
            transform: rotate(-25deg);
          }
        }
        
        @keyframes shooting-star-1 {
          0% { 
            top: -150px; 
            left: 20vw;
            opacity: 0;
            transform: rotate(15deg);
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            top: 120vh; 
            left: calc(20vw + 250px);
            opacity: 0;
            transform: rotate(-30deg);
          }
        }
        
        @keyframes shooting-star-2 {
          0% { 
            top: -150px; 
            left: 30vw;
            opacity: 0;
            transform: rotate(-20deg);
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            top: 120vh; 
            left: calc(30vw + 180px);
            opacity: 0;
            transform: rotate(-20deg);
          }
        }
        
        @keyframes shooting-star-3 {
          0% { 
            top: -150px; 
            left: 40vw;
            opacity: 0;
            transform: rotate(-35deg);
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            top: 120vh; 
            left: calc(40vw + 280px);
            opacity: 0;
            transform: rotate(-35deg);
          }
        }
        
        @keyframes shooting-star-4 {
          0% { 
            top: -150px; 
            left: 50vw;
            opacity: 0;
            transform: rotate(-28deg);
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            top: 120vh; 
            left: calc(50vw + 220px);
            opacity: 0;
            transform: rotate(28deg);
          }
        }
        
        @keyframes shooting-star-5 {
          0% { 
            top: -150px; 
            left: 60vw;
            opacity: 0;
            transform: rotate(-22deg);
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            top: 120vh; 
            left: calc(60vw + 190px);
            opacity: 0;
            transform: rotate(22deg);
          }
        }
        
        @keyframes shooting-star-6 {
          0% { 
            top: -150px; 
            left: 70vw;
            opacity: 0;
            transform: rotate(-32deg);
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            top: 120vh; 
            left: calc(70vw + 260px);
            opacity: 0;
            transform: rotate(32deg);
          }
        }
        
        @keyframes shooting-star-7 {
          0% { 
            top: -150px; 
            left: 80vw;
            opacity: 0;
            transform: rotate(-26deg);
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            top: 120vh; 
            left: calc(80vw + 210px);
            opacity: 0;
            transform: rotate(-26deg);
          }
        }
        
        @keyframes shooting-star-8 {
          0% { 
            top: -150px; 
            left: 90vw;
            opacity: 0;
            transform: rotate(-24deg);
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            top: 120vh; 
            left: calc(90vw + 200px);
            opacity: 0;
            transform: rotate(-24deg);
          }
        }
        
        @keyframes shooting-star-9 {
          0% { 
            top: -150px; 
            left: 15vw;
            opacity: 0;
            transform: rotate(-29deg);
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            top: 120vh; 
            left: calc(15vw + 230px);
            opacity: 0;
            transform: rotate(-29deg);
          }
        }
        
        @keyframes shooting-star-10 {
          0% { 
            top: -150px; 
            left: 35vw;
            opacity: 0;
            transform: rotate(-27deg);
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            top: 120vh; 
            left: calc(35vw + 215px);
            opacity: 0;
            transform: rotate(-27deg);
          }
        }
        
        @keyframes shooting-star-11 {
          0% { 
            top: -150px; 
            left: 75vw;
            opacity: 0;
            transform: rotate(-31deg);
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            top: 120vh; 
            left: calc(75vw + 245px);
            opacity: 0;
            transform: rotate(-31deg);
          }
        }
      `}</style>
    </div>
  );
};
