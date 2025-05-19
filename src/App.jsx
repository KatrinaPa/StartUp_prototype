import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
