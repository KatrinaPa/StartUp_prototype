import { Label } from '../../../../../../components/common';

export default function NotificationPreferences({ preferences, setPreferences }) {
  const handleChange = (key) => (e) => {
    setPreferences({
      ...preferences,
      [key]: e.target.checked
    });
  };

  return (
    <div className="space-y-2">
      <Label>Atgādinājumi:</Label>
      
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={preferences.smsReminder}
          onChange={handleChange('smsReminder')}
          className="w-4 h-4 rounded border-border-light checked:bg-brand-jade checked:border-brand-jade focus:ring-1 focus:ring-brand-jade focus:ring-offset-0"
        />
        <span className="text-text-dark text-sm">Nosūtīt īpašniekam atgādinājumu sms</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={preferences.emailReminder}
          onChange={handleChange('emailReminder')}
          className="w-4 h-4 rounded border-border-light checked:bg-brand-jade checked:border-brand-jade focus:ring-1 focus:ring-brand-jade focus:ring-offset-0"
        />
        <span className="text-text-dark text-sm">Nosūtīt īpašniekam atgādinājumu epastā</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={preferences.phoneCall}
          onChange={handleChange('phoneCall')}
          className="w-4 h-4 rounded border-border-light checked:bg-brand-jade checked:border-brand-jade focus:ring-1 focus:ring-brand-jade focus:ring-offset-0"
        />
        <span className="text-text-dark text-sm">Atgādināt īpašniekam piezvanot</span>
      </label>
    </div>
  );
} 