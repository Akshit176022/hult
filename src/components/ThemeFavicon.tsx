import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export const ThemeFavicon = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Find the favicon link element
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    
    // If it doesn't exist, create it
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    
    // Set the appropriate favicon based on the theme
    link.href = theme === 'light' ? '/favicon.png' : '/favicon-white.png';
    
  }, [theme]);

  return null; // This component doesn't render anything
};
