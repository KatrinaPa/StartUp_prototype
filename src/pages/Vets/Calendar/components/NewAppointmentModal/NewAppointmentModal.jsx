import { useState } from 'react';
import Button from '../../../../../components/common/Button';
import { DateTimeSection, VetSelection, ExistingPatientSection, NewPatientSection, OwnerDetailsSection, NotesSection, NotificationPreferences } from './sections';

export default function NewAppointmentModal({ 
  isOpen,
  onClose,
  selectedDate,
  selectedTime,
  setSelectedTime
}) {
  // Form state
  const [formData, setFormData] = useState({
    vet: '',
    existingPatient: {
      name: '',
      owner: ''
    },
    newPatient: {
      name: '',
      type: '',
      otherType: ''
    },
    owner: {
      name: '',
      phone: '',
      email: ''
    },
    notes: '',
    notificationPrefs: {
      smsReminder: false,
      emailReminder: false,
      phoneCall: false
    }
  });

  const handleFormChange = (section, field) => (value) => {
    setFormData(prev => ({
      ...prev,
      [section]: typeof field === 'string'
        ? { ...prev[section], [field]: value }
        : value
    }));
  };

  const handleSave = () => {
    // TODO: Validate form data
    console.log('Saving appointment:', {
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-lighter-grey rounded-2xl w-full max-w-3xl max-h-[100vh] overflow-y-auto p-8">
        <h3 className="text-text-dark text-2xl font-bold mb-6">Jauna vizīte</h3>
        
        <div className="space-y-4">
          <div className="text-text-dark grid grid-cols-3 gap-6 pb-6 border-b border-border-light">
            <DateTimeSection
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
            <VetSelection
              value={formData.vet}
              onChange={(e) => handleFormChange('vet')(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-6 pb-6 border-b border-border-light">
            <ExistingPatientSection
              patient={formData.existingPatient}
              onChange={handleFormChange('existingPatient')}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <NewPatientSection
              patient={formData.newPatient}
              onChange={handleFormChange('newPatient')}
            />
          </div>

          <div className="grid grid-cols-3 gap-6 pb-6 border-b border-border-light">
            <OwnerDetailsSection
              owner={formData.owner}
              onChange={handleFormChange('owner')}
            />
          </div>

          <div className="pb-4 border-b border-border-light">
            <NotesSection
                value={formData.notes}
                onChange={(e) => handleFormChange('notes')(e.target.value)}
            />
          </div>
          
          <NotificationPreferences
            preferences={formData.notificationPrefs}
            setPreferences={handleFormChange('notificationPrefs')}
          />
        </div>

        <div className="flex justify-end gap-4 mt-2">
          <Button variant="secondary" onClick={onClose}>
            Atcelt
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Saglabāt
          </Button>
        </div>
      </div>
    </div>
  );
} 