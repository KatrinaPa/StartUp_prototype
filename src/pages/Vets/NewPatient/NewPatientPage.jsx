import Button from '../../../components/common/Button';
import IconButton from '../../../components/common/IconButton';
import { PetTypeIcons, GenderIcons, ActionIcons } from '../../../components/common/icons/PetIcons';

const NewPatientPage = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Jauns pacients</h1>
      
      <div className="bg-white p-6 rounded-lg">
        {/* Owner Info */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Īpašnieks:</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Vārds, Uzvārds:</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Telefona nr:</label>
                <input type="tel" className="w-full p-2 border rounded" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">E-pasts:</label>
                <input type="email" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Adrese (nav obligāti):</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
            </div>
          </div>
        </section>

        <hr className="my-6" />

        {/* Pet Info */}
        <section className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Pet Type */}
            <div className="flex gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Dzīvnieks:</label>
                <div className="flex gap-4">
                  {Object.entries(PetTypeIcons).map(([type, Icon]) => (
                    <IconButton
                      key={type}
                      icon={Icon}
                      aria-label={type}
                    />
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Cits:</label>
                <input type="text" placeholder="Cita suga" className="p-2 border rounded" />
              </div>
            </div>

            {/* Gender and Birth Date */}
            <div className="flex gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Dzimums:</label>
                <div className="flex gap-4">
                  {Object.entries(GenderIcons).map(([type, Icon]) => (
                    <IconButton
                      key={type}
                      icon={Icon}
                      aria-label={type}
                    />
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Dzimšanas datums:</label>
                <input type="date" className="p-2 border rounded" />
              </div>
            </div>
          </div>

          {/* Pet Details */}
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Vārds:</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Čipa Nr:</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Pases Nr:</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Šķirne:</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Krāsa:</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Svars:</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Vakcinācijas status:</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex justify-between mt-8">
          <Button 
            variant="secondary"
            icon={<ActionIcons.Upload />}
          >
            Augšupielādēt izmeklējumus
          </Button>
          <Button variant="primary">
            Saglabāt katalogā
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewPatientPage; 