import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/petdatamed_logo.svg';
import ProfileSection from './components/ProfileSection';
import { clinicProfile } from '../../../data/clinicData';
import SearchBar from '../../common/SearchBar';

const VetHeader = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      navigate(`/vet/patients?search=${encodeURIComponent(searchValue.trim())}`);
      setSearchValue('');
    }
  };

  return (
    <header>
      <nav className="h-full">
        <div className="max-w-[1270px] w-full mx-auto">
          <div className="flex gap-8">
            <div className="w-[17%] min-w-[200px] py-3 flex items-center justify-center">
              <img 
                src={logo} 
                alt="PetMedData Logo" 
                className="h-14 object-contain"
              />
            </div>

            <div className="w-[83%] flex-1 flex items-center justify-between py-3">
              <div className="flex-grow max-w-3xl">
                <SearchBar 
                  value={searchValue}
                  onChange={setSearchValue}
                  placeholder="Meklēt pēc vārda vai čipa numura..."
                  onKeyPress={handleKeyPress}
                />
              </div>

              <ProfileSection profile={clinicProfile} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default VetHeader; 