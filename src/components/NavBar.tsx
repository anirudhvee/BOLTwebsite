import React, { useState, useEffect } from 'react';
import { Bike } from 'lucide-react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 top-6">
      <nav className={`mx-auto max-w-7xl transition-all duration-300 rounded-full ${
        scrolled 
          ? 'bg-black/40 backdrop-blur-lg border border-white/10' 
          : 'bg-black/20 backdrop-blur-sm border border-white/5'
      }`}>
        <div className="mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Bike className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white tracking-wide">BOLT</span>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center">
                {['Home', 'Overview', 'Features', 'Architecture', 'Components', 'Team', 'Demo'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-4 py-2 text-sm text-gray-200 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;