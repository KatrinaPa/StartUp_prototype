import { useState } from 'react'
import { format } from 'date-fns'
import { lv } from 'date-fns/locale'
import { FaEdit } from 'react-icons/fa'
import { translatePetType } from '../../Patients/petTypeUtils'

export default function AppointmentDetailsModal({ appointment, onClose }) {
  const [notes, setNotes] = useState('Vizītes piezīmes šeit...')
  
  // Get pet name and type from the title (before the " - ")
  const [fullPetInfo, reason] = appointment.title.split(' - ')
  // Get pet name and type separately
  const [petName, petType] = fullPetInfo.split(' (')
  const petTypeClean = petType?.replace(')', '') || ''

  const [notificationPrefs, setNotificationPrefs] = useState({
    smsReminder: false,
    emailReminder: true,
    phoneCall: false
  })

  return (
    <div className="modal-overlay">
      <div className="appointment-modal">
        <h3>Vizītes detaļas</h3>
        <div className="modal-content">
          <div className="form-row-calendar three-columns divider">
            <div className="form-group">
              <label>Datums:</label>
              <input 
                type="text" 
                value={format(new Date(appointment.start), 'dd.MM.yyyy', { locale: lv })} 
                readOnly 
              />
            </div>
            <div className="form-group">
              <label>Laiks:</label>
              <input 
                type="text" 
                value={`${format(new Date(appointment.start), 'HH:mm')} - ${format(new Date(appointment.end), 'HH:mm')}`} 
                readOnly 
              />
            </div>
            <div className="form-group">
              <label>Veterinārārsts:</label>
              <input type="text" value="Dr. Anna Kļaviņa" readOnly />
            </div>
          </div>

          <div className="form-row-calendar two-columns divider">
            <div className="form-group">
              <label>Pacients:</label>
              <input 
                type="text" 
                value={`${petName} (${translatePetType(petTypeClean)})`}
                readOnly 
              />
            </div>
            <div className="form-group">
              <label>Procedūra:</label>
              <input type="text" value={reason} readOnly />
            </div>
          </div>

          <div className="form-row-calendar">
            <div className="form-group">
              <label>Piezīmes:</label>
              <textarea
                defaultValue={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="notes-input"
                placeholder="Pievienot piezīmes..."
              />
            </div>
          </div>

          {/* Notification preferences */}
          <div className="notification-prefs">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={notificationPrefs.smsReminder}
                onChange={(e) => setNotificationPrefs(prev => ({
                  ...prev,
                  smsReminder: e.target.checked
                }))}
              />
              <span>Nosūtīt īpašniekam atgādinājumu sms</span>
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={notificationPrefs.emailReminder}
                onChange={(e) => setNotificationPrefs(prev => ({
                  ...prev,
                  emailReminder: e.target.checked
                }))}
              />
              <span>Nosūtīt īpašniekam atgādinājumu epastā</span>
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={notificationPrefs.phoneCall}
                onChange={(e) => setNotificationPrefs(prev => ({
                  ...prev,
                  phoneCall: e.target.checked
                }))}
              />
              <span>Atgādināt īpašniekam piezvanot</span>
            </label>
          </div>
        </div>
        

        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>
            Aizvērt
          </button>
          <button type="button" className="edit-btn" aria-label="Rediģēt">
            <FaEdit size={20} />
          </button>
        </div>
      </div>
    </div>
  )
} 