import { useState } from 'react';
import { EditIcon } from '../../../../../components/common/Icons';
import { Button } from '../../../../../components/common';
import { visits } from '../../../../../data/visitsData_examples';
import { formatDate } from '../../../../../utils/dateUtils';
import { ExaminationTags } from '../../../../../components/common';

const VisitHistory = ({ patient }) => {
  const [showNewAppointment, setShowNewAppointment] = useState(false);
  const nextVisitDate = '2025-06-17'; // This should come from props or API

  return (
    <div className="bg-white rounded-3xl px-6 py-8 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-text-dark">Iepriekšējās vizītes</h3>
      
      <div className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-border-light">
                <th className="pb-2 font-medium text-text-secondary w-[80px]">Datums</th>
                <th className="pb-2 font-medium text-text-secondary pl-2">Mērķis</th>
                <th className="pb-2 font-medium text-text-secondary">Izmeklējumi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {visits.map((visit, index) => (
                <tr key={index} className="hover:bg-primary">
                  <td className="py-1 text-text-primary">
                    {formatDate(visit.date)}
                  </td>
                  <td className="py-1 text-text-primary pl-2">{visit.reason}</td>
                  <td className="py-1">
                    <ExaminationTags examinations={visit.examinations} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between bg-primary p-4 rounded-xl gap-2">
        <div className="flex items-center gap-2 text-text-primary">
          <span className="text-text-secondary">Nākamā vizīte:</span>
          {formatDate(nextVisitDate)}
        </div>
        <button className="text-brand-green hover:text-brand-green transition-transform transition-opacity duration-200 opacity-60 hover:opacity-100 hover:scale-105">
          <EditIcon className="w-6 h-6" />
        </button>
      </div>

      <Button 
        onClick={() => setShowNewAppointment(true)}
        variant="secondary"
        className="mt-4 w-full font-bold"
      >
        Ieplānot vizīti
      </Button>

      {showNewAppointment && (
        <NewAppointmentModal
          onClose={() => setShowNewAppointment(false)}
          selectedDate={new Date()}
          selectedTime={null}
          setSelectedTime={() => {}}
          selectedPetType={null}
          setSelectedPetType={() => {}}
        />
      )}
    </div>
  );
};

export default VisitHistory;
