import React from 'react';
import { Cpu, MapPin, Activity, Monitor, Radio } from 'lucide-react';

const Components = () => {
  const components = [
    {
      icon: <Cpu />,
      name: "CC3200 LaunchPad",
      description: "Core microcontroller unit"
    },
    {
      icon: <MapPin />,
      name: "GT-U7 GPS Module",
      description: "Precise location tracking"
    },
    {
      icon: <Activity />,
      name: "Bosch Accelerometer",
      description: "Movement detection sensor"
    },
    {
      icon: <Monitor />,
      name: "128x128 OLED Display",
      description: "Real-time status display"
    },
    {
      icon: <Radio />,
      name: "AT&T Universal IR Remote",
      description: "Secure control interface"
    }
  ];

  return (
    <section id="components" className="section-container">
      <h2 className="section-title">Components</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {components.map((component, index) => (
          <div key={index} className="glass-card p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-blue-500 mb-4">{component.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{component.name}</h3>
            <p className="text-gray-400">{component.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Components;