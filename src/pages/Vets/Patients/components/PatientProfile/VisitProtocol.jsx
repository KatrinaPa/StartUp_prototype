import { useState } from 'react';
import { ExaminationTags, Button, Input, Label, TextArea, ActionButtons } from '../../../../../components/common';
import { formatDate } from '../../../../../utils/dateUtils';
import VaccinationProtocol from './VaccinationProtocol';

const VisitProtocol = ({ patientId }) => {
  const availableExaminations = ['general', 'vaccination', 'blood-test', 'rtg', 'usg'];
  const [selectedExaminations, setSelectedExaminations] = useState([]);
  const [showVaccinationForm, setShowVaccinationForm] = useState(false);
  const [vaccineAdded, setVaccineAdded] = useState(false);
  const today = new Date();

  const toggleExamination = (type) => {
    if (type === 'vaccination') {
      setShowVaccinationForm(!showVaccinationForm);
      return;
    }

    setSelectedExaminations(prev => {
      if (prev.includes(type)) {
        return prev.filter(item => item !== type);
      }
      return [...prev, type];
    });
  };

  const handleVaccineAdd = () => {
    setVaccineAdded(true);
    setSelectedExaminations(prev => {
      if (!prev.includes('vaccination')) {
        return [...prev, 'vaccination'];
      }
      return prev;
    });
  };

  const handleSave = () => {
    // Save protocol logic - will save all examination data, measurements, and notes to the database
  };
  const handleUpload = () => {
    // Upload examinations logic - will handle file uploads for examination results (like X-rays, blood tests, etc.)
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-text-dark">Vizītes protokols</h2>
          <div className="flex gap-2 text-text-secondary">
            <span>{formatDate(today)}</span>
            <span>{today.toLocaleTimeString('lv-LV', { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>

        {/* Measurements Section */}
        <div className="bg-lighter-grey p-4 rounded-xl">
          <h3 className="font-semibold mb-4 text-text-dark">Pamatmērījumi:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <Label>Temperatūra (°C)</Label>
              <Input type="number" step="0.1" />
            </div>
            <div>
              <Label>Svars (kg)</Label>
              <Input type="number" step="0.1" />
            </div>
            <div>
              <Label>Pulss (min)</Label>
              <Input type="number" />
            </div>
            <div>
              <Label>Elpošana (min)</Label>
              <Input type="number" />
            </div>
          </div>
        </div>

        {/* Examination Types Section */}
        <div className="bg-lighter-grey p-4 rounded-xl">
          <h3 className="font-semibold mb-4 text-text-dark">Izmeklējumu veidi:</h3>
          <ExaminationTags 
            examinations={availableExaminations}
            selectedExaminations={selectedExaminations}
            onExaminationClick={toggleExamination}
            isSelectable={true}
          />
        </div>

        {/* Vaccination Form */}
        {showVaccinationForm && (
          <div className="mt-6">
            <VaccinationProtocol onVaccineAdd={handleVaccineAdd} />
          </div>
        )}

        {/* General Examination Form */}
        {selectedExaminations.includes('general') && (
          <div className="bg-lighter-grey p-4 rounded-xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Anamnēze:</Label>
                <TextArea className="min-h-[100px]" />
              </div>
              <div>
                <Label>Klīniskā aina:</Label>
                <TextArea className="min-h-[100px]" />
              </div>
            </div>

            <div>
              <Label>Diagnoze:</Label>
              <TextArea />
            </div>

            <div>
              <Label>Ārstēšana, medikamentu lietošanas norādījumi:</Label>
              <TextArea />
            </div>
          </div>
        )}

        {/* Selected Examinations Display */}
        {selectedExaminations.length > 0 && (
          <div className="bg-lighter-grey p-4 rounded-xl">
            <div>
              <Label>Izmeklējumi, procedūras:</Label>
              <TextArea className="mb-4" />
              <div className="flex flex-wrap gap-2">
                {selectedExaminations.map(type => (
                  <ExaminationTags 
                    key={type} 
                    examinations={[type]}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {selectedExaminations.length > 0 && (
          <ActionButtons 
            onSave={handleSave}        // Function to save the entire protocol
            onUpload={handleUpload}    // Function to handle file uploads
            saveText="Saglabāt protokolu"  // Text for the save button
            showCancel={false}         // Don't show the cancel button
            showUpload={true}          // Show the upload button for examination files
            className="pt-4"           // Add padding top for spacing
          />
        )}
      </div>
    </div>
  );
};

export default VisitProtocol;
