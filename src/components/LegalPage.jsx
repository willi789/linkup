import React from 'react';
import { Shield, Eye, Cookie, FileText, Calendar, User } from 'lucide-react';

const LegalPage = ({ type }) => {
  const getContent = () => {
    switch(type) {
      case 'terms':
        return {
          title: 'Conditions Générales d\'Utilisation',
          icon: FileText,
          lastUpdate: '15 novembre 2024',
          sections: [
            {
              title: '1. Objet',
              content: 'Les présentes conditions générales d\'utilisation (CGU) régissent l\'utilisation de la plateforme LinkUp, service de mise en relation entre freelances et entreprises responsables.'
            },
            {
              title: '2. Acceptation des conditions',
              content: 'En utilisant LinkUp, vous acceptez pleinement et sans réserve les présentes CGU. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser notre service.'
            },
            {
              title: '3. Services proposés',
              content: 'LinkUp est une plateforme de mise en relation entre freelances engagés et entreprises responsables. Nous facilitons les collaborations durables grâce à notre technologie d\'intelligence artificielle.'
            },
            {
              title: '4. Obligations des utilisateurs',
              content: 'Les utilisateurs s\'engagent à utiliser la plateforme de manière responsable et éthique, en respectant les valeurs de développement durable et de responsabilité sociale.'
            },
            {
              title: '5. Protection des données',
              content: 'Nous respectons le RGPD et protégeons vos données personnelles. Consultez notre politique de confidentialité pour plus d\'informations.'
            },
            {
              title: '6. Responsabilité',
              content: 'LinkUp agit en tant qu\'intermédiaire et ne peut être tenu responsable des relations contractuelles entre freelances et entreprises.'
            }
          ]
        };
      case 'privacy':
        return {
          title: 'Politique de Confidentialité',
          icon: Shield,
          lastUpdate: '15 novembre 2024',
          sections: [
            {
              title: '1. Collecte des données',
              content: 'Nous collectons uniquement les données nécessaires au fonctionnement de la plateforme : informations de profil, compétences, certifications et préférences de matching.'
            },
            {
              title: '2. Utilisation des données',
              content: 'Vos données sont utilisées pour améliorer nos services, faciliter les mises en relation et personnaliser votre expérience sur LinkUp.'
            },
            {
              title: '3. Protection des données',
              content: 'Nous respectons le RGPD et mettons en place des mesures de sécurité avancées pour protéger vos données personnelles contre tout accès non autorisé.'
            },
            {
              title: '4. Droits des utilisateurs',
              content: 'Vous disposez d\'un droit d\'accès, de rectification, de suppression et de portabilité de vos données. Contactez-nous pour exercer ces droits.'
            },
            {
              title: '5. Partage des données',
              content: 'Nous ne vendons jamais vos données. Le partage se limite aux informations nécessaires pour faciliter les mises en relation avec votre consentement.'
            },
            {
              title: '6. Conservation des données',
              content: 'Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, conformément à la réglementation en vigueur.'
            }
          ]
        };
      case 'cookies':
        return {
          title: 'Politique des Cookies',
          icon: Cookie,
          lastUpdate: '15 novembre 2024',
          sections: [
            {
              title: '1. Qu\'est-ce qu\'un cookie ?',
              content: 'Un cookie est un petit fichier texte stocké sur votre appareil lors de votre visite sur notre site. Il nous aide à améliorer votre expérience utilisateur.'
            },
            {
              title: '2. Types de cookies utilisés',
              content: 'Nous utilisons des cookies essentiels pour le fonctionnement du site, des cookies analytiques pour comprendre l\'usage, et des cookies de préférences pour personnaliser votre expérience.'
            },
            {
              title: '3. Cookies essentiels',
              content: 'Ces cookies sont nécessaires au fonctionnement de base du site : authentification, sécurité et navigation. Ils ne peuvent pas être désactivés.'
            },
            {
              title: '4. Cookies analytiques',
              content: 'Ils nous aident à comprendre comment vous utilisez notre site pour l\'améliorer. Ces données sont anonymisées et agrégées.'
            },
            {
              title: '5. Gestion des cookies',
              content: 'Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur ou via notre centre de préférences.'
            },
            {
              title: '6. Durée de conservation',
              content: 'La durée de conservation varie selon le type de cookie : de la session en cours à 2 ans maximum pour les cookies de préférences.'
            }
          ]
        };
      default:
        return { 
          title: 'Page légale', 
          icon: FileText,
          lastUpdate: 'Date inconnue',
          sections: [{ title: 'Erreur', content: 'Contenu non trouvé.' }] 
        };
    }
  };

  const { title, icon: Icon, lastUpdate, sections } = getContent();

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
                <div className="flex items-center mt-2 text-blue-100">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">Dernière mise à jour : {lastUpdate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {sections.map((section, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <User className="w-5 h-5 mr-2" />
                Besoin d'aide ?
              </h3>
              <p className="text-blue-700 mb-3">
                Si vous avez des questions concernant ce document, n'hésitez pas à nous contacter :
              </p>
              <div className="space-y-2 text-blue-700">
                <p>📧 Email : legal@linkup.fr</p>
                <p>📞 Téléphone : +33 1 23 45 67 89</p>
                <p>📍 Adresse : 123 Rue de l'Innovation, 75001 Paris, France</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;