import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import SearchPage from './components/SearchPage';
import BlogPage from './components/BlogPage';
import AuthPage from './components/AuthPage';
import LegalPage from './components/LegalPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <LandingPage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'search':
        return <SearchPage setCurrentPage={setCurrentPage} />;
      case 'blog':
        return <BlogPage />;
      case 'login':
        return <AuthPage type="login" setCurrentPage={setCurrentPage} />;
      case 'register':
        return <AuthPage type="register" setCurrentPage={setCurrentPage} />;
      case 'terms':
        return <LegalPage type="terms" />;
      case 'privacy':
        return <LegalPage type="privacy" />;
      case 'cookies':
        return <LegalPage type="cookies" />;
      default:
        return <LandingPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;