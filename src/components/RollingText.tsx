import React, { useState } from 'react';

export const RollingText = ({ 
  text, 
  className = '',
  fontSize = 'text-5xl',
  hoverColor = 'text-yellow-600',
  textColor = 'text-gray-900'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const createLetterSpans = (text, colorClass) => {
    return text.split('').map((letter, index) => (
      <span
        key={index}
        className={`inline-block transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${colorClass}`}
        style={{
          transitionDelay: `${index * 15}ms`,
          transform: isHovered ? 'translateY(-100%)' : 'translateY(0)'
        }}
      >
        {letter.trim() === '' ? '\u00A0' : letter}
      </span>
    ));
  };

  return (
    <span
      className={`inline-flex font-serif leading-[1.5] tracking-[0.1em] overflow-hidden relative whitespace-nowrap ${fontSize} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="flex">
        {createLetterSpans(text, textColor)}
      </span>
      <span className="flex absolute top-full left-0">
        {createLetterSpans(text, hoverColor)}
      </span>
    </span>
  );
};