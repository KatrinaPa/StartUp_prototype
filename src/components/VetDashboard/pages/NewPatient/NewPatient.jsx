import { FaUpload } from 'react-icons/fa'
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs'
import { FaDog, FaCat, FaHorse } from 'react-icons/fa'
import './newPatient.css'

export default function NewPatient() {
  return (
    <div className="new-patient">
      <div className="form-container">
        <h2 className="page-title">Jauns pacients</h2>
        
        {/* Animal Info */}
        <div className="form-section">
          <div className="form-columns">
            <div className="form-column">
              <div className="form-row">
                <div className="form-group pet-select">
                  <label>Dzīvnieks:</label>
                  <div className="pet-type-icons">
                    <div className="icon-wrapper">
                      <FaDog className="dog-icon" />
                    </div>
                    <div className="icon-wrapper">
                      <FaCat className="cat-icon" />
                    </div>
                    <div className="icon-wrapper">
                      <FaHorse className="horse-icon" />
                    </div>
                  </div>
                </div>
                
                <div className="form-group other-pet">
                  <label>Cits:</label>
                  <input type="text" placeholder="Cita suga" />
                </div>
              </div>

              <div className="form-group">
                <label>Vārds:</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Šķirne:</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Svars:</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-column">
              <div className="form-row">
                <div className="form-group gender-select">
                  <label>Dzimums:</label>
                  <div className="gender-icons">
                    <div className="icon-wrapper">
                      <BsGenderMale className="gender-icon" />
                    </div>
                    <div className="icon-wrapper">
                      <BsGenderFemale className="gender-icon" />
                    </div>
                  </div>
                </div>

                <div className="form-group birth-date">
                  <label>Dzimšanas datums:</label>
                  <input type="text" placeholder="DD.MM.GGGG" />
                </div>
              </div>

              <div className="form-group">
                <label>Čipa Nr:</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Krāsa:</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Vakcinācijas status:</label>
                <input type="text" placeholder="" />
              </div>
            </div>
          </div>
        </div>

        <div className="new-patient-divider"></div>

        {/* Owner Info */}
        <div className="form-section">
          <h2>Īpašnieka info</h2>
          <div className="form-columns">
            <div className="form-column">
              <div className="form-group">
                <label>Vārds, Uzvārds:</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Telefona nr:</label>
                <input type="tel" />
              </div>
            </div>

            <div className="form-column">
              <div className="form-group">
                <label>E-pasts:</label>
                <input type="email" />
              </div>

              <div className="form-group">
                <label>Adrese (nav obligāti):</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="form-actions">
          <button className="upload-btn">
            <FaUpload /> Augšupielādēt izmeklējumus
          </button>
          <button className="save-btn">
            Saglabāt katalogā
          </button>
        </div>
      </div>
    </div>
  )
} 