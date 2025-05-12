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
              <FaSearch className="search-icon" onClick={() => {}} />
            </div>
          </div>

          <div className="patients-list">
            <table>
              <thead>
                <tr>
                  <th>Dzīvnieks</th>
                  <th>Vārds</th>
                  <th>Šķirne</th>
                  <th>Īpašnieks</th>
                  <th>Pēdējā / Nākamā vizīte</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.length > 0 ? (
                  filteredPatients.map(patient => (
                    <tr 
                      key={patient.id}
                      className="patient-row"
                      onClick={() => handlePetClick(patient)}
                    >
                      <td>
                        <div className={`pet-icon ${!['dog', 'cat', 'horse'].includes(patient.petType) ? 'other-pet' : ''}`}>
                          {getPetTypeIcon(patient.petType)}
                        </div>
                      </td>
                      <td>{patient.petName}</td>
                      <td>{patient.breed}</td>
                      <td>{patient.ownerName}</td>
                      <td>
                        <div className="visit-info">
                          <p className="last-visit">
                            {new Date(patient.lastVisit).toLocaleDateString('lv-LV')}
                          </p>
                          {patient.nextVisit && (
                            <p className="next-visit">
                              {new Date(patient.nextVisit).toLocaleDateString('lv-LV')}
                            </p>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="no-results">
                      <p>Nav atrasts neviens pacients</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            
            <div className="pagination">
              <button className="page-number active">1</button>
              <button className="page-number">2</button>
              <button className="page-number">3</button>
              <span className="page-ellipsis">...</span>
              <button className="page-number">11</button>
              <button className="page-number">12</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}