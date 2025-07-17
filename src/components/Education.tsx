import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Jyothishmathi Institute of Technology",
      duration: "2021 – 2025",
      type: "Undergraduate Degree",
      description: "Pursuing comprehensive education in technology and engineering fundamentals"
    },
    {
      degree: "Intermediate Education",
      institution: "Pavitra Junior College",
      duration: "2019 – 2021",
      type: "Higher Secondary",
      description: "Completed intermediate education with focus on science and mathematics"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Hamsini Digi High School",
      duration: "2018 – 2019",
      type: "Secondary Education",
      description: "Completed foundational secondary education with excellent academic performance"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a strong foundation through quality education and continuous learning
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center mb-4 lg:mb-0">
                  <div className="bg-green-100 p-3 rounded-lg text-green-600 mr-4">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-lg text-gray-600">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start lg:items-end space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-medium">{edu.duration}</span>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {edu.type}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;