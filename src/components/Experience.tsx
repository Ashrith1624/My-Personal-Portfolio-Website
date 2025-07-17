import React from 'react';
import { Building, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const internships = [
    {
      title: "Salesforce Virtual Developer Internship",
      company: "Salesforce",
      type: "Virtual Internship",
      description: "Gained hands-on experience with Salesforce development platforms, learned about CRM solutions, and worked on real-world business scenarios.",
      skills: ["Salesforce Platform", "CRM Development", "Apex Programming", "Lightning Components"],
      certificateUrl: "https://drive.google.com/file/d/1SbPwZyVDUyfybohSsMoWkgfHpI08S9IU/view?usp=sharing"
    },
    {
      title: "Data Science Internship",
      company: "Intrainz",
      type: "Virtual Internship",
      description: "Developed expertise in data analysis, machine learning algorithms, and statistical modeling. Worked on data visualization and predictive analytics projects.",
      skills: ["Python", "Machine Learning", "Data Analysis", "Statistical Modeling", "Data Visualization"],
      certificateUrl: "https://drive.google.com/file/d/15H-Tmql32Mq2GZhQD6Vyyh3rPOMJrv-_/view?usp=sharing"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building practical skills through valuable internship experiences
          </p>
        </div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center mb-4 lg:mb-0">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{internship.title}</h3>
                    <p className="text-lg text-gray-600">{internship.company}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-medium">{internship.type}</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {internship.description}
              </p>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Skills Developed</h4>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href={internship.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  <span>View Certificate</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;