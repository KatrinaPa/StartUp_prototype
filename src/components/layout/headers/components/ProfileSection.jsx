import { EmailIcon, TimesIcon, LogoutIcon } from '../../../common';

const ProfileSection = ({ profile }) => {
  return (
    <div className="flex items-center gap-6">
      {/* Email notifications */}
      <div className="relative">
        <EmailIcon className="w-6 h-6 text-dark opacity-50 hover:text-dark hover:opacity-100 cursor-pointer" />
        {profile.unreadRecords > 0 && (
          <span className="absolute -top-1 -right-4 bg-brand-yellow text-primary-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {profile.unreadRecords}
          </span>
        )}
      </div>

      {/* Profile Info */}
      <div className="relative flex items-center">
        <div className="bg-brand-mint rounded-full px-6 py-2 pr-16">
          <p className="text-sm font-medium text-primary-900">{profile.doctorName}</p>
          <p className="text-xs text-primary-500">{profile.clinicName}</p>
        </div>
        
        <div className="absolute -right-2 -top-2">
          <img 
            src={profile.photoUrl} 
            alt="Profile"
            className="h-16 w-16 rounded-full object-cover border-2 border-white"
          />
        </div>
      </div>

      {/* Logout button */}
      <div className="self-end">
        <button className="text-gray-400 hover:text-gray-500">
          <LogoutIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ProfileSection; 