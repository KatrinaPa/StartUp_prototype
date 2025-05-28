import { formatDate } from '../../../../../../utils/dateUtils';
import { vaccines } from '../../../../../../data/vaccinesData_examples';

const VaccinesList = () => (
  <div>
    <h4 className="text-lg font-semibold mb-2 text-text-dark">Vakcīnas</h4>
    <div className="bg-lighter-grey py-2 px-4 rounded-xl text-sm divide-y divide-border-light">
      {vaccines.map((vaccine, index) => (
        <div key={index} className="flex gap-2 py-1">
          <span className="text-text-secondary">{formatDate(vaccine.date)}:</span>
          <span className="font-medium text-text-primary">{vaccine.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default VaccinesList; 