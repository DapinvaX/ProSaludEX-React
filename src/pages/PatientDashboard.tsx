import React, { useState } from 'react';
import AppointmentForm from '../components/AppointmentForm';
import AppointmentTable from '../components/AppointmentTable';
import { Appointment, Doctor } from '../types';
import { useAuth } from '../context/AuthContext';

// Mock doctors data
const mockDoctors: Doctor[] = [
  {
    id: '1',
    userId: '1',
    firstName: 'Ana',
    lastName: 'García',
    speciality: 'Cardiología',
    phone: '600123456',
    email: 'ana.garcia@prosaludex.com'
  },
  {
    id: '2',
    userId: '3',
    firstName: 'Carlos',
    lastName: 'Rodríguez',
    speciality: 'Dermatología',
    phone: '600789012',
    email: 'carlos.rodriguez@prosaludex.com'
  },
  {
    id: '3',
    userId: '4',
    firstName: 'Laura',
    lastName: 'Martínez',
    speciality: 'Pediatría',
    phone: '600345678',
    email: 'laura.martinez@prosaludex.com'
  }
];

// Mock appointments data
const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    doctorId: '1',
    date: '2023-05-15',
    time: '10:00',
    reason: 'Dolor en el pecho y dificultad para respirar',
    treatment: 'Nitroglicerina 0.5mg sublingual según necesidad',
    status: 'completed'
  },
  {
    id: '2',
    patientId: '1',
    doctorId: '2',
    date: '2023-06-20',
    time: '11:30',
    reason: 'Erupción cutánea en brazos',
    treatment: 'Crema de hidrocortisona 1% aplicar 2 veces al día',
    status: 'completed'
  },
  {
    id: '3',
    patientId: '1',
    doctorId: '3',
    date: '2023-07-10',
    time: '09:00',
    reason: 'Revisión anual',
    treatment: '',
    status: 'scheduled'
  }
];

const PatientDashboard: React.FC = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
  const [activeTab, setActiveTab] = useState<'appointments' | 'newAppointment'>('appointments');

  const handleNewAppointment = (appointmentData: any) => {
    const newAppointment: Appointment = {
      id: (appointments.length + 1).toString(),
      patientId: '1', // Assuming current user
      doctorId: appointmentData.doctorId,
      date: appointmentData.date,
      time: appointmentData.time,
      reason: appointmentData.reason,
      treatment: '',
      status: 'scheduled'
    };
    
    setAppointments([...appointments, newAppointment]);
    setActiveTab('appointments');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Bienvenido, {user?.name}
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Gestiona tus citas médicas y consulta tu historial clínico
            </p>
          </div>
          
          <div className="mb-6">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('appointments')}
                  className={`${
                    activeTab === 'appointments'
                      ? 'border-turquoise-500 text-turquoise-600 dark:text-turquoise-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Mis Citas
                </button>
                <button
                  onClick={() => setActiveTab('newAppointment')}
                  className={`${
                    activeTab === 'newAppointment'
                      ? 'border-turquoise-500 text-turquoise-600 dark:text-turquoise-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Nueva Cita
                </button>
              </nav>
            </div>
          </div>
          
          <div className="mt-6">
            {activeTab === 'appointments' ? (
              <AppointmentTable appointments={appointments} doctors={mockDoctors} />
            ) : (
              <AppointmentForm onSubmit={handleNewAppointment} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;