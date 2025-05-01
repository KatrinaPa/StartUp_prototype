import './navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <div className="logo">PetMedData</div>
        <div className="nav-buttons">
          <button className="nav-btn">Pakalpojumi</button>
          <button className="nav-btn">Par mums</button>
          <button className="nav-btn">Reģistrēties</button>
          <button className="nav-btn">Ieiet</button>
        </div>
      </div>
    </nav>
  )
} 