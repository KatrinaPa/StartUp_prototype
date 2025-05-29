import { 
  Button, 
  Input, 
  Label, 
  IconSelector, 
  ActionButtons 
} from '../../../components/common';
import { PetTypeIcons, GenderIcons } from '../../../components/common/Icons';

// Separate form sections into components for better organization
const OwnerInfoSection = () => (
  <section className="mb-8">
    <h3 className="text-xl font-semibold mb-4 text-text-secondary">Īpašnieks:</h3>
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <Label>Vārds, Uzvārds:</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Telefona nr:</Label>
          <Input type="tel" />
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <Label>E-pasts:</Label>
          <Input type="email" />
        </div>
        <div>
          <Label>Adrese:</Label>
          <Input type="text" />
        </div>
      </div>
    </div>
  </section>
);

const PetTypeSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="grid grid-cols-[auto,1fr] gap-6">
      <IconSelector 
        icons={PetTypeIcons} 
        label="Dzīvnieks:"
        labelClassName="text-xl font-semibold mb-1 text-text-secondary"
      />
      <div>
        <Label>Cits:</Label>
        <Input type="text" className="w-full" />
      </div>
    </div>

    <div className="grid grid-cols-[auto,1fr] gap-6">
      <IconSelector 
        icons={GenderIcons} 
        label="Dzimums:"
        labelClassName="mb-2"
        className="min-w-0"
      />
      <div className="min-w-0">
        <Label>Dzimšanas datums:</Label>
        <Input 
          type="date" 
          className="w-full text-text-secondary" 
        />
      </div>
    </div>
  </div>
);

const PetDetailsSection = () => (
  <div className="grid grid-cols-3 gap-4">
    <div>
      <Label>Vārds:</Label>
      <Input type="text" />
    </div>
    <div>
      <Label>Čipa Nr:</Label>
      <Input type="text" />
    </div>
    <div>
      <Label>Pases Nr:</Label>
      <Input type="text" />
    </div>

    <div>
      <Label>Šķirne:</Label>
      <Input type="text" />
    </div>
    <div>
      <Label>Krāsa:</Label>
      <Input type="text" />
    </div>
    <div>
      <Label>Svars:</Label>
      <Input type="text" />
    </div>

    <div className="col-span-2">
      <Label>Vakcinācijas status:</Label>
      <Input type="text" />
    </div>
  </div>
);


const NewPatientPage = () => {

  const handleSave = () => {
    // Save protocol logic - will save all examination data, measurements, and notes to the database
  };
  const handleUpload = () => {
    // Upload examinations logic - will handle file uploads for examination results (like X-rays, blood tests, etc.)
  };

  return (
    <div>
      <div className="max-w-5xl my-8 mx-20 p-8 rounded-2xl bg-primary">
        <h1 className="text-2xl font-bold mb-6 text-text-dark text-center">
          Jauns pacients
        </h1>

        <hr className="my-6 border-border-grey" />
        
        <div className="rounded-lg">
          <OwnerInfoSection />
          
          <hr className="my-6 border-border-grey" />

          <section className="space-y-6">
            <PetTypeSection />
            <PetDetailsSection />
          </section>
        </div>

        <ActionButtons 
          onSave={handleSave}        // Function to save the entire protocol
          onUpload={handleUpload}    // Function to handle file uploads
          saveText="Pievienot pacientu" // Text for the save button
          showCancel={false}         // Don't show the cancel button
          showUpload={true}          // Show the upload button for examination files
          className="pt-4"           // Add padding top for spacing
        />
      </div>
    </div>
  );
};

export default NewPatientPage; 