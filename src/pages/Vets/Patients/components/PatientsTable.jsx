import { PetTypeIcons, OtherPetIcon } from '../../../../components/common/Icons';

const PatientsTable = ({ patients, onPatientClick }) => {
  const getPetIcon = (type) => {
    const Icon = PetTypeIcons[type] || OtherPetIcon;
    const isOtherPet = !['dog', 'cat', 'horse'].includes(type);
    
    return (
      <div className={`
        w-11 h-11
        bg-brand-yellow
        rounded-full
        flex items-center justify-center
        cursor-pointer
        transition-transform transition-opacity duration-200
        opacity-60
        group-hover:opacity-100
        group-hover:scale-105
      `}>
        <Icon className={`
          ${isOtherPet ? 'w-6' : 'w-7'} 
          h-auto 
          text-text-primary
        `} />
      </div>
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-primary text-text-dark">
            <th className="px-4 py-3 text-left">Dzīvnieks</th>
            <th className="px-4 py-3 text-left">Vārds</th>
            <th className="px-4 py-3 text-left">Šķirne</th>
            <th className="px-4 py-3 text-left">Īpašnieks</th>
            <th className="px-4 py-3 text-left">Pēdējā / Nākamā vizīte</th>
          </tr>
        </thead>
        <tbody>
          {patients.length > 0 ? (
            patients.map(patient => (
              <tr 
                key={patient.id}
                onClick={() => onPatientClick(patient.id)}
                className="group border-b border-border-light hover:bg-primary cursor-pointer"
              >
                <td className="px-4 py-3">
                  {getPetIcon(patient.petType)}
                </td>
                <td className="px-4 py-3 text-text-dark">{patient.petName}</td>
                <td className="px-4 py-3 text-text-dark">{patient.breed}</td>
                <td className="px-4 py-3 text-text-dark">{patient.ownerName}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-col lg:flex-row gap-1">
                    <p className="text-text-secondary">
                      {new Date(patient.lastVisit).toLocaleDateString('lv-LV')}
                    </p>
                    {patient.nextVisit && (
                      <p className="text-brand-mint font-medium">
                        {new Date(patient.nextVisit).toLocaleDateString('lv-LV')}
                      </p>
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-4 py-8 text-center text-text-secondary">
                Nav atrasts neviens pacients
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsTable; 