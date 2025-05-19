import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import VetDashboard from '../pages/Vets/Dashboard';
import OwnerDashboard from '../pages/Owners/Dashboard';
import CalendarPage from '../pages/Vets/Calendar/CalendarPage';
import NewPatientPage from '../pages/Vets/NewPatient/NewPatientPage';
import PatientsPage from '../pages/Vets/Patients/PatientsPage';
import ProtectedRoute from './ProtectedRoute';

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
        <Route path="new-patient" element={<NewPatientPage />} />
        <Route path="patients" element={<PatientsPage />} />
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