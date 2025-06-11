import React, { useState } from 'react';
import { Users, Target, Eye, EyeOff, Mail, Lock, User, Building, Shield, CheckCircle, Star, ArrowRight, Zap, Heart } from 'lucide-react';

const AuthPage = ({ type, setCurrentPage }) => {
  const isLogin = type === 'login';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState(null);

  const benefits = [
    {
      icon: Zap,
      title: "Matching IA intelligent",
      description: "Trouvez les collaborations parfaites grâce à notre algorithme avancé"
    },
    {
      icon: Shield,
      title: "100% certifié",
      description: "Tous nos membres sont vérifiés et certifiés responsables"
    },
    {
      icon: Heart,
      title: "Impact positif",
      description: "Chaque collaboration contribue à un avenir plus durable"
    }
  ];

  const testimonials = [
    {
      name: "Camille D.",
      role: "Designer",
      content: "Enfin une plateforme qui correspond à mes valeurs !",
      rating: 5
    },
    {
      name: "Thomas B.",
      role: "Développeur",
      content: "Mes revenus ont augmenté de 40% depuis LinkUp.",
      rating: 5
    }
  ];

  const stats = [
    { number: "2,847", label: "Freelances" },
    { number: "98%", label: "Satisfaction" },
    { number: "€2.3M", label: "Revenus générés" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
      </div>

      <div className="relative min-h-screen flex">
        {/* Left Side - Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 backdrop-blur-sm">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {isLogin ? 'Bon retour !' : 'Rejoignez LinkUp'}
                </h1>
                <p className="text-gray-600">
                  {isLogin ? 'Retrouvez votre espace LinkUp' : 'Créez votre compte en quelques clics'}
                </p>
              </div>

              {/* User Type Selection for Registration */}
              {!isLogin && !selectedUserType && (
                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-6">
                    Quel est votre profil ?
                  </h3>
                  
                  <button 
                    onClick={() => setSelectedUserType('freelance')}
                    className="w-full p-6 border-2 border-blue-600 rounded-2xl hover:bg-blue-50 transition-all duration-200 text-left group transform hover:scale-105"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-200">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-600 text-lg">Freelance</h4>
                        <p className="text-sm text-gray-600">Je cherche des missions alignées avec mes valeurs</p>
                      </div>
                    </div>
                  </button>
                  
                  <button 
                    onClick={() => setSelectedUserType('company')}
                    className="w-full p-6 border-2 border-cyan-500 rounded-2xl hover:bg-cyan-50 transition-all duration-200 text-left group transform hover:scale-105"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-cyan-200 transition-colors duration-200">
                        <Target className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-cyan-600 text-lg">Entreprise</h4>
                        <p className="text-sm text-gray-600">Je recrute des talents engagés et responsables</p>
                      </div>
                    </div>
                  </button>
                </div>
              )}

              {/* Form */}
              {(isLogin || selectedUserType) && (
                <form className="space-y-6">
                  {!isLogin && selectedUserType && (
                    <div className="text-center mb-6">
                      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                        selectedUserType === 'freelance' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-cyan-100 text-cyan-700'
                      }`}>
                        {selectedUserType === 'freelance' ? <Users className="w-4 h-4 mr-2" /> : <Target className="w-4 h-4 mr-2" />}
                        Inscription {selectedUserType === 'freelance' ? 'Freelance' : 'Entreprise'}
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedUserType(null)}
                        className="text-sm text-gray-500 hover:text-gray-700 ml-4"
                      >
                        Changer
                      </button>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mot de passe
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {isLogin && (
                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                        />
                        <span className="text-sm text-gray-600">Se souvenir de moi</span>
                      </label>
                      <button type="button" className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200">
                        Mot de passe oublié ?
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    {isLogin ? 'Se connecter' : 'Créer mon compte'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              )}

              {/* Legal Notice for Registration */}
              {!isLogin && selectedUserType && (
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-sm text-blue-700 text-center">
                    En créant un compte, vous acceptez nos{' '}
                    <button onClick={() => setCurrentPage('terms')} className="underline hover:no-underline font-medium">
                      conditions d'utilisation
                    </button>{' '}
                    et notre{' '}
                    <button onClick={() => setCurrentPage('privacy')} className="underline hover:no-underline font-medium">
                      politique de confidentialité
                    </button>
                  </p>
                </div>
              )}

              {/* Toggle Login/Register */}
              <div className="text-center mt-8">
                <p className="text-gray-600">
                  {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}
                  <button 
                    onClick={() => setCurrentPage(isLogin ? "register" : "login")} 
                    className="text-blue-600 hover:text-blue-700 ml-1 font-medium transition-colors duration-200"
                  >
                    {isLogin ? "S'inscrire" : "Se connecter"}
                  </button>
                </p>
              </div>

              {/* Social Proof */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-4">Ils nous font confiance</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {stats.map((stat, index) => (
                      <div key={index}>
                        <div className="text-lg font-bold text-gray-900">{stat.number}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Benefits & Testimonials */}
        <div className="hidden lg:flex flex-1 items-center justify-center p-8">
          <div className="max-w-lg">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pourquoi choisir LinkUp ?
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Ce qu'ils en disent</h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;