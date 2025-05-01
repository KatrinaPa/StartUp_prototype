import { useState } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import MainContent from './components/home/MainContent'
import VetDashboard from './components/VetDashboard/VetDashboard'
import Footer from './components/layout/Footer'

function App() {
  const [isVetLoggedIn, setIsVetLoggedIn] = useState(false)

  return (
    <div className="app">
      {isVetLoggedIn ? (
        <>
          <VetDashboard 
            clinicName="Dzīvnieku veselības centrs"
            doctorName="Dr. Jānis Bērziņš"
          />
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <MainContent onVetClick={() => setIsVetLoggedIn(true)} />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App