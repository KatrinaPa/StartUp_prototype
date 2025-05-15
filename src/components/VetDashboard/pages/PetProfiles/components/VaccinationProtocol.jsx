import { useState } from 'react'
import './visitProtocol.css'

export default function VaccinationProtocol() {
    const [vaccineRows, setVaccineRows] = useState([1])

    const addVaccineRow = () => {
        setVaccineRows([...vaccineRows, vaccineRows.length + 1])
    }

    return (
        <div className="protocol-section vaccination-section">
            <div className="vaccination-form">
                {vaccineRows.map((num) => (
                    <div key={num} className="vaccination-inputs">
                        <div className="form-group">
                            <label>Vakcīna Nr. {num}:</label>
                            <input 
                                type="text" 
                                placeholder="Vakcīnas nosaukums"
                            />
                        </div>
                        <div className="form-group">
                            <label>Derīga līdz:</label>
                            <input 
                                type="date"
                                placeholder="DD.MM.GGGG."
                            />
                        </div>
                        <div className="form-group">
                            <label>Sērijas nr.:</label>
                            <input 
                                type="text"
                                placeholder="Sērijas numurs"
                            />
                        </div>
                        <div className="form-group">
                            <label>Izlietot līdz:</label>
                            <input 
                                type="date"
                                placeholder="DD.MM.GGGG."
                            />
                        </div>
                    </div>
                ))}
                
                <div className="vaccination-actions">
                    <button 
                        className="add-more-vaccines-btn"
                        onClick={addVaccineRow}
                    >
                        + Pievienot vakcīnu
                    </button>
                    <button className="add-vaccine-btn">
                        Pievienot protokolam
                    </button>
                </div>
            </div>
        </div>
    )
} 