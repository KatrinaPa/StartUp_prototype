import { useState } from 'react';
import { Button, Input, Label, CloseButton } from '../../../../../components/common';

const VaccinationProtocol = ({ onVaccineAdd }) => {
  const [vaccineRows, setVaccineRows] = useState([1]);

  const addVaccineRow = () => {
    setVaccineRows([...vaccineRows, vaccineRows.length + 1]);
  };

  const removeVaccineRow = (rowNum) => {
    setVaccineRows(vaccineRows.filter(num => num !== rowNum));
  };

  return (
    <div className="space-y-1 bg-lighter-grey rounded-xl">
      <div>
        {vaccineRows.map((num, index) => (
          <div key={num} className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 relative">
              {num !== 1 && (
                <CloseButton onClick={() => removeVaccineRow(num)} />
              )}
              <div>
                <Label>Vakcīna Nr. {num}:</Label>
                <Input 
                  type="text" 
                  placeholder="Vakcīnas nosaukums"
                />
              </div>
              <div>
                <Label>Derīga līdz:</Label>
                <Input 
                  type="date"
                  placeholder="dd.mm.gggg."
                />
              </div>
              <div>
                <Label>Sērijas nr.:</Label>
                <Input 
                  type="text"
                  placeholder="Sērijas numurs"
                />
              </div>
              <div>
                <Label>Izlietot līdz:</Label>
                <Input 
                  type="date"
                  placeholder="dd.mm.gggg."
                />
              </div>
            </div>
            {index !== vaccineRows.length - 1 && (
              <hr className="border-border-light mx-4" />
            )}
          </div>
        ))}
      </div>
      
      <hr className="border-border-light mx-4" />
      
      <div className="flex p-4 justify-start gap-4">
        <Button 
          variant="tertiary"
          onClick={addVaccineRow}
          className="hover:text-[var(--text-text-primary)] hover:border-[var(--tag-vaccination)]"
        >
          + Pievienot vakcīnu
        </Button>
        <Button 
          variant="quaternary"
          onClick={onVaccineAdd}
          className="
            border-[var(--tag-vaccination)] 
            text-[var(--text-primary)] 
            hover:border-[var(--tag-vaccination)] 
            hover:bg-[var(--tag-vaccination)] 
            hover:text-[var(--text-primary)]
            active:border-[var(--tag-vaccination)]
            active:bg-[var(--tag-vaccination)]
            active:text-[var(--text-primary)]
            focus:bg-[var(--tag-vaccination)]
          "
        >
          Pievienot protokolam
        </Button>
      </div>
    </div>
  );
};

export default VaccinationProtocol; 