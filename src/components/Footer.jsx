import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const footerSections = [
    {
      title: 'Plateforme',
      links: [
        { label: 'Trouver des freelances', page: 'search' },
        { label: 'Poster un projet', page: 'register' },
        { label: 'Comment ça marche', page: 'about' }
      ]
    },
    {
      title: 'Ressources',
      links: [
        { label: 'Blog', page: 'blog' },
        { label: 'Centre d\'aide', page: 'about' },
        { label: 'Certifications', page: 'about' }
      ]
    },
    {
      title: 'Légal',
      links: [
        { label: 'CGU', page: 'terms' },
        { label: 'Confidentialité', page: 'privacy' },
        { label: 'Cookies', page: 'cookies' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold">LinkUp</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Connecter les freelances et les entreprises responsables pour des collaborations durables.
            </p>
            <div className="flex space-x-4 pt-2">
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
              </div>
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
              </div>
            </div>
          </div>
          
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button 
                      onClick={() => setCurrentPage(link.page)} 
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 LinkUp. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;