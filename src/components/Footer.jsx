import React from 'react';
import { Linkedin, Twitter, Mail, Phone, MapPin, Heart, Leaf, Shield } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const footerSections = [
    {
      title: 'Plateforme',
      links: [
        { label: 'Trouver des freelances', page: 'search' },
        { label: 'Poster un projet', page: 'register' },
        { label: 'Comment ça marche', page: 'about' },
        { label: 'Tarifs', page: 'about' }
      ]
    },
    {
      title: 'Ressources',
      links: [
        { label: 'Blog', page: 'blog' },
        { label: 'Centre d\'aide', page: 'about' },
        { label: 'Certifications', page: 'about' },
        { label: 'API Documentation', page: 'about' }
      ]
    },
    {
      title: 'Entreprise',
      links: [
        { label: 'À propos', page: 'about' },
        { label: 'Carrières', page: 'about' },
        { label: 'Presse', page: 'about' },
        { label: 'Partenaires', page: 'about' }
      ]
    },
    {
      title: 'Légal',
      links: [
        { label: 'CGU', page: 'terms' },
        { label: 'Confidentialité', page: 'privacy' },
        { label: 'Cookies', page: 'cookies' },
        { label: 'Mentions légales', page: 'terms' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@linkup.fr', label: 'Email' }
  ];

  const certifications = [
    { name: 'B-Corp', icon: Shield },
    { name: 'Green IT', icon: Leaf },
    { name: 'RGPD', icon: Shield }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  LinkUp
                </span>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                Connecter les freelances et les entreprises responsables pour des collaborations durables. 
                Ensemble, construisons un avenir professionnel plus éthique.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>contact@linkup.fr</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>Paris, France</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 group transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={section.title} className="space-y-6">
                <h3 className="font-bold text-white text-lg border-b border-gray-700 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <button 
                        onClick={() => setCurrentPage(link.page)} 
                        className="text-gray-300 hover:text-white transition-all duration-200 text-left hover:translate-x-1 transform flex items-center group"
                      >
                        <span className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-2xl border border-blue-800/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Restez informé</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Recevez nos dernières actualités et conseils pour le freelancing responsable
              </p>
              <div className="max-w-md mx-auto flex gap-3">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
                />
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>&copy; 2024 LinkUp. Tous droits réservés.</span>
                <Heart className="w-4 h-4 text-red-400 mx-2" />
                <span>Fait avec passion à Paris</span>
              </div>
              
              {/* Certifications */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 text-sm">Certifié par :</span>
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200">
                    <cert.icon className="w-4 h-4" />
                    <span className="text-sm">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;