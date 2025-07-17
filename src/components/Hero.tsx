import React from 'react';
import { Download, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full shadow-xl overflow-hidden">
            <img 
              src="/Portfolio image.jpg" 
              alt="Manchala Ashrith" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Manchala <span className="text-blue-600">Ashrith</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Aspiring Software Developer | Problem Solver | Tech Enthusiast
          </p>
          
          <div className="mb-8 space-y-2 text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <MapPin size={18} />
              <span>Vemulawada, Telangana, India</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span>ashrithmanchala16@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <span>+91 9392799090</span>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Seeking an entry-level position to begin my career in a high-level professional environment, 
            where I can apply my problem-solving skills and contribute to company growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Hire Me</span>
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;