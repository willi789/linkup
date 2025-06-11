import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Target, Shield, Heart, Star, CheckCircle, Zap, Globe, Award, TrendingUp, Clock, DollarSign, Sparkles, Leaf, HeartHandshake as Handshake, Eye, Play, ChevronDown, BarChart3, MessageSquare, Calendar, MapPin, Filter, Lightbulb, Rocket, Building, UserCheck, ArrowUpRight } from 'lucide-react';

const LandingPage = ({ setCurrentPage }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "2,847", label: "Freelances certifiés", icon: Users, color: "primary" },
    { number: "98%", label: "Taux de satisfaction", icon: Heart, color: "accent" },
    { number: "4,156", label: "Projets réalisés", icon: Target, color: "primary" },
    { number: "€2.3M", label: "Revenus générés", icon: DollarSign, color: "accent" }
  ];

  const features = [
    {
      icon: Zap,
      title: "Matching IA intelligent",
      description: "Notre algorithme analyse vos compétences, valeurs et préférences pour vous connecter avec les partenaires parfaits.",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Certifications vérifiées",
      description: "Tous nos membres sont certifiés : B-Corp, Label NR, Carbon Literacy... Zéro greenwashing.",
      color: "accent"
    },
    {
      icon: Globe,
      title: "Impact mesurable",
      description: "Suivez l'impact environnemental et social de vos collaborations avec des métriques transparentes.",
      color: "primary"
    },
    {
      icon: Handshake,
      title: "Collaboration simplifiée",
      description: "Outils intégrés pour gérer vos projets : messagerie, paiements, suivi, tout en un endroit.",
      color: "accent"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Créez votre profil",
      description: "Renseignez vos compétences, certifications et valeurs. Notre IA optimise votre visibilité.",
      icon: UserCheck,
      color: "primary"
    },
    {
      number: "02", 
      title: "Matching intelligent",
      description: "Recevez des propositions personnalisées basées sur vos critères et votre engagement.",
      icon: Zap,
      color: "accent"
    },
    {
      number: "03",
      title: "Collaborez & impactez",
      description: "Travaillez sur des projets qui ont du sens avec des outils de gestion intégrés.",
      icon: Rocket,
      color: "primary"
    }
  ];

  const testimonials = [
    {
      name: "Camille Dupont",
      role: "Designer UX/UI",
      company: "Freelance certifiée B-Corp",
      content: "Enfin une plateforme qui me permet de travailler uniquement avec des entreprises qui partagent mes valeurs ! Plus de compromis éthiques.",
      avatar: "CD",
      color: "primary",
      rating: 5,
      project: "Refonte d'une app de covoiturage"
    },
    {
      name: "Antoine Da Silva", 
      role: "DRH",
      company: "GreenTech Solutions",
      content: "LinkUp nous fait gagner un temps précieux. Les freelances proposés comprennent immédiatement notre mission RSE.",
      avatar: "AD",
      color: "accent", 
      rating: 5,
      project: "Développement d'une plateforme IoT"
    },
    {
      name: "Marie Laurent",
      role: "CEO",
      company: "EcoStart",
      content: "L'IA de matching est bluffante ! Elle nous propose exactement les profils dont nous avons besoin, avec les bonnes certifications.",
      avatar: "ML",
      color: "primary",
      rating: 5,
      project: "Stratégie marketing digital"
    },
    {
      name: "Thomas Bernard",
      role: "Développeur Full-Stack",
      company: "Freelance Green IT",
      content: "Mes revenus ont augmenté de 40% depuis que je travaille exclusivement avec des entreprises responsables via LinkUp.",
      avatar: "TB",
      color: "accent",
      rating: 5,
      project: "Application de tracking carbone"
    }
  ];

  const certifications = [
    { name: "B-Corp", count: "847", color: "primary" },
    { name: "Label NR", count: "623", color: "accent" },
    { name: "Carbon Literacy", count: "456", color: "primary" },
    { name: "ISO 26000", count: "234", color: "accent" },
    { name: "ODD Certified", count: "189", color: "primary" }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: "from-[#13538A] to-[#1C1C1C]", // YinMin Blue to Eerie Black
      accent: "from-[#F8CE4B] to-[#13538A]", // Sunglow to YinMin Blue
      light: "from-[#F3F3F3] to-white" // White Smoke to White
    };
    return colors[color] || colors.primary;
  };

  const getBgColorClasses = (color) => {
    const colors = {
      primary: "bg-[#13538A] text-white",
      accent: "bg-[#F8CE4B] text-[#1C1C1C]",
      light: "bg-[#F3F3F3] text-[#1C1C1C]"
    };
    return colors[color] || colors.primary;
  };

  const getTextColorClasses = (color) => {
    const colors = {
      primary: "text-[#13538A]",
      accent: "text-[#F8CE4B]",
      dark: "text-[#1C1C1C]",
      light: "text-[#F3F3F3]"
    };
    return colors[color] || colors.primary;
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Enhanced with new color scheme */}
      <section className="relative bg-gradient-to-br from-[#F3F3F3] via-white to-[#13538A]/10 py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#13538A]/20 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#F8CE4B]/30 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#13538A]/15 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#F8CE4B] to-[#F8CE4B]/80 rounded-full text-[#1C1C1C] text-sm font-bold mb-8 border border-[#F8CE4B]/30 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Plateforme #1 du freelancing responsable
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#1C1C1C] mb-8 leading-tight">
              Connectez les 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13538A] to-[#F8CE4B]"> projets éthiques</span>
              <br />aux 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8CE4B] to-[#13538A]"> freelances engagés</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#1C1C1C]/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              LinkUp révolutionne le freelancing en connectant uniquement des <strong className="text-[#13538A]">freelances certifiés</strong> 
              avec des <strong className="text-[#13538A]">entreprises responsables</strong>. Notre IA intelligente garantit des collaborations 
              alignées sur vos valeurs.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button 
                onClick={() => setCurrentPage('register')}
                className="group bg-gradient-to-r from-[#13538A] to-[#1C1C1C] text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:from-[#1C1C1C] hover:to-[#13538A] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
              >
                <Building className="mr-3 w-6 h-6" />
                Je recrute des talents
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button 
                onClick={() => setCurrentPage('search')}
                className="group border-3 border-[#13538A] text-[#13538A] px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-[#13538A] hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Users className="mr-3 w-6 h-6" />
                Je trouve des missions
                <ArrowUpRight className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-[#1C1C1C]/60">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-[#F8CE4B] mr-2" />
                <span className="font-medium">100% gratuit</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-[#13538A] mr-2" />
                <span className="font-medium">Certifications vérifiées</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 text-[#F8CE4B] mr-2" />
                <span className="font-medium">Matching IA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-[#1C1C1C]/40" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white" id="stats" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center p-6 rounded-2xl bg-gradient-to-br ${getColorClasses(stat.color)} bg-opacity-5 border border-[#13538A]/10 hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                <div className={`w-16 h-16 ${getBgColorClasses(stat.color)} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-2">{stat.number}</div>
                <div className="text-[#1C1C1C]/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-gradient-to-br from-[#F3F3F3] to-white" id="problem" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-8">
                Le freelancing traditionnel a un 
                <span className="text-red-600"> problème</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-red-600 font-bold">✗</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] mb-2">Projets sans éthique</h3>
                    <p className="text-[#1C1C1C]/70">Impossible de filtrer les entreprises polluantes ou non-responsables</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-red-600 font-bold">✗</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] mb-2">Matching approximatif</h3>
                    <p className="text-[#1C1C1C]/70">Algorithmes basés uniquement sur les compétences, pas sur les valeurs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-red-600 font-bold">✗</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] mb-2">Pas de transparence</h3>
                    <p className="text-[#1C1C1C]/70">Aucune vérification des engagements RSE des entreprises</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-8">
                LinkUp apporte la 
                <span className="text-[#F8CE4B]"> solution</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#F8CE4B]/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-[#F8CE4B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] mb-2">100% entreprises certifiées</h3>
                    <p className="text-[#1C1C1C]/70">Uniquement des entreprises B-Corp, labellisées ou certifiées RSE</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#F8CE4B]/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-[#F8CE4B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] mb-2">IA éthique avancée</h3>
                    <p className="text-[#1C1C1C]/70">Matching basé sur les compétences ET les valeurs partagées</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#F8CE4B]/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-[#F8CE4B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] mb-2">Impact mesurable</h3>
                    <p className="text-[#1C1C1C]/70">Suivi transparent de l'impact environnemental et social</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-20 bg-white" id="features" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
              Une plateforme pensée pour l'impact
            </h2>
            <p className="text-xl text-[#1C1C1C]/70 max-w-3xl mx-auto">
              Découvrez les fonctionnalités qui font de LinkUp la référence du freelancing responsable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-white to-[#F3F3F3] border border-[#13538A]/10 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className={`w-16 h-16 ${getBgColorClasses(feature.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">{feature.title}</h3>
                <p className="text-[#1C1C1C]/70 leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gradient-to-br from-[#13538A]/5 to-[#F8CE4B]/5" id="how-it-works" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-[#1C1C1C]/70">Un processus simple en 3 étapes</p>
          </div>

          <div className="relative">
            {/* Connection lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#13538A]/20 via-[#F8CE4B]/20 to-[#13538A]/20 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center group">
                  <div className={`w-24 h-24 bg-gradient-to-r ${getColorClasses(step.color)} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-[#F3F3F3] z-0">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">{step.title}</h3>
                  <p className="text-[#1C1C1C]/70 leading-relaxed text-lg">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white" id="certifications" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
              Certifications reconnues
            </h2>
            <p className="text-xl text-[#1C1C1C]/70">
              Nos membres sont certifiés par les organismes les plus exigeants
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className={`text-center p-6 rounded-2xl bg-gradient-to-br ${getColorClasses(cert.color)} bg-opacity-5 border border-[#13538A]/10 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                <div className="text-3xl font-bold text-[#1C1C1C] mb-2">{cert.count}</div>
                <div className="text-[#1C1C1C]/70 font-medium">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-br from-[#F3F3F3] to-white" id="testimonials" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
              Ils transforment leur carrière
            </h2>
            <p className="text-xl text-[#1C1C1C]/70">
              Découvrez les success stories de notre communauté
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-[#13538A]/10">
              <div className="flex items-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#F8CE4B] fill-current mr-1" />
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl text-[#1C1C1C] leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(testimonials[currentTestimonial].color)} rounded-2xl flex items-center justify-center mr-4 text-white font-bold text-xl shadow-lg`}>
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div>
                    <div className="font-bold text-[#1C1C1C] text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-[#1C1C1C]/70">{testimonials[currentTestimonial].role}</div>
                    <div className="text-sm text-[#1C1C1C]/50">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[#1C1C1C]/50 mb-1">Dernier projet</div>
                  <div className="font-medium text-[#1C1C1C]/70">{testimonials[currentTestimonial].project}</div>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? 'bg-[#13538A] w-8' : 'bg-[#1C1C1C]/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white" id="social-proof" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
              Ils nous font confiance
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-40">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="h-16 bg-[#F3F3F3] rounded-lg flex items-center justify-center border border-[#13538A]/10">
                <span className="text-[#1C1C1C]/40 font-semibold">Logo {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-[#13538A]/5 to-[#F8CE4B]/5" id="pricing" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
              Gratuit pour commencer
            </h2>
            <p className="text-xl text-[#1C1C1C]/70">
              Créez votre compte et commencez à collaborer dès aujourd'hui
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#13538A]/10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">Freelances</h3>
                <div className="text-5xl font-bold text-[#13538A] mb-2">0€</div>
                <div className="text-[#1C1C1C]/70">Toujours gratuit</div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#F8CE4B] mr-3" />
                  <span>Profil illimité</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#F8CE4B] mr-3" />
                  <span>Matching IA</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#F8CE4B] mr-3" />
                  <span>Messagerie intégrée</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#F8CE4B] mr-3" />
                  <span>Paiements sécurisés</span>
                </li>
              </ul>
              <button 
                onClick={() => setCurrentPage('register')}
                className="w-full mt-8 bg-[#13538A] text-white py-4 rounded-xl font-semibold hover:bg-[#1C1C1C] transition-colors duration-200"
              >
                Créer mon profil freelance
              </button>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#F8CE4B]/30 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#F8CE4B] to-[#13538A] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Populaire
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">Entreprises</h3>
                <div className="text-5xl font-bold text-[#F8CE4B] mb-2">5%</div>
                <div className="text-[#1C1C1C]/70">Commission sur projets réussis</div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#13538A] mr-3" />
                  <span>Projets illimités</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#13538A] mr-3" />
                  <span>Matching IA premium</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#13538A] mr-3" />
                  <span>Support prioritaire</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#13538A] mr-3" />
                  <span>Analytics avancés</span>
                </li>
              </ul>
              <button 
                onClick={() => setCurrentPage('register')}
                className="w-full mt-8 bg-gradient-to-r from-[#F8CE4B] to-[#13538A] text-white py-4 rounded-xl font-semibold hover:from-[#13538A] hover:to-[#1C1C1C] transition-all duration-200"
              >
                Publier mon premier projet
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" id="faq" data-animate>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Comment LinkUp vérifie-t-elle les certifications ?",
                a: "Nous vérifions manuellement chaque certification avec les organismes émetteurs. Nos équipes contrôlent la validité et l'authenticité de chaque label."
              },
              {
                q: "Quels types d'entreprises sont acceptées ?",
                a: "Uniquement les entreprises certifiées B-Corp, labellisées (Label NR, Lucie, etc.) ou ayant des certifications RSE reconnues. Nous refusons toute entreprise du secteur polluant."
              },
              {
                q: "Comment fonctionne l'IA de matching ?",
                a: "Notre algorithme analyse vos compétences, expériences, valeurs et préférences pour vous proposer les collaborations les plus pertinentes. Plus vous utilisez la plateforme, plus les suggestions s'affinent."
              },
              {
                q: "LinkUp prend-elle une commission ?",
                a: "Gratuit pour les freelances. Les entreprises paient 5% de commission uniquement sur les projets aboutis, garantissant un service de qualité."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#F3F3F3] rounded-2xl p-6 hover:bg-[#13538A]/5 transition-colors duration-200 border border-[#13538A]/10">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">{faq.q}</h3>
                <p className="text-[#1C1C1C]/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#13538A] via-[#1C1C1C] to-[#13538A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8CE4B]/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Prêt à révolutionner votre façon de travailler ?
          </h2>
          <p className="text-xl md:text-2xl text-[#F3F3F3] mb-12 leading-relaxed">
            Rejoignez <strong className="text-[#F8CE4B]">2,847 freelances</strong> et <strong className="text-[#F8CE4B]">1,156 entreprises</strong> qui construisent 
            un avenir plus responsable. Votre prochaine collaboration vous attend.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setCurrentPage('register')}
              className="group bg-[#F8CE4B] text-[#1C1C1C] px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center"
            >
              <Rocket className="mr-3 w-6 h-6" />
              Commencer gratuitement
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button 
              onClick={() => setCurrentPage('search')}
              className="group border-2 border-[#F8CE4B] text-[#F8CE4B] px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#F8CE4B] hover:text-[#1C1C1C] transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Eye className="mr-3 w-6 h-6" />
              Découvrir les talents
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-[#F3F3F3]">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#F8CE4B]" />
              <span>Inscription en 2 minutes</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-[#F8CE4B]" />
              <span>100% sécurisé</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-5 h-5 mr-2 text-[#F8CE4B]" />
              <span>Support humain</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;