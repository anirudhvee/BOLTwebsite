import React from 'react';
import { Shield } from 'lucide-react';

const Overview = () => {
  return (
    <section id="overview" className="section-container">
      <h2 className="section-title">Overview</h2>
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
        </div>
        <p className="text-lg text-gray-300 mb-6">
          In Davis, bike theft is more than just a statistic—it's a daily concern for students and residents alike. BOLT transforms your ordinary bike into a smart, secure vehicle with cutting-edge tracking and protection.
        </p>
        <p className="text-lg text-gray-300">
          BOLT continuously safeguards your bike, detecting unauthorized movement and instantly notifying you via email with live GPS coordinates.
        </p>
      </div>
    </section>
  );
};

export default Overview;