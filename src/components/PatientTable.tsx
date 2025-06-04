import React, { useState } from 'react';
import { Patient } from '../types';
import { Search, Filter } from 'lucide-react';

interface PatientTableProps {
  patients: Patient[];
}

const PatientTable: React.FC<PatientTableProps> = ({ patients }) => {
  const [searchField, setSearchField] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filter patients based on search term and field
  const filteredPatients = patients.filter(patient => {
    if (!searchTerm) return true;
    
    const term = searchTerm.toLowerCase();
    
    switch (searchField) {
      case 'socialSecurityNumber':
        return patient.socialSecurityNumber.toLowerCase().includes(term);
      case 'firstName':
        return patient.firstName.toLowerCase().includes(term);
      case 'lastName1':
        return patient.lastName1.toLowerCase().includes(term);
      case 'lastName2':
        return patient.lastName2.toLowerCase().includes(term);
      case 'dni':
        return patient.dni.toLowerCase().includes(term);
      case 'all':
      default:
        return (
          patient.firstName.toLowerCase().includes(term) ||
          patient.lastName1.toLowerCase().includes(term) ||
          patient.lastName2.toLowerCase().includes(term) ||
          patient.socialSecurityNumber.toLowerCase().includes(term) ||
          patient.dni.toLowerCase().includes(term)
        );
    }
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Directorio de Pacientes</h2>
        
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar pacientes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-colors duration-200"
            />
          </div>
          
          <div className="w-full md:w-64">
            <select
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-colors duration-200"
            >
              <option value="all">Todos los campos</option>
              <option value="socialSecurityNumber">Nº Seguridad Social</option>
              <option value="firstName">Nombre</option>
              <option value="lastName1">Primer Apellido</option>
              <option value="lastName2">Segundo Apellido</option>
              <option value="dni">DNI</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Nº Seguridad Social
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                DNI
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Primer Apellido
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Segundo Apellido
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Contacto
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {patient.socialSecurityNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {patient.dni}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {patient.firstName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {patient.lastName1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {patient.lastName2}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {patient.phone}<br />
                    {patient.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-turquoise-600 hover:text-turquoise-900 dark:text-turquoise-400 dark:hover:text-turquoise-300 mr-3 transition-colors duration-200">
                      Ver Historial
                    </button>
                    <button className="text-turquoise-600 hover:text-turquoise-900 dark:text-turquoise-400 dark:hover:text-turquoise-300 transition-colors duration-200">
                      Nueva Cita
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                  No se encontraron pacientes con los criterios de búsqueda actuales
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientTable;