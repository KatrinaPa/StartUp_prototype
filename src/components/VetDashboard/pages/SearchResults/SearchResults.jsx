import PetProfile from './components/PetProfile'
import PetHistory from './components/PetHistory'
import VisitProtocol from './components/VisitProtocol'
import './searchResults.css'

export default function SearchResults({ searchQuery }) {
  return (
    <div className="search-results">
      <div className="results-grid">
        <div className="top-row">
          <PetProfile searchQuery={searchQuery} />
          <PetHistory />
        </div>
        <div className="bottom-row">
          <VisitProtocol />
        </div>
      </div>
    </div>
  )
} 