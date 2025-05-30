import { useState } from 'react';
import { Modal, Button, TimeSelect } from '../../../../../components/common';
import { formatDate } from '../../../../../utils/dateUtils';

const EditAppointmentModal = ({ 
  isOpen, 
  onClose, 
  appointment,
  onSave 
}) => {
  const [editedAppointment, setEditedAppointment] = useState(appointment);

  const handleSave = () => {
    onSave(editedAppointment);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Rediģēt vizīti"
    >
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Pacients</h3>
          <p>{editedAppointment.petName} ({editedAppointment.ownerName})</p>
        </div>

        <div>
          <h3 className="font-medium">Datums</h3>
          <p>{formatDate(new Date(editedAppointment.date))}</p>
        </div>

        <div>
          <h3 className="font-medium">Laiks</h3>
          <TimeSelect
            value={editedAppointment.time}
            onChange={(time) => setEditedAppointment({
              ...editedAppointment,
              time
            })}
          />
        </div>

        <div>
          <h3 className="font-medium">Vizītes veids</h3>
          <select
            value={editedAppointment.type}
            onChange={(e) => setEditedAppointment({
              ...editedAppointment,
              type: e.target.value
            })}
            className="w-full rounded-lg border-gray-300"
          >
            <option value="Vakcinācija">Vakcinācija</option>
            <option value="Konsultācija">Konsultācija</option>
            <option value="Apskate">Apskate</option>
            <option value="Operācija">Operācija</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button variant="secondary" onClick={onClose}>
            Atcelt
          </Button>
          <Button onClick={handleSave}>
            Saglabāt
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditAppointmentModal; 