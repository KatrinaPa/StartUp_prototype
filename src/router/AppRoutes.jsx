import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import VetDashboard from '../pages/Vets/Dashboard';
import OwnerDashboard from '../pages/Owners/Dashboard';
import CalendarPage from '../pages/Vets/Calendar/CalendarPage';
import NewPatientPage from '../pages/Vets/NewPatient/NewPatientPage';
import PatientsPage from '../pages/Vets/Patients/PatientsPage';
import PatientProfilePage from '../pages/Vets/Patients/PatientProfilePage';
import ProtectedRoute from './ProtectedRoute';
import NewAppointmentPage from '../pages/Vets/Calendar/NewAppointmentPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      {/* Vet Routes */}
      <Route path="/vet" element={
        <ProtectedRoute userType="vet">
          <VetDashboard />
        </ProtectedRoute>
      }>
        <Route index element={<Navigate to="calendar" replace />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="calendar/new" element={
          <ProtectedRoute userType="vet">
            <NewAppointmentPage />
          </ProtectedRoute>
        } />
        <Route path="new-patient" element={<NewPatientPage />} />
        <Route path="patients">
          <Route index element={<PatientsPage />} />
          <Route path=":id" element={<PatientProfilePage />} />
        </Route>
      </Route>
      
      {/* Owner Routes */}
      <Route path="/owner" element={
        <ProtectedRoute userType="owner">
          <OwnerDashboard />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default AppRoutes; 