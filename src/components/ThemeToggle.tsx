import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  // Apply the theme class to the document element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-transform duration-300 hover:rotate-12"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun className="h-6 w-6 text-yellow-400 hover:text-yellow-300 transition-all duration-300 hover:shadow-glow-yellow" />
      ) : (
        <Moon className="h-6 w-6 text-turquoise-600 hover:text-turquoise-500 transition-all duration-300 hover:shadow-glow-blue" />
      )}
    </button>
  );
};

export default ThemeToggle;