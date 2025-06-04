import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registro" element={<RegisterPage />} />
                <Route path="/servicios" element={<div className="p-10">Página de Servicios</div>} />
                <Route path="/profesionales" element={<div className="p-10">Página de Profesionales</div>} />
                <Route path="/sobre-nosotros" element={<div className="p-10">Página Sobre Nosotros</div>} />
                
                {/* Protected routes for patients */}
                <Route 
                  path="/paciente/perfil" 
                  element={
                    <ProtectedRoute allowedRoles={['patient']}>
                      <PatientDashboard />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Protected routes for doctors */}
                <Route 
                  path="/medico/perfil" 
                  element={
                    <ProtectedRoute allowedRoles={['doctor']}>
                      <DoctorDashboard />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Unauthorized and not found pages */}
                <Route path="/unauthorized" element={<div className="p-10">No autorizado</div>} />
                <Route path="*" element={<div className="p-10">Página no encontrada</div>} />
              </Routes>
            </main>
            <footer className="bg-white dark:bg-gray-800 shadow-inner py-6 transition-colors duration-300">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-gray-500 dark:text-gray-400">
                  © 2023 ProSaludEX. Todos los derechos reservados.
                </p>
              </div>
            </footer>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;