import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = "", size = "md" }) {
  const { isDark, toggleTheme } = useTheme();

  const sizeConfig = {
    sm: {
      button: "w-12 h-6 p-0.5",
      knob: "w-4.5 h-4.5",
      translate: "translate-x-6",
      moonIcon: 10,
      sunIcon: 12,
    },
    md: {
      button: "w-14 h-7 p-1",
      knob: "w-5 h-5",
      translate: "translate-x-7",
      moonIcon: 12,
      sunIcon: 14,
    },
    lg: {
      button: "w-20 h-10 p-1",
      knob: "w-8 h-8",
      translate: "translate-x-10",
      moonIcon: 16,
      sunIcon: 18,
    },
  };

  const currentSize = sizeConfig[size] || sizeConfig.md;

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative ${currentSize.button} rounded-full transition-all duration-500 ease-in-out flex items-center shadow-lg border-2 cursor-pointer select-none focus:outline-none ${
        isDark
          ? 'bg-slate-900 border-slate-700 shadow-blue-900/20'
          : 'bg-blue-100 border-blue-200 shadow-blue-500/10'
      } ${className}`}
      aria-label="Toggle theme"
    >
      {/* Background elements */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        {/* Stars for dark mode */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute top-1.5 left-2.5 w-0.5 h-0.5 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-4 left-4 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-2 left-6 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-500"></div>
        </div>
        {/* Clouds for light mode */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            !isDark ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute top-3.5 left-5 w-4 h-1.5 bg-white/60 rounded-full blur-[1px]"></div>
          <div className="absolute top-2 left-2 w-3 h-1 bg-white/40 rounded-full blur-[0.5px]"></div>
        </div>
      </div>

      {/* The Knob */}
      <div
        className={`flex items-center justify-center ${currentSize.knob} rounded-full shadow-md z-10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${
          isDark
            ? `${currentSize.translate} bg-slate-800 rotate-[360deg]`
            : 'translate-x-0 bg-amber-400 rotate-0'
        }`}
      >
        {isDark ? (
          <Moon size={currentSize.moonIcon} className="text-yellow-200 animate-cb-float" />
        ) : (
          <Sun size={currentSize.sunIcon} className="text-amber-900 animate-cb-spin-slow" />
        )}
      </div>
    </button>
  );
}
