import React, { useState } from 'react';
import PatientTable from '../components/PatientTable';
import { Patient } from '../types';
import { useAuth } from '../context/AuthContext';
import { Calendar, Users, ClipboardList } from 'lucide-react';

// Mock patients data
const mockPatients: Patient[] = [
  {
    id: '1',
    userId: '2',
    firstName: 'Juan',
    lastName1: 'Pérez',
    lastName2: 'Gómez',
    socialSecurityNumber: '123456789012',
    dni: '12345678A',
    phone: '600111222',
    email: 'juan.perez@gmail.com'
  },
  {
    id: '2',
    userId: '5',
    firstName: 'María',
    lastName1: 'López',
    lastName2: 'Fernández',
    socialSecurityNumber: '987654321098',
    dni: '87654321B',
    phone: '600333444',
    email: 'maria.lopez@gmail.com'
  },
  {
    id: '3',
    userId: '6',
    firstName: 'Pedro',
    lastName1: 'Sánchez',
    lastName2: 'Martín',
    socialSecurityNumber: '456789012345',
    dni: '45678901C',
    phone: '600555666',
    email: 'pedro.sanchez@gmail.com'
  }
];

const DoctorDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'patients' | 'schedule' | 'records'>('patients');

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Bienvenido, {user?.name}
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Gestione los pacientes, consultas y registros médicos
            </p>
          </div>
          
          <div className="mb-6 bg-white dark:bg-gray-800 shadow rounded-lg transition-colors duration-300">
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg flex items-center transition-colors duration-300">
                <div className="bg-green-200 dark:bg-green-800 p-3 rounded-full transition-colors duration-300">
                  <Calendar className="h-6 w-6 text-green-700 dark:text-green-300" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-green-700 dark:text-green-300">Consultas hoy</p>
                  <p className="text-2xl font-semibold text-green-900 dark:text-green-100">8</p>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg flex items-center transition-colors duration-300">
                <div className="bg-blue-200 dark:bg-blue-800 p-3 rounded-full transition-colors duration-300">
                  <Users className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Total pacientes</p>
                  <p className="text-2xl font-semibold text-blue-900 dark:text-blue-100">145</p>
                </div>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg flex items-center transition-colors duration-300">
                <div className="bg-purple-200 dark:bg-purple-800 p-3 rounded-full transition-colors duration-300">
                  <ClipboardList className="h-6 w-6 text-purple-700 dark:text-purple-300" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-purple-700 dark:text-purple-300">Informes pendientes</p>
                  <p className="text-2xl font-semibold text-purple-900 dark:text-purple-100">3</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('patients')}
                  className={`${
                    activeTab === 'patients'
                      ? 'border-turquoise-500 text-turquoise-600 dark:text-turquoise-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Pacientes
                </button>
                <button
                  onClick={() => setActiveTab('schedule')}
                  className={`${
                    activeTab === 'schedule'
                      ? 'border-turquoise-500 text-turquoise-600 dark:text-turquoise-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Agenda
                </button>
                <button
                  onClick={() => setActiveTab('records')}
                  className={`${
                    activeTab === 'records'
                      ? 'border-turquoise-500 text-turquoise-600 dark:text-turquoise-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Historial Clínico
                </button>
              </nav>
            </div>
          </div>
          
          <div className="mt-6">
            {activeTab === 'patients' && (
              <PatientTable patients={mockPatients} />
            )}
            
            {activeTab === 'schedule' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Agenda del día</h2>
                <p className="text-gray-600 dark:text-gray-400">Funcionalidad de agenda en desarrollo</p>
              </div>
            )}
            
            {activeTab === 'records' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Historial Clínico</h2>
                <p className="text-gray-600 dark:text-gray-400">Funcionalidad de historial clínico en desarrollo</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;