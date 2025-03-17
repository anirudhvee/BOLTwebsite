import React from 'react';
import { MapPin, Bell, Lock, Cpu, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Real-time GPS Tracking",
      description: "GT-U7 GPS module provides precise location data in real-time"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Movement Detection",
      description: "Built-in accelerometer detects unauthorized movement instantly"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Instant Alerts",
      description: "AWS-powered email notifications with immediate GPS coordinates"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure IR Remote",
      description: "Secure IR remote-controlled locking and unlocking system"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "OLED Display",
      description: "Clear 128x128 OLED display showing real-time system status"
    }
  ];

  return (
    <section id="features" className="section-container">
      <h2 className="section-title">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="glass-card p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-blue-500 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;