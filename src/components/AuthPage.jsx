import React, { useState } from 'react';
import { Users, Target, Eye, EyeOff, Mail, Lock, User, Building } from 'lucide-react';

const AuthPage = ({ type, setCurrentPage }) => {
  const isLogin = type === 'login';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="py-12 min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Bon retour !' : 'Rejoignez LinkUp'}
            </h1>
            <p className="text-gray-600">
              {isLogin ? 'Retrouvez votre espace LinkUp' : 'Créez votre compte en quelques clics'}
            </p>
          </div>

          {!isLogin && (
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button 
                onClick={() => setCurrentPage('register-freelance')}
                className="p-6 border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-200 text-center group transform hover:scale-105"
              >
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                <p className="font-semibold text-blue-600 mb-1">Freelance</p>
                <p className="text-xs text-gray-600">Je cherche des missions</p>
              </button>
              <button 
                onClick={() => setCurrentPage('register-company')}
                className="p-6 border-2 border-green-600 rounded-xl hover:bg-green-50 transition-all duration-200 text-center group transform hover:scale-105"
              >
                <Target className="w-8 h-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                <p className="font-semibold text-green-600 mb-1">Entreprise</p>
                <p className="text-xs text-gray-600">Je recrute des talents</p>
              </button>
            </div>
          )}

          <form className="space-y-6">
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
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {isLogin ? 'Se connecter' : 'Créer mon compte'}
            </button>
          </form>

          {!isLogin && (
            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-700 text-center">
                En créant un compte, vous acceptez nos{' '}
                <button onClick={() => setCurrentPage('terms')} className="underline hover:no-underline">
                  conditions d'utilisation
                </button>{' '}
                et notre{' '}
                <button onClick={() => setCurrentPage('privacy')} className="underline hover:no-underline">
                  politique de confidentialité
                </button>
              </p>
            </div>
          )}

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

          {/* Social proof */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">Ils nous font confiance</p>
              <div className="flex justify-center items-center space-x-6 opacity-60">
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;