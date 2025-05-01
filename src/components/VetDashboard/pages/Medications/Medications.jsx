import { useState } from 'react'
import './medications.css'

export default function Medications() {
  const [medications, setMedications] = useState([
    {
      id: 1,
      name: 'Nobivac DHPPi',
      type: 'Vakcīna',
      amount: 45,
      unit: 'gab.',
      minAmount: 10,
      lastUpdated: '2024-03-15'
    },
    {
      id: 2,
      name: 'Metacam 1.5mg/ml',
      type: 'Pretsāpju līdzeklis',
      amount: 8,
      unit: 'fl.',
      minAmount: 3,
      lastUpdated: '2024-03-14'
    },
    {
      id: 3,
      name: 'Drontal Plus',
      type: 'Attārpošanas tabletes',
      amount: 120,
      unit: 'tab.',
      minAmount: 20,
      lastUpdated: '2024-03-12'
    },
    {
      id: 4,
      name: 'Cefaseptin 300mg',
      type: 'Antibiotika',
      amount: 5,
      unit: 'pak.',
      minAmount: 2,
      lastUpdated: '2024-03-10'
    },
    {
      id: 5,
      name: 'Frontline Combo',
      type: 'Pretparazītu līdzeklis',
      amount: 25,
      unit: 'pip.',
      minAmount: 5,
      lastUpdated: '2024-03-09'
    },
    {
      id: 6,
      name: 'Synulox 250mg',
      type: 'Antibiotika',
      amount: 3,
      unit: 'pak.',
      minAmount: 4,
      lastUpdated: '2024-03-08'
    },
    {
      id: 7,
      name: 'Milbemax',
      type: 'Attārpošanas tabletes',
      amount: 80,
      unit: 'tab.',
      minAmount: 15,
      lastUpdated: '2024-03-07'
    },
    {
      id: 8,
      name: 'Rimadyl 100mg',
      type: 'Pretsāpju līdzeklis',
      amount: 12,
      unit: 'pak.',
      minAmount: 3,
      lastUpdated: '2024-03-06'
    },
    {
      id: 9,
      name: 'Nobivac Rabies',
      type: 'Vakcīna',
      amount: 30,
      unit: 'gab.',
      minAmount: 8,
      lastUpdated: '2024-03-05'
    },
    {
      id: 10,
      name: 'Fortekor 20mg',
      type: 'Sirds līdzeklis',
      amount: 4,
      unit: 'pak.',
      minAmount: 2,
      lastUpdated: '2024-03-04'
    },
    {
      id: 11,
      name: 'Apoquel 16mg',
      type: 'Pretniezes līdzeklis',
      amount: 15,
      unit: 'tab.',
      minAmount: 10,
      lastUpdated: '2024-03-03'
    },
    {
      id: 12,
      name: 'Vetoryl 30mg',
      type: 'Hormonu līdzeklis',
      amount: 6,
      unit: 'pak.',
      minAmount: 2,
      lastUpdated: '2024-03-02'
    },
    {
      id: 13,
      name: 'Baytril 50mg',
      type: 'Antibiotika',
      amount: 9,
      unit: 'fl.',
      minAmount: 3,
      lastUpdated: '2024-03-01'
    },
    {
      id: 14,
      name: 'Cerenia 16mg',
      type: 'Pretvemšanas līdzeklis',
      amount: 20,
      unit: 'tab.',
      minAmount: 8,
      lastUpdated: '2024-02-29'
    },
    {
      id: 15,
      name: 'Advocate',
      type: 'Pretparazītu līdzeklis',
      amount: 18,
      unit: 'pip.',
      minAmount: 5,
      lastUpdated: '2024-02-28'
    }
  ])

  const [showAddForm, setShowAddForm] = useState(false)
  const [newMedication, setNewMedication] = useState({
    name: '',
    type: '',
    amount: '',
    unit: '',
    minAmount: ''
  })

  const handleAddMedication = (e) => {
    e.preventDefault()
    const medicationToAdd = {
      id: medications.length + 1,
      ...newMedication,
      lastUpdated: new Date().toISOString().split('T')[0]
    }
    setMedications([...medications, medicationToAdd])
    setNewMedication({ name: '', type: '', amount: '', unit: '', minAmount: '' })
    setShowAddForm(false)
  }

  return (
    <div className="medications-page">
      <div className="medications-header">
        <h2>Medikamentu krājumi</h2>
        <button 
          className="add-medication-btn"
          onClick={() => setShowAddForm(true)}
        >
          + Pievienot medikamentu
        </button>
      </div>

      {showAddForm && (
        <div className="add-medication-form">
          <form onSubmit={handleAddMedication}>
            <div className="form-row">
              <div className="form-group">
                <label>Nosaukums:</label>
                <input
                  type="text"
                  value={newMedication.name}
                  onChange={(e) => setNewMedication({
                    ...newMedication,
                    name: e.target.value
                  })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Tips:</label>
                <input
                  type="text"
                  value={newMedication.type}
                  onChange={(e) => setNewMedication({
                    ...newMedication,
                    type: e.target.value
                  })}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Daudzums:</label>
                <input
                  type="number"
                  value={newMedication.amount}
                  onChange={(e) => setNewMedication({
                    ...newMedication,
                    amount: e.target.value
                  })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Mērvienība:</label>
                <input
                  type="text"
                  value={newMedication.unit}
                  onChange={(e) => setNewMedication({
                    ...newMedication,
                    unit: e.target.value
                  })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Min. daudzums:</label>
                <input
                  type="number"
                  value={newMedication.minAmount}
                  onChange={(e) => setNewMedication({
                    ...newMedication,
                    minAmount: e.target.value
                  })}
                  required
                />
              </div>
            </div>
            <div className="form-actions">
              <button type="button" onClick={() => setShowAddForm(false)}>
                Atcelt
              </button>
              <button type="submit" className="save-btn">
                Saglabāt
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="medications-grid">
        {medications.map((medication) => (
          <div 
            key={medication.id} 
            className={`medication-card ${medication.amount <= medication.minAmount ? 'low-stock' : ''}`}
          >
            <div className="medication-header">
              <h3>{medication.name}</h3>
              <span className="medication-type">{medication.type}</span>
            </div>
            <div className="medication-info">
              <div className="stock-info">
                <span className="amount">
                  {medication.amount} {medication.unit}
                </span>
                {medication.amount <= medication.minAmount && (
                  <span className="warning-badge">
                    Zems krājumu līmenis
                  </span>
                )}
              </div>
              <div className="medication-footer">
                <span className="min-amount">
                  Min. daudzums: {medication.minAmount} {medication.unit}
                </span>
                <span className="update-date">
                  Atjaunots: {medication.lastUpdated}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 