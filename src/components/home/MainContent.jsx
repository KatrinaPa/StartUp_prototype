import ownerImage from '../../assets/petOwner.jpg'
import vetImage from '../../assets/vet.jpg'
import LoginButton from '../auth/LoginButton'
import './MainContent.css'

export default function MainContent({ onVetClick }) {
  return (
    <main className="main-content">
      <h2 className="profile-header">Pieslēdzies kā:</h2>
      <div className="login-buttons">
        <LoginButton
          type="vet"
          image={vetImage}
          title="Veterinārārsts"
          description="Piekļuve pacientu datiem un izmeklējumu pievienošana"
          onClick={onVetClick}
        />
        <LoginButton
          type="owner"
          image={ownerImage}
          title="Dzīvnieka īpašnieks"
          description="Mana dzīvnieka veselības dati un izmeklējumu rezultāti"
        />
      </div>
    </main>
  )
} 