import { useState } from 'react'
import { format } from 'date-fns'
import { lv } from 'date-fns/locale'
import { FaUpload } from 'react-icons/fa'
import './visitProtocol.css'
import VaccinationProtocol from './VaccinationProtocol'

export default function VisitProtocol({ pet }) {
    const [selectedExaminations, setSelectedExaminations] = useState([])
    const [medicationRows, setMedicationRows] = useState([{ id: 1 }])
    const today = new Date()
  
    // Map examination types to their display names
    const examinationLabels = {
        'general': 'Vispārēja apskate',
        'vaccination': 'Vakcinācija',
        'blood-test': 'Asins analīzes',
        'rtg': 'RTG',
        'usg': 'USG'
    }

    const toggleExamination = (type) => {
        setSelectedExaminations(prev => {
            if (prev.includes(type)) {
                return prev.filter(item => item !== type)
            }
            return [...prev, type]
        })
    }

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
            <div className="measurements-wrapper">
            <div className="measurement-group">
              <label>Temperatūra (°C)</label>
              <input type="number" step="0.1" />
            </div>
            <div className="measurement-group">
              <label>Svars (kg)</label>
              <input type="number" step="0.1" />
            </div>
            <div className="measurement-group">
              <label>Pulss (min)</label>
              <input type="number" />
            </div>
            <div className="measurement-group">
              <label>Elpošana (min)</label>
              <input type="number" />
            </div>
          </div>

            <div className="examinations-wrapper">
            <div className="examination-buttons">
              {Object.entries(examinationLabels).map(([type, label]) => (
                <button 
                  key={type}
                  className={`examination-btn ${type} ${selectedExaminations.includes(type) ? 'active' : ''}`}
                  onClick={() => toggleExamination(type)}
                >
                  {label}
                </button>
              ))}
            </div>

            </div>
          </div>
  
          {selectedExaminations.includes('vaccination') && (
            <VaccinationProtocol />
          )}
  
          {selectedExaminations.includes('general') && (
            <>
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
                <label>Diagnoze:</label>
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
            </>
          )}
  
          {selectedExaminations.length > 0 && (
            <div className="protocol-section">
                <label>Izmeklējumi, procedūras:</label>
                <textarea />
                <div className="examination-tags">
                    {selectedExaminations.map(type => (
                        <span 
                            key={type} 
                            className={`examination-tag ${type}`}
                        >
                            {examinationLabels[type]}
                        </span>
                    ))}
                </div>
            </div>
          )}
  
          {selectedExaminations.length > 0 && (
            <div className="protocol-actions">
              <button className="upload-btn"><FaUpload /> Augšupielādēt izmeklējumus</button>
              <button className="save-btn">Saglabāt protokolu</button>
            </div>
          )}
        </div>
      </div>
    )
  } 

