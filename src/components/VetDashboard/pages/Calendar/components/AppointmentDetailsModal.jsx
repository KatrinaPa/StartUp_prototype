import { format } from 'date-fns'
import { lv } from 'date-fns/locale'
import { FaEdit } from 'react-icons/fa'

export default function AppointmentDetailsModal({ appointment, onClose }) {
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
              <input type="text" value={appointment.title.split(' - ')[0]} readOnly />
            </div>
            <div className="form-group">
              <label>Procedūra:</label>
              <input type="text" value={appointment.title.split(' - ')[1]} readOnly />
            </div>
          </div>

          <div className="form-row-calendar">
            <div className="form-group">
              <label>Piezīmes:</label>
              <textarea readOnly>Vizītes piezīmes šeit...</textarea>
            </div>
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