import React from 'react';
import { Users, Linkedin, Github } from 'lucide-react';
import manasviniImage from '../assets/images/manasvini.JPG';
import anirudhImage from '../assets/images/anirudh.jpg';

const Team = () => {
  const team = [
    {
      name: "Manasvini Narayanan",
      role: "Fourth Year Computer Science and Engineering Student at UC Davis",
      image: manasviniImage,
      linkedin: "https://www.linkedin.com/in/mana-nara/",
      github: "https://github.com/mana-nara"
    },
    {
      name: "Anirudh Venkatachalam",
      role: "Fourth Year Computer Science and Engineering Student at UC Davis",
      image: anirudhImage,
      linkedin: "https://www.linkedin.com/in/anirudhvee/",
      github: "https://github.com/anirudhvee"
    }
  ];

  return (
    <section id="team" className="section-container">
      <h2 className="section-title">Team</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Users className="w-10 h-10 text-blue-500" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {member.name}
              </h3>
              <p className="text-gray-300 mb-4">{member.role}</p>

              {/* Social Icons Section */}
              <div className="flex justify-center space-x-4">
                {/* LinkedIn Icon (no text) */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                )}

                {/* GitHub Icon (no text) */}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
