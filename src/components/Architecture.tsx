import React from 'react';
import { Lock, Bell, Unlock } from 'lucide-react';

const Architecture = () => {
  return (
    <section id="architecture" className="section-container">
      <h2 className="section-title">Architecture</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
            <Lock className="w-8 h-8 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">LOCKED</h3>
            <p className="text-gray-400">Continuous movement monitoring active</p>
          </div>
          
          <div className="glass-card p-6 text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
            <Bell className="w-8 h-8 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">ALERT</h3>
            <p className="text-gray-400">Triggers alerts and sends GPS coordinates</p>
          </div>
          
          <div className="glass-card p-6 text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
            <Unlock className="w-8 h-8 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">UNLOCKED</h3>
            <p className="text-gray-400">Security system temporarily disabled</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;