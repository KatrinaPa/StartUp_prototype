import { useEffect, useState } from 'react'
import dogImage from '../../../../../assets/dog-profile.jpg'
import { FaEdit } from 'react-icons/fa'
import './petProfile.css'

export default function PetProfile({ searchQuery }) {
  const [age, setAge] = useState('')

  const calculateAge = (birthDate) => {
    const today = new Date()
    const birth = new Date(birthDate)
    let years = today.getFullYear() - birth.getFullYear()

    // Adjust years if birthday hasn't occurred this year
    if (today.getMonth() < birth.getMonth() || 
        (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) {
      years--
    }

    return `${years} gadi`
  }

  useEffect(() => {
    setAge(calculateAge('2020-05-15'))
  }, [])

  const vaccines = [
    { date: '2024-01-15', name: 'Nobivac DHPPi' },
    { date: '2023-07-20', name: 'Rabies' },
    { date: '2023-01-15', name: 'Nobivac DHPPi' },
    { date: '2022-07-20', name: 'Rabies' }
  ]

  return (
    <div className="pet-profile">
      <div className="profile-content">
        <div className="pet-main-info">
          <div className="profile-top-section">
            <div className="pet-image" style={{ background: '#f0f0f0' }}>
              <img src={dogImage} alt="Pet" onError={(e) => {
                e.target.style.display = 'none'
              }} />
            </div>

            <div className="profile-details-column">
              <div className="profile-header">
                <div className="detail-item-name">
                  <span>Reksis</span>
                </div>
                <button className="edit-profile-btn">
                  <FaEdit />
                </button>
              </div>
              <div className="detail-item-chip">
                <label>Mikročipa Nr.:</label>
                <span>1234567890145</span>
              </div>
              <div className="wrapper-detail-item">
                <div className="detail-item">
                  <label>Suga:</label>
                  <span>Suns</span>
                </div>
                <div className="detail-item">
                  <label>Dzimums:</label>
                  <span>Vīriešu</span>
                  <span>Reproduktīvs/a</span>
                </div>
                <div className="detail-item">
                  <label>Šķirne:</label>
                  <span>Vācu aitu suns</span>
                </div>
                <div className="detail-item">
                  <label>Dzimšanas datums:</label>
                  <span>15.05.2020</span>
                </div>
                <div className="detail-item">
                  <label>Svars:</label>
                  <span>32 kg</span>
                </div>
                <div className="detail-item">
                  <label>Vecums:</label>
                  <span>{age}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pet-profile-divider"></div>

        <div className="owner-info">
          <h3>Īpašnieka dati</h3>
          <div className="owner-grid">
            <div className="detail-item">
              <label>Vārds, Uzvārds:</label>
              <span>Baiba Liepniece</span>
            </div>
            <div className="detail-item">
              <label>Telefons:</label>
              <span>+371 12345678</span>
            </div>
            <div className="detail-item">
              <label>E-pasts:</label>
              <span>baiba@example.com</span>
            </div>
            <div className="detail-item">
              <label>Adrese:</label>
              <span>Rīga, Brīvības iela 123</span>
            </div>
          </div>
        </div>

        <div className="pet-profile-divider"></div>

        <div className="vaccines-info">
          <h3>Vakcīnas</h3>
          <div className="vaccines-list">
            {vaccines.map((vaccine, index) => (
              <div key={index} className="vaccine-item">
                <span className="vaccine-date">
                  {new Date(vaccine.date).toLocaleDateString('lv-LV')}:
                </span>
                <span className="vaccine-name">{vaccine.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 