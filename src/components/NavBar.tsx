import React, { useState, useEffect } from 'react';
import { Bike, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Overview', 'Features', 'Architecture', 'Components', 'Team', 'Demo'];

  return (
    <div className="fixed w-full z-50 top-6 flex justify-center">
      <nav
        className={`w-[70%] max-w-4xl transition-all duration-300 rounded-full backdrop-blur-xl shadow-lg border border-white/20 ${
          scrolled ? 'bg-white/10 backdrop-blur-2xl' : 'bg-white/5 backdrop-blur-lg'
        }`}
      >
        <div className="px-8">
          <div className="flex items-center justify-between h-14 relative">
            {/* Left brand/logo */}
            <div className="flex items-center space-x-4">
              <Bike className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white tracking-wide">BOLT</span>
            </div>

            {/* Desktop Nav (shows on lg+ screens) */}
            <div className="hidden lg:block">
              <div className="flex items-center">
                {navItems.map((item) => (
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

            {/* Hamburger Icon (shows on < lg screens) */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-200" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-200" />
                )}
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
              <div className="absolute top-14 right-0 mt-2 py-2 w-48 rounded-md shadow-lg bg-white/5 border border-white/20 lg:hidden">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-gray-200 hover:text-white transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)} // Close menu on link click
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
