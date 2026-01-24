import { useEffect, useRef } from 'react';

const AnimatedSVG = ({ className = '' }: { className?: string }) => {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  // Easing function (power1.inOut equivalent)
  const easeInOut = (t: number): number => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  useEffect(() => {
    const path = pathRef.current;
    const svg = svgRef.current;
    
    if (!path || !svg) return;

    const pathLength = path.getTotalLength();
    
    // Set initial state
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;
    svg.style.opacity = '1';

    let progress = 0;
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      
      // 3 second duration for each phase (draw in, then draw out)
      const duration = 3000;
      const cycle = (elapsed % (duration * 2)) / duration;
      
      if (cycle < 1) {
        // Drawing in (0% to 100%)
        progress = easeInOut(cycle);
      } else {
        // Drawing out (100% to 100% complete)
        progress = 1;
      }
      
      path.style.strokeDashoffset = `${pathLength * (1 - progress)}`;
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className={`inline-block ${className}`}>
      <svg
        ref={svgRef}
        id="svg-stage"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-1 -1 103 103"
        fill="none"
        strokeWidth="2.2"
        className="mb-14 w-12 h-12 md:w-10 md:h-10 lg:w-40 lg:h-40 bold overflow-visible opacity-0 inline-block align-middle"
      >
        <defs>
          <linearGradient
            id="grad-1"
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.2" stopColor="rgba(209, 5, 120, 0.83)" />
            <stop offset="0.8" stopColor="rgba(232, 229, 229, 1)" className='dark:bg-white'/>
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          stroke="url(#grad-1)"
          d="M50.5 50.5h50v50s-19.2 1.3-37.2-16.7S56 35.4 35.5 15.5C18.5-1 .5.5.5.5v50h50s25.6-.6 38-18 12-32 12-32h-50v100H.5S.2 80.7 11.8 68.2 40 49.7 50.5 50.5Z"
        />
      </svg>
    </div>
  );
};

export default AnimatedSVG;