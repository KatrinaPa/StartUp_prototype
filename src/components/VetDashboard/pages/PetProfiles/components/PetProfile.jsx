import { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { format } from 'date-fns'
import { lv } from 'date-fns/locale'
import './petProfile.css'
import { translatePetType } from '../../Patients/petTypeUtils'

export default function PetProfile({ pet }) {
  const [age, setAge] = useState('')
  const placeholderImage = 'https://placehold.co/200x200?text=Pet'

  const calculateAge = (birthDate) => {
    const today = new Date()
    const birth = new Date(birthDate)
    let years = today.getFullYear() - birth.getFullYear()
    
    if (today.getMonth() < birth.getMonth() || 
        (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) {
      years--
    }
    return `${years} gadi`
  }

  useEffect(() => {
    if (pet.birthDate) {
      setAge(calculateAge(pet.birthDate))
    }
  }, [pet.birthDate])

  // Sample vaccines data, should be replaced with actual data from the database
  const vaccines = [
    { date: '2024-01-15', name: 'Nobivac DHPPi' },
    { date: '2023-07-20', name: 'Rabies' },
    { date: '2023-01-15', name: 'Nobivac DHPPi' },
    { date: '2022-07-20', name: 'Rabies' }
  ]

  // Add this function to get the image URL
  const getImageUrl = (imageName) => {
    return imageName ? `/pet-profiles/${imageName}` : placeholderImage
  }

  return (
    <div className="pet-profile">
      <div className="profile-content">
        <div className="pet-main-info">
          <div className="profile-top-section">
            <div className="pet-image" style={{ background: '#f0f0f0' }}>
              <img 
                src={getImageUrl(pet.imageName)} 
                alt={pet.petName}
                onError={(e) => {
                  e.target.src = placeholderImage
                }} 
              />
            </div>

            <div className="profile-details-column">
              <div className="profile-header">
                <div className="detail-item-name">
                  <span>{pet.petName}</span>
                </div>
                <button className="edit-profile-btn">
                  <FaEdit />
                </button>
              </div>
              <div className="detail-item-chip">
                <label>Mikročipa Nr.:</label>
                <span>{pet.chipNumber || '1234567890145'}</span>
              </div>
              <div className="wrapper-detail-item">
                <div className="detail-item">
                  <label>Suga:</label>
                  <span>{translatePetType(pet.petType)}</span>
                </div>
                <div className="detail-item">
                  <label>Krāsa:</label>
                  <span>{pet.color || '—'}</span>
                </div>
                <div className="detail-item">
                  <label>Dzimums:</label>
                  <span>{pet.gender}</span>
                </div>
                <div className="detail-item">
                  <span>{pet.reproductive}</span>
                </div>
                <div className="detail-item">
                  <label>Šķirne:</label>
                  <span>{pet.breed}</span>
                </div>
                <div className="detail-item">
                  <label>Svars:</label>
                  <span>{pet.weight} kg</span>
                </div>
                <div className="detail-item">
                  <label>Vecums:</label>
                  <span>{age}</span>
                </div>
                <div className="detail-item">
                  <label>Dzimšanas datums:</label>
                  <span>{format(new Date(pet.birthDate), 'dd.MM.yyyy', { locale: lv })}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pet-profile-divider"></div>

        <div className="owner-profile-info">
          <h3>Īpašnieka dati</h3>
          <div className="owner-grid">
            <div className="detail-item">
              <label>Vārds, Uzvārds:</label>
              <span>{pet.ownerName}</span>
            </div>
            <div className="detail-item">
              <label>Telefons:</label>
              <span>{pet.ownerPhone}</span>
            </div>
            <div className="detail-item">
              <label>E-pasts:</label>
              <span>{pet.ownerEmail}</span>
            </div>
            <div className="detail-item">
              <label>Adrese:</label>
              <span>{pet.ownerAddress}</span>
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
                  {format(new Date(vaccine.date), 'dd.MM.yyyy', { locale: lv })}:
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