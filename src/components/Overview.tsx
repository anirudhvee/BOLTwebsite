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
          In Davis, bike theft is more than just a statistic. It's a daily concern for students and residents. BOLT transforms your ordinary bike into a smart, secure vehicle with GPS tracking and motion detection.
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
          Check out our GitHub repository for the full source code, or download our lab report to learn more about the project's design.
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
        
        {/* Layman’s Explanation inside How It Works */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300 mb-8">
            <strong>In simple terms:</strong> BOLT is like a smart bike safety system 
            with eyes on the lookout. When you lock your bike with a remote 
            control, a built-in sensor keeps watch for any movement. If someone 
            tries to move or steal your bike, BOLT instantly reads the coordinates from the GPS 
            module and sends you an email with the exact location. For security reasons, the system can
            only be reset once you press the RESET button. Once you’re ready to ride, you use the same remote to unlock, allowing the bike to move freely again. It’s a straightforward way to keep thieves at bay and stay in the loop whenever your bike is disturbed.
          </p>

          <p className="text-lg text-gray-300 mb-10">
            BOLT also operates through a state-machine model that ensures 
            security management. It transitions between three states: 
            <b> Unlocked</b>, <b>Locked</b>, and <b>Alert</b>, all controlled 
            via an IR remote and accelerometer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-400 shadow-lg mx-auto">
              <Unlock className="w-8 h-8 text-white" />
            </div>
            <h3 className="mt-4 text-xl text-white font-semibold text-center">
              Unlocked
            </h3>
            <p className="mt-2 text-gray-400 text-center">
              Bike moves freely, no alerts.
            </p>
          </div>
          <div className="glass-card p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400 shadow-lg mx-auto">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="mt-4 text-xl text-white font-semibold text-center">
              Locked
            </h3>
            <p className="mt-2 text-gray-400 text-center">
              Security enabled, motion monitored.
            </p>
          </div>
          <div className="glass-card p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-400 shadow-lg mx-auto">
              <Bell className="w-8 h-8 text-white" />
            </div>
            <h3 className="mt-4 text-xl text-white font-semibold text-center">
              Alert
            </h3>
            <p className="mt-2 text-gray-400 text-center">
              Unauthorized movement detected, GPS and email alert sent. Waits for Reset Button. 
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Overview;
