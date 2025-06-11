import React, { useState } from 'react';
import { ArrowRight, Users, Target, Shield, Heart, Star, Calendar, MapPin, ChevronRight, Mail, Phone, Linkedin, Twitter, CheckCircle, Search, Filter, Eye } from 'lucide-react';

// Composant Header
const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => setCurrentPage('home')} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-gray-900">LinkUp</span>
          </button>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => setCurrentPage('home')} className={`transition-colors ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Accueil</button>
            <button onClick={() => setCurrentPage('about')} className={`transition-colors ${currentPage === 'about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>À propos</button>
            <button onClick={() => setCurrentPage('search')} className={`transition-colors ${currentPage === 'search' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Découvrir</button>
            <button onClick={() => setCurrentPage('blog')} className={`transition-colors ${currentPage === 'blog' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Blog</button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setCurrentPage('login')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Connexion
            </button>
            <button 
              onClick={() => setCurrentPage('register')} 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Composant Footer
const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold">LinkUp</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecter les freelances et les entreprises responsables pour des collaborations durables.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Plateforme</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setCurrentPage('search')} className="hover:text-white">Trouver des freelances</button></li>
              <li><button onClick={() => setCurrentPage('register')} className="hover:text-white">Poster un projet</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-white">Comment ça marche</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setCurrentPage('blog')} className="hover:text-white">Blog</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-white">Centre d'aide</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-white">Certifications</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setCurrentPage('terms')} className="hover:text-white">CGU</button></li>
              <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-white">Confidentialité</button></li>
              <li><button onClick={() => setCurrentPage('cookies')} className="hover:text-white">Cookies</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LinkUp. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

// Page Landing/Accueil
const LandingPage = ({ setCurrentPage }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connectez les projets 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> éthiques</span> aux freelances
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> grâce à l'IA</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              LinkUp facilite les collaborations entre freelances engagés et entreprises responsables. 
              Notre IA vous connecte avec des partenaires qui partagent vos valeurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('register')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Publier un projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => setCurrentPage('search')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Trouver des freelances
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Étapes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comment ça marche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Publiez votre mission</h3>
              <p className="text-gray-600">Décrivez votre projet et vos valeurs. Notre IA optimise votre annonce pour attirer les bons profils.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. L'IA fait le tri</h3>
              <p className="text-gray-600">Notre algorithme sélectionne automatiquement les freelances alignés avec vos besoins et vos valeurs.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Collaborez efficacement</h3>
              <p className="text-gray-600">Utilisez nos outils intégrés pour gérer votre projet de A à Z en toute transparence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos valeurs</h2>
            <p className="text-xl text-gray-600">Ce qui nous rend différents</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Engagement responsable</h3>
              <p className="text-gray-600">Uniquement des entreprises labellisées et des freelances refusant de travailler pour des acteurs polluants.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Inclusion</h3>
              <p className="text-gray-600">Valoriser la diversité des talents et garantir l'accessibilité à tous.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Transparence</h3>
              <p className="text-gray-600">Placer la confiance au cœur de chaque collaboration en respectant les engagements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ils nous font confiance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"LinkUp m'a permis de trouver des projets alignés avec mes valeurs. Fini les collaborations qui ne me correspondent pas !"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">C</span>
                </div>
                <div>
                  <p className="font-semibold">Camille Dupont</p>
                  <p className="text-sm text-gray-500">Designer Graphique</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Grâce à LinkUp, nous trouvons rapidement des freelances qui comprennent notre mission RSE."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-semibold">A</span>
                </div>
                <div>
                  <p className="font-semibold">Antoine Da Silva</p>
                  <p className="text-sm text-gray-500">DRH, Entreprise B-Corp</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"L'IA de matching est bluffante ! Elle propose exactement les profils dont nous avons besoin."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-semibold">M</span>
                </div>
                <div>
                  <p className="font-semibold">Marie Laurent</p>
                  <p className="text-sm text-gray-500">Startup GreenTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à rejoindre la communauté ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez des milliers de freelances et d'entreprises qui construisent un avenir plus responsable.
          </p>
          <button 
            onClick={() => setCurrentPage('register')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Commencer gratuitement
          </button>
        </div>
      </section>
    </div>
  );
};

// Page À propos
const AboutPage = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">À propos de LinkUp</h1>
          <p className="text-xl text-gray-600">
            Nous transformons le freelancing pour un monde plus responsable
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre mission</h2>
            <p className="text-gray-700">
              Connecter les freelances engagés et les entreprises responsables à travers une plateforme 
              développée de manière responsable. Nous privilégions les pratiques numériques durables 
              et collaborons avec des talents qui partagent nos valeurs pour soutenir des projets 
              respectueux de la planète.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Notre différence</h3>
              <p className="text-gray-600">
                Contrairement aux plateformes traditionnelles, LinkUp s'adresse uniquement aux 
                freelances refusant de collaborer avec des entreprises polluantes. Notre réseau 
                est exclusivement composé d'entreprises labellisées.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Notre promesse</h3>
              <p className="text-gray-600">
                LinkUp est plus qu'un simple intermédiaire. C'est un partenaire engagé qui transforme 
                chaque collaboration en une expérience humaine et enrichissante, où la qualité rencontre 
                des valeurs fortes.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">L'équipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">JD</span>
                </div>
                <h3 className="font-semibold">Jean Dupont</h3>
                <p className="text-gray-600">CEO & Fondateur</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">SM</span>
                </div>
                <h3 className="font-semibold">Sophie Martin</h3>
                <p className="text-gray-600">CTO</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">PL</span>
                </div>
                <h3 className="font-semibold">Pierre Leroy</h3>
                <p className="text-gray-600">Head of Product</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Page Recherche publique
const SearchPage = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const freelancers = [
    {
      id: 1,
      name: "Camille Dupont",
      title: "Designer Graphique",
      rating: 4.9,
      reviews: 127,
      location: "Paris, France",
      skills: ["UI/UX", "Branding", "Illustration"],
      certification: "Label Numérique Responsable",
      image: "CD"
    },
    {
      id: 2,
      name: "Thomas Bernard",
      title: "Développeur React",
      rating: 5.0,
      reviews: 89,
      location: "Lyon, France",
      skills: ["React", "Node.js", "TypeScript"],
      certification: "Carbon Literacy Project",
      image: "TB"
    },
    {
      id: 3,
      name: "Laura Martinez",
      title: "Marketing Digital",
      rating: 4.8,
      reviews: 156,
      location: "Bordeaux, France",
      skills: ["SEO", "Content", "Analytics"],
      certification: "B Corp Certified",
      image: "LM"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Découvrir les freelances</h1>
          <p className="text-xl text-gray-600">
            Trouvez des talents engagés pour vos projets responsables
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par compétence, nom..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Toutes catégories</option>
              <option value="design">Design</option>
              <option value="dev">Développement</option>
              <option value="marketing">Marketing</option>
            </select>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filtrer
            </button>
          </div>
        </div>

        {/* Résultats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelancers.map((freelancer) => (
            <div key={freelancer.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{freelancer.image}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{freelancer.name}</h3>
                    <p className="text-gray-600">{freelancer.title}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex items-center mr-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{freelancer.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({freelancer.reviews})</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{freelancer.location}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {freelancer.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">{freelancer.certification}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Eye className="w-4 h-4 mr-2" />
                  Voir le profil
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Vous voulez voir plus de profils ?</p>
          <button onClick={() => setCurrentPage('register')} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
            Créer un compte gratuit
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Page Blog
const BlogPage = () => {
  const articles = [
    {
      id: 1,
      title: "Comment choisir un freelance aligné avec vos valeurs RSE ?",
      excerpt: "Guide complet pour recruter des talents engagés dans votre démarche de développement durable.",
      author: "Sophie Martin",
      date: "15 Nov 2024",
      category: "Guide RH",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "L'IA au service du matching éthique",
      excerpt: "Découvrez comment notre intelligence artificielle révolutionne la mise en relation responsable.",
      author: "Pierre Leroy",
      date: "12 Nov 2024",
      category: "Technologie",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Freelancing et impact environnemental : les bonnes pratiques",
      excerpt: "Comment réduire l'empreinte carbone de vos collaborations à distance.",
      author: "Camille Dupont",
      date: "8 Nov 2024",
      category: "Environnement",
      readTime: "4 min"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog & Ressources</h1>
          <p className="text-xl text-gray-600">
            Conseils, guides et actualités du freelancing responsable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-xl"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs mr-3">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{article.author}</p>
                      <p className="text-xs text-gray-500">{article.date}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                    Lire plus
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

// Page Connexion/Inscription
const AuthPage = ({ type, setCurrentPage }) => {
  const isLogin = type === 'login';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Connexion' : 'Créer un compte'}
            </h1>
            <p className="text-gray-600">
              {isLogin ? 'Retrouvez votre espace LinkUp' : 'Rejoignez la communauté LinkUp'}
            </p>
          </div>

          {!isLogin && (
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button 
                onClick={() => setCurrentPage('register-freelance')}
                className="p-4 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-center"
              >
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-blue-600">Freelance</p>
                <p className="text-xs text-gray-600">Je cherche des missions</p>
              </button>
              <button 
                onClick={() => setCurrentPage('register-company')}
                className="p-4 border-2 border-green-600 rounded-lg hover:bg-green-50 transition-colors text-center"
              >
                <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-semibold text-green-600">Entreprise</p>
                <p className="text-xs text-gray-600">Je recrute des talents</p>
              </button>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="votre@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-600">Se souvenir de moi</span>
                </label>
                <button className="text-sm text-blue-600 hover:underline">
                  Mot de passe oublié ?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              {isLogin ? 'Se connecter' : 'Créer mon compte'}
            </button>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}
              <button 
                onClick={() => setCurrentPage(isLogin ? "register" : "login")} 
                className="text-blue-600 hover:underline ml-1"
              >
                {isLogin ? "S'inscrire" : "Se connecter"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Page Légales
const LegalPage = ({ type }) => {
  const getContent = () => {
    switch(type) {
      case 'terms':
        return {
          title: 'Conditions Générales d\'Utilisation',
          content: `1. Objet

Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation de la plateforme LinkUp.

2. Acceptation des conditions

En utilisant LinkUp, vous acceptez pleinement et sans réserve les présentes CGU.

3. Services proposés

LinkUp est une plateforme de mise en relation entre freelances et entreprises responsables.

4. Obligations des utilisateurs

Les utilisateurs s'engagent à utiliser la plateforme de manière responsable et éthique.

5. Protection des données

Nous respectons le RGPD et protégeons vos données personnelles.`
        };
      case 'privacy':
        return {
          title: 'Politique de Confidentialité',
          content: `1. Collecte des données

Nous collectons les données nécessaires au fonctionnement de la plateforme.

2. Utilisation des données

Vos données sont utilisées pour améliorer nos services et faciliter les mises en relation.

3. Protection des données

Nous respectons le RGPD et protégeons vos données personnelles.

4. Droits des utilisateurs

Vous disposez d'un droit d'accès, de rectification et de suppression de vos données.`
        };
      case 'cookies':
        return {
          title: 'Politique des Cookies',
          content: `1. Qu'est-ce qu'un cookie ?

Un cookie est un petit fichier stocké sur votre appareil.

2. Types de cookies utilisés

Nous utilisons des cookies essentiels et analytiques.

3. Gestion des cookies

Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.`
        };
      default:
        return { title: 'Page légale', content: 'Contenu non trouvé.' };
    }
  };

  const { title, content } = getContent();

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{title}</h1>
        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-line text-gray-700 leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant App principal
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