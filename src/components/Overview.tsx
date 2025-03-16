import React from 'react';
import { Shield, Lock, Unlock, Bell } from 'lucide-react';

const Overview = () => {
  return (
    <section id="overview" className="section-container">
              <div className="mb-8">
          <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
        </div>
      <h2 className="section-title">Overview</h2>
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-lg text-gray-300 mb-6">
          In Davis, bike theft is more than just a statistic—it's a daily concern for students and residents alike. BOLT transforms your ordinary bike into a smart, secure vehicle with cutting-edge tracking and protection.
        </p>
        <p className="text-lg text-gray-300 mb-10">
          BOLT continuously safeguards your bike, detecting unauthorized movement and instantly notifying you via email with live GPS coordinates.
        </p>
      </div>

      {/* Resources Section (after Overview, before How It Works) */}
      <section className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Additional Resources
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Check out our GitHub repository for the full source code, or download our lab report to learn more about the project's design and results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://github.com/YourUserName/YourRepository"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200"
          >
            GitHub Repo
          </a>
          <a
            href="/files/BOLT_LabReport.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors duration-200"
          >
            Download Lab Report
          </a>
        </div>
      </section>
      {/* End of Resources Section */}

      <section id="how-it-works" className="section-container mt-16">
        <h2 className="section-title">How It Works</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300 mb-10">
            BOLT operates through a structured state-machine model that ensures seamless security management. It transitions between three states: <b>Unlocked</b>, <b>Locked</b>, and <b>Alert</b>, all controlled via an IR remote and accelerometer.
          </p>
        </div>

        {/* Updated Card Layout to Match Other Pages */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-400 shadow-lg mx-auto">
              <Unlock className="w-8 h-8 text-white" />
            </div>
            <h3 className="mt-4 text-xl text-white font-semibold text-center">Unlocked</h3>
            <p className="mt-2 text-gray-400 text-center">Bike moves freely, no alerts.</p>
          </div>
          <div className="glass-card p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400 shadow-lg mx-auto">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="mt-4 text-xl text-white font-semibold text-center">Locked</h3>
            <p className="mt-2 text-gray-400 text-center">Security enabled, motion monitored.</p>
          </div>
          <div className="glass-card p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-400 shadow-lg mx-auto">
              <Bell className="w-8 h-8 text-white" />
            </div>
            <h3 className="mt-4 text-xl text-white font-semibold text-center">Alert</h3>
            <p className="mt-2 text-gray-400 text-center">Unauthorized movement detected, GPS and email alert sent.</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Overview;
