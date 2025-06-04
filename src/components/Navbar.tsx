import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';
import { Stethoscope as stethoscope } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <stethoscope className="h-8 w-8 text-turquoise-500 dark:text-turquoise-400" />
              <span className="ml-2 text-xl font-bold text-turquoise-700 dark:text-turquoise-300">
                ProSaludEX
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <Link 
                to="/servicios" 
                className="text-gray-700 dark:text-gray-300 hover:text-turquoise-600 dark:hover:text-turquoise-400 px-3 py-2 rounded-md font-medium transition-colors duration-200"
              >
                Servicios
              </Link>
              <Link 
                to="/profesionales" 
                className="text-gray-700 dark:text-gray-300 hover:text-turquoise-600 dark:hover:text-turquoise-400 px-3 py-2 rounded-md font-medium transition-colors duration-200"
              >
                Profesionales
              </Link>
              <Link 
                to="/sobre-nosotros" 
                className="text-gray-700 dark:text-gray-300 hover:text-turquoise-600 dark:hover:text-turquoise-400 px-3 py-2 rounded-md font-medium transition-colors duration-200"
              >
                Sobre Nosotros
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to={user.role === 'patient' ? '/paciente/perfil' : '/medico/perfil'} 
                  className="text-gray-700 dark:text-gray-300 hover:text-turquoise-600 dark:hover:text-turquoise-400"
                >
                  Mi Perfil
                </Link>
                <button 
                  onClick={logout}
                  className="bg-turquoise-600 hover:bg-turquoise-700 text-white dark:bg-turquoise-700 dark:hover:bg-turquoise-800 px-4 py-2 rounded-md transition-all duration-300 hover:shadow-glow-turquoise"
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/login" 
                  className="text-gray-700 dark:text-gray-300 hover:text-turquoise-600 dark:hover:text-turquoise-400"
                >
                  Iniciar Sesión
                </Link>
                <Link 
                  to="/registro" 
                  className="bg-turquoise-600 hover:bg-turquoise-700 text-white dark:bg-turquoise-700 dark:hover:bg-turquoise-800 px-4 py-2 rounded-md transition-all duration-300 hover:shadow-glow-turquoise"
                >
                  Registro
                </Link>
              </div>
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;