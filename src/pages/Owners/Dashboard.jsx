import OwnerQuickActions from './QuickActions';

const OwnerDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Pet Owner Dashboard</h1>
      <OwnerQuickActions />
      {/* Other dashboard content */}
    </div>
  );
};

export default OwnerDashboard; 