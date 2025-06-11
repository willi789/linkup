import React from 'react';

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => setCurrentPage('home')} 
            className="flex items-center space-x-2 group transition-transform duration-200 hover:scale-105"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-200">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">LinkUp</span>
          </button>
          
          <nav className="hidden md:flex space-x-8">
            {[
              { key: 'home', label: 'Accueil' },
              { key: 'about', label: 'À propos' },
              { key: 'search', label: 'Découvrir' },
              { key: 'blog', label: 'Blog' }
            ].map(({ key, label }) => (
              <button 
                key={key}
                onClick={() => setCurrentPage(key)} 
                className={`relative py-2 px-1 transition-all duration-200 ${
                  currentPage === key 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                } group`}
              >
                {label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-200 ${
                  currentPage === key ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setCurrentPage('login')} 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Connexion
            </button>
            <button 
              onClick={() => setCurrentPage('register')} 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg font-medium"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;