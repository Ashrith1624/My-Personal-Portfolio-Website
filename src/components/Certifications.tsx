import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Simplilearn Java Full Stack Developer Course",
      provider: "Simplilearn",
      type: "Professional Certification",
      description: "Comprehensive full-stack development training covering Java, Spring Boot, Angular, and database technologies.",
      skills: ["Java", "Spring Boot", "Angular", "Database Management", "RESTful APIs"],
      certificateUrl: "https://drive.google.com/file/d/1ReluMwonkpYJCXOx58bP03gImFXUlweW/view?usp=sharing"
    },
    {
      title: "Python Course",
      provider: "Codetantra",
      type: "Programming Course",
      description: "In-depth Python programming course covering fundamental to advanced concepts and practical applications.",
      skills: ["Python Programming", "Data Structures", "Algorithms", "Object-Oriented Programming"],
      certificateUrl: "https://drive.google.com/file/d/1H88nxcwE8oWrDPX37IbQHfWeQyAkz6_B/view?usp=sharing"
    },
    {
      title: "Hack-Arena - 2nd National Level Hackathon",
      provider: "National Competition",
      type: "Competition Achievement",
      description: "Participated in a prestigious national-level hackathon, demonstrating problem-solving skills and innovative thinking.",
      skills: ["Problem Solving", "Team Collaboration", "Innovation", "Time Management"],
      certificateUrl: "https://drive.google.com/file/d/1U2QZtQw9v5WmsC5qeuxRrHn6H_e49e71/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and skill development through certified courses and competitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mr-4">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">{cert.title}</h3>
                  <p className="text-gray-600">{cert.provider}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {cert.type}
                </span>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Skills Gained</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors duration-200"
              >
                <ExternalLink size={16} />
                <span className="text-sm font-medium">View Certificate</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;