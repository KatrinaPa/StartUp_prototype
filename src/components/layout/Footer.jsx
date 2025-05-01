import './footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="logo">PetMedData</div>
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="#">Pakalpojumi</a></li>
            <li><a href="#">Par mums</a></li>
            <li><a href="#">Reģistrēties</a></li>
            <li><a href="#">Ieiet</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 PetMedData. Visas tiesības aizsargātas.</p>
      </div>
    </footer>
  )
} 