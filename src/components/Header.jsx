import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { key: 'home', label: 'Accueil' },
    { key: 'about', label: 'À propos' },
    { key: 'search', label: 'Découvrir' },
    { key: 'blog', label: 'Blog' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => setCurrentPage('home')} 
            className="flex items-center space-x-3 group transition-all duration-200 hover:scale-105"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 group-hover:rotate-3">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-200">
              LinkUp
            </span>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map(({ key, label }) => (
              <button 
                key={key}
                onClick={() => setCurrentPage(key)} 
                className={`relative py-2 px-4 rounded-lg transition-all duration-200 font-medium ${
                  currentPage === key 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                } group`}
              >
                {label}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-200 ${
                  currentPage === key ? 'w-8' : 'group-hover:w-6'
                }`} />
              </button>
            ))}
          </nav>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setCurrentPage('login')} 
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Connexion
            </button>
            <button 
              onClick={() => setCurrentPage('register')} 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
            >
              S'inscrire
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => {
                    setCurrentPage(key);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                    currentPage === key
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button
                  onClick={() => {
                    setCurrentPage('login');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                >
                  Connexion
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('register');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-3 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-medium text-center"
                >
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;