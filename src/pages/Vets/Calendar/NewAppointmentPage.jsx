import NewAppointmentModal from './components/NewAppointmentModal/NewAppointmentModal';
import { useLocation, useNavigate } from 'react-router-dom';

const NewAppointmentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const patientData = location.state?.patientData;

  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <NewAppointmentModal
      isOpen={true}
      onClose={handleClose}
      selectedDate={new Date()}
      selectedTime=""
      setSelectedTime={() => {}}
      initialPatientData={patientData}
    />
  );
};

export default NewAppointmentPage; 