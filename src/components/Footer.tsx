import React from 'react';
import { Bike } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Logo and Bike */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Bike className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
              BOLT
            </span>
          </div>

          {/* Right side - Navigation */}
          <div className="flex flex-wrap justify-center space-x-6 text-gray-400">
            <a href="#overview" className="hover:text-blue-400 transition-colors duration-200">
              Overview
            </a>
            <a href="#features" className="hover:text-blue-400 transition-colors duration-200">
              Features
            </a>
            <a href="#architecture" className="hover:text-blue-400 transition-colors duration-200">
              Architecture
            </a>
            <a href="#components" className="hover:text-blue-400 transition-colors duration-200">
              Components
            </a>
            <a href="#team" className="hover:text-blue-400 transition-colors duration-200">
              Team
            </a>
            <a href="#demo" className="hover:text-blue-400 transition-colors duration-200">
              Demo
            </a>
          </div>
        </div>

        {/* Bottom - Credits */}
        <div className="mt-8 text-center space-y-2">
          <div className="text-sm text-gray-500">
            Made with ❤️ by{" "}
            <a href="#team" className="hover:text-blue-400 transition-colors duration-200">
              Manasvini Narayanan and Anirudh Venkatachalam
            </a>
            {" "}for EEC 172: Embedded Systems Final Project
          </div>
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} BOLT. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 