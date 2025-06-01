import { useState } from 'react';
import { Button, NotificationPreferences } from '../../../../../components/common';
import { 
  AppointmentDateSection,
  AppointmentDetailsSection,
  NotesSection,
} from './sections';

const EditAppointmentModal = ({ 
  isOpen, 
  onClose, 
  appointment,
  onSave 
}) => {
  const [editedAppointment, setEditedAppointment] = useState(appointment);
  const [notes, setNotes] = useState('Vizītes piezīmes šeit...');
  const [notificationPrefs, setNotificationPrefs] = useState({
    smsReminder: false,
    emailReminder: true,
    phoneCall: false
  });

  const handleSave = () => {
    onSave({
      ...editedAppointment,
      notes,
      notificationPrefs
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-primary rounded-2xl w-full max-w-3xl max-h-[100vh] overflow-y-auto p-8 py-6">
        <h3 className="text-text-dark text-2xl font-bold mb-4">Vizītes detaļas</h3>
        
        <div className="space-y-6">
          <AppointmentDateSection 
            appointment={editedAppointment}
            onChange={setEditedAppointment}
          />

          <AppointmentDetailsSection 
            appointment={editedAppointment}
            onChange={setEditedAppointment}
          />

          <NotesSection 
            value={notes}
            onChange={setNotes}
          />

          <NotificationPreferences
            preferences={notificationPrefs}
            setPreferences={setNotificationPrefs}
          />

          <div className="flex justify-end gap-3 mt-6">
            <Button variant="secondary" onClick={onClose}>
              Aizvērt
            </Button>
            <Button onClick={handleSave}>
              Saglabāt
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAppointmentModal; 