import React from 'react';
import { Cpu, MapPin, Activity, Monitor, Radio, Bug } from 'lucide-react';

const Components = () => {
  const components = [
    {
      icon: <Cpu className="w-6 h-6 text-blue-500 mx-auto" />,
      name: "CC3200 LaunchPad",
      description: "Core microcontroller unit",
      price: "$55.00",
      link: "https://www.ti.com/tool/CC3200-LAUNCHXL"
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-500 mx-auto" />,
      name: "GPS Module (NEO-6M)",
      description: "Precise location tracking",
      price: "$18.99",
      link: "https://www.amazon.com/Navigation-Positioning-Microcontroller-Compatible-Sensitivity/dp/B0B31NRSD2/ref=sr_1_3"
    },
    {
      icon: <Activity className="w-6 h-6 text-orange-500 mx-auto" />,
      name: "Bosch Accelerometer",
      description: "Movement detection sensor",
      price: "In Built within the CC3200 LaunchPad",
      link: "https://www.ti.com/tool/CC3200-LAUNCHXL"
    },
    {
      icon: <Monitor className="w-6 h-6 text-purple-500 mx-auto" />,
      name: "Adafruit 128x128 OLED Display",
      description: "Real-time status display",
      price: "$39.95",
      link: "https://www.adafruit.com/product/1431"
    },
    {
      icon: <Radio className="w-6 h-6 text-red-500 mx-auto" />,
      name: "AT&T Universal IR Remote",
      description: "Secure control interface",
      price: "$33.00",
      link: "https://www.amazon.com/Generic-Replacement-C1-517609733288-UG-R31111-Compatible/dp/B01M2D3946"
    },
    {
      icon: <Bug className="w-6 h-6 text-gray-500 mx-auto" />,
      name: "IR Receiver",
      description: "Detects IR signals from remote for authentication",
      price: "$7.99",
      link: "https://www.amazon.com/TSOP4838-Receiver-FMHXG-Controlled-Electronic/dp/B0BR3KC9CZ"
    }
  ];

  return (
    <section id="components" className="section-container">
      <h2 className="section-title">Components</h2>

      {/* Clickable Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {components.map((component, index) => (
          <a
            key={index}
            href={component.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl block"
          >
            <div className="text-blue-500 mb-4 flex justify-center">
              {component.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              {component.name}
            </h3>
            <p className="text-gray-400 text-center">
              {component.description}
            </p>
            <p className="text-sm text-gray-400 text-center mt-2">
              {component.name === "Bosch Accelerometer"
                ? component.price
                : `Price: ${component.price}`}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Components;
