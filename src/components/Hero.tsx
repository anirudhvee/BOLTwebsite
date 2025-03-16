import React, { forwardRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = forwardRef<HTMLDivElement>((props, ref) => {
  // State to track mouse position as percentages of the viewport
  const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Convert mouse position in pixels to percentage of the window size
    const xPercent = (e.clientX / window.innerWidth) * 100;
    const yPercent = (e.clientY / window.innerHeight) * 100;
    setMousePos({ x: `${xPercent}%`, y: `${yPercent}%` });
  };

  return (
    <div
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      // Attach the onMouseMove to update our glow position
      onMouseMove={handleMouseMove}
      style={{
        // Dynamically place a blue radial glow at the mouse's position, more transparent alpha
        background: `radial-gradient(circle at ${mousePos.x} ${mousePos.y}, rgba(59, 130, 246, 0.1), transparent 50%)`
      }}
    >
      <div className="absolute inset-0 bg-[#0A0A0A]" style={{ zIndex: -1 }} />

      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
          BOLT
          <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-gray-400 font-light">
            Bike Overwatch & Location Tracker
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-400 mb-4">
          Seamless security, real-time tracking, instant alerts
        </p>

        <p className="text-lg text-gray-500 mb-12">
          EEC 172: Embedded Systems Final Project
          <br />
          by{' '}
          <a
            href="#team"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Manasvini Narayanan and Anirudh Venkatachalam
          </a>
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="#overview"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200"
          >
            Learn More
          </a>
          <a
            href="#demo"
            className="px-8 py-3 border border-blue-600 rounded-lg font-medium hover:bg-blue-600/10 transition-colors duration-200"
          >
            View Demo
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';
export default Hero;
