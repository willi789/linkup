import React, { useState } from 'react';
import { Search, Filter, Eye, Star, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

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
      image: "CD",
      color: "blue",
      description: "Spécialisée dans le design éco-responsable et l'identité visuelle durable."
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
      image: "TB",
      color: "green",
      description: "Expert en développement web avec une approche green coding."
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
      image: "LM",
      color: "purple",
      description: "Stratégies marketing responsables et communication éthique."
    },
    {
      id: 4,
      name: "Antoine Rousseau",
      title: "Consultant RSE",
      rating: 4.9,
      reviews: 73,
      location: "Nantes, France",
      skills: ["RSE", "Audit", "Formation"],
      certification: "ISO 26000 Expert",
      image: "AR",
      color: "blue",
      description: "Accompagnement des entreprises dans leur transition durable."
    },
    {
      id: 5,
      name: "Emma Lefevre",
      title: "Rédactrice Web",
      rating: 4.7,
      reviews: 94,
      location: "Toulouse, France",
      skills: ["Rédaction", "SEO", "Storytelling"],
      certification: "Écriture Inclusive",
      image: "EL",
      color: "green",
      description: "Contenus engagés et communication responsable."
    },
    {
      id: 6,
      name: "Maxime Dubois",
      title: "Data Analyst",
      rating: 4.8,
      reviews: 112,
      location: "Lille, France",
      skills: ["Python", "Tableau", "Machine Learning"],
      certification: "Green IT Certified",
      image: "MD",
      color: "purple",
      description: "Analyse de données pour l'impact environnemental et social."
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600"
    };
    return colors[color] || colors.blue;
  };

  const categories = [
    { value: 'all', label: 'Toutes catégories' },
    { value: 'design', label: 'Design' },
    { value: 'dev', label: 'Développement' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'consulting', label: 'Conseil' },
    { value: 'writing', label: 'Rédaction' },
    { value: 'data', label: 'Data' }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Découvrir les freelances</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Trouvez des talents engagés pour vos projets responsables
          </p>
        </div>

        {/* Barre de recherche améliorée */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par compétence, nom, localisation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg min-w-[200px]"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 flex items-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
              <Filter className="w-5 h-5 mr-2" />
              Filtrer
            </button>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
            <div className="text-blue-700 font-medium">Freelances certifiés</div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-green-700 font-medium">Taux de satisfaction</div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">2,856</div>
            <div className="text-purple-700 font-medium">Projets réalisés</div>
          </div>
        </div>

        {/* Résultats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {freelancers.map((freelancer) => (
            <div key={freelancer.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(freelancer.color)} rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg">{freelancer.image}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{freelancer.name}</h3>
                    <p className="text-gray-600 font-medium">{freelancer.title}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{freelancer.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-semibold text-gray-900">{freelancer.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({freelancer.reviews} avis)</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{freelancer.location}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {freelancer.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-lg border border-green-100">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">{freelancer.certification}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 flex items-center justify-center font-semibold group-hover:shadow-lg transform group-hover:scale-105">
                  <Eye className="w-4 h-4 mr-2" />
                  Voir le profil
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vous voulez voir plus de profils ?</h3>
            <p className="text-gray-600 mb-6 text-lg">Créez votre compte gratuit pour accéder à tous nos talents certifiés</p>
            <button 
              onClick={() => setCurrentPage('register')} 
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 inline-flex items-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Créer un compte gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;