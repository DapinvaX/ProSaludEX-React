import React, { useState } from 'react';
import { Doctor } from '../types';

// Mock data for doctors
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

// Generate available time slots
const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00'
];

interface AppointmentFormProps {
  onSubmit: (data: any) => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onSubmit }) => {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  
  // Get tomorrow's date as the minimum selectable date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];
  
  // Get date 3 months from now as the maximum selectable date
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onSubmit({
      doctorId: doctor,
      date,
      time,
      reason
    });
    
    // Reset form
    setDoctor('');
    setDate('');
    setTime('');
    setReason('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Solicitar Nueva Cita</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Profesional
          </label>
          <select
            id="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-colors duration-200"
          >
            <option value="">Seleccione un profesional</option>
            {mockDoctors.map(doctor => (
              <option key={doctor.id} value={doctor.id}>
                Dr. {doctor.firstName} {doctor.lastName} - {doctor.speciality}
              </option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Fecha
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={minDate}
              max={maxDateStr}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-colors duration-200"
            />
          </div>
          
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Hora
            </label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-colors duration-200"
            >
              <option value="">Seleccione una hora</option>
              {timeSlots.map(slot => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Motivo de la consulta
          </label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={4}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-colors duration-200"
            placeholder="Describa brevemente el motivo de su consulta"
          ></textarea>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-turquoise-600 hover:bg-turquoise-700 text-white font-medium rounded-md transition-all duration-300 hover:shadow-glow-turquoise transform hover:scale-105"
          >
            Solicitar Cita
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;