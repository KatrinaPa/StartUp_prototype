import { useEffect } from 'react'
import { FaSearch, FaEnvelope, FaMicrophone, FaMobileAlt, FaTimes } from 'react-icons/fa'
import vetPhoto from '../../assets/vet.jpg'
import heartIcon from '../../assets/Heart.png'
import './navbarVets.css'

export default function NavbarVets({ clinicName, doctorName, onNewPatientClick, onSearch }) {
  const handleSearchInput = (e) => {
    if (e.key === 'Enter') {
      onSearch(e.target.value)
      e.target.value = ''
    }
  }

  const handleSearchClick = () => {
    const searchInput = document.querySelector('.search-input')
    onSearch(searchInput.value)
    searchInput.value = ''
  }

  useEffect(() => {
    const searchInput = document.querySelector('.search-input')
    if (searchInput) {
      searchInput.value = ''
    }
  }, [])

  return (
    <nav className="dashboard-nav">
      <div className="nav-container">
        <div className="logo">
          <div className="logo-icon">
            <img src={heartIcon} alt="Heart" />
          </div>
          PetMedData
        </div>
        <div className="nav-wrapper">
          <div className="search-options">
            <input 
              type="text" 
              placeholder="Vārds, Uzvārds vai Čipa nr."
              className="search-input"
              onKeyPress={handleSearchInput}
            />
            <FaSearch 
              className="search-icon" 
              onClick={handleSearchClick}
            />
            <div className="search-buttons">
              <button className="search-btn voice">
                <FaMicrophone /> Balss
              </button>
              <button className="search-btn scan">
                <FaMobileAlt /> Chip
              </button>
            </div>
          </div>

          <div className="wrapper-user-info">
            <div className="user-info">
              <button className="logout-btn">
                <FaTimes />
              </button>
              <div className="clinic-info">
                <div className="clinic-name">{clinicName}</div>
                <div className="doctor-name">{doctorName}</div>
              </div>
              <div className="user-photo">
                <img src={vetPhoto} alt={doctorName} />
              </div>
            </div>
            <div className="wrapper-mailbox-logout">
              <button className="mailbox-btn">
                <FaEnvelope />
                <span className="mail-badge">2</span>
              </button>
              <button className="logout-btn"><span>X</span> iziet</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 