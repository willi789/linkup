import React from 'react';
import { ArrowRight, Users, Target, Shield, Heart, Star, CheckCircle } from 'lucide-react';

const LandingPage = ({ setCurrentPage }) => {
  const steps = [
    {
      icon: Target,
      title: "1. Publiez votre mission",
      description: "Décrivez votre projet et vos valeurs. Notre IA optimise votre annonce pour attirer les bons profils.",
      color: "blue"
    },
    {
      icon: Users,
      title: "2. L'IA fait le tri",
      description: "Notre algorithme sélectionne automatiquement les freelances alignés avec vos besoins et vos valeurs.",
      color: "green"
    },
    {
      icon: Heart,
      title: "3. Collaborez efficacement",
      description: "Utilisez nos outils intégrés pour gérer votre projet de A à Z en toute transparence.",
      color: "purple"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Engagement responsable",
      description: "Uniquement des entreprises labellisées et des freelances refusant de travailler pour des acteurs polluants.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Inclusion",
      description: "Valoriser la diversité des talents et garantir l'accessibilité à tous.",
      color: "green"
    },
    {
      icon: CheckCircle,
      title: "Transparence",
      description: "Placer la confiance au cœur de chaque collaboration en respectant les engagements.",
      color: "purple"
    }
  ];

  const testimonials = [
    {
      name: "Camille Dupont",
      role: "Designer Graphique",
      content: "LinkUp m'a permis de trouver des projets alignés avec mes valeurs. Fini les collaborations qui ne me correspondent pas !",
      avatar: "C",
      color: "blue"
    },
    {
      name: "Antoine Da Silva",
      role: "DRH, Entreprise B-Corp",
      content: "Grâce à LinkUp, nous trouvons rapidement des freelances qui comprennent notre mission RSE.",
      avatar: "A",
      color: "green"
    },
    {
      name: "Marie Laurent",
      role: "Startup GreenTech",
      content: "L'IA de matching est bluffante ! Elle propose exactement les profils dont nous avons besoin.",
      avatar: "M",
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Connectez les projets 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> éthiques</span> aux freelances
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> grâce à l'IA</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              LinkUp facilite les collaborations entre freelances engagés et entreprises responsables. 
              Notre IA vous connecte avec des partenaires qui partagent vos valeurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('register')}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group"
              >
                Publier un projet
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button 
                onClick={() => setCurrentPage('search')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche
            </h2>
            <p className="text-xl text-gray-600">Un processus simple et efficace</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
                <div className={`w-20 h-20 ${getColorClasses(step.color)} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <step.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos valeurs</h2>
            <p className="text-xl text-gray-600">Ce qui nous rend différents</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <value.icon className={`w-12 h-12 mb-6 ${value.color === 'blue' ? 'text-blue-600' : value.color === 'green' ? 'text-green-600' : 'text-purple-600'} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-gray-600">Découvrez les retours de notre communauté</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group border border-gray-100">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${getColorClasses(testimonial.color)} rounded-full flex items-center justify-center mr-4 font-bold text-lg`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à rejoindre la communauté ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Rejoignez des milliers de freelances et d'entreprises qui construisent un avenir plus responsable.
          </p>
          <button 
            onClick={() => setCurrentPage('register')}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Commencer gratuitement
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;