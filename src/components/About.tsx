import React from 'react';
import { Code, Database, Brain, Users, Zap, MessageSquare } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "C", "DBMS", "SQL"],
      icon: <Code className="w-6 h-6" />
    },
    {
      category: "Tools & Technologies",
      items: ["Full-Stack Development", "Blockchain", "Data Science"],
      icon: <Database className="w-6 h-6" />
    },
    {
      category: "Soft Skills",
      items: ["Problem-solving", "Interpersonal Communication", "Learning Agility"],
      icon: <Brain className="w-6 h-6" />
    }
  ];

  const softSkillsIcons = {
    "Problem-solving": <Zap className="w-5 h-5" />,
    "Interpersonal Communication": <Users className="w-5 h-5" />,
    "Learning Agility": <MessageSquare className="w-5 h-5" />
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about technology and innovation, I'm a fresh graduate ready to make an impact in the tech industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{skillGroup.category}</h3>
              </div>
              
              <div className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {skillGroup.category === "Soft Skills" && softSkillsIcons[skill as keyof typeof softSkillsIcons]}
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${85 + skillIndex * 5}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;