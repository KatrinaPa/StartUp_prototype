import { Label } from './';

const NotificationPreferences = ({ preferences = {}, setPreferences }) => {
  const handleChange = (key) => (e) => {
    setPreferences(prev => ({
      ...prev,
      [key]: e.target.checked
    }));
  };

  // Ensure default values if preferences object is incomplete
  const defaultPreferences = {
    smsReminder: false,
    emailReminder: false,
    phoneCall: false,
    ...preferences
  };

  return (
    <div className="space-y-2">
      <Label>Atgādinājumi:</Label>
      
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={defaultPreferences.smsReminder || false}
          onChange={handleChange('smsReminder')}
          className="w-4 h-4 rounded border-border-light 
            checked:bg-brand-yellow checked:border-brand-yellow 
            focus:ring-1 focus:ring-brand-yellow focus:ring-offset-0"
        />
        <span className="text-text-dark text-sm">
          Nosūtīt īpašniekam atgādinājumu sms
        </span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={defaultPreferences.emailReminder || false}
          onChange={handleChange('emailReminder')}
          className="w-4 h-4 rounded border-border-light 
            checked:bg-brand-yellow checked:border-brand-yellow 
            focus:ring-1 focus:ring-brand-yellow focus:ring-offset-0"
        />
        <span className="text-text-dark text-sm">
          Nosūtīt īpašniekam atgādinājumu epastā
        </span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={defaultPreferences.phoneCall || false}
          onChange={handleChange('phoneCall')}
          className="w-4 h-4 rounded border-border-light 
            checked:bg-brand-yellow checked:border-brand-yellow 
            focus:ring-1 focus:ring-brand-yellow focus:ring-offset-0"
        />
        <span className="text-text-dark text-sm">
          Atgādināt īpašniekam piezvanot
        </span>
      </label>
    </div>
  );
};

export default NotificationPreferences; 