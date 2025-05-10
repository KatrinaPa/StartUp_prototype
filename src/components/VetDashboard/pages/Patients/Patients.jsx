import { useState } from 'react'
import { FaDog, FaCat, FaHorse, FaPaw, FaSearch } from 'react-icons/fa'
import { patients } from './patientsData'
import PatientView from '../PetProfiles/PatientView'
import './patients.css'

export default function Patients({ 
  selectedPet, 
  setSelectedPet, 
  searchQuery,
  setSearchQuery
}) {
  const sortedPatients = [...patients].sort((a, b) => 
    a.petName.localeCompare(b.petName)
  )

  const filteredPatients = sortedPatients.filter(patient => 
    patient.petName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.ownerName.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getPetTypeIcon = (type) => {
    const icons = {
      dog: <FaDog size={20} />,
      cat: <FaCat size={20} />,
      horse: <FaHorse size={20} />
    }
    return icons[type] || <FaPaw size={30} className="other-pet-icon" />
  }

  const handlePetClick = (patient) => {
    const petData = {
      ...patient,
      imageName: patient.imageName,
      petName: patient.petName,
      petType: patient.petType,
      breed: patient.breed,
      color: patient.color,
      birthDate: patient.birthDate,
      gender: patient.gender,
      reproductive: patient.reproductive,
      weight: patient.weight,
      ownerName: patient.ownerName,
      ownerPhone: patient.ownerPhone || '+371 12345678',
      ownerEmail: patient.ownerEmail || 'owner@example.com',
      ownerAddress: patient.ownerAddress || 'Rīga, Brīvības iela 123',
      vaccines: patient.vaccines || [],
      visits: patient.visits || []
    }
    setSelectedPet(petData)
  }

  const handleClose = () => {
    setSelectedPet(null)
    setSearchQuery('') // Clear search when closing patient view
  }

  return (
    <div className={`patients-page ${selectedPet ? 'view-open' : ''}`}>
      {selectedPet ? (
        <PatientView 
          pet={selectedPet} 
          onClose={handleClose} 
        />
      ) : (
        <>
          <div className="patients-header">
            <h1>Pacientu katalogs:</h1>
            <div className="search-container">
              <input
                type="text"
                placeholder="Meklēt pēc dzīvnieka vai saimnieka vārda"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-patients"
              />
              <FaSearch 
                className="search-icon" 
                onClick={() => {}}
              />
            </div>
          </div>

          <div className="patients-list">
            {filteredPatients.length > 0 ? (
              filteredPatients.map(patient => (
                <div 
                  key={patient.id} 
                  className="patient-card"
                  onClick={() => handlePetClick(patient)}
                >
                  <div className={`pet-icon ${!['dog', 'cat', 'horse'].includes(patient.petType) ? 'other-pet' : ''}`}>
                    {getPetTypeIcon(patient.petType)}
                  </div>
                  <div className="pet-details">
                    <h3>{patient.petName}</h3>
                    <p className="breed">{patient.breed}</p>
                  </div>
                  <div className="owner-info">
                    <p className="owner">{patient.ownerName}</p>
                    <div className="visit-info">
                      <p className="last-visit">
                        Pēdējā vizīte: {new Date(patient.lastVisit).toLocaleDateString('lv-LV')}
                      </p>
                      <p className="next-visit">
                        {patient.nextVisit 
                          ? `Nākamā vizīte: ${new Date(patient.nextVisit).toLocaleDateString('lv-LV')}`
                          : <span style={{ visibility: 'hidden' }}>Nākamā vizīte: </span>}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>Nav atrasts neviens pacients</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}