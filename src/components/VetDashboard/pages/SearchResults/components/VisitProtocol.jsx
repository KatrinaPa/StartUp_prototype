import { useState } from 'react'
import { format } from 'date-fns'
import { lv } from 'date-fns/locale'
import './visitProtocol.css'

export default function VisitProtocol() {
  const [medicationRows, setMedicationRows] = useState([{ id: 1 }])
  const today = new Date()

  const addMedicationRow = () => {
    setMedicationRows([...medicationRows, { id: medicationRows.length + 1 }])
  }

  return (
    <div className="visit-protocol">
      <div className="protocol-content">
        <div className="protocol-header">
          <h2>Vizītes protokols</h2>
          <div className="protocol-datetime">
            <span className="protocol-date">
              {format(today, 'd. MMMM yyyy', { locale: lv })}
            </span>
            <span className="protocol-time">
              {format(today, 'HH:mm')}
            </span>
          </div>
        </div>

        <div className="measurements-row">
          <div className="measurement-group">
            <label>Svars:</label>
            <input type="text" />
          </div>
          <div className="measurement-group">
            <label>Temperatūra:</label>
            <input type="text" />
          </div>
          <div className="measurement-group">
            <label>SDF (Zobu aprūpe):</label>
            <input type="text" />
          </div>
          <div className="measurement-group">
            <label>EF (Sirds veselība):</label>
            <input type="text" />
          </div>
        </div>

        <div className="protocol-sections-row">
          <div className="protocol-section">
            <label>Anamnēze:</label>
            <textarea />
          </div>
          <div className="protocol-section">
            <label>Klīniskā aina:</label>
            <textarea />
          </div>
        </div>

        <div className="protocol-section">
          <label>Diagnozes uzstādīšana:</label>
          <textarea />
        </div>

        <div className="protocol-section">
          <label>Ārstēšana, medikamentu lietošanas norādījumi:</label>
          <textarea />
          <div className="medications-section">
            {medicationRows.map((row) => (
              <div key={row.id} className="medication-row">
                <label>Medikamenti:</label>
                <div className="medication-inputs">
                  <input 
                    type="text" 
                    placeholder="medikamenta nosaukums"
                    className="med-name"
                  />
                  <input 
                    type="text" 
                    placeholder="daudzums"
                    className="med-amount"
                  />
                  <div className="med-method">
                    <label>Lietošanas veids:</label>
                    <select className="med-method-select">
                      <option value="">Izvēlēties</option>
                      <option value="muskulī">muskulī</option>
                      <option value="zemādā">zemādā</option>
                      <option value="venozi">venozi</option>
                    </select>
                  </div>
                  <button className="add-med-btn">Pievienot</button>
                </div>
              </div>
            ))}
            <button 
              className="add-more-meds-btn"
              onClick={addMedicationRow}
            >
              + Pievienot vairāk medikamentu
            </button>
          </div>
        </div>

        <div className="protocol-section">
          <label>Izmeklējumi, procedūras:</label>
          <textarea />
          <div className="examinations-wrapper">
            <div className="examinations-header">
              Veikt izmeklējumu:
            </div>
            <div className="examination-buttons">
              <button className="examination-btn blood-test">
                Asins Analīzes
              </button>
              <button className="examination-btn usg">
                USG
              </button>
              <button className="examination-btn rtg">
                RTG
              </button>
              <button className="examination-btn vaccination">
                Vakcinācija
              </button>
            </div>
          </div>
        </div>

        <div className="protocol-actions">
          <button className="upload-btn">+ Pievienot failu</button>
          <button className="save-btn">Saglabāt protokolu</button>
        </div>
      </div>
    </div>
  )
} 