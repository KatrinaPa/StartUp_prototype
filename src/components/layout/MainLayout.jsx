import { useLocation } from 'react-router-dom';
import HomeHeader from './headers/HomeHeader';
import VetHeader from './headers/VetHeader';
import OwnerHeader from './headers/OwnerHeader';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  const location = useLocation();
  
  const getHeader = () => {
    if (location.pathname.startsWith('/vet')) {
      return <VetHeader />;
    } else if (location.pathname.startsWith('/owner')) {
      return <OwnerHeader />;
    }
    return <HomeHeader />;
  };

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      {getHeader()}
      <main className="flex-1 min-w-0">
        <div className="max-w-[1270px] w-full mx-auto py-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 