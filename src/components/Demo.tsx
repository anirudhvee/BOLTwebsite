import React from 'react';

const Demo = () => {
  return (
    <section id="demo" className="section-container">
      <h2 className="section-title">Demo</h2>
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
          <div className="w-full h-0 pb-[56.25%] relative">
            <iframe
              src="https://www.youtube.com/embed/wbUF54-nb3c"
              title="BOLT Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              style={{ minHeight: '315px' }}
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              See how our bike security system works in real-time, featuring GPS tracking, movement detection, and instant alerts. Turn up the volume to hear us explain the features!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;