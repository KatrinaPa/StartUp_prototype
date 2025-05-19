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
      <main className="container mx-auto px-4 py-8 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 