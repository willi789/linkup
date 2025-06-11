import React from 'react';
import { Users, Target, Heart, Shield, Globe, Zap, Award, TrendingUp, Lightbulb, Rocket, CheckCircle, ArrowRight, Star, Calendar, MapPin } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Antonin Haviotte",
      role: "Dirigeant / Chef de projet",
      initials: "AH",
      color: "blue",
      description: "Visionnaire et leader du projet LinkUp, passionné par l'innovation responsable et l'impact social.",
      linkedin: "#"
    },
    {
      name: "Alice Da Costa",
      role: "Dir. communication & événementielle",
      initials: "AD",
      color: "cyan",
      description: "Experte en communication responsable et organisation d'événements à impact positif.",
      linkedin: "#"
    },
    {
      name: "William Ulses",
      role: "Dir. Tech",
      initials: "WU",
      color: "blue",
      description: "Architecte technique et développeur passionné par les technologies durables et l'innovation.",
      linkedin: "#"
    },
    {
      name: "Lisa Kempeners",
      role: "Dir. Artistique",
      initials: "LK",
      color: "cyan",
      description: "Créatrice visuelle spécialisée dans le design éthique et l'identité de marque responsable.",
      linkedin: "#"
    },
    {
      name: "Carla Patriat-JOOSTEN",
      role: "Dir. stratégique marketing digital",
      initials: "CP",
      color: "blue",
      description: "Stratège marketing digital experte en croissance responsable et communication éthique.",
      linkedin: "#"
    },
    {
      name: "Thibaud Gattegno",
      role: "Dir. Artistique",
      initials: "TG",
      color: "cyan",
      description: "Directeur artistique créatif, spécialisé dans l'expérience utilisateur et le design durable.",
      linkedin: "#"
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
      title: "Inclusion & Diversité",
      description: "Valoriser la diversité des talents et garantir l'accessibilité à tous, sans discrimination.",
      color: "cyan"
    },
    {
      icon: CheckCircle,
      title: "Transparence totale",
      description: "Placer la confiance au cœur de chaque collaboration en respectant nos engagements.",
      color: "blue"
    },
    {
      icon: Globe,
      title: "Impact mesurable",
      description: "Suivre et communiquer sur notre impact environnemental et social de manière transparente.",
      color: "cyan"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Création de LinkUp",
      description: "Lancement de la plateforme avec 50 freelances pionniers",
      icon: Rocket
    },
    {
      year: "2024",
      title: "1000+ freelances",
      description: "Franchissement du cap des 1000 freelances certifiés",
      icon: Users
    },
    {
      year: "2024",
      title: "IA de matching",
      description: "Lancement de notre algorithme d'IA pour un matching optimal",
      icon: Zap
    },
    {
      year: "2024",
      title: "Certification B-Corp",
      description: "Obtention de la certification B-Corp pour notre engagement",
      icon: Award
    }
  ];

  const stats = [
    { number: "2,847", label: "Freelances certifiés", icon: Users },
    { number: "1,156", label: "Entreprises partenaires", icon: Target },
    { number: "98%", label: "Taux de satisfaction", icon: Heart },
    { number: "€2.3M", label: "Revenus générés", icon: TrendingUp }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      cyan: "from-cyan-400 to-blue-500"
    };
    return colors[color] || colors.blue;
  };

  const getBgColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-600 text-white",
      cyan: "bg-cyan-500 text-white"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-blue-700 text-sm font-bold mb-8 border border-blue-200">
              <Heart className="w-4 h-4 mr-2" />
              Notre mission : un freelancing plus responsable
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              À propos de 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> LinkUp</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Nous transformons le freelancing pour un monde plus responsable en connectant 
              les talents engagés aux entreprises qui partagent leurs valeurs.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-12 md:p-16 rounded-3xl border border-blue-100 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Notre mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Connecter les freelances engagés et les entreprises responsables à travers une plateforme 
                  développée de manière responsable. Nous privilégions les pratiques numériques durables 
                  et collaborons avec des talents qui partagent nos valeurs.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Notre objectif est de créer un écosystème où chaque collaboration contribue positivement 
                  à la société et à l'environnement, tout en garantissant l'excellence professionnelle.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Globe className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Impact Global</h3>
                    <p className="text-blue-100">Pour un avenir durable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Nos valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(value.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">Notre parcours</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                      <milestone.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">L'équipe</h2>
            <p className="text-xl text-gray-600">
              Des experts passionnés par l'impact positif et l'innovation responsable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="p-6 text-center">
                  <div className={`w-24 h-24 bg-gradient-to-r ${getColorClasses(member.color)} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{member.initials}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>
                  <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                    <span className="sr-only">LinkedIn de {member.name}</span>
                    Voir le profil →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nos engagements</h2>
            <p className="text-xl text-gray-600">
              Des actions concrètes pour un impact positif mesurable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Développement durable</h3>
              <p className="text-gray-600 mb-4">
                Nous compensons notre empreinte carbone et utilisons des serveurs alimentés par des énergies renouvelables.
              </p>
              <div className="text-sm text-green-600 font-medium">✓ Hébergement 100% vert</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Éthique des affaires</h3>
              <p className="text-gray-600 mb-4">
                Transparence totale sur nos pratiques et nos partenariats avec des acteurs responsables uniquement.
              </p>
              <div className="text-sm text-blue-600 font-medium">✓ Certification B-Corp</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Impact social</h3>
              <p className="text-gray-600 mb-4">
                1% de nos revenus sont reversés à des associations œuvrant pour la transition écologique.
              </p>
              <div className="text-sm text-purple-600 font-medium">✓ Pledge 1% membre</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-12 rounded-3xl text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rejoignez notre mission
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Ensemble, construisons un écosystème professionnel plus responsable et plus humain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Devenir freelance
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
                <Target className="w-5 h-5 mr-2" />
                Recruter des talents
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;