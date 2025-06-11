import React, { useState } from 'react';
import { Search, Filter, Eye, Star, MapPin, CheckCircle, ArrowRight, Sliders, Grid, List, SortAsc, Heart, Award, Clock, DollarSign, Users, Target, Zap } from 'lucide-react';

const SearchPage = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);

  const freelancers = [
    {
      id: 1,
      name: "Camille Dupont",
      title: "Designer Graphique",
      rating: 4.9,
      reviews: 127,
      location: "Paris, France",
      skills: ["UI/UX", "Branding", "Illustration", "Figma"],
      certification: "Label Numérique Responsable",
      image: "CD",
      color: "blue",
      description: "Spécialisée dans le design éco-responsable et l'identité visuelle durable. 8 ans d'expérience.",
      hourlyRate: "65€/h",
      availability: "Disponible",
      completedProjects: 89,
      responseTime: "2h",
      featured: true
    },
    {
      id: 2,
      name: "Thomas Bernard",
      title: "Développeur React",
      rating: 5.0,
      reviews: 89,
      location: "Lyon, France",
      skills: ["React", "Node.js", "TypeScript", "GraphQL"],
      certification: "Carbon Literacy Project",
      image: "TB",
      color: "cyan",
      description: "Expert en développement web avec une approche green coding et performance optimisée.",
      hourlyRate: "75€/h",
      availability: "Disponible",
      completedProjects: 156,
      responseTime: "1h",
      featured: false
    },
    {
      id: 3,
      name: "Laura Martinez",
      title: "Marketing Digital",
      rating: 4.8,
      reviews: 156,
      location: "Bordeaux, France",
      skills: ["SEO", "Content", "Analytics", "Growth"],
      certification: "B Corp Certified",
      image: "LM",
      color: "blue",
      description: "Stratégies marketing responsables et communication éthique pour entreprises engagées.",
      hourlyRate: "55€/h",
      availability: "Occupée",
      completedProjects: 203,
      responseTime: "4h",
      featured: false
    },
    {
      id: 4,
      name: "Antoine Rousseau",
      title: "Consultant RSE",
      rating: 4.9,
      reviews: 73,
      location: "Nantes, France",
      skills: ["RSE", "Audit", "Formation", "ISO 26000"],
      certification: "ISO 26000 Expert",
      image: "AR",
      color: "cyan",
      description: "Accompagnement des entreprises dans leur transition durable et responsable.",
      hourlyRate: "85€/h",
      availability: "Disponible",
      completedProjects: 67,
      responseTime: "3h",
      featured: true
    },
    {
      id: 5,
      name: "Emma Lefevre",
      title: "Rédactrice Web",
      rating: 4.7,
      reviews: 94,
      location: "Toulouse, France",
      skills: ["Rédaction", "SEO", "Storytelling", "Content"],
      certification: "Écriture Inclusive",
      image: "EL",
      color: "blue",
      description: "Contenus engagés et communication responsable pour marques éthiques.",
      hourlyRate: "45€/h",
      availability: "Disponible",
      completedProjects: 134,
      responseTime: "2h",
      featured: false
    },
    {
      id: 6,
      name: "Maxime Dubois",
      title: "Data Analyst",
      rating: 4.8,
      reviews: 112,
      location: "Lille, France",
      skills: ["Python", "Tableau", "Machine Learning", "BI"],
      certification: "Green IT Certified",
      image: "MD",
      color: "cyan",
      description: "Analyse de données pour l'impact environnemental et social des entreprises.",
      hourlyRate: "70€/h",
      availability: "Disponible",
      completedProjects: 98,
      responseTime: "1h",
      featured: false
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      cyan: "from-cyan-400 to-blue-500"
    };
    return colors[color] || colors.blue;
  };

  const categories = [
    { value: 'all', label: 'Toutes catégories', count: freelancers.length },
    { value: 'design', label: 'Design', count: 2 },
    { value: 'dev', label: 'Développement', count: 2 },
    { value: 'marketing', label: 'Marketing', count: 1 },
    { value: 'consulting', label: 'Conseil', count: 1 },
    { value: 'writing', label: 'Rédaction', count: 1 },
    { value: 'data', label: 'Data', count: 1 }
  ];

  const sortOptions = [
    { value: 'rating', label: 'Note' },
    { value: 'reviews', label: 'Nombre d\'avis' },
    { value: 'price', label: 'Tarif' },
    { value: 'availability', label: 'Disponibilité' }
  ];

  const featuredFreelancers = freelancers.filter(f => f.featured);
  const regularFreelancers = freelancers.filter(f => !f.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-blue-700 text-sm font-bold mb-8 border border-blue-200">
              <Users className="w-4 h-4 mr-2" />
              {freelancers.length} freelances certifiés disponibles
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Découvrir les 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> freelances</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Trouvez des talents engagés et certifiés pour vos projets responsables. 
              Chaque freelance partage vos valeurs éthiques et environnementales.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 mb-8 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-4 w-6 h-6 text-gray-400" />
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
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
              
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Sliders className="w-5 h-5 mr-2" />
                Filtres
              </button>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Trier par</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tarif horaire</label>
                    <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option>Tous les tarifs</option>
                      <option>Moins de 50€/h</option>
                      <option>50€ - 70€/h</option>
                      <option>Plus de 70€/h</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Disponibilité</label>
                    <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option>Toutes</option>
                      <option>Disponible maintenant</option>
                      <option>Disponible sous 1 semaine</option>
                      <option>Disponible sous 1 mois</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
                    <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option>Toute la France</option>
                      <option>Paris</option>
                      <option>Lyon</option>
                      <option>Bordeaux</option>
                      <option>Autres villes</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">1,247</div>
                  <div className="text-blue-700 font-medium">Freelances certifiés</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-green-700 font-medium">Taux de satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">2,856</div>
                  <div className="text-purple-700 font-medium">Projets réalisés</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 p-6 rounded-2xl border border-cyan-200">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600">24h</div>
                  <div className="text-cyan-700 font-medium">Temps de réponse moyen</div>
                </div>
              </div>
            </div>
          </div>

          {/* View Controls */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium">{freelancers.length} freelances trouvés</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <SortAsc className="w-5 h-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    Trier par {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Freelancers */}
      {featuredFreelancers.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Award className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Freelances en vedette</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {featuredFreelancers.map((freelancer) => (
                <div key={freelancer.id} className="bg-white rounded-2xl shadow-xl border-2 border-yellow-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group relative">
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      Vedette
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${getColorClasses(freelancer.color)} rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white font-bold text-2xl">{freelancer.image}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{freelancer.name}</h3>
                        <p className="text-gray-600 font-medium text-lg">{freelancer.title}</p>
                        <div className="flex items-center mt-2">
                          <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                          <span className="text-gray-500 text-sm">{freelancer.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{freelancer.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-2" />
                        <span className="font-semibold text-gray-900">{freelancer.rating}</span>
                        <span className="text-gray-500 ml-1">({freelancer.reviews} avis)</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 text-green-500 mr-2" />
                        <span className="font-semibold text-gray-900">{freelancer.hourlyRate}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-gray-600">Répond en {freelancer.responseTime}</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className={`w-4 h-4 mr-2 ${freelancer.availability === 'Disponible' ? 'text-green-500' : 'text-orange-500'}`} />
                        <span className={`font-medium ${freelancer.availability === 'Disponible' ? 'text-green-600' : 'text-orange-600'}`}>
                          {freelancer.availability}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {freelancer.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-lg border border-green-100">
                        <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                        <span className="font-medium">{freelancer.certification}</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center font-semibold text-lg group-hover:shadow-lg transform group-hover:scale-105">
                      <Eye className="w-5 h-5 mr-2" />
                      Voir le profil complet
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Freelancers */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Tous les freelances</h2>
          
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {regularFreelancers.map((freelancer) => (
              <div key={freelancer.id} className={`bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden ${viewMode === 'list' ? 'flex' : ''}`}>
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex items-center' : ''}`}>
                  <div className={`${viewMode === 'list' ? 'flex items-center space-x-6 w-full' : ''}`}>
                    <div className={`flex items-center ${viewMode === 'list' ? '' : 'mb-4'}`}>
                      <div className={`${viewMode === 'list' ? 'w-16 h-16' : 'w-16 h-16'} bg-gradient-to-r ${getColorClasses(freelancer.color)} rounded-2xl flex items-center justify-center ${viewMode === 'list' ? 'mr-6' : 'mr-4'} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white font-bold text-lg">{freelancer.image}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{freelancer.name}</h3>
                        <p className="text-gray-600 font-medium">{freelancer.title}</p>
                        {viewMode === 'list' && (
                          <div className="flex items-center mt-1">
                            <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                            <span className="text-gray-500 text-sm">{freelancer.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {viewMode === 'grid' && (
                      <>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{freelancer.description}</p>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-sm font-semibold text-gray-900">{freelancer.rating}</span>
                            <span className="text-sm text-gray-500 ml-1">({freelancer.reviews})</span>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="text-sm">{freelancer.location}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {freelancer.skills.slice(0, 3).map((skill) => (
                              <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100">
                                {skill}
                              </span>
                            ))}
                            {freelancer.skills.length > 3 && (
                              <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium border border-gray-100">
                                +{freelancer.skills.length - 3}
                              </span>
                            )}
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
                      </>
                    )}

                    {viewMode === 'list' && (
                      <div className="flex-1 grid grid-cols-4 gap-4 items-center">
                        <div>
                          <div className="flex items-center mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="font-semibold text-gray-900">{freelancer.rating}</span>
                            <span className="text-gray-500 ml-1 text-sm">({freelancer.reviews})</span>
                          </div>
                          <div className="text-sm text-gray-600">{freelancer.hourlyRate}</div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {freelancer.skills.slice(0, 2).map((skill) => (
                            <span key={skill} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                        
                        <div className="text-center">
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            freelancer.availability === 'Disponible' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-orange-100 text-orange-700'
                          }`}>
                            {freelancer.availability}
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                            Voir le profil
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-12 rounded-3xl border border-blue-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Vous voulez voir plus de profils ?</h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Créez votre compte gratuit pour accéder à tous nos talents certifiés, 
              utiliser nos filtres avancés et contacter directement les freelances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('register')} 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 inline-flex items-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Créer un compte gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => setCurrentPage('about')} 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200 inline-flex items-center font-semibold"
              >
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchPage;