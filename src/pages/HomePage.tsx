import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Heart, Users, Calendar } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative bg-white dark:bg-gray-800 overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white dark:bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 transition-colors duration-300">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-gray-800 transform translate-x-1/2 transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl transition-colors duration-300">
                  <span className="block xl:inline">Cuidando tu salud con</span>{' '}
                  <span className="block text-turquoise-600 dark:text-turquoise-400 xl:inline transition-colors duration-300">excelencia médica</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 transition-colors duration-300">
                  En ProSaludEX nos comprometemos a brindarte la mejor atención sanitaria con profesionales altamente cualificados y tecnología de vanguardia.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/registro"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-turquoise-600 hover:bg-turquoise-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:shadow-glow-turquoise"
                    >
                      Regístrate
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/servicios"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-turquoise-700 dark:text-turquoise-300 bg-turquoise-100 dark:bg-turquoise-900 hover:bg-turquoise-200 dark:hover:bg-turquoise-800 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
                    >
                      Nuestros servicios
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Equipo médico profesional"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-turquoise-600 dark:text-turquoise-400 font-semibold tracking-wide uppercase transition-colors duration-300">Beneficios</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors duration-300">
              Atención médica de calidad
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto transition-colors duration-300">
              Descubre por qué miles de pacientes confían en ProSaludEX para el cuidado de su salud.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-turquoise-500 dark:bg-turquoise-600 text-white transition-colors duration-300">
                    <Users className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white transition-colors duration-300">Profesionales expertos</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  Contamos con un equipo de médicos especialistas con amplia experiencia en sus respectivos campos.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-turquoise-500 dark:bg-turquoise-600 text-white transition-colors duration-300">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white transition-colors duration-300">Citas flexibles</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  Programa tus citas en horarios convenientes para ti, incluyendo consultas de tarde y sábados.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-turquoise-500 dark:bg-turquoise-600 text-white transition-colors duration-300">
                    <Heart className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white transition-colors duration-300">Cuidado integral</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  Ofrecemos un enfoque holístico de la salud, atendiendo todos los aspectos de tu bienestar físico y mental.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-turquoise-500 dark:bg-turquoise-600 text-white transition-colors duration-300">
                    <Check className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white transition-colors duration-300">Seguimiento constante</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  Realizamos un seguimiento personalizado de cada paciente para garantizar resultados óptimos en su salud.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-turquoise-700 dark:bg-turquoise-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">¿Listo para cuidar tu salud?</span>
            <span className="block text-turquoise-200">Regístrate hoy y agenda tu primera consulta.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/registro"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-turquoise-700 bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                Comenzar ahora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;