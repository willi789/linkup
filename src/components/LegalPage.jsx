import React, { useState } from 'react';
import { Shield, Eye, Cookie, FileText, Calendar, User, ChevronDown, ChevronUp, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const LegalPage = ({ type }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const getContent = () => {
    switch(type) {
      case 'terms':
        return {
          title: 'Conditions Générales d\'Utilisation',
          icon: FileText,
          lastUpdate: '15 novembre 2024',
          description: 'Ces conditions régissent votre utilisation de la plateforme LinkUp et définissent les droits et obligations de chaque partie.',
          sections: [
            {
              id: 'object',
              title: '1. Objet et champ d\'application',
              content: `Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation de la plateforme LinkUp, service de mise en relation entre freelances et entreprises responsables.

LinkUp est une plateforme numérique qui facilite les collaborations entre freelances certifiés et entreprises engagées dans une démarche RSE. Notre service comprend :
- La mise en relation via intelligence artificielle
- Les outils de gestion de projet
- Le système de paiement sécurisé
- Le support client

L'utilisation de nos services implique l'acceptation pleine et entière des présentes CGU.`
            },
            {
              id: 'acceptance',
              title: '2. Acceptation des conditions',
              content: `En utilisant LinkUp, vous acceptez pleinement et sans réserve les présentes CGU. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.

Ces conditions peuvent être modifiées à tout moment. Les utilisateurs seront informés de toute modification par email et via la plateforme. La poursuite de l'utilisation après modification vaut acceptation des nouvelles conditions.`
            },
            {
              id: 'services',
              title: '3. Services proposés',
              content: `LinkUp propose les services suivants :

**Pour les freelances :**
- Création et gestion de profil professionnel
- Accès aux offres de mission certifiées
- Outils de candidature et de communication
- Système de facturation intégré
- Formation et certification

**Pour les entreprises :**
- Publication d'offres de mission
- Accès à la base de freelances certifiés
- Outils de sélection et d'évaluation
- Gestion des contrats et paiements
- Suivi de performance et analytics

Tous nos services sont soumis à notre processus de certification et de vérification.`
            },
            {
              id: 'obligations',
              title: '4. Obligations des utilisateurs',
              content: `**Obligations générales :**
- Fournir des informations exactes et à jour
- Respecter les lois et réglementations en vigueur
- Ne pas porter atteinte aux droits de tiers
- Utiliser la plateforme de manière responsable et éthique

**Obligations spécifiques aux freelances :**
- Maintenir leurs certifications à jour
- Respecter les engagements pris envers les clients
- Facturer de manière transparente

**Obligations spécifiques aux entreprises :**
- Respecter leurs engagements RSE déclarés
- Payer les freelances dans les délais convenus
- Fournir un environnement de travail respectueux`
            },
            {
              id: 'data',
              title: '5. Protection des données',
              content: `Nous respectons le RGPD et protégeons vos données personnelles selon notre politique de confidentialité.

**Données collectées :**
- Informations de profil et de contact
- Données de certification et de compétences
- Historique des collaborations
- Données de paiement (via nos partenaires sécurisés)

**Utilisation des données :**
- Amélioration de nos services
- Matching entre freelances et entreprises
- Communication et support
- Conformité légale et réglementaire

Consultez notre politique de confidentialité pour plus de détails.`
            },
            {
              id: 'responsibility',
              title: '6. Responsabilité et garanties',
              content: `**Responsabilité de LinkUp :**
LinkUp agit en tant qu'intermédiaire et ne peut être tenu responsable des relations contractuelles entre freelances et entreprises. Notre responsabilité se limite à la fourniture de la plateforme et des services associés.

**Limitations de responsabilité :**
- Nous ne garantissons pas la disponibilité continue de la plateforme
- Nous ne sommes pas responsables des dommages indirects
- Notre responsabilité est limitée au montant des commissions perçues

**Garanties utilisateurs :**
- Nous nous engageons à vérifier les certifications
- Nous garantissons la sécurité des paiements
- Nous assurons un support client de qualité`
            }
          ]
        };
      case 'privacy':
        return {
          title: 'Politique de Confidentialité',
          icon: Shield,
          lastUpdate: '15 novembre 2024',
          description: 'Cette politique explique comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.',
          sections: [
            {
              id: 'collection',
              title: '1. Collecte des données',
              content: `Nous collectons uniquement les données nécessaires au fonctionnement de la plateforme :

**Données d'identification :**
- Nom, prénom, email
- Numéro de téléphone
- Adresse postale
- Photo de profil

**Données professionnelles :**
- Compétences et expériences
- Certifications et diplômes
- Portfolio et réalisations
- Tarifs et disponibilités

**Données de navigation :**
- Adresse IP et données de connexion
- Cookies et technologies similaires
- Historique de navigation sur la plateforme

**Données de transaction :**
- Informations de facturation
- Historique des paiements
- Données bancaires (stockées chez nos partenaires sécurisés)`
            },
            {
              id: 'usage',
              title: '2. Utilisation des données',
              content: `Vos données sont utilisées pour :

**Fonctionnement de la plateforme :**
- Création et gestion de votre compte
- Matching entre freelances et entreprises
- Communication entre utilisateurs
- Traitement des paiements

**Amélioration des services :**
- Personnalisation de l'expérience utilisateur
- Développement de nouvelles fonctionnalités
- Analyses statistiques anonymisées
- Optimisation de l'algorithme de matching

**Communication :**
- Notifications importantes
- Newsletter (avec votre consentement)
- Support client
- Informations légales et réglementaires`
            },
            {
              id: 'protection',
              title: '3. Protection et sécurité',
              content: `Nous mettons en place des mesures de sécurité avancées :

**Sécurité technique :**
- Chiffrement SSL/TLS pour toutes les communications
- Stockage sécurisé avec chiffrement des données sensibles
- Authentification à deux facteurs disponible
- Surveillance continue des accès

**Sécurité organisationnelle :**
- Formation du personnel à la protection des données
- Accès aux données limité au strict nécessaire
- Audits de sécurité réguliers
- Procédures de réponse aux incidents

**Conformité RGPD :**
- Désignation d'un DPO (Délégué à la Protection des Données)
- Registre des traitements tenu à jour
- Analyses d'impact sur la vie privée
- Coopération avec les autorités de contrôle`
            },
            {
              id: 'rights',
              title: '4. Vos droits',
              content: `Conformément au RGPD, vous disposez des droits suivants :

**Droit d'accès :** Obtenir une copie de vos données personnelles
**Droit de rectification :** Corriger des données inexactes ou incomplètes
**Droit à l'effacement :** Demander la suppression de vos données
**Droit à la portabilité :** Récupérer vos données dans un format structuré
**Droit d'opposition :** Vous opposer au traitement de vos données
**Droit à la limitation :** Limiter le traitement dans certains cas

**Comment exercer vos droits :**
- Via votre espace personnel sur la plateforme
- Par email à dpo@linkup.fr
- Par courrier postal à notre adresse

Nous répondons à toute demande dans un délai maximum de 30 jours.`
            },
            {
              id: 'sharing',
              title: '5. Partage des données',
              content: `Nous ne vendons jamais vos données personnelles.

**Partage nécessaire au service :**
- Informations de profil visibles par les autres utilisateurs
- Données de contact pour faciliter les collaborations
- Informations de certification pour la vérification

**Partenaires de confiance :**
- Processeurs de paiement (Stripe, PayPal)
- Services d'hébergement sécurisé (OVH)
- Outils d'analyse (anonymisés)
- Services de support client

**Obligations légales :**
- Réponse aux demandes des autorités compétentes
- Respect des obligations fiscales et sociales
- Lutte contre la fraude et le blanchiment

Tous nos partenaires sont soumis à des accords de confidentialité stricts.`
            },
            {
              id: 'retention',
              title: '6. Conservation des données',
              content: `Nous conservons vos données selon les principes suivants :

**Durées de conservation :**
- Données de compte : pendant la durée d'utilisation + 3 ans
- Données de transaction : 10 ans (obligations comptables)
- Données de support : 3 ans après résolution
- Cookies : 13 mois maximum

**Suppression automatique :**
- Comptes inactifs depuis plus de 3 ans
- Données temporaires de navigation
- Logs de sécurité après 1 an

**Conservation pour obligations légales :**
Certaines données peuvent être conservées plus longtemps pour respecter nos obligations légales, comptables ou fiscales.

Vous pouvez demander la suppression anticipée de vos données en nous contactant.`
            }
          ]
        };
      case 'cookies':
        return {
          title: 'Politique des Cookies',
          icon: Cookie,
          lastUpdate: '15 novembre 2024',
          description: 'Cette politique explique comment nous utilisons les cookies et technologies similaires pour améliorer votre expérience.',
          sections: [
            {
              id: 'definition',
              title: '1. Qu\'est-ce qu\'un cookie ?',
              content: `Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone) lors de votre visite sur notre site web.

**Types de cookies :**
- **Cookies de session :** supprimés à la fermeture du navigateur
- **Cookies persistants :** conservés pendant une durée déterminée
- **Cookies propriétaires :** déposés par LinkUp
- **Cookies tiers :** déposés par nos partenaires

**Technologies similaires :**
- Local Storage et Session Storage
- Web beacons et pixels de suivi
- Empreintes digitales (fingerprinting)
- Identifiants publicitaires mobiles`
            },
            {
              id: 'types',
              title: '2. Types de cookies utilisés',
              content: `**Cookies strictement nécessaires :**
- Authentification et sécurité
- Panier et préférences de session
- Équilibrage de charge
- Protection contre les attaques

Ces cookies ne peuvent pas être désactivés car ils sont essentiels au fonctionnement du site.

**Cookies de performance :**
- Mesure d'audience et statistiques
- Optimisation des performances
- Tests A/B et amélioration UX
- Détection d'erreurs

**Cookies de fonctionnalité :**
- Mémorisation des préférences
- Personnalisation de l'interface
- Géolocalisation (avec consentement)
- Intégration des réseaux sociaux

**Cookies marketing :**
- Publicité ciblée
- Mesure d'efficacité des campagnes
- Remarketing et retargeting
- Analyse comportementale`
            },
            {
              id: 'essential',
              title: '3. Cookies essentiels',
              content: `Ces cookies sont nécessaires au fonctionnement de base du site :

**Authentification :**
- linkup_session : identifiant de session utilisateur
- linkup_auth : token d'authentification
- linkup_csrf : protection contre les attaques CSRF

**Sécurité :**
- linkup_security : détection d'activités suspectes
- linkup_rate_limit : limitation du taux de requêtes
- linkup_captcha : vérification anti-robot

**Fonctionnement :**
- linkup_preferences : préférences utilisateur
- linkup_language : langue sélectionnée
- linkup_timezone : fuseau horaire

Ces cookies ne collectent aucune information personnelle identifiable et ne peuvent pas être désactivés.`
            },
            {
              id: 'analytics',
              title: '4. Cookies analytiques',
              content: `Ils nous aident à comprendre comment vous utilisez notre site :

**Google Analytics :**
- _ga : identifiant unique de visiteur (2 ans)
- _gid : identifiant de session (24 heures)
- _gat : limitation du taux de requêtes (1 minute)

**Hotjar (analyse comportementale) :**
- _hjid : identifiant unique de visiteur (1 an)
- _hjSession : données de session (30 minutes)
- _hjIncludedInSample : inclusion dans l'échantillon (2 minutes)

**Données collectées :**
- Pages visitées et temps passé
- Parcours de navigation
- Interactions avec les éléments
- Informations techniques (navigateur, OS, résolution)

Ces données sont anonymisées et agrégées pour protéger votre vie privée.`
            },
            {
              id: 'management',
              title: '5. Gestion des cookies',
              content: `Vous avez plusieurs options pour gérer les cookies :

**Via notre centre de préférences :**
- Accessible depuis le footer du site
- Gestion granulaire par catégorie
- Activation/désactivation en un clic
- Historique de vos choix

**Via votre navigateur :**
- Chrome : Paramètres > Confidentialité et sécurité > Cookies
- Firefox : Paramètres > Vie privée et sécurité > Cookies
- Safari : Préférences > Confidentialité > Cookies
- Edge : Paramètres > Cookies et autorisations de site

**Conséquences de la désactivation :**
- Certaines fonctionnalités peuvent être limitées
- Perte de personnalisation
- Nécessité de se reconnecter à chaque visite
- Expérience utilisateur dégradée

**Outils de blocage :**
- Extensions de navigateur (uBlock Origin, Ghostery)
- Paramètres "Do Not Track"
- Mode navigation privée/incognito`
            },
            {
              id: 'duration',
              title: '6. Durée de conservation',
              content: `La durée de conservation varie selon le type de cookie :

**Cookies de session :** supprimés à la fermeture du navigateur

**Cookies persistants :**
- Authentification : 30 jours
- Préférences : 1 an
- Analytics : 2 ans maximum
- Marketing : 13 mois maximum

**Renouvellement automatique :**
Certains cookies sont renouvelés automatiquement lors de vos visites pour maintenir leur fonctionnalité.

**Suppression manuelle :**
Vous pouvez supprimer tous les cookies à tout moment via les paramètres de votre navigateur.

**Conformité réglementaire :**
Nous respectons les durées maximales imposées par la CNIL et le RGPD.

Pour toute question sur notre utilisation des cookies, contactez-nous à privacy@linkup.fr`
            }
          ]
        };
      default:
        return { 
          title: 'Page légale', 
          icon: FileText,
          lastUpdate: 'Date inconnue',
          description: 'Contenu non trouvé.',
          sections: [{ id: 'error', title: 'Erreur', content: 'Contenu non trouvé.' }] 
        };
    }
  };

  const { title, icon: Icon, lastUpdate, description, sections } = getContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Icon className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              {description}
            </p>

            <div className="flex items-center justify-center text-gray-500">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Dernière mise à jour : {lastUpdate}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Table of Contents */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Table des matières</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => toggleSection(section.id)}
                    className="text-left p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 text-blue-700 hover:text-blue-800"
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Sections */}
            <div className="p-8 md:p-12">
              {sections.map((section, index) => (
                <div key={section.id} className="mb-8 last:mb-0">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 mb-4"
                  >
                    <h2 className="text-xl font-bold text-gray-900 text-left">
                      {section.title}
                    </h2>
                    {expandedSections[section.id] ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedSections[section.id] && (
                    <div className="prose prose-lg max-w-none">
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line bg-white p-6 rounded-xl border border-gray-100">
                        {section.content}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 border-t border-gray-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                  <User className="w-6 h-6 mr-2" />
                  Besoin d'aide ?
                </h3>
                <p className="text-gray-700 mb-6 text-lg">
                  Si vous avez des questions concernant ce document, notre équipe juridique est à votre disposition.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600">legal@linkup.fr</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <Phone className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Téléphone</h4>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Adresse</h4>
                    <p className="text-gray-600">123 Rue de l'Innovation<br />75001 Paris, France</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-100 rounded-xl border border-blue-200">
                  <p className="text-blue-800 text-sm">
                    <strong>Délégué à la Protection des Données (DPO) :</strong> dpo@linkup.fr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;