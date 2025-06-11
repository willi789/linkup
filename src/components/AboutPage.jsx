import React from 'react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Jean Dupont",
      role: "CEO & Fondateur",
      initials: "JD",
      color: "blue"
    },
    {
      name: "Sophie Martin",
      role: "CTO",
      initials: "SM",
      color: "green"
    },
    {
      name: "Pierre Leroy",
      role: "Head of Product",
      initials: "PL",
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
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">À propos de LinkUp</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Nous transformons le freelancing pour un monde plus responsable
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 md:p-12 rounded-2xl border border-blue-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Notre mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Connecter les freelances engagés et les entreprises responsables à travers une plateforme 
              développée de manière responsable. Nous privilégions les pratiques numériques durables 
              et collaborons avec des talents qui partagent nos valeurs pour soutenir des projets 
              respectueux de la planète.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Notre différence</h3>
              <p className="text-gray-600 leading-relaxed">
                Contrairement aux plateformes traditionnelles, LinkUp s'adresse uniquement aux 
                freelances refusant de collaborer avec des entreprises polluantes. Notre réseau 
                est exclusivement composé d'entreprises labellisées.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Notre promesse</h3>
              <p className="text-gray-600 leading-relaxed">
                LinkUp est plus qu'un simple intermédiaire. C'est un partenaire engagé qui transforme 
                chaque collaboration en une expérience humaine et enrichissante, où la qualité rencontre 
                des valeurs fortes.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">L'équipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-24 h-24 ${getColorClasses(member.color)} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-2xl font-bold">{member.initials}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Nos engagements</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Développement durable</h3>
                  <p className="text-gray-600">Nous compensons notre empreinte carbone et utilisons des serveurs alimentés par des énergies renouvelables.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Éthique des affaires</h3>
                  <p className="text-gray-600">Transparence totale sur nos pratiques et nos partenariats avec des acteurs responsables uniquement.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Impact social</h3>
                  <p className="text-gray-600">1% de nos revenus sont reversés à des associations œuvrant pour la transition écologique.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;