import React, { useState } from 'react';
import { ChevronRight, Calendar, User, Clock, Search, Tag, TrendingUp, BookOpen, Heart, Share2, Bookmark, Eye, MessageCircle, ThumbsUp, Filter } from 'lucide-react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    {
      id: 1,
      title: "Comment choisir un freelance aligné avec vos valeurs RSE ?",
      excerpt: "Guide complet pour recruter des talents engagés dans votre démarche de développement durable. Découvrez les critères essentiels et les questions à poser pour identifier les freelances qui partagent vraiment vos valeurs.",
      author: "Sophie Martin",
      authorRole: "Head of Community",
      date: "15 Nov 2024",
      category: "Guide RH",
      readTime: "5 min",
      color: "blue",
      featured: true,
      views: 2847,
      likes: 156,
      comments: 23,
      tags: ["RSE", "Recrutement", "Freelance", "Valeurs"]
    },
    {
      id: 2,
      title: "L'IA au service du matching éthique",
      excerpt: "Découvrez comment notre intelligence artificielle révolutionne la mise en relation responsable entre freelances et entreprises engagées. Une approche technique et humaine.",
      author: "Pierre Leroy",
      authorRole: "CTO",
      date: "12 Nov 2024",
      category: "Technologie",
      readTime: "7 min",
      color: "cyan",
      featured: false,
      views: 1923,
      likes: 89,
      comments: 15,
      tags: ["IA", "Technologie", "Matching", "Innovation"]
    },
    {
      id: 3,
      title: "Freelancing et impact environnemental : les bonnes pratiques",
      excerpt: "Comment réduire l'empreinte carbone de vos collaborations à distance et adopter des pratiques numériques durables. Guide pratique avec des actions concrètes.",
      author: "Camille Dupont",
      authorRole: "Sustainability Expert",
      date: "8 Nov 2024",
      category: "Environnement",
      readTime: "4 min",
      color: "blue",
      featured: false,
      views: 3156,
      likes: 234,
      comments: 45,
      tags: ["Environnement", "Télétravail", "Durabilité", "Green IT"]
    },
    {
      id: 4,
      title: "Les certifications qui comptent en 2024",
      excerpt: "Tour d'horizon des labels et certifications RSE les plus reconnus pour les freelances et les entreprises responsables. Analyse détaillée et conseils pratiques.",
      author: "Jean Dupont",
      authorRole: "CEO",
      date: "5 Nov 2024",
      category: "Certification",
      readTime: "6 min",
      color: "cyan",
      featured: false,
      views: 1567,
      likes: 78,
      comments: 12,
      tags: ["Certification", "B-Corp", "Labels", "RSE"]
    },
    {
      id: 5,
      title: "Télétravail responsable : optimiser sa productivité",
      excerpt: "Conseils pratiques pour un télétravail efficace et respectueux de l'environnement, avec les outils recommandés et les meilleures pratiques.",
      author: "Emma Lefevre",
      authorRole: "Remote Work Expert",
      date: "2 Nov 2024",
      category: "Productivité",
      readTime: "5 min",
      color: "blue",
      featured: false,
      views: 2234,
      likes: 145,
      comments: 28,
      tags: ["Télétravail", "Productivité", "Outils", "Bien-être"]
    },
    {
      id: 6,
      title: "Construire une marque personnelle éthique",
      excerpt: "Comment développer votre personal branding en tant que freelance engagé et attirer les bons clients. Stratégies et exemples concrets.",
      author: "Thomas Bernard",
      authorRole: "Brand Strategist",
      date: "30 Oct 2024",
      category: "Marketing",
      readTime: "8 min",
      color: "cyan",
      featured: false,
      views: 1789,
      likes: 92,
      comments: 18,
      tags: ["Branding", "Marketing", "Freelance", "Stratégie"]
    }
  ];

  const categories = [
    { name: "Tous", value: "all", count: articles.length },
    { name: "Guide RH", value: "Guide RH", count: 1 },
    { name: "Technologie", value: "Technologie", count: 1 },
    { name: "Environnement", value: "Environnement", count: 1 },
    { name: "Certification", value: "Certification", count: 1 },
    { name: "Productivité", value: "Productivité", count: 1 },
    { name: "Marketing", value: "Marketing", count: 1 }
  ];

  const popularTags = ["RSE", "Freelance", "IA", "Environnement", "Télétravail", "Certification", "Productivité", "Marketing"];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      cyan: "from-cyan-400 to-blue-500"
    };
    return colors[color] || colors.blue;
  };

  const getBgColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      cyan: "bg-cyan-100 text-cyan-700 border-cyan-200"
    };
    return colors[color] || colors.blue;
  };

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

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
              <BookOpen className="w-4 h-4 mr-2" />
              Ressources pour le freelancing responsable
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Blog & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> Ressources</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Conseils, guides et actualités du freelancing responsable. 
              Découvrez comment allier performance et impact positif.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher un article..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[200px]"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <TrendingUp className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Article en vedette</h2>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 mb-16">
              <div className="md:flex">
                <div className={`md:w-1/2 h-64 md:h-auto bg-gradient-to-r ${getColorClasses(featuredArticle.color)} relative`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <div className="text-sm font-medium opacity-90">Article vedette</div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center mb-4">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg text-sm font-bold mr-3 border border-yellow-200">
                      ⭐ Vedette
                    </span>
                    <span className={`px-3 py-1 rounded-lg text-sm font-medium border ${getBgColorClasses(featuredArticle.color)}`}>
                      {featuredArticle.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredArticle.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-2">
                          <span className="text-white font-bold text-xs">{featuredArticle.author.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{featuredArticle.author}</div>
                          <div className="text-xs">{featuredArticle.authorRole}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredArticle.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredArticle.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredArticle.views}
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {featuredArticle.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {featuredArticle.comments}
                      </div>
                    </div>
                  </div>
                  
                  <button className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center group">
                    Lire l'article
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Tous les articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className={`h-48 bg-gradient-to-r ${getColorClasses(article.color)} relative`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white opacity-80" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${getBgColorClasses(article.color)}`}>
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200">
                      <Bookmark className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200">
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3 text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="mr-4">{article.readTime}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{article.date}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-xs">{article.author.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{article.author}</div>
                        <div className="text-xs text-gray-500">{article.authorRole}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {article.views}
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="w-3 h-3 mr-1" />
                        {article.likes}
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center group border border-blue-200 rounded-lg py-2 hover:bg-blue-50 transition-all duration-200">
                    Lire plus
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Tags populaires</h3>
          <div className="flex flex-wrap gap-3">
            {popularTags.map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 text-gray-700 hover:text-blue-600"
              >
                <Tag className="w-4 h-4 inline mr-2" />
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Restez informé</h3>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Recevez nos derniers articles et conseils directement dans votre boîte mail. 
                Rejoignez plus de 5,000 freelances et entrepreneurs engagés.
              </p>
              <div className="max-w-md mx-auto flex gap-3">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white border-0"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap">
                  S'abonner
                </button>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                Pas de spam, désinscription en un clic
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;