import React from 'react';
import { ExternalLink, Github, Shield, Activity } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Emergency QR",
      description: "A lifesaving project that generates a QR code embedded with a person's medical and personal data to enable fast emergency response during accidents.",
      technologies: ["QR Generation", "Medical Data", "Emergency Response"],
      icon: <Activity className="w-8 h-8" />,
      color: "from-red-400 to-red-600",
      githubUrl: "https://github.com/Ashrith1624/Emergency-QR/",
      demoUrl: "https://www.linkedin.com/posts/ashrith-manchala-358b62219_emergencyqr-healthtech-emergencyresponse-activity-7351517268289183744-xV9o?utm_source=share&utm_medium=member_android&rcm=ACoAADcqiXQBDZkVUwMjdKUu3neueA6WsLfr9ZI"
    },
    {
      title: "Drug Inventory and Supply Chain Management System",
      description: "A blockchain-based system to improve transparency and real-time tracking of drugs in the healthcare supply chain. Ensures security through decentralized ledgers and smart contracts, combating counterfeit drugs.",
      technologies: ["Blockchain", "Smart Contracts", "Supply Chain", "Healthcare"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-400 to-green-600",
      githubUrl: "https://github.com/Ashrith1624/Drug-Inventory-and-SCM",
      demoUrl: "https://www.linkedin.com/posts/ashrith-manchala-358b62219_blockchain-pharmaceuticals-drugtraceability-activity-7350732845201440769-Hf1R?utm_source=share&utm_medium=member_android&rcm=ACoAADcqiXQBDZkVUwMjdKUu3neueA6WsLfr9ZI"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions addressing real-world problems with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`h-4 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${project.color} p-3 rounded-lg text-white mr-4`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;