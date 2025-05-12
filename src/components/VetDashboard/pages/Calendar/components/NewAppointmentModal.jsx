import { format } from 'date-fns'
import { lv } from 'date-fns/locale'
import { FaDog, FaCat, FaHorse } from 'react-icons/fa'
import { useState } from 'react'
export default function NewAppointmentModal({ 
  onClose,
  selectedDate,
  selectedTime,
  setSelectedTime,
  selectedPetType,
  setSelectedPetType 
}) {

  const [notificationPrefs, setNotificationPrefs] = useState({
    smsReminder: false,
    emailReminder: false,
    phoneCall: false
  })

  const [petType, setPetType] = useState(selectedPetType || '')

  return (
    <div className="modal-overlay">
      <div className="appointment-modal">
        <h3>Jauna vizīte</h3>
        <div className="modal-content">
          <div className="form-row-calendar three-columns divider">
            <DateTimeSection // Displays and handles date and time selection
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
            <VetSelection />
          </div>

          <div className="form-row-calendar two-columns divider"> 
            <ExistingPatientSection />
          </div>

          <div className="form-row-calendar two-columns">
            <NewPatientSection // Section for adding new patient details with pet type selection     
              selectedPetType={petType}
              setSelectedPetType={setPetType}
            />
          </div>

          <div className="form-row-calendar three-columns divider">
            <OwnerDetailsSection />
          </div>

          <div className="form-row-calendar">
            <NotesSection />
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

        <ModalActions onClose={onClose} />
      </div>
    </div>
  )
}

// Displays and handles date and time selection
function DateTimeSection({ selectedDate, selectedTime, setSelectedTime }) {
  return (
    <>
      <div className="form-group">
        <label>Datums:</label>
        <input 
          type="text" 
          value={format(selectedDate, 'dd.MM.yyyy', { locale: lv })} 
          readOnly 
        />
      </div>
      <TimeSelection // Handles time selection with 30-minute intervals between 8:00-20:00
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
    </>
  )
}

// Handles time selection with 30-minute intervals between 8:00-20:00
function TimeSelection({ selectedTime, setSelectedTime }) {
  return (
    <div className="form-group">
      <label>Laiks:</label>
      <select 
        value={selectedTime} 
        onChange={(e) => setSelectedTime(e.target.value)}
      >
        <option value={selectedTime}>{selectedTime}</option>
        {Array.from({ length: 24 }, (_, i) => {
          const hour = Math.floor(i / 2) + 8
          const minute = i % 2 === 0 ? '00' : '30'
          const time = `${hour.toString().padStart(2, '0')}:${minute}`
          if (time !== selectedTime) {
            return <option key={time} value={time}>{time}</option>
          }
          return null
        })}
      </select>
    </div>
  )
}

// Veterinarian selection dropdown
function VetSelection() {
  return (
    <div className="form-group">
      <label>Veterinārārsts:</label>
      <select>
        <option value="">Izvēlēties ārstu</option>
        <option>Dr. Anna Kļaviņa</option>
        <option>Dr. Pēteris Ozols</option>
      </select>
    </div>
  )
}

// Section for searching existing patients and displaying owner info
function ExistingPatientSection() {
  return (
    <>
      <div className="form-group">
        <label>Esošs Pacients:</label>
        <input type="text" placeholder="Meklēt pēc vārda" />
      </div>
      <div className="form-group">
        <label>Īpašnieks:</label>
        <input 
          type="text" 
          placeholder="Īpašnieka vārds (automātiski, ja ievadīts dzīvnieks)" 
          readOnly 
        />
      </div>
    </>
  )
}

// Section for adding new patient details with pet type selection
function NewPatientSection({ selectedPetType, setSelectedPetType }) {
  return (
    <>
      <div className="form-group">
        <label>Jauns Pacients:</label>
        <input type="text" placeholder="Vārds" />
      </div>
      <div className="form-group">
        <label>Dzīvnieks:</label>
        <div className="pet-type-selection">
          <button 
            className={`pet-type-btn ${selectedPetType === 'dog' ? 'active' : ''}`}
            onClick={() => setSelectedPetType('dog')}
          >
            <FaDog />
          </button>
          <button 
            className={`pet-type-btn ${selectedPetType === 'cat' ? 'active' : ''}`}
            onClick={() => setSelectedPetType('cat')}
          >
            <FaCat />
          </button>
          <button 
            className={`pet-type-btn ${selectedPetType === 'horse' ? 'active' : ''}`}
            onClick={() => setSelectedPetType('horse')}
          >
            <FaHorse />
          </button>
          <input 
            type="text" 
            placeholder="Cits" 
            className="other-pet-input"
            onClick={() => setSelectedPetType('other')}
          />
        </div>
      </div>
    </>
  )
}

// Section for owner contact details
function OwnerDetailsSection() {
  return (
    <>
      <div className="form-group">
        <label>Īpašnieks:</label>
        <input type="text" placeholder="Vārds Uzvārds" />
      </div>
      <div className="form-group">
        <label>Tālrunis:</label>
        <input type="tel" placeholder="" />
      </div>
      <div className="form-group">
        <label>E-pasts:</label>
        <input type="email" placeholder="" />
      </div>
    </>
  )
}

// Section for appointment notes/reason
function NotesSection() {
  return (
    <div className="form-group">
      <label>Piezīmes par vizīti:</label>
      <textarea 
        rows="3"
        placeholder="Piezīmes par vizīti, veicamajām procedūrām..."
      />
    </div>
  )
}

// Modal action buttons (Cancel/Save)
function ModalActions({ onClose }) {
  return (
    <div className="modal-actions">
      <button className="cancel-btn" onClick={onClose}>
        Atcelt
      </button>
      <button className="save-btn">
        Saglabāt
      </button>
    </div>
  )
} 