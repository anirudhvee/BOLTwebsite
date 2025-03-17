import React, { useState } from "react";
import { Bell, Cpu, Map, Wifi, Bug, Eye } from "lucide-react";

const modules = [
  {
    title: "CC3200 LaunchPad",
    icon: <Cpu className="w-6 h-6 text-blue-500 mx-auto" />,
    description:
      "Central processor handling motion detection, GPS tracking, WiFi communication, and notifications.",
    detailedDescription:
      "The CC3200 LaunchPad serves as the central processor that manages all peripheral communications. It interfaces with the accelerometer via I2C for motion detection, the GT-U7 GPS module via UART1 for precise location tracking, and the OLED display via SPI for real-time status updates. Additionally, it handles secure HTTP requests to AWS SNS for sending email alerts and decodes IR signals through GPIO interrupts.",
  },
  {
    title: "Motion Detection Module",
    icon: <Eye className="w-6 h-6 text-green-500 mx-auto" />,
    description:
      "Bosch in-built accelerometer for detecting movement when locked.",
    detailedDescription:
      "The motion detection module leverages an in-built Bosch accelerometer connected via I2C (SCL and SDA pins). It continuously monitors acceleration values to detect unauthorized movement while the bike is in the LOCKED state. Calibration of motion thresholds minimizes false triggers due to environmental vibrations, ensuring alerts are only triggered by significant movements.",
  },
  {
    title: "GPS Tracking Module",
    icon: <Map className="w-6 h-6 text-yellow-500 mx-auto" />,
    description:
      "GT-U7 NEO-6M GPS Module: Captures real-time location data.",
    detailedDescription:
      "This module uses the GT-U7 NEO-6M GPS module, which communicates via UART1. It continuously outputs NMEA sentences—especially the $GPRMC sentence—to extract latitude, longitude, speed, and timestamp information. This precise real-time location data is then securely transmitted through HTTP POST requests to AWS SNS for immediate alert notifications.",
  },
  {
    title: "User Interface Module",
    icon: <Bell className="w-6 h-6 text-red-500 mx-auto" />,
    description:
      "Includes OLED display, IR receiver, and remote for input.",
    detailedDescription:
      "The user interface combines a 128x128 OLED display with an IR receiver and a remote control. The OLED, connected via SPI (using CS, DC, MOSI, and CLK pins), displays detailed system status for each state. The IR receiver decodes signals from an AT&T universal remote, enabling seamless transitions between states (Locked, Unlocked, Alert) through predefined commands.",
  },
  {
    title: "Network Communication Module",
    icon: <Wifi className="w-6 h-6 text-purple-500 mx-auto" />,
    description:
      "Wi-Fi and HTTP requests to AWS SNS for email notifications.",
    detailedDescription:
      "This module leverages the built-in Wi-Fi capabilities of the CC3200 to establish secure connections with AWS IoT services. It transmits real-time GPS data via HTTP POST requests, ensuring all communications are protected with TLS encryption. This reliable network connectivity is crucial for delivering prompt email alerts to the bike owner upon detecting unauthorized movement.",
  },
  {
    title: "Debugging",
    icon: <Bug className="w-6 h-6 text-gray-500 mx-auto" />,
    description:
      "Saleae USB Logic Analyzer for debugging and input decoding.",
    detailedDescription:
      "For in-depth debugging and signal analysis, a Saleae USB Logic Analyzer is employed. This tool captures and decodes various signals, including IR inputs and GPS data, and is essential for troubleshooting sensor integration and peripheral communications. Its use ensures overall system stability throughout the development and testing phases.",
  },
];

