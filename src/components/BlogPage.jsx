import React from 'react';
import { ChevronRight, Calendar, User, Clock } from 'lucide-react';

const BlogPage = () => {
  const articles = [
    {
      id: 1,
      title: "Comment choisir un freelance aligné avec vos valeurs RSE ?",
      excerpt: "Guide complet pour recruter des talents engagés dans votre démarche de développement durable. Découvrez les critères essentiels et les questions à poser.",
      author: "Sophie Martin",
      date: "15 Nov 2024",
      category: "Guide RH",
      readTime: "5 min",
      color: "blue",
      featured: true
    },
    {
      id: 2,
      title: "L'IA au service du matching éthique",
      excerpt: "Découvrez comment notre intelligence artificielle révolutionne la mise en relation responsable entre freelances et entreprises engagées.",
      author: "Pierre Leroy",
      date: "12 Nov 2024",
      category: "Technologie",
      readTime: "7 min",
      color: "green"
    },
    {
      id: 3,
      title: "Freelancing et impact environnemental : les bonnes pratiques",
      excerpt: "Comment réduire l'empreinte carbone de vos collaborations à distance et adopter des pratiques numériques durables.",
      author: "Camille Dupont",
      date: "8 Nov 2024",
      category: "Environnement",
      readTime: "4 min",
      color: "purple"
    },
    {
      id: 4,
      title: "Les certifications qui comptent en 2024",
      excerpt: "Tour d'horizon des labels et certifications RSE les plus reconnus pour les freelances et les entreprises responsables.",
      author: "Jean Dupont",
      date: "5 Nov 2024",
      category: "Certification",
      readTime: "6 min",
      color: "blue"
    },
    {
      id: 5,
      title: "Télétravail responsable : optimiser sa productivité",
      excerpt: "Conseils pratiques pour un télétravail efficace et respectueux de l'environnement, avec les outils recommandés.",
      author: "Emma Lefevre",
      date: "2 Nov 2024",
      category: "Productivité",
      readTime: "5 min",
      color: "green"
    },
    {
      id: 6,
      title: "Construire une marque personnelle éthique",
      excerpt: "Comment développer votre personal branding en tant que freelance engagé et attirer les bons clients.",
      author: "Thomas Bernard",
      date: "30 Oct 2024",
      category: "Marketing",
      readTime: "8 min",
      color: "purple"
    }
  ];

  const categories = [
    { name: "Tous", count: articles.length },
    { name: "Guide RH", count: 1 },
    { name: "Technologie", count: 1 },
    { name: "Environnement", count: 1 },
    { name: "Certification", count: 1 },
    { name: "Productivité", count: 1 },
    { name: "Marketing", count: 1 }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      green: "bg-green-100 text-green-700 border-green-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200"
    };
    return colors[color] || colors.blue;
  };

  const getGradientClasses = (color) => {
    const gradients = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600"
    };
    return gradients[color] || gradients.blue;
  };

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Blog & Ressources</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Conseils, guides et actualités du freelancing responsable
          </p>
        </div>

        {/* Catégories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 text-sm font-medium"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Article en vedette */}
        {featuredArticle && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className={`md:w-1/2 h-64 md:h-auto bg-gradient-to-r ${getGradientClasses(featuredArticle.color)}`}></div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded-lg text-sm font-medium mr-3 border ${getColorClasses(featuredArticle.color)}`}>
                      ⭐ Article vedette
                    </span>
                    <span className={`px-3 py-1 rounded-lg text-sm font-medium border ${getColorClasses(featuredArticle.color)}`}>
                      {featuredArticle.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {featuredArticle.author}
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
                    <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center group">
                      Lire l'article
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className={`h-48 bg-gradient-to-r ${getGradientClasses(article.color)} relative`}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium mr-3 border ${getColorClasses(article.color)}`}>
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group">
                    Lire plus
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Restez informé</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Recevez nos derniers articles et conseils directement dans votre boîte mail
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;