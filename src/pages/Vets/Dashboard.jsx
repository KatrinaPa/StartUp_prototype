import { Outlet } from 'react-router-dom';
import VetQuickActions from './QuickActions';

const VetDashboard = () => {
  return (
    <div className="flex gap-8">
      {/* Left Sidebar */}
      <aside className="w-[15%]">
        <VetQuickActions />
      </aside>
      
      {/* Main Content Area */}
      <main className="w-[85%] bg-white rounded-[24px] p-6">
        <Outlet /> {/* outlet is used to render the child routes, default route is calendar. Documentation: https://reactrouter.com/en/main/components/outlet */}
      </main>
    </div>
  );
};

export default VetDashboard; 