import React from 'react';
import { Users } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: "Manasvini Narayanan",
      role: "Fourth Year Computer Science and Engineering Student at UC Davis"
    },
    {
      name: "Anirudh Venkatachalam",
      role: "Fourth Year Computer Science and Engineering Student at UC Davis"
    }
  ];

  return (
    <section id="team" className="section-container">
      <h2 className="section-title">Team</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div key={index} className="glass-card p-6 text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;