import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/ashrith-manchala",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/manchala-ashrith",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:ashrithmanchala16@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Manchala Ashrith</h3>
            <p className="text-gray-400 leading-relaxed">
              Aspiring Software Developer passionate about creating innovative solutions 
              and contributing to meaningful projects in the tech industry.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {['About', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Vemulawada, Telangana, India</p>
              <p>ashrithmanchala16@gmail.com</p>
              <p>+91 9392799090</p>
            </div>
            <button
              onClick={scrollToTop}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Manchala Ashrith. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and</span>
              <span className="text-blue-400 font-semibold">React</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;