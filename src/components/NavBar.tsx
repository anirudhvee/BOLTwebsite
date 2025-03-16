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
    <div className="fixed w-full z-50 top-6 flex justify-center">
      <nav className={`w-[70%] max-w-4xl transition-all duration-300 rounded-full backdrop-blur-xl shadow-lg border border-white/20 ${
        scrolled 
          ? 'bg-white/10 backdrop-blur-2xl' 
          : 'bg-white/5 backdrop-blur-lg'
      }`}> 
        <div className="px-8">
          <div className="flex items-center justify-between h-14">
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
                    className="px-3 py-2 text-sm text-gray-200 hover:text-white transition-colors duration-200 font-medium"
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