const ArchitectureCard = ({ module }) => {
  // Default to expanded
  const [expanded, setExpanded] = useState(true);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div
      className="glass-card p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
      onClick={toggleExpand}
    >
      <div className="text-blue-500 mb-4 flex justify-center">{module.icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center">{module.title}</h3>
      <p className="text-gray-400 text-center">{module.description}</p>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out mt-4 ${
          expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-300">{module.detailedDescription}</p>
      </div>
    </div>
  );
};

const Architecture = () => {
  return (
    <section id="architecture" className="section-container">
      <h2 className="section-title">System Architecture</h2>

      {/* Architecture Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {modules.map((module, index) => (
          <ArchitectureCard key={index} module={module} />
        ))}
      </div>

      {/* Pin Configuration Table (Glassy Style) */}
      <section id="pin-configuration" className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">
          Pin Configuration Table
        </h2>
        {/* Remove large scale/translate on hover so it doesn't overlap heading */}
        <div className="glass-card p-6 overflow-x-auto transition-all duration-300 hover:shadow-xl">
          <table className="w-full border border-gray-600 bg-transparent rounded-lg overflow-hidden text-sm text-gray-200">
            <thead className="bg-white/10">
              <tr>
                <th className="p-3 border-b border-gray-700 text-left">Component</th>
                <th className="p-3 border-b border-gray-700 text-left">Function</th>
                <th className="p-3 border-b border-gray-700 text-left">Pin</th>
                <th className="p-3 border-b border-gray-700 text-left">Direction</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-white/5">
                <td className="p-3 border-b border-gray-700">Accelerometer</td>
                <td className="p-3 border-b border-gray-700">I2C SCL</td>
                <td className="p-3 border-b border-gray-700">PIN_01</td>
                <td className="p-3 border-b border-gray-700">Output</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-3 border-b border-gray-700">Accelerometer</td>
                <td className="p-3 border-b border-gray-700">I2C SDA</td>
                <td className="p-3 border-b border-gray-700">PIN_02</td>
                <td className="p-3 border-b border-gray-700">Bidirectional</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-3 border-b border-gray-700">IR Receiver</td>
                <td className="p-3 border-b border-gray-700">GPIO Input</td>
                <td className="p-3 border-b border-gray-700">PIN_03</td>
                <td className="p-3 border-b border-gray-700">Input</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-3 border-b border-gray-700">Reset Button</td>
                <td className="p-3 border-b border-gray-700">GPIO Input</td>
                <td className="p-3 border-b border-gray-700">PIN_04</td>
                <td className="p-3 border-b border-gray-700">Input</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-3 border-b border-gray-700">SPI Clock</td>
                <td className="p-3 border-b border-gray-700">GSPI_CLK</td>
                <td className="p-3 border-b border-gray-700">PIN_05</td>
                <td className="p-3 border-b border-gray-700">Output</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-3 border-b border-gray-700">SPI MOSI</td>
                <td className="p-3 border-b border-gray-700">GSPI_MOSI</td>
                <td className="p-3 border-b border-gray-700">PIN_07</td>
                <td className="p-3 border-b border-gray-700">Output</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-3 border-b border-gray-700">Reset</td>
                <td className="p-3 border-b border-gray-700">GPIO Output</td>
                <td className="p-3 border-b border-gray-700">PIN_08</td>
                <td className="p-3 border-b border-gray-700">Output</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-3 border-b border-gray-700">Chip Select</td>
                <td className="p-3 border-b border-gray-700">GPIO Output</td>
                <td className="p-3 border-b border-gray-700">PIN_18</td>
                <td className="p-3 border-b border-gray-700">Output</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-3 border-b border-gray-700">Data/Command</td>
                <td className="p-3 border-b border-gray-700">GPIO Output</td>
                <td className="p-3 border-b border-gray-700">PIN_45</td>
                <td className="p-3 border-b border-gray-700">Output</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-3 border-b border-gray-700">Debug UART</td>
                <td className="p-3 border-b border-gray-700">UART0 TX</td>
                <td className="p-3 border-b border-gray-700">PIN_55</td>
                <td className="p-3 border-b border-gray-700">Output</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-3 border-b border-gray-700">Debug UART</td>
                <td className="p-3 border-b border-gray-700">UART0 RX</td>
                <td className="p-3 border-b border-gray-700">PIN_57</td>
                <td className="p-3 border-b border-gray-700">Input</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-3 border-b border-gray-700">GPS Module</td>
                <td className="p-3 border-b border-gray-700">UART1 TX</td>
                <td className="p-3 border-b border-gray-700">PIN_58</td>
                <td className="p-3 border-b border-gray-700">Output</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-3 border-b border-gray-700">GPS Module</td>
                <td className="p-3 border-b border-gray-700">UART1 RX</td>
                <td className="p-3 border-b border-gray-700">PIN_59</td>
                <td className="p-3 border-b border-gray-700">Input</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-3 border-b border-gray-700">Indicator LED</td>
                <td className="p-3 border-b border-gray-700">GPIO Output</td>
                <td className="p-3 border-b border-gray-700">PIN_64</td>
                <td className="p-3 border-b border-gray-700">Output</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default Architecture;